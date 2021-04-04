import { Component, OnInit } from '@angular/core';
import { SearchQuestionService } from '../service/search-question.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss'],
})
export class SearchQuestionComponent implements OnInit {
  public searchSelected: any;
  public sortSelected = "activity";
  public sortType = "desc";
  public displayPage = false;
  public hide = false;
  public moreData = true;
  public question: any;
  public pageSize = 10;
  public pageNumber = 1;
  public displayData: any;
  public searchTypeList = ['q', 'body', 'title', 'url', 'user'];
  public sortDataValueList = ['activity', 'creation', 'votes', 'relevance'];
  public sortTypeList = ['desc', 'asc'];
  constructor(public _SearchQuestionService: SearchQuestionService,
    public _ToastrService: ToastrService) {}

  ngOnInit(): void {
  }

  searchQuestion() {
    let body = {};
    body[this.searchSelected] = this.question;
    body['sort'] = this.sortSelected;
    body['order'] = this.sortType;
    body['pagesize'] = this.pageSize;
    body['page'] = this.pageNumber;
    this._SearchQuestionService.searchQuestion(body).subscribe((response) => {
      this.moreData =  response['has_more'];
      this.displayData = response['items'];
      if (this.displayData.length > 0) { 
        this.displayPage = true;
        this._ToastrService.success('Data fetch Successfully');
      } else {
        this.displayPage = false;
        this._ToastrService.success('Data not found');
      }
    });
  }

  submit() {
    if (this.question != undefined) {
    this.question = this.question.toString();
    if (this.searchSelected != undefined && this.question.length > 0) {
      this.pageNumber = 1;
      if (this.searchSelected == "user") {
      const value = parseInt(this.question);
        if (isNaN(value) == false) {
          this.question = value;
          this.searchQuestion();
        this.hide = false;
        } else {
          this._ToastrService.error('enter valid search string');
        }
      } else {
        this.searchQuestion();
        this.hide = false;
      }
      
    } else {
        this._ToastrService.error('select search data type or enter valid search string');
    }
  } else {
    this._ToastrService.error('enter search data');
  }
  }

  pageChange(value) {
    if ((this.pageNumber > 1 || value === 'forward') && this.moreData) {
      if (value === 'back') {
        this.pageNumber--;
      } else {
        this.pageNumber++;
      }
      this.searchQuestion();
    }
  }

  hideData() {
    this.hide = true;
  }
}