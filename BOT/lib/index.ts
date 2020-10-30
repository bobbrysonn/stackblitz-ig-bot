import * as puppeteer from "puppeteer";

class InstagramBot {
  private db_config;
  private pup_config;

  constructor() {
    this.db_config = import ("./../config/database.json");
    this.pup_config = import("./../config/puppeteer.json")
  };

  public initPup = async() => {
    
  }
}