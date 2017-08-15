$ = reqire 'jquery'

do fill = (item = 'The most creative minds in art') ->
	$('.tagline').append "#{item}"
fill