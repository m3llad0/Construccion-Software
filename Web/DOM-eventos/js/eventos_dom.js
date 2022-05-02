

//Mostrar la posicion del mouse en el documento

function mousePosition(event)
{
    const mousePos = document.getElementById('mousePosition')
    mousePos.textContent = `Posicion del mouse: ${event.clientX} - ${event.clientY}`
}
document.addEventListener('mousemove', mousePosition)

document.addEventListener("submit", (event) =>
{
    event.preventDefault()
    const fname = document.getElementsByName('fname')
    const lname = document.getElementsByName('lname')
    const name = document.getElementById('name')
    name.innerHTML = `${fname[0].value} ${lname[0].value}`
})

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
    image.src = "https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/94727023_3007779729314043_9165594530471215104_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=LxQVM41uasMAX8QqRjh&_nc_ht=scontent-qro1-2.xx&oh=00_AT8nsXdQQEhpF1FhX5RK-f-COFxfLW_lzWcbhhLaKvSBnQ&oe=6291D6BB"  

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

