export default {
    methods: {
        appendJavascript: function(path) {

            let is_appended = false;
            var scripts = document.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
                if(scripts[i].src.includes(path)) {
                   is_appended = true;
                //    console.log(i, scripts[i].src) 
                }
            }
        
            if(is_appended === false) {
                window.config.appendedJavascripts.push(path)
                let plugin = document.createElement("script");
                plugin.setAttribute("src", path);
                plugin.defer = true;
                document.head.appendChild(plugin);
            } else {
                // alert(path + ' already imported!. Please remove it.')
            }
        },

        appendCss: function(path) {

            let is_appended = false;
            var css = document.getElementsByTagName("link");
            for (var i = 0; i < css.length; i++) {
                if(css[i].href.includes(path)) {
                   is_appended = true;
                //    console.log(i, css[i].href) 
                }
            }

            if(is_appended === false) {
                window.config.appendedCss.push(path)
                let plugin = document.createElement("link");
                plugin.setAttribute("rel", "stylesheet");
                plugin.setAttribute("type", "text/css");
                plugin.setAttribute("href", path);
                document.head.appendChild(plugin);
            } else {
                // alert(path + ' already imported!. Please remove it.')
            }
        },
    }
 }