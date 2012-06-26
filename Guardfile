# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Here we configure guard-livereload (https://github.com/guard/guard-livereload)
#
# Because apply_js_live and apply_css_live are disabled whole browser refreshes after 
# a change in javascript or css.
#
# You can try to turn those options to true and check if there is a difference in speed.
guard 'livereload', :apply_js_live => false, :apply_css_live => false do


  # here we define which files are being watched
  # we can use either regular expression or a string.

  # This particular one watches for paths starting with {public/}
  # then followed by any string {.+}
  # then by a "." character {\.}
  # then by one of three extensions {(css|js|html)}
  watch(%r{public/.+\.(css|js|html)})


  # Can you write one for listening for changes in
  # txt files?
  watch(%r{})

  
  # Can you write one for listening for changes in
  # any file inside external_javascripts directory?
  watch(%r{})

end



