#!/usr/bin/env node

function wcaSay ()
{
    function getLogo ()
    {
        var logo =
                "\033[34m"
                + "         XXXXXXXX              \n"
                + "     XXXX       XXXX           \n"
                + "  XXX               XX         \n"
                + " XX  \033[37mXX XX XXX       \033[34mXXX       \n"
                + "XX  \033[37mXX    XX XXXXX     \033[34mXX      \n"
                + " \033[37mXX           XX XX     \033[34mX      \n"
                + "                  \033[37mXX    \033[34mXX     \n"
                + "                  \033[37mX XX   \033[34mX     \n"
                + "                     \033[37mXX  \033[34mX     \n"
                + "                     \033[37mXX  \033[34mXX    \n"
                + "\033[37mXXXXXXXXXXXXXXXXXXXXXX\033[34m    X    \n"
                + "XX                        XX   \n"
                + "XX                         XX  \n"
                + "XX                         XXX \n"
                + " XX                       X    \n"
                + "  XX                     XX    \n"
                + "   XXX                   X     \n"
                + "     XXXX                X     \n"
                + "        XXXXX           XX     \n"
                + "           XXXXXX      XX      \n"
                + "                 XXXXXXX       \n"
                + "\033[0m";

        return logo;
    }


    function printFinalString ( string )
    {
        var finalString = decorate ( string );

        for ( var i = 0; i < finalString.length; i++ )
        {
            console.log ( finalString[i] );
        }
    }

    function decorate ( string )
    {
        var lines            = processString ( string );
        var longestLine      = determineLongestLineLength ( lines );
        var stringifiedLines = padString ( longestLine, lines );

        return decorateLines ( longestLine, stringifiedLines );
    }

    function decorateLines ( lineLength, string )
    {
        for ( var i = 0; i < string.length; i++ )
        {
            string[i] = "|" + string[i] + "|";
        }

        var border = createBorder ( lineLength );
        string.unshift ( '/' + border + '\\' );

        string.push ( '\\' + border + '/' );

        return string;
    }

    function createBorder ( lineLength )
    {
        var border = '';
        for ( var i = 0; i < lineLength; i++ )
        {
            border += '-';
        }

        return border;
    }

    function padString ( longestLineLength, lines )
    {
        var stringifiedLines = [];

        for ( var i = 0; i < lines.length; i++ )
        {
            var stringifiedLine = lines[i].join ( ' ' );
            stringifiedLines.push ( addSpacesToLine ( longestLineLength, stringifiedLine ) );
        }

        return stringifiedLines;
    }

    function addSpacesToLine ( expectedLineLength, line )
    {
        var spaces = '';
        var numberOfSpaces = expectedLineLength - line.length;

        for ( var i = 0; i < numberOfSpaces; i++ )
        {
            spaces += ' ';
        }

        return line += spaces;
    }

    function processString ( string )
    {
        var words = string.split ( ' ' );
        var lines = processLines ( words );

        return lines;
    }

    function processLines ( words )
    {
        var lines = [];

        while ( words.length > 0 )
        {
            lines.push ( createLine ( words, 10 ) );
        }

        return lines;
    }

    function createLine ( wordsArray, numberOfWordsPerLine )
    {
        var line = [];

        for ( var i = 0; i < numberOfWordsPerLine; i++ )
        {
            if ( wordsArray.length == 0 )
            {
                break;
            }

            line.push ( wordsArray.shift () );
        }

        return line;
    }

    function determineLongestLineLength ( lines )
    {
        var max = 0;

        for ( var i = 0; i < lines.length; i++ )
        {
            var joinedArray = lines[i].join ( ' ' );
            max = (joinedArray.length > max)
                ? joinedArray.length
                : max;
        }

        return max;
    }

    return function wcasay ( string )
    {
        printFinalString ( string );
        console.log ( getLogo () );
    }
}

module.exports = wcaSay ();
