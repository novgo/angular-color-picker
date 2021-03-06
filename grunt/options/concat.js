module.exports = {
    options: {
        stripBanners: true,
        sourceMap: false,
        banner: '/*!\n * <%= config.pkg.name %> v<%= config.pkg.version %>\n * https://github.com/ruhley/angular-color-picker/\n *\n * Copyright 2015 ruhley\n *\n * <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n *\n */\n'
    },
    build: {
        dest: '<%= config.filename %>.js',
        src: [
            '<%= config.lib %>/<%= config.scripts %>/module.js',
            '<%= config.lib %>/<%= config.scripts %>/directive.js',
            '<%= config.lib %>/<%= config.scripts %>/template.js',
        ]
    }
};
