import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-galaxy-company",
  templateUrl: "./galaxy-company.component.html",
  styleUrls: ["./galaxy-company.component.css"],
})
export class GalaxyCompanyComponent implements OnInit {
  constructor(private renderer2: Renderer2) {}

  ngOnInit() {}
}
