

//Mostrar la posicion del mouse en el documento

function mousePosition(event)
{
    const mousePos = document.getElementById('mousePosition')
    mousePos.textContent = `Posicion del mouse: ${event.clientX} - ${event.clientY}`
}
document.addEventListener('mousemove', mousePosition)

function getFormvalue()
{


}

function insertRow()
{
    const thisTable = document.getElementById('sampleTable')

    let newRow = thisTable.insertRow()
    let xRows = thisTable.rows.length
    let xCols = thisTable.rows[0].cells.length

    for(i = 0; i < xCols; i++)
    {
        let newCell = newRow.insertCell(i)
        newCell.innerHTML = `Row ${xRows} Column ${i+1}`
    }
}

function insertColumn()
{
    const thisTable = document.getElementById('sampleTable')

    let xRows = thisTable.rows.length
    let xCols = thisTable.rows[0].cells.length

    for(i = 0; i < xRows; i++)
    {
        let row = thisTable.rows[i]
        let newCol = row.insertCell()
        newCol.innerHTML = `Row ${i+1} Column ${xCols+1}`
    }
}

function changeContent()
{
    const tableRef = document.getElementById('myTable')

    const column = document.getElementById('columna')
    const row = document.getElementById('fila')
    const text = document.getElementById('cambioTexto')

    let positionColumn = column.value
    let positionRow = row.value
    let texto = text.value
    tableRef.rows[positionColumn-1].cells[positionRow-1].innerHTML = texto

    
}

function addColor()
{
    const sel = document.getElementById("colorSelect");

    let opt = document.createElement("option");
    opt.value = "3";
    opt.text = "newColor";
    
    sel.add(opt, null);
}

function removeColor()
{
    let sel = document.getElementById("colorSelect")

    sel.remove(0);
}

function changeImage()
{
    let width = Math.floor(Math.random()* 1000)
    let height = Math.floor(Math.random()* 1000)

    const image = document.getElementById("gato")
    image.src = "/images/bicho-humilde.jpg/"  

    image.setAttribute('width', width)
    image.setAttribute('height', height)


}

function normalImage()
{
    const image = document.getElementById("gato")

    image.src = "http://placekitten.com/200/300"

    image.setAttribute('width', 200)
    image.setAttribute('height', 300)
}

