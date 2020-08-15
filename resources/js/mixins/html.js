export default {
    methods: {
        appendJavascript: function(path) {
            let plugin = document.createElement("script");
            plugin.setAttribute("src", path);
            plugin.async = true;
            document.head.appendChild(plugin);
        },

        appendCss: function(path) {
            let plugin = document.createElement("link");
            plugin.setAttribute("rel", "stylesheet");
            plugin.setAttribute("type", "text/css");
            plugin.setAttribute("href", path);
            plugin.async = true;
            document.head.appendChild(plugin);
        },
    }
 }