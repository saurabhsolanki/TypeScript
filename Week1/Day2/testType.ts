interface textType{
    text?:string
}

interface logoType{
    src?:string;
    alt?:string
}

interface linksType{
    id?:string
    href?:string;
    target?:string;
    text?:string;
    summary?:string;
    network?:string
}

interface socialIconsType{
    id?:string;
    name?:string;
    parentComponentId?:string
    socialLinks?:Array<{
        link?:linksType;
        network?:string;
    }>
}

interface linkGroupsTypes{
    heading?:string;
    id?:string;
    parentComponentId?:string;
    links:Array<linksType>
}

interface footerLinksTypes{
    linkGroups:Array<linkGroupsTypes>
}

interface contactUsLinksType{
    heading:string;
    availability?:string;
    links:Array<linksType>;
}

export interface dataType {
    summary?: string;
    heading?: string;
    logo:logoType;
    quickLinks:Array<linksType>;
    socialIcons:socialIconsType;
    footerLinks:Array<footerLinksTypes>;
    contactUsLinks:contactUsLinksType;
    copyrightText:string;
  }