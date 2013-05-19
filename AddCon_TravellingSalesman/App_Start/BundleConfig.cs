using System.Web;
using System.Web.Optimization;

namespace AddCon_TravellingSalesman
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/thirdParty").Include(
                    "~/Scripts/jsRender.js",
                    "~/Scripts/jquery-1.*",
                    "~/Scripts/jquery-ui*",
                    "~/Scripts/jquery.unobtrusive*",
                    "~/Scripts/jquery.validate*",
                    "~/Scripts/modernizr-*",
                    "~/Scripts/jquery.mobile*"
                    ));
            bundles.Add(new ScriptBundle("~/bundles/geo").Include(
                    "~/Scripts/tutScript.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/App/config.js",
                        "~/Scripts/App/common.js",
                        "~/Scripts/App/app.js"));

            bundles.Add(new StyleBundle("~/Content/thirdPartyCSS").Include(
                                                                    "~/Content/oocss_all.css",
                                                                    "~/Content/ts.css",
                                                                    "~/Content/jquery.mobile*",
                                                                    "~/Content/themes/base/jquery.ui.core.css",
                                                                    "~/Content/themes/base/jquery.ui.resizable.css",
                                                                    "~/Content/themes/base/jquery.ui.selectable.css",
                                                                    "~/Content/themes/base/jquery.ui.accordion.css",
                                                                    "~/Content/themes/base/jquery.ui.autocomplete.css",
                                                                    "~/Content/themes/base/jquery.ui.button.css",
                                                                    "~/Content/themes/base/jquery.ui.dialog.css",
                                                                    "~/Content/themes/base/jquery.ui.slider.css",
                                                                    "~/Content/themes/base/jquery.ui.tabs.css",
                                                                    "~/Content/themes/base/jquery.ui.datepicker.css",
                                                                    "~/Content/themes/base/jquery.ui.progressbar.css",
                                                                    "~/Content/themes/base/jquery.ui.theme.css"
                                                                    ));

            bundles.Add(new StyleBundle("~/Content/appcss").Include("~/Content/app.css"));
        }
    }
}