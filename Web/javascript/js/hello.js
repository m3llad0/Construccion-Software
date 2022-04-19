
function findFactors(xInt)
{
    let facts = []
    let cont = 1

    while(cont !== 0)
    {
        if(xInt % cont)
        {
            facts.push(xInt % cont)
            cont++
        }else
            {cont = 0}
        
        
    }

    console.log(facts)
}

findFactors(12)