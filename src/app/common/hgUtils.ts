export class hgUtils {
  public static getAppUrlRoot(): string {
    let ret = null;

    if (
      document.location.origin.toLowerCase().indexOf("hgrwsintranet1") > -1 ||
      document.location.origin.toLowerCase().indexOf("apps.hydro-gear.com") > -1 ||
      // My local IIS (not a vsCode server)
      (document.location.origin.toLowerCase().indexOf("localhost") > -1 && document.location.port == '80' ||  document.location.port == '')
    ) {
      let firstSegmentAfterOrigin = document.location.pathname.split("/")[1];
      ret = `${document.location.origin}/${firstSegmentAfterOrigin}`;
    } else {
      ret = document.location.origin;
    }
    // ret = document.location.origin;

    return ret;
  }

}
