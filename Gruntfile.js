module.exports = function(grunt) {
  var simplogVersion = "1.1";

  grunt.initConfig({
    htmlbuild: {
      all: {
        src: "src/skin.html",
        dest: "dist/",
        options: {
          sections: {
            views: {
              cover:             "src/views/cover.html",
              notice:            "src/views/notice.html",
              article_protected: "src/views/article_protected.html",
              article:           "src/views/article.html",
              pagination:        "src/views/pagination.html"
            }
          },
          data: {
            version: simplogVersion
          }
        }
      }
    },
    sass: {
      all: {
        options: {
          style: "compressed",
          sourcemap: "none"
        },
        files: [{
          expand: true,
          cwd: "src/sass/",
          src: ["*.scss"],
          dest: "dist/css/",
          ext: ".css"
        }]
      }
    },
    jshint: {
      all: [
        "Gruntfile.js",
        "src/simplog.js"
      ]
    },
    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: "src/js/",
          src: ["**/*.js"],
          dest: "dist/js/"
        }]
      }
    },
    replace: {
      all: {
        options: {
          patterns: [
            { match: "version", replacement: simplogVersion }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: [
            "src/index.xml"
          ],
          dest: "dist/"
        }]
      }
    },
    compress: {
      main: {
        options: {
          archive: "simplog-" + simplogVersion + ".zip"
        },
        files: [{
          expand: true,
          cwd: "dist/",
          src: ["**"],
          dest: "simplog/"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-html-build");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-replace");

  grunt.loadNpmTasks("grunt-contrib-compress");

  grunt.registerTask("default", [
    "htmlbuild",
    "sass",
    "jshint",
    "uglify",
    "replace"
  ]);
};
