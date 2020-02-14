import { SPHttpClient } from "@microsoft/sp-http";

export interface IEatGroupsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
}
