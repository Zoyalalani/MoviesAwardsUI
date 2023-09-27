import { Component, OnInit, ViewChild } from "@angular/core";
import { Title } from "src/app/shared/service/models/title";
import { finalize, take } from "rxjs/operators";
import { MoviesAwardsService } from "src/app/shared/service/moviesawards.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { MatAccordion } from "@angular/material/expansion";
import { Genre, Participant } from "src/app/shared/service/models/title-metadata";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  titles = {} as Title[];
  titleColumns: string[] = ["movieId", "movieName", "releaseYear"];
  dataSource!: MatTableDataSource<Title>;
  dateRangeStart: Date = new Date();
  dateRangeEnd: Date = new Date();
  selection = new SelectionModel<Title>(false, []);
  isTitleDataLoading: boolean = false;
  titleData = {} as Title;
  genres = new Array<Genre>();
  participants = new Array<Participant>();

  constructor(private MoviesAwardsService: MoviesAwardsService) { }

  ngOnInit() {
    this.getAllTitles();
  }

  public getAllTitles(): void {
    this.MoviesAwardsService.getAllTitles().pipe(take(1)).subscribe(result => {
      this.titles = result;
      this.getDashboardTableData();
    }, error => console.error(error));
  }

  public getDashboardTableData(): void {
    this.dataSource = new MatTableDataSource(this.titles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyTitleFilter(event: Event) {
    this.selection.clear();
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getTitleData(row: Title) {
    this.selection.select(row);
    this.isTitleDataLoading = true;
    this.MoviesAwardsService.getTitleById(row.titleId).pipe(finalize(() => this.isTitleDataLoading = false), take(1))
      .subscribe(response => {
        this.titleData = response;
        if (this.titleData.titleGenres) {
          this.titleData.titleGenres.forEach(g => {
            if (g.genre) {
              this.genres.push(g.genre);
            }
          });
        }
        if (this.titleData.titleParticipants) {
          this.titleData.titleParticipants.forEach(p => {
            if (p.participant) {
              this.participants.push(p.participant);
            }
          });
        }
      }, error => {
        console.error(error);
      });
  }
}
