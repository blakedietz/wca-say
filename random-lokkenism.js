function generateRandomLokkenism(lokkenisms)
{
    var _lokkenisms       = lokkenisms;
    var _yearOfLokkenisms = getRandomItemFromArray(_lokkenisms);

    function getRandomItemFromArray(items)
    {
        var item = items[Math.floor(Math.random()*items.length)];

        return item;
    }

    return function randomLokkenism()
    {

    }
}