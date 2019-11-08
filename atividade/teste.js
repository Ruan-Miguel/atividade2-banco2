document.getElementsByTagName('form')[0].addEventListener('submit', async function(e){
  e.preventDefault();

  const cidade = document.getElementById('cidade').value
  console.log(cidade)
  let jsonSvg, jsonView

  await $.ajax({
    type: 'GET',
    url: `http://localhost:3000/getViewBox/${cidade}`,
    success: function(data) {
      jsonView = data[0].getviewbox
    }
  })

  await $.ajax({
    type: 'GET',
    url: `http://localhost:3000/getSvg/${cidade}`,
    success: function(data) {
      jsonSvg = data[0].st_assvg
    }
  })

  generate_svg(jsonSvg, jsonView)

})

let svg

function generate_svg(jsonSvg, jsonView) {
  svg = '<svg viewBox="'
  svg += jsonView
  svg += '"><path d="'
  svg += jsonSvg
  svg += '" />'
  svg += '</svg>'

  console.log(svg)

  document.getElementsByTagName('body')[0].innerHTML += svg
}