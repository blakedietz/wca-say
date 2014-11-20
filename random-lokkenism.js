function generateRandomLokkenism()
{
    var _lokkenisms;
    var _lokkenism;

    function getRandomItemFromArray(items)
    {
        var item = items[Math.floor(Math.random()*items.length)];

        return item;
    }

    function generateRandomLokkenism()
    {
        var _yearOfLokkenisms = getRandomItemFromArray(_lokkenisms);
        _lokkenism            = getRandomItemFromArray(_yearOfLokkenisms.quotes);
    }

    function randomLokkenisms(lokkenisms)
    {
        _lokkenisms = lokkenisms;
        generateRandomLokkenism();
    }

    randomLokkenisms.lokkenism = function(lokkenisms)
    {
        if (!arguments.length)
        {
            return _lokkenism;
        }

        _lokkenisms           = lokkenisms;
        generateRandomLokkenism();

        return randomLokkenisms;
    };

    return randomLokkenisms;
}

module.exports = generateRandomLokkenism;