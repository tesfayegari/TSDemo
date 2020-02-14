import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'EatGroupsWebPartStrings';
import EatGroups from './components/EatGroups';
import { IEatGroupsProps } from './components/IEatGroupsProps';

export interface IEatGroupsWebPartProps {
  listName: string;
}

export default class EatGroupsWebPart extends BaseClientSideWebPart<IEatGroupsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEatGroupsProps> = React.createElement(
      EatGroups,
      {
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("listName", {
                  label: 'Please Enter the name of the List'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
