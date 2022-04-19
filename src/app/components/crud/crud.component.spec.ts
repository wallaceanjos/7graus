import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';
import { MatMenuModule } from '@angular/material/menu';

fdescribe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;


  let response: any[] = [
    {
      "results": [
        {
          "gender": "female",
          "name": {
            "title": "Miss",
            "first": "Tracey",
            "last": "Stanley"
          },
          "location": {
            "street": {
              "number": 2929,
              "name": "Northaven Rd"
            },
            "city": "Perth",
            "state": "New South Wales",
            "country": "Australia",
            "postcode": 4483,
            "coordinates": {
              "latitude": "-84.4970",
              "longitude": "113.9134"
            },
            "timezone": {
              "offset": "-2:00",
              "description": "Mid-Atlantic"
            }
          },
          "email": "tracey.stanley@example.com",
          "login": {
            "uuid": "fd1648a3-fc1b-48fc-95e3-cffc8672e0ef",
            "username": "brownpeacock976",
            "password": "thelma",
            "salt": "VhTG7VLu",
            "md5": "9081e5857c26a312bab4ab453a9cff32",
            "sha1": "af3bfc4e592ec0dce067e18d8bf92f15e080b95f",
            "sha256": "d901687ddb7162f4f9c6cbc737acb0b87dc93c2e0a8e0fb47253f0b81387ffc8"
          },
          "dob": {
            "date": "1997-07-22T16:06:15.367Z",
            "age": 25
          },
          "registered": {
            "date": "2015-10-04T20:44:54.391Z",
            "age": 7
          },
          "phone": "04-4190-9908",
          "cell": "0472-924-665",
          "id": {
            "name": "TFN",
            "value": "410469172"
          },
          "picture": {
            "large": "https://randomuser.me/api/portraits/women/51.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
          },
          "nat": "AU"
        }
      ],
      "info": {
        "seed": "a25ab61b4ab1d8a6",
        "results": 1,
        "page": 1,
        "version": "1.3"
      }
    }
  ]

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudComponent ],
      imports: [MatMenuModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Cria o Componente Crud', () => {
    expect(component).toBeTruthy();
  });
  
  let list = [];
  let listLength;
  it("deve validar o uso do matcher 'toBeGreaterThan'", function() {
    for(let i = 0 ; i < 10; i++ ){
      list.unshift(response)
    }
    listLength = list.length;
  expect(listLength).toBeGreaterThan(1);
  });

  let numero = 10;
  let texto: any;
  let obj = { 'valor': 10 };
    it("deve validar o uso do matcher 'toBeDefined'", function() {
    expect(numero).toBeDefined();
    expect(texto).not.toBeDefined();
    expect(obj.valor).toBeDefined();
    })
});
