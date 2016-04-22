var rawData = [{
  "query": {
    "count": 252,
    "created": "2016-03-29T13:10:07Z",
    "lang": "en-US",
    "diagnostics": {
      "url": [
        {
          "execution-start-time": "0",
          "execution-stop-time": "1",
          "execution-time": "1",
          "proxy": "DEFAULT",
          "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"
        },
        {
          "execution-start-time": "5",
          "execution-stop-time": "27",
          "execution-time": "22",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL"
        },
        {
          "execution-start-time": "31",
          "execution-stop-time": "33",
          "execution-time": "2",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL"
        }
      ],
      "publiclyCallable": "true",
      "cache": [
        {
          "execution-start-time": "4",
          "execution-stop-time": "4",
          "execution-time": "0",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "f756d73c9b6c7b01a1d7f9c2ff5f9809"
        },
        {
          "execution-start-time": "30",
          "execution-stop-time": "30",
          "execution-time": "0",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "230584bed0cbcab0d8e6f863db02c098"
        }
      ],
      "query": [
        {
          "execution-start-time": "4",
          "execution-stop-time": "29",
          "execution-time": "25",
          "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL]}",
          "content": "select * from csv(0,1) where url=@url"
        },
        {
          "execution-start-time": "30",
          "execution-stop-time": "35",
          "execution-time": "5",
          "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=AAPL]}",
          "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
        }
      ],
      "javascript": {
        "execution-start-time": "3",
        "execution-stop-time": "859",
        "execution-time": "856",
        "instructions-used": "24196236",
        "table-name": "yahoo.finance.historicaldata"
      },
      "user-time": "863",
      "service-time": "25",
      "build-version": "0.2.426"
    },
    "results": {
      "quote": [
        {
          "Symbol": "AAPL",
          "Date": "2014-12-31",
          "Open": "112.82",
          "High": "113.129997",
          "Low": "110.209999",
          "Close": "110.379997",
          "Volume": "41403400",
          "Adj_Close": "107.94507"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-30",
          "Open": "113.639999",
          "High": "113.919998",
          "Low": "112.110001",
          "Close": "112.519997",
          "Volume": "29881500",
          "Adj_Close": "110.037862"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-29",
          "Open": "113.790001",
          "High": "114.769997",
          "Low": "113.699997",
          "Close": "113.910004",
          "Volume": "27598900",
          "Adj_Close": "111.397206"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-26",
          "Open": "112.099998",
          "High": "114.519997",
          "Low": "112.010002",
          "Close": "113.989998",
          "Volume": "33721000",
          "Adj_Close": "111.475435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-24",
          "Open": "112.580002",
          "High": "112.709999",
          "Low": "112.010002",
          "Close": "112.010002",
          "Volume": "14479600",
          "Adj_Close": "109.539117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-23",
          "Open": "113.230003",
          "High": "113.330002",
          "Low": "112.459999",
          "Close": "112.540001",
          "Volume": "26028400",
          "Adj_Close": "110.057425"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-22",
          "Open": "112.160004",
          "High": "113.489998",
          "Low": "111.970001",
          "Close": "112.940002",
          "Volume": "45167500",
          "Adj_Close": "110.448602"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-19",
          "Open": "112.260002",
          "High": "113.239998",
          "Low": "111.660004",
          "Close": "111.779999",
          "Volume": "88429800",
          "Adj_Close": "109.314188"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-18",
          "Open": "111.870003",
          "High": "112.650002",
          "Low": "110.660004",
          "Close": "112.650002",
          "Volume": "59006200",
          "Adj_Close": "110.164999"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-17",
          "Open": "107.120003",
          "High": "109.839996",
          "Low": "106.82",
          "Close": "109.410004",
          "Volume": "53411800",
          "Adj_Close": "106.996474"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-16",
          "Open": "106.370003",
          "High": "110.160004",
          "Low": "106.260002",
          "Close": "106.75",
          "Volume": "60790700",
          "Adj_Close": "104.395148"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-15",
          "Open": "110.699997",
          "High": "111.599998",
          "Low": "106.349998",
          "Close": "108.230003",
          "Volume": "67218100",
          "Adj_Close": "105.842504"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-12",
          "Open": "110.459999",
          "High": "111.870003",
          "Low": "109.580002",
          "Close": "109.730003",
          "Volume": "56028100",
          "Adj_Close": "107.309414"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-11",
          "Open": "112.260002",
          "High": "113.800003",
          "Low": "111.339996",
          "Close": "111.620003",
          "Volume": "41401700",
          "Adj_Close": "109.157721"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-10",
          "Open": "114.410004",
          "High": "114.849998",
          "Low": "111.540001",
          "Close": "111.949997",
          "Volume": "44565300",
          "Adj_Close": "109.480436"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-09",
          "Open": "110.190002",
          "High": "114.300003",
          "Low": "109.349998",
          "Close": "114.120003",
          "Volume": "60208000",
          "Adj_Close": "111.602573"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-08",
          "Open": "114.099998",
          "High": "114.650002",
          "Low": "111.620003",
          "Close": "112.400002",
          "Volume": "57664900",
          "Adj_Close": "109.920514"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-05",
          "Open": "115.989998",
          "High": "116.080002",
          "Low": "114.639999",
          "Close": "115.00",
          "Volume": "38318900",
          "Adj_Close": "112.463157"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-04",
          "Open": "115.769997",
          "High": "117.199997",
          "Low": "115.290001",
          "Close": "115.489998",
          "Volume": "42044500",
          "Adj_Close": "112.942346"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-03",
          "Open": "115.75",
          "High": "116.349998",
          "Low": "115.110001",
          "Close": "115.93",
          "Volume": "43063400",
          "Adj_Close": "113.372642"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-02",
          "Open": "113.50",
          "High": "115.75",
          "Low": "112.75",
          "Close": "114.629997",
          "Volume": "59348900",
          "Adj_Close": "112.101317"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-12-01",
          "Open": "118.809998",
          "High": "119.25",
          "Low": "111.269997",
          "Close": "115.07",
          "Volume": "83814000",
          "Adj_Close": "112.531613"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-28",
          "Open": "119.269997",
          "High": "119.400002",
          "Low": "118.050003",
          "Close": "118.93",
          "Volume": "24814400",
          "Adj_Close": "116.306464"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-26",
          "Open": "117.940002",
          "High": "119.099998",
          "Low": "117.830002",
          "Close": "119.00",
          "Volume": "40768300",
          "Adj_Close": "116.374919"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-25",
          "Open": "119.07",
          "High": "119.75",
          "Low": "117.449997",
          "Close": "117.599998",
          "Volume": "68840400",
          "Adj_Close": "115.005801"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-24",
          "Open": "116.849998",
          "High": "118.769997",
          "Low": "116.620003",
          "Close": "118.629997",
          "Volume": "47450800",
          "Adj_Close": "116.013079"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-21",
          "Open": "117.510002",
          "High": "117.57",
          "Low": "116.029999",
          "Close": "116.470001",
          "Volume": "57179300",
          "Adj_Close": "113.900731"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-20",
          "Open": "114.910004",
          "High": "116.860001",
          "Low": "114.849998",
          "Close": "116.309998",
          "Volume": "43395500",
          "Adj_Close": "113.744257"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-19",
          "Open": "115.440002",
          "High": "115.739998",
          "Low": "113.800003",
          "Close": "114.669998",
          "Volume": "41869200",
          "Adj_Close": "112.140435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-18",
          "Open": "113.940002",
          "High": "115.690002",
          "Low": "113.889999",
          "Close": "115.470001",
          "Volume": "44224000",
          "Adj_Close": "112.922791"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-17",
          "Open": "114.269997",
          "High": "117.279999",
          "Low": "113.300003",
          "Close": "113.989998",
          "Volume": "46746700",
          "Adj_Close": "111.475435"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-14",
          "Open": "113.150002",
          "High": "114.190002",
          "Low": "111.209999",
          "Close": "114.18",
          "Volume": "44063600",
          "Adj_Close": "111.661247"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-13",
          "Open": "111.800003",
          "High": "113.449997",
          "Low": "111.599998",
          "Close": "112.82",
          "Volume": "59522900",
          "Adj_Close": "110.331247"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-12",
          "Open": "109.379997",
          "High": "111.43",
          "Low": "109.370003",
          "Close": "111.25",
          "Volume": "46942400",
          "Adj_Close": "108.795881"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-11",
          "Open": "108.699997",
          "High": "109.75",
          "Low": "108.400002",
          "Close": "109.699997",
          "Volume": "27442300",
          "Adj_Close": "107.28007"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-10",
          "Open": "109.019997",
          "High": "109.330002",
          "Low": "108.669998",
          "Close": "108.830002",
          "Volume": "27195500",
          "Adj_Close": "106.429266"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-07",
          "Open": "108.75",
          "High": "109.32",
          "Low": "108.550003",
          "Close": "109.010002",
          "Volume": "33691500",
          "Adj_Close": "106.605296"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-06",
          "Open": "108.599998",
          "High": "108.790001",
          "Low": "107.800003",
          "Close": "108.699997",
          "Volume": "34968500",
          "Adj_Close": "106.302129"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-05",
          "Open": "109.099998",
          "High": "109.300003",
          "Low": "108.129997",
          "Close": "108.860001",
          "Volume": "37435900",
          "Adj_Close": "105.998973"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-04",
          "Open": "109.360001",
          "High": "109.489998",
          "Low": "107.720001",
          "Close": "108.599998",
          "Volume": "41574400",
          "Adj_Close": "105.745804"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-11-03",
          "Open": "108.220001",
          "High": "110.300003",
          "Low": "108.010002",
          "Close": "109.400002",
          "Volume": "52282600",
          "Adj_Close": "106.524782"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-31",
          "Open": "108.010002",
          "High": "108.040001",
          "Low": "107.209999",
          "Close": "108.00",
          "Volume": "44639300",
          "Adj_Close": "105.161575"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-30",
          "Open": "106.959999",
          "High": "107.349998",
          "Low": "105.900002",
          "Close": "106.980003",
          "Volume": "40654800",
          "Adj_Close": "104.168385"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-29",
          "Open": "106.650002",
          "High": "107.370003",
          "Low": "106.360001",
          "Close": "107.339996",
          "Volume": "52687900",
          "Adj_Close": "104.518917"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-28",
          "Open": "105.400002",
          "High": "106.739998",
          "Low": "105.349998",
          "Close": "106.739998",
          "Volume": "48060900",
          "Adj_Close": "103.934688"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-27",
          "Open": "104.849998",
          "High": "105.480003",
          "Low": "104.699997",
          "Close": "105.110001",
          "Volume": "34187700",
          "Adj_Close": "102.34753"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-24",
          "Open": "105.18",
          "High": "105.489998",
          "Low": "104.529999",
          "Close": "105.220001",
          "Volume": "47053900",
          "Adj_Close": "102.454639"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-23",
          "Open": "104.080002",
          "High": "105.050003",
          "Low": "103.629997",
          "Close": "104.830002",
          "Volume": "71074700",
          "Adj_Close": "102.07489"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-22",
          "Open": "102.839996",
          "High": "104.110001",
          "Low": "102.599998",
          "Close": "102.989998",
          "Volume": "68263100",
          "Adj_Close": "100.283244"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-21",
          "Open": "103.019997",
          "High": "103.019997",
          "Low": "101.269997",
          "Close": "102.470001",
          "Volume": "94623900",
          "Adj_Close": "99.776914"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-20",
          "Open": "98.32",
          "High": "99.959999",
          "Low": "98.220001",
          "Close": "99.760002",
          "Volume": "77517300",
          "Adj_Close": "97.138138"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-17",
          "Open": "97.50",
          "High": "99.00",
          "Low": "96.809998",
          "Close": "97.669998",
          "Volume": "68179700",
          "Adj_Close": "95.103063"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-16",
          "Open": "95.550003",
          "High": "97.720001",
          "Low": "95.410004",
          "Close": "96.260002",
          "Volume": "72154500",
          "Adj_Close": "93.730124"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-15",
          "Open": "97.970001",
          "High": "99.150002",
          "Low": "95.18",
          "Close": "97.540001",
          "Volume": "100933600",
          "Adj_Close": "94.976482"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-14",
          "Open": "100.389999",
          "High": "100.519997",
          "Low": "98.57",
          "Close": "98.75",
          "Volume": "63688600",
          "Adj_Close": "96.154681"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-13",
          "Open": "101.330002",
          "High": "101.779999",
          "Low": "99.809998",
          "Close": "99.809998",
          "Volume": "53583400",
          "Adj_Close": "97.18682"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-10",
          "Open": "100.690002",
          "High": "102.029999",
          "Low": "100.300003",
          "Close": "100.730003",
          "Volume": "66331600",
          "Adj_Close": "98.082646"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-09",
          "Open": "101.540001",
          "High": "102.379997",
          "Low": "100.610001",
          "Close": "101.019997",
          "Volume": "77376500",
          "Adj_Close": "98.365018"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-08",
          "Open": "98.760002",
          "High": "101.110001",
          "Low": "98.309998",
          "Close": "100.800003",
          "Volume": "57404700",
          "Adj_Close": "98.150806"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-07",
          "Open": "99.43",
          "High": "100.120003",
          "Low": "98.730003",
          "Close": "98.75",
          "Volume": "42094200",
          "Adj_Close": "96.154681"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-06",
          "Open": "99.949997",
          "High": "100.650002",
          "Low": "99.419998",
          "Close": "99.620003",
          "Volume": "37051200",
          "Adj_Close": "97.001818"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-03",
          "Open": "99.440002",
          "High": "100.209999",
          "Low": "99.040001",
          "Close": "99.620003",
          "Volume": "43469600",
          "Adj_Close": "97.001818"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-02",
          "Open": "99.269997",
          "High": "100.220001",
          "Low": "98.040001",
          "Close": "99.900002",
          "Volume": "47757800",
          "Adj_Close": "97.274458"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-10-01",
          "Open": "100.589996",
          "High": "100.690002",
          "Low": "98.699997",
          "Close": "99.18",
          "Volume": "51491300",
          "Adj_Close": "96.57338"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-30",
          "Open": "100.809998",
          "High": "101.540001",
          "Low": "100.529999",
          "Close": "100.75",
          "Volume": "55264100",
          "Adj_Close": "98.102117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-29",
          "Open": "98.650002",
          "High": "100.440002",
          "Low": "98.629997",
          "Close": "100.110001",
          "Volume": "49766300",
          "Adj_Close": "97.478938"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-26",
          "Open": "98.529999",
          "High": "100.75",
          "Low": "98.400002",
          "Close": "100.75",
          "Volume": "62370500",
          "Adj_Close": "98.102117"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-25",
          "Open": "100.510002",
          "High": "100.709999",
          "Low": "97.720001",
          "Close": "97.870003",
          "Volume": "100092000",
          "Adj_Close": "95.297811"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-24",
          "Open": "102.160004",
          "High": "102.849998",
          "Low": "101.199997",
          "Close": "101.75",
          "Volume": "60171800",
          "Adj_Close": "99.075836"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-23",
          "Open": "100.599998",
          "High": "102.940002",
          "Low": "100.540001",
          "Close": "102.639999",
          "Volume": "63402200",
          "Adj_Close": "99.942444"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-22",
          "Open": "101.800003",
          "High": "102.139999",
          "Low": "100.580002",
          "Close": "101.059998",
          "Volume": "52788400",
          "Adj_Close": "98.403968"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-19",
          "Open": "102.290001",
          "High": "102.349998",
          "Low": "100.50",
          "Close": "100.959999",
          "Volume": "70902400",
          "Adj_Close": "98.306597"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-18",
          "Open": "101.93",
          "High": "102.349998",
          "Low": "101.559998",
          "Close": "101.790001",
          "Volume": "37299400",
          "Adj_Close": "99.114785"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-17",
          "Open": "101.269997",
          "High": "101.800003",
          "Low": "100.589996",
          "Close": "101.580002",
          "Volume": "60926500",
          "Adj_Close": "98.910305"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-16",
          "Open": "99.800003",
          "High": "101.260002",
          "Low": "98.889999",
          "Close": "100.860001",
          "Volume": "66908100",
          "Adj_Close": "98.209227"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-15",
          "Open": "102.809998",
          "High": "103.050003",
          "Low": "101.440002",
          "Close": "101.629997",
          "Volume": "61316500",
          "Adj_Close": "98.958987"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-12",
          "Open": "101.209999",
          "High": "102.190002",
          "Low": "101.080002",
          "Close": "101.660004",
          "Volume": "62626100",
          "Adj_Close": "98.988204"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-11",
          "Open": "100.410004",
          "High": "101.440002",
          "Low": "99.620003",
          "Close": "101.43",
          "Volume": "62353100",
          "Adj_Close": "98.764246"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-10",
          "Open": "98.010002",
          "High": "101.110001",
          "Low": "97.760002",
          "Close": "101.00",
          "Volume": "100869600",
          "Adj_Close": "98.345547"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-09",
          "Open": "99.080002",
          "High": "103.080002",
          "Low": "96.139999",
          "Close": "97.989998",
          "Volume": "189846300",
          "Adj_Close": "95.414653"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-08",
          "Open": "99.300003",
          "High": "99.309998",
          "Low": "98.050003",
          "Close": "98.360001",
          "Volume": "46356700",
          "Adj_Close": "95.774931"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-05",
          "Open": "98.800003",
          "High": "99.389999",
          "Low": "98.309998",
          "Close": "98.970001",
          "Volume": "58457000",
          "Adj_Close": "96.3689"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-04",
          "Open": "98.849998",
          "High": "100.089996",
          "Low": "97.790001",
          "Close": "98.120003",
          "Volume": "85718000",
          "Adj_Close": "95.541241"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-03",
          "Open": "103.099998",
          "High": "103.199997",
          "Low": "98.580002",
          "Close": "98.940002",
          "Volume": "125421000",
          "Adj_Close": "96.33969"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-09-02",
          "Open": "103.059998",
          "High": "103.739998",
          "Low": "102.720001",
          "Close": "103.300003",
          "Volume": "53564000",
          "Adj_Close": "100.585102"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-29",
          "Open": "102.860001",
          "High": "102.900002",
          "Low": "102.199997",
          "Close": "102.50",
          "Volume": "44595000",
          "Adj_Close": "99.806124"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-28",
          "Open": "101.589996",
          "High": "102.779999",
          "Low": "101.559998",
          "Close": "102.25",
          "Volume": "68460000",
          "Adj_Close": "99.562695"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-27",
          "Open": "101.019997",
          "High": "102.57",
          "Low": "100.699997",
          "Close": "102.129997",
          "Volume": "52369000",
          "Adj_Close": "99.445846"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-26",
          "Open": "101.419998",
          "High": "101.50",
          "Low": "100.860001",
          "Close": "100.889999",
          "Volume": "33152000",
          "Adj_Close": "98.238437"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-25",
          "Open": "101.790001",
          "High": "102.169998",
          "Low": "101.279999",
          "Close": "101.540001",
          "Volume": "40270000",
          "Adj_Close": "98.871356"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-22",
          "Open": "100.290001",
          "High": "101.470001",
          "Low": "100.190002",
          "Close": "101.32",
          "Volume": "44184000",
          "Adj_Close": "98.657136"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-21",
          "Open": "100.57",
          "High": "100.940002",
          "Low": "100.110001",
          "Close": "100.580002",
          "Volume": "33478000",
          "Adj_Close": "97.936587"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-20",
          "Open": "100.440002",
          "High": "101.089996",
          "Low": "99.949997",
          "Close": "100.57",
          "Volume": "52699000",
          "Adj_Close": "97.926848"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-19",
          "Open": "99.410004",
          "High": "100.68",
          "Low": "99.32",
          "Close": "100.529999",
          "Volume": "69399000",
          "Adj_Close": "97.887898"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-18",
          "Open": "98.489998",
          "High": "99.370003",
          "Low": "97.980003",
          "Close": "99.160004",
          "Volume": "47572000",
          "Adj_Close": "96.553909"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-15",
          "Open": "97.900002",
          "High": "98.190002",
          "Low": "96.860001",
          "Close": "97.980003",
          "Volume": "48951000",
          "Adj_Close": "95.404921"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-14",
          "Open": "97.330002",
          "High": "97.57",
          "Low": "96.800003",
          "Close": "97.50",
          "Volume": "28116000",
          "Adj_Close": "94.937533"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-13",
          "Open": "96.150002",
          "High": "97.239998",
          "Low": "96.040001",
          "Close": "97.239998",
          "Volume": "31916000",
          "Adj_Close": "94.684364"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-12",
          "Open": "96.040001",
          "High": "96.879997",
          "Low": "95.610001",
          "Close": "95.970001",
          "Volume": "33795000",
          "Adj_Close": "93.447745"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-11",
          "Open": "95.269997",
          "High": "96.080002",
          "Low": "94.839996",
          "Close": "95.989998",
          "Volume": "36585000",
          "Adj_Close": "93.467216"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-08",
          "Open": "94.260002",
          "High": "94.82",
          "Low": "93.279999",
          "Close": "94.739998",
          "Volume": "41865000",
          "Adj_Close": "92.250068"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-07",
          "Open": "94.93",
          "High": "95.949997",
          "Low": "94.099998",
          "Close": "94.480003",
          "Volume": "46711000",
          "Adj_Close": "91.996907"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-06",
          "Open": "94.75",
          "High": "95.480003",
          "Low": "94.709999",
          "Close": "94.959999",
          "Volume": "38558000",
          "Adj_Close": "92.006638"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-05",
          "Open": "95.360001",
          "High": "95.68",
          "Low": "94.360001",
          "Close": "95.120003",
          "Volume": "55933000",
          "Adj_Close": "92.161665"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-04",
          "Open": "96.370003",
          "High": "96.580002",
          "Low": "95.169998",
          "Close": "95.589996",
          "Volume": "39958000",
          "Adj_Close": "92.617042"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-08-01",
          "Open": "94.900002",
          "High": "96.620003",
          "Low": "94.809998",
          "Close": "96.129997",
          "Volume": "48511000",
          "Adj_Close": "93.140248"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-31",
          "Open": "97.160004",
          "High": "97.449997",
          "Low": "95.330002",
          "Close": "95.599998",
          "Volume": "56843000",
          "Adj_Close": "92.626733"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-30",
          "Open": "98.440002",
          "High": "98.699997",
          "Low": "97.669998",
          "Close": "98.150002",
          "Volume": "33010000",
          "Adj_Close": "95.097428"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-29",
          "Open": "99.330002",
          "High": "99.440002",
          "Low": "98.25",
          "Close": "98.379997",
          "Volume": "43143000",
          "Adj_Close": "95.32027"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-28",
          "Open": "97.82",
          "High": "99.239998",
          "Low": "97.550003",
          "Close": "99.019997",
          "Volume": "55318000",
          "Adj_Close": "95.940365"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-25",
          "Open": "96.849998",
          "High": "97.839996",
          "Low": "96.639999",
          "Close": "97.669998",
          "Volume": "43469000",
          "Adj_Close": "94.632353"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-24",
          "Open": "97.040001",
          "High": "97.32",
          "Low": "96.419998",
          "Close": "97.029999",
          "Volume": "45729000",
          "Adj_Close": "94.012258"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-23",
          "Open": "95.419998",
          "High": "97.879997",
          "Low": "95.169998",
          "Close": "97.190002",
          "Volume": "92918000",
          "Adj_Close": "94.167286"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-22",
          "Open": "94.68",
          "High": "94.889999",
          "Low": "94.120003",
          "Close": "94.720001",
          "Volume": "55197000",
          "Adj_Close": "91.774104"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-21",
          "Open": "94.989998",
          "High": "95.00",
          "Low": "93.720001",
          "Close": "93.940002",
          "Volume": "39079000",
          "Adj_Close": "91.018364"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-18",
          "Open": "93.620003",
          "High": "94.739998",
          "Low": "93.019997",
          "Close": "94.43",
          "Volume": "49988000",
          "Adj_Close": "91.493123"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-17",
          "Open": "95.029999",
          "High": "95.279999",
          "Low": "92.57",
          "Close": "93.089996",
          "Volume": "57298000",
          "Adj_Close": "90.194794"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-16",
          "Open": "96.970001",
          "High": "97.099998",
          "Low": "94.739998",
          "Close": "94.779999",
          "Volume": "53396300",
          "Adj_Close": "91.832236"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-15",
          "Open": "96.800003",
          "High": "96.849998",
          "Low": "95.029999",
          "Close": "95.32",
          "Volume": "45477900",
          "Adj_Close": "92.355442"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-14",
          "Open": "95.860001",
          "High": "96.889999",
          "Low": "95.650002",
          "Close": "96.449997",
          "Volume": "42810000",
          "Adj_Close": "93.450295"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-11",
          "Open": "95.360001",
          "High": "95.889999",
          "Low": "94.860001",
          "Close": "95.220001",
          "Volume": "34018000",
          "Adj_Close": "92.258554"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-10",
          "Open": "93.760002",
          "High": "95.550003",
          "Low": "93.519997",
          "Close": "95.040001",
          "Volume": "39686000",
          "Adj_Close": "92.084152"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-09",
          "Open": "95.440002",
          "High": "95.949997",
          "Low": "94.760002",
          "Close": "95.389999",
          "Volume": "36436000",
          "Adj_Close": "92.423265"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-08",
          "Open": "96.269997",
          "High": "96.800003",
          "Low": "93.919998",
          "Close": "95.349998",
          "Volume": "65222000",
          "Adj_Close": "92.384508"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-07",
          "Open": "94.139999",
          "High": "95.989998",
          "Low": "94.099998",
          "Close": "95.970001",
          "Volume": "56468000",
          "Adj_Close": "92.985228"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-03",
          "Open": "93.669998",
          "High": "94.099998",
          "Low": "93.199997",
          "Close": "94.029999",
          "Volume": "22891800",
          "Adj_Close": "91.105562"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-02",
          "Open": "93.870003",
          "High": "94.059998",
          "Low": "93.089996",
          "Close": "93.480003",
          "Volume": "28465000",
          "Adj_Close": "90.572672"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-07-01",
          "Open": "93.519997",
          "High": "94.07",
          "Low": "93.129997",
          "Close": "93.519997",
          "Volume": "38223000",
          "Adj_Close": "90.611421"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-30",
          "Open": "92.099998",
          "High": "93.730003",
          "Low": "92.089996",
          "Close": "92.93",
          "Volume": "49482300",
          "Adj_Close": "90.039774"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-27",
          "Open": "90.82",
          "High": "92.00",
          "Low": "90.769997",
          "Close": "91.980003",
          "Volume": "64029000",
          "Adj_Close": "89.119323"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-26",
          "Open": "90.370003",
          "High": "91.050003",
          "Low": "89.800003",
          "Close": "90.900002",
          "Volume": "32629000",
          "Adj_Close": "88.072911"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-25",
          "Open": "90.209999",
          "High": "90.699997",
          "Low": "89.650002",
          "Close": "90.360001",
          "Volume": "36869000",
          "Adj_Close": "87.549705"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-24",
          "Open": "90.75",
          "High": "91.739998",
          "Low": "90.190002",
          "Close": "90.279999",
          "Volume": "39036000",
          "Adj_Close": "87.472191"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-23",
          "Open": "91.32",
          "High": "91.620003",
          "Low": "90.599998",
          "Close": "90.830002",
          "Volume": "43694000",
          "Adj_Close": "88.005088"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-20",
          "Open": "91.849998",
          "High": "92.550003",
          "Low": "90.900002",
          "Close": "90.910004",
          "Volume": "100898000",
          "Adj_Close": "88.082602"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-19",
          "Open": "92.290001",
          "High": "92.300003",
          "Low": "91.339996",
          "Close": "91.860001",
          "Volume": "35528000",
          "Adj_Close": "89.003053"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-18",
          "Open": "92.269997",
          "High": "92.290001",
          "Low": "91.349998",
          "Close": "92.18",
          "Volume": "33514000",
          "Adj_Close": "89.3131"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-17",
          "Open": "92.309998",
          "High": "92.699997",
          "Low": "91.800003",
          "Close": "92.080002",
          "Volume": "29726000",
          "Adj_Close": "89.216212"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-16",
          "Open": "91.510002",
          "High": "92.75",
          "Low": "91.449997",
          "Close": "92.199997",
          "Volume": "35561000",
          "Adj_Close": "89.332475"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-13",
          "Open": "92.199997",
          "High": "92.440002",
          "Low": "90.879997",
          "Close": "91.279999",
          "Volume": "54525000",
          "Adj_Close": "88.44109"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-12",
          "Open": "94.040001",
          "High": "94.120003",
          "Low": "91.900002",
          "Close": "92.290001",
          "Volume": "54749000",
          "Adj_Close": "89.41968"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-11",
          "Open": "94.129997",
          "High": "94.760002",
          "Low": "93.470001",
          "Close": "93.860001",
          "Volume": "45681000",
          "Adj_Close": "90.940851"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-10",
          "Open": "94.730003",
          "High": "95.050003",
          "Low": "93.57",
          "Close": "94.25",
          "Volume": "62777000",
          "Adj_Close": "91.318721"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-09",
          "Open": "92.699997",
          "High": "93.879997",
          "Low": "91.75",
          "Close": "93.699997",
          "Volume": "75415000",
          "Adj_Close": "90.785823"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-06",
          "Open": "649.900002",
          "High": "651.259979",
          "Low": "644.470024",
          "Close": "645.570023",
          "Volume": "87484600",
          "Adj_Close": "89.356011"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-05",
          "Open": "646.199997",
          "High": "649.370003",
          "Low": "642.610008",
          "Close": "647.349983",
          "Volume": "75951400",
          "Adj_Close": "89.602383"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-04",
          "Open": "637.44001",
          "High": "647.890022",
          "Low": "636.109993",
          "Close": "644.819992",
          "Volume": "83870500",
          "Adj_Close": "89.252197"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-03",
          "Open": "628.459991",
          "High": "638.740013",
          "Low": "628.25",
          "Close": "637.539986",
          "Volume": "73177300",
          "Adj_Close": "88.244541"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-06-02",
          "Open": "633.959984",
          "High": "634.830017",
          "Low": "622.500015",
          "Close": "628.650009",
          "Volume": "92337700",
          "Adj_Close": "87.014043"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-30",
          "Open": "637.979996",
          "High": "644.169991",
          "Low": "628.900002",
          "Close": "633.000015",
          "Volume": "141005200",
          "Adj_Close": "87.616145"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-29",
          "Open": "627.849991",
          "High": "636.87001",
          "Low": "627.769989",
          "Close": "635.37999",
          "Volume": "94118500",
          "Adj_Close": "87.945567"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-28",
          "Open": "626.019989",
          "High": "629.830009",
          "Low": "623.779991",
          "Close": "624.01001",
          "Volume": "78870400",
          "Adj_Close": "86.371801"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-27",
          "Open": "615.879997",
          "High": "625.859985",
          "Low": "615.630005",
          "Close": "625.63002",
          "Volume": "87216500",
          "Adj_Close": "86.596033"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-23",
          "Open": "607.25",
          "High": "614.730011",
          "Low": "606.470009",
          "Close": "614.129997",
          "Volume": "58052400",
          "Adj_Close": "85.004268"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-22",
          "Open": "606.599998",
          "High": "609.850006",
          "Low": "604.100021",
          "Close": "607.269974",
          "Volume": "50190000",
          "Adj_Close": "84.054744"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-21",
          "Open": "603.830002",
          "High": "606.699974",
          "Low": "602.059975",
          "Close": "606.310005",
          "Volume": "49214900",
          "Adj_Close": "83.92187"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-20",
          "Open": "604.510017",
          "High": "606.399994",
          "Low": "600.730011",
          "Close": "604.710022",
          "Volume": "58709000",
          "Adj_Close": "83.70041"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-19",
          "Open": "597.849998",
          "High": "607.330002",
          "Low": "597.329987",
          "Close": "604.590019",
          "Volume": "79438800",
          "Adj_Close": "83.6838"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-16",
          "Open": "588.629974",
          "High": "597.529991",
          "Low": "585.399994",
          "Close": "597.510017",
          "Volume": "69064100",
          "Adj_Close": "82.703828"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-15",
          "Open": "594.70002",
          "High": "596.599983",
          "Low": "588.040001",
          "Close": "588.819992",
          "Volume": "57711500",
          "Adj_Close": "81.501005"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-14",
          "Open": "592.430008",
          "High": "597.400002",
          "Low": "591.740005",
          "Close": "593.869987",
          "Volume": "41601000",
          "Adj_Close": "82.199996"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-13",
          "Open": "591.999985",
          "High": "594.540016",
          "Low": "590.699982",
          "Close": "593.760025",
          "Volume": "39934300",
          "Adj_Close": "82.184776"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-12",
          "Open": "587.489975",
          "High": "593.659996",
          "Low": "587.399986",
          "Close": "592.830017",
          "Volume": "53302200",
          "Adj_Close": "82.05605"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-09",
          "Open": "584.540001",
          "High": "586.25",
          "Low": "580.330025",
          "Close": "585.540024",
          "Volume": "72899400",
          "Adj_Close": "81.047012"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-08",
          "Open": "588.249992",
          "High": "594.410027",
          "Low": "586.400017",
          "Close": "587.990013",
          "Volume": "57574300",
          "Adj_Close": "81.386125"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-07",
          "Open": "595.249992",
          "High": "597.289986",
          "Low": "587.72998",
          "Close": "592.329979",
          "Volume": "70716100",
          "Adj_Close": "81.531455"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-06",
          "Open": "601.799995",
          "High": "604.409988",
          "Low": "594.410027",
          "Close": "594.410027",
          "Volume": "93641100",
          "Adj_Close": "81.817764"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-05",
          "Open": "590.140022",
          "High": "600.999977",
          "Low": "589.999992",
          "Close": "600.959976",
          "Volume": "71766800",
          "Adj_Close": "82.719334"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-02",
          "Open": "592.340019",
          "High": "594.199982",
          "Low": "589.709999",
          "Close": "592.580025",
          "Volume": "47878600",
          "Adj_Close": "81.565873"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-05-01",
          "Open": "591.999985",
          "High": "594.799995",
          "Low": "586.360016",
          "Close": "591.480026",
          "Volume": "61012000",
          "Adj_Close": "81.414463"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-30",
          "Open": "592.639999",
          "High": "599.430008",
          "Low": "589.799988",
          "Close": "590.089981",
          "Volume": "114160200",
          "Adj_Close": "81.22313"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-29",
          "Open": "593.739998",
          "High": "595.979996",
          "Low": "589.509995",
          "Close": "592.329979",
          "Volume": "84344400",
          "Adj_Close": "81.531455"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-28",
          "Open": "572.800026",
          "High": "595.749977",
          "Low": "572.54998",
          "Close": "594.090019",
          "Volume": "167371400",
          "Adj_Close": "81.773717"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-25",
          "Open": "564.529984",
          "High": "571.990021",
          "Low": "563.959984",
          "Close": "571.93998",
          "Volume": "97568800",
          "Adj_Close": "78.724867"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-24",
          "Open": "568.210014",
          "High": "570.000015",
          "Low": "560.730003",
          "Close": "567.770004",
          "Volume": "189977900",
          "Adj_Close": "78.150889"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-23",
          "Open": "529.060013",
          "High": "531.13002",
          "Low": "524.449974",
          "Close": "524.750008",
          "Volume": "98735000",
          "Adj_Close": "72.229388"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-22",
          "Open": "528.309982",
          "High": "531.830009",
          "Low": "526.500008",
          "Close": "531.70002",
          "Volume": "50640800",
          "Adj_Close": "73.186025"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-21",
          "Open": "525.339981",
          "High": "532.139977",
          "Low": "523.959976",
          "Close": "531.170021",
          "Volume": "45637200",
          "Adj_Close": "73.113073"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-17",
          "Open": "519.999992",
          "High": "527.76001",
          "Low": "519.199974",
          "Close": "524.940025",
          "Volume": "71083600",
          "Adj_Close": "72.255543"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-16",
          "Open": "518.049988",
          "High": "521.090004",
          "Low": "514.139992",
          "Close": "519.01001",
          "Volume": "53691400",
          "Adj_Close": "71.439304"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-15",
          "Open": "520.270012",
          "High": "521.639977",
          "Low": "511.329994",
          "Close": "517.959999",
          "Volume": "66622500",
          "Adj_Close": "71.294775"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-14",
          "Open": "521.900009",
          "High": "522.159988",
          "Low": "517.210022",
          "Close": "521.679977",
          "Volume": "51418500",
          "Adj_Close": "71.806813"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-11",
          "Open": "519.000023",
          "High": "522.830017",
          "Low": "517.140007",
          "Close": "519.610023",
          "Volume": "67929400",
          "Adj_Close": "71.521893"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-10",
          "Open": "530.680023",
          "High": "532.240005",
          "Low": "523.169998",
          "Close": "523.480019",
          "Volume": "59913000",
          "Adj_Close": "72.05458"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-09",
          "Open": "522.639999",
          "High": "530.490005",
          "Low": "522.020012",
          "Close": "530.320015",
          "Volume": "51542400",
          "Adj_Close": "72.996073"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-08",
          "Open": "525.190018",
          "High": "526.120026",
          "Low": "518.699989",
          "Close": "523.440018",
          "Volume": "60972100",
          "Adj_Close": "72.049074"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-07",
          "Open": "528.019989",
          "High": "530.900002",
          "Low": "521.890022",
          "Close": "523.469978",
          "Volume": "72462600",
          "Adj_Close": "72.053198"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-04",
          "Open": "539.810005",
          "High": "540.000023",
          "Low": "530.579994",
          "Close": "531.820023",
          "Volume": "68812800",
          "Adj_Close": "73.202542"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-03",
          "Open": "541.390015",
          "High": "542.50",
          "Low": "537.640022",
          "Close": "538.790009",
          "Volume": "40586000",
          "Adj_Close": "74.161928"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-02",
          "Open": "542.379997",
          "High": "543.479996",
          "Low": "540.260002",
          "Close": "542.549988",
          "Volume": "45105200",
          "Adj_Close": "74.679472"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-04-01",
          "Open": "537.760025",
          "High": "541.870026",
          "Low": "536.769989",
          "Close": "541.649994",
          "Volume": "50190000",
          "Adj_Close": "74.555592"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-31",
          "Open": "539.230019",
          "High": "540.809975",
          "Low": "535.930023",
          "Close": "536.739975",
          "Volume": "42167300",
          "Adj_Close": "73.879751"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-28",
          "Open": "538.319984",
          "High": "538.940025",
          "Low": "534.249985",
          "Close": "536.859978",
          "Volume": "50141000",
          "Adj_Close": "73.896269"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-27",
          "Open": "540.019997",
          "High": "541.499977",
          "Low": "535.120018",
          "Close": "537.459991",
          "Volume": "55507900",
          "Adj_Close": "73.978858"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-26",
          "Open": "546.520012",
          "High": "549.000015",
          "Low": "538.860023",
          "Close": "539.779991",
          "Volume": "74942000",
          "Adj_Close": "74.298195"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-25",
          "Open": "541.499977",
          "High": "545.750008",
          "Low": "539.589973",
          "Close": "544.98999",
          "Volume": "70573300",
          "Adj_Close": "75.015327"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-24",
          "Open": "538.420013",
          "High": "540.500008",
          "Low": "535.05999",
          "Close": "539.190018",
          "Volume": "88925200",
          "Adj_Close": "74.216988"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-21",
          "Open": "531.929985",
          "High": "533.75",
          "Low": "526.330017",
          "Close": "532.86998",
          "Volume": "93511600",
          "Adj_Close": "73.347064"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-20",
          "Open": "529.889992",
          "High": "532.669975",
          "Low": "527.350014",
          "Close": "528.700005",
          "Volume": "52099600",
          "Adj_Close": "72.773086"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-19",
          "Open": "532.259979",
          "High": "536.23999",
          "Low": "528.999985",
          "Close": "531.26001",
          "Volume": "56189000",
          "Adj_Close": "73.125459"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-18",
          "Open": "525.899994",
          "High": "531.969986",
          "Low": "525.200005",
          "Close": "531.399986",
          "Volume": "52411800",
          "Adj_Close": "73.144726"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-17",
          "Open": "527.699982",
          "High": "529.969994",
          "Low": "525.850006",
          "Close": "526.740013",
          "Volume": "49886200",
          "Adj_Close": "72.503303"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-14",
          "Open": "528.789993",
          "High": "530.890015",
          "Low": "523.000008",
          "Close": "524.68998",
          "Volume": "59299800",
          "Adj_Close": "72.221125"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-13",
          "Open": "537.440018",
          "High": "539.659988",
          "Low": "529.159988",
          "Close": "530.650009",
          "Volume": "64435700",
          "Adj_Close": "73.041495"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-12",
          "Open": "534.510017",
          "High": "537.349976",
          "Low": "532.00",
          "Close": "536.609985",
          "Volume": "49831600",
          "Adj_Close": "73.861858"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-11",
          "Open": "535.450012",
          "High": "538.740021",
          "Low": "532.589973",
          "Close": "536.089973",
          "Volume": "69806100",
          "Adj_Close": "73.790281"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-10",
          "Open": "528.360023",
          "High": "533.330017",
          "Low": "528.339996",
          "Close": "530.919975",
          "Volume": "44646000",
          "Adj_Close": "73.078655"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-07",
          "Open": "531.090019",
          "High": "531.980026",
          "Low": "526.050011",
          "Close": "530.440018",
          "Volume": "55182400",
          "Adj_Close": "73.012591"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-06",
          "Open": "532.789978",
          "High": "534.440002",
          "Low": "528.099991",
          "Close": "530.749985",
          "Volume": "46372200",
          "Adj_Close": "73.055257"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-05",
          "Open": "530.919975",
          "High": "534.750023",
          "Low": "529.129974",
          "Close": "532.360008",
          "Volume": "50015700",
          "Adj_Close": "73.276869"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-04",
          "Open": "530.999977",
          "High": "532.640015",
          "Low": "527.769997",
          "Close": "531.239983",
          "Volume": "64785000",
          "Adj_Close": "73.122703"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-03-03",
          "Open": "523.419991",
          "High": "530.650009",
          "Low": "522.80999",
          "Close": "527.76001",
          "Volume": "59695300",
          "Adj_Close": "72.643701"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-28",
          "Open": "529.079987",
          "High": "532.749977",
          "Low": "522.119987",
          "Close": "526.239975",
          "Volume": "92992200",
          "Adj_Close": "72.434475"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-27",
          "Open": "517.140007",
          "High": "528.780006",
          "Low": "516.049995",
          "Close": "527.670021",
          "Volume": "75470500",
          "Adj_Close": "72.631314"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-26",
          "Open": "523.610008",
          "High": "525.00",
          "Low": "515.599998",
          "Close": "517.349998",
          "Volume": "69054300",
          "Adj_Close": "71.210811"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-25",
          "Open": "529.38002",
          "High": "529.569984",
          "Low": "521.000015",
          "Close": "522.060013",
          "Volume": "57988000",
          "Adj_Close": "71.859123"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-24",
          "Open": "523.150024",
          "High": "529.920006",
          "Low": "522.420021",
          "Close": "527.550018",
          "Volume": "72227400",
          "Adj_Close": "72.614796"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-21",
          "Open": "532.789978",
          "High": "534.569992",
          "Low": "524.599991",
          "Close": "525.249992",
          "Volume": "69696200",
          "Adj_Close": "72.298208"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-20",
          "Open": "532.989983",
          "High": "537.000008",
          "Low": "528.999985",
          "Close": "531.149994",
          "Volume": "76464500",
          "Adj_Close": "73.110316"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-19",
          "Open": "544.749985",
          "High": "546.890007",
          "Low": "534.350014",
          "Close": "537.370003",
          "Volume": "78442000",
          "Adj_Close": "73.966471"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-18",
          "Open": "546.00",
          "High": "551.190025",
          "Low": "545.609978",
          "Close": "545.990013",
          "Volume": "65062900",
          "Adj_Close": "75.152975"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-14",
          "Open": "542.469986",
          "High": "545.980026",
          "Low": "541.209984",
          "Close": "543.990021",
          "Volume": "68231100",
          "Adj_Close": "74.877686"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-13",
          "Open": "534.659981",
          "High": "544.850014",
          "Low": "534.199997",
          "Close": "544.429977",
          "Volume": "76849500",
          "Adj_Close": "74.938244"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-12",
          "Open": "536.95002",
          "High": "539.560013",
          "Low": "533.239975",
          "Close": "535.919983",
          "Volume": "77025200",
          "Adj_Close": "73.766883"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-11",
          "Open": "530.610008",
          "High": "537.749985",
          "Low": "529.500023",
          "Close": "535.959984",
          "Volume": "70564200",
          "Adj_Close": "73.772389"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-10",
          "Open": "518.659988",
          "High": "531.990013",
          "Low": "518.00",
          "Close": "528.989998",
          "Volume": "86389800",
          "Adj_Close": "72.813003"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-07",
          "Open": "521.379997",
          "High": "522.929993",
          "Low": "517.380013",
          "Close": "519.679985",
          "Volume": "92570100",
          "Adj_Close": "71.531523"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-06",
          "Open": "510.060005",
          "High": "513.499977",
          "Low": "507.81002",
          "Close": "512.509995",
          "Volume": "64441300",
          "Adj_Close": "70.544607"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-05",
          "Open": "506.560005",
          "High": "515.279991",
          "Low": "506.249985",
          "Close": "512.589996",
          "Volume": "82086200",
          "Adj_Close": "70.135807"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-04",
          "Open": "505.849976",
          "High": "509.459991",
          "Low": "502.760025",
          "Close": "508.790016",
          "Volume": "94170300",
          "Adj_Close": "69.61587"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-02-03",
          "Open": "502.610008",
          "High": "507.730019",
          "Low": "499.300026",
          "Close": "501.529984",
          "Volume": "100366000",
          "Adj_Close": "68.622506"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-31",
          "Open": "495.179985",
          "High": "501.529984",
          "Low": "493.549988",
          "Close": "500.599976",
          "Volume": "116199300",
          "Adj_Close": "68.495256"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-30",
          "Open": "502.539993",
          "High": "506.499977",
          "Low": "496.70002",
          "Close": "499.779984",
          "Volume": "169625400",
          "Adj_Close": "68.38306"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-29",
          "Open": "503.950012",
          "High": "507.37001",
          "Low": "498.62001",
          "Close": "500.749992",
          "Volume": "125702500",
          "Adj_Close": "68.515783"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-28",
          "Open": "508.760002",
          "High": "514.999985",
          "Low": "502.070023",
          "Close": "506.499977",
          "Volume": "266380800",
          "Adj_Close": "69.302532"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-27",
          "Open": "550.07",
          "High": "554.799988",
          "Low": "545.750008",
          "Close": "550.500023",
          "Volume": "138719700",
          "Adj_Close": "75.322897"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-24",
          "Open": "554.000023",
          "High": "555.61998",
          "Low": "544.749985",
          "Close": "546.070015",
          "Volume": "107338700",
          "Adj_Close": "74.716755"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-23",
          "Open": "549.94001",
          "High": "556.50",
          "Low": "544.810013",
          "Close": "556.179993",
          "Volume": "100809800",
          "Adj_Close": "76.100066"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-22",
          "Open": "550.910019",
          "High": "557.289978",
          "Low": "547.809975",
          "Close": "551.509979",
          "Volume": "94996300",
          "Adj_Close": "75.461085"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-21",
          "Open": "540.990005",
          "High": "550.07",
          "Low": "540.420006",
          "Close": "549.069977",
          "Volume": "82131700",
          "Adj_Close": "75.127229"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-17",
          "Open": "551.480019",
          "High": "552.069992",
          "Low": "539.899994",
          "Close": "540.669998",
          "Volume": "106684900",
          "Adj_Close": "73.97789"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-16",
          "Open": "554.900017",
          "High": "556.850021",
          "Low": "551.680023",
          "Close": "554.250015",
          "Volume": "57319500",
          "Adj_Close": "75.835994"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-15",
          "Open": "553.520012",
          "High": "560.200005",
          "Low": "551.659996",
          "Close": "557.359993",
          "Volume": "97909700",
          "Adj_Close": "76.261521"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-14",
          "Open": "538.220009",
          "High": "546.730003",
          "Low": "537.659996",
          "Close": "546.390022",
          "Volume": "83140400",
          "Adj_Close": "74.76054"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-13",
          "Open": "529.910019",
          "High": "542.50",
          "Low": "529.880005",
          "Close": "535.730019",
          "Volume": "94623200",
          "Adj_Close": "73.301971"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-10",
          "Open": "539.829979",
          "High": "540.799988",
          "Low": "531.109993",
          "Close": "532.939995",
          "Volume": "76244000",
          "Adj_Close": "72.920222"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-09",
          "Open": "546.800018",
          "High": "546.859993",
          "Low": "535.349983",
          "Close": "536.519997",
          "Volume": "69787200",
          "Adj_Close": "73.410061"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-08",
          "Open": "538.809982",
          "High": "545.55999",
          "Low": "538.68998",
          "Close": "543.460022",
          "Volume": "64632400",
          "Adj_Close": "74.359639"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-07",
          "Open": "544.320015",
          "High": "545.959999",
          "Low": "537.919975",
          "Close": "540.040024",
          "Volume": "79302300",
          "Adj_Close": "73.891693"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-06",
          "Open": "537.450005",
          "High": "546.800018",
          "Low": "533.599983",
          "Close": "543.929993",
          "Volume": "103152700",
          "Adj_Close": "74.423944"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-03",
          "Open": "552.860023",
          "High": "553.699989",
          "Low": "540.429993",
          "Close": "540.980019",
          "Volume": "98116900",
          "Adj_Close": "74.020309"
        },
        {
          "Symbol": "AAPL",
          "Date": "2014-01-02",
          "Open": "555.680008",
          "High": "557.029999",
          "Low": "552.020004",
          "Close": "553.12999",
          "Volume": "58671200",
          "Adj_Close": "75.682745"
        }
      ]
    }
  }
},
{
  "query": {
    "count": 252,
    "created": "2016-03-30T21:45:13Z",
    "lang": "en-US",
    "diagnostics": {
      "url": [
        {
          "execution-start-time": "0",
          "execution-stop-time": "89",
          "execution-time": "89",
          "proxy": "DEFAULT",
          "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"
        },
        {
          "execution-start-time": "93",
          "execution-stop-time": "110",
          "execution-time": "17",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=ALL"
        },
        {
          "execution-start-time": "114",
          "execution-stop-time": "115",
          "execution-time": "1",
          "proxy": "DEFAULT",
          "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=ALL"
        }
      ],
      "publiclyCallable": "true",
      "cache": [
        {
          "execution-start-time": "92",
          "execution-stop-time": "93",
          "execution-time": "1",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "e0faf057bb2a7ea3fca127f42f803f88"
        },
        {
          "execution-start-time": "113",
          "execution-stop-time": "113",
          "execution-time": "0",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "5f274cccc4dba3fc7848380214b13380"
        }
      ],
      "query": [
        {
          "execution-start-time": "93",
          "execution-stop-time": "112",
          "execution-time": "19",
          "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=ALL]}",
          "content": "select * from csv(0,1) where url=@url"
        },
        {
          "execution-start-time": "113",
          "execution-stop-time": "118",
          "execution-time": "5",
          "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=ALL]}",
          "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
        }
      ],
      "javascript": {
        "execution-start-time": "91",
        "execution-stop-time": "2072",
        "execution-time": "1981",
        "instructions-used": "24191220",
        "table-name": "yahoo.finance.historicaldata"
      },
      "user-time": "2082",
      "service-time": "108",
      "build-version": "0.2.426"
    },
    "results": {
      "quote": [
        {
          "Symbol": "ALL",
          "Date": "2014-12-31",
          "Open": "71.160004",
          "High": "71.209999",
          "Low": "70.239998",
          "Close": "70.25",
          "Volume": "1319900",
          "Adj_Close": "68.592227"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-30",
          "Open": "70.970001",
          "High": "71.300003",
          "Low": "70.75",
          "Close": "70.940002",
          "Volume": "1095100",
          "Adj_Close": "69.265946"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-29",
          "Open": "70.93",
          "High": "71.529999",
          "Low": "70.760002",
          "Close": "71.00",
          "Volume": "1186200",
          "Adj_Close": "69.324528"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-26",
          "Open": "70.809998",
          "High": "71.25",
          "Low": "70.739998",
          "Close": "70.93",
          "Volume": "909600",
          "Adj_Close": "69.25618"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-24",
          "Open": "70.93",
          "High": "71.00",
          "Low": "70.639999",
          "Close": "70.690002",
          "Volume": "567800",
          "Adj_Close": "69.021846"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-23",
          "Open": "70.489998",
          "High": "71.139999",
          "Low": "70.440002",
          "Close": "70.75",
          "Volume": "1479000",
          "Adj_Close": "69.080428"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-22",
          "Open": "70.050003",
          "High": "70.599998",
          "Low": "69.870003",
          "Close": "70.440002",
          "Volume": "1933200",
          "Adj_Close": "68.777746"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-19",
          "Open": "69.900002",
          "High": "70.139999",
          "Low": "69.510002",
          "Close": "69.889999",
          "Volume": "4940000",
          "Adj_Close": "68.240722"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-18",
          "Open": "69.169998",
          "High": "69.790001",
          "Low": "68.839996",
          "Close": "69.790001",
          "Volume": "2979900",
          "Adj_Close": "68.143083"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-17",
          "Open": "67.300003",
          "High": "68.610001",
          "Low": "67.260002",
          "Close": "68.220001",
          "Volume": "2739000",
          "Adj_Close": "66.610132"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-16",
          "Open": "67.25",
          "High": "68.419998",
          "Low": "66.809998",
          "Close": "67.209999",
          "Volume": "2493100",
          "Adj_Close": "65.623964"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-15",
          "Open": "67.709999",
          "High": "68.300003",
          "Low": "67.089996",
          "Close": "67.370003",
          "Volume": "2789500",
          "Adj_Close": "65.780192"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-12",
          "Open": "68.269997",
          "High": "68.919998",
          "Low": "67.379997",
          "Close": "67.419998",
          "Volume": "2944600",
          "Adj_Close": "65.829008"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-11",
          "Open": "68.589996",
          "High": "69.660004",
          "Low": "68.330002",
          "Close": "69.059998",
          "Volume": "3088800",
          "Adj_Close": "67.430306"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-10",
          "Open": "68.790001",
          "High": "69.50",
          "Low": "68.550003",
          "Close": "68.550003",
          "Volume": "3028700",
          "Adj_Close": "66.932347"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-09",
          "Open": "68.660004",
          "High": "68.870003",
          "Low": "68.410004",
          "Close": "68.830002",
          "Volume": "2345500",
          "Adj_Close": "67.205738"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-08",
          "Open": "68.769997",
          "High": "69.410004",
          "Low": "68.610001",
          "Close": "69.139999",
          "Volume": "2547500",
          "Adj_Close": "67.50842"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-05",
          "Open": "68.459999",
          "High": "68.980003",
          "Low": "68.400002",
          "Close": "68.68",
          "Volume": "2185000",
          "Adj_Close": "67.059276"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-04",
          "Open": "68.120003",
          "High": "68.660004",
          "Low": "68.059998",
          "Close": "68.389999",
          "Volume": "2551100",
          "Adj_Close": "66.776119"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-03",
          "Open": "68.190002",
          "High": "68.43",
          "Low": "67.699997",
          "Close": "68.07",
          "Volume": "2425500",
          "Adj_Close": "66.463671"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-02",
          "Open": "67.510002",
          "High": "68.139999",
          "Low": "67.510002",
          "Close": "68.110001",
          "Volume": "1902800",
          "Adj_Close": "66.502728"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-12-01",
          "Open": "68.07",
          "High": "68.080002",
          "Low": "67.610001",
          "Close": "67.610001",
          "Volume": "1925300",
          "Adj_Close": "66.014527"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-28",
          "Open": "67.699997",
          "High": "68.470001",
          "Low": "67.699997",
          "Close": "68.150002",
          "Volume": "1097100",
          "Adj_Close": "66.541785"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-26",
          "Open": "67.660004",
          "High": "67.75",
          "Low": "67.410004",
          "Close": "67.519997",
          "Volume": "1494500",
          "Adj_Close": "65.926647"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-25",
          "Open": "67.610001",
          "High": "67.910004",
          "Low": "67.360001",
          "Close": "67.580002",
          "Volume": "1593400",
          "Adj_Close": "65.985236"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-24",
          "Open": "67.650002",
          "High": "68.089996",
          "Low": "67.610001",
          "Close": "67.919998",
          "Volume": "1592500",
          "Adj_Close": "66.043816"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-21",
          "Open": "67.889999",
          "High": "67.910004",
          "Low": "67.260002",
          "Close": "67.400002",
          "Volume": "2686500",
          "Adj_Close": "65.538183"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-20",
          "Open": "66.940002",
          "High": "67.480003",
          "Low": "66.879997",
          "Close": "67.290001",
          "Volume": "1635500",
          "Adj_Close": "65.431221"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-19",
          "Open": "66.989998",
          "High": "67.400002",
          "Low": "66.68",
          "Close": "67.370003",
          "Volume": "1877600",
          "Adj_Close": "65.509013"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-18",
          "Open": "66.879997",
          "High": "67.150002",
          "Low": "66.589996",
          "Close": "66.790001",
          "Volume": "1802600",
          "Adj_Close": "64.945033"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-17",
          "Open": "66.110001",
          "High": "66.739998",
          "Low": "66.110001",
          "Close": "66.660004",
          "Volume": "1172100",
          "Adj_Close": "64.818627"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-14",
          "Open": "67.010002",
          "High": "67.010002",
          "Low": "66.43",
          "Close": "66.580002",
          "Volume": "1559600",
          "Adj_Close": "64.740835"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-13",
          "Open": "67.169998",
          "High": "67.32",
          "Low": "66.709999",
          "Close": "66.919998",
          "Volume": "1962900",
          "Adj_Close": "65.071439"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-12",
          "Open": "66.440002",
          "High": "67.209999",
          "Low": "66.419998",
          "Close": "67.169998",
          "Volume": "1991200",
          "Adj_Close": "65.314533"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-11",
          "Open": "66.709999",
          "High": "66.970001",
          "Low": "66.550003",
          "Close": "66.629997",
          "Volume": "2059200",
          "Adj_Close": "64.789449"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-10",
          "Open": "66.75",
          "High": "66.879997",
          "Low": "66.470001",
          "Close": "66.760002",
          "Volume": "2025300",
          "Adj_Close": "64.915863"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-07",
          "Open": "66.110001",
          "High": "66.410004",
          "Low": "65.910004",
          "Close": "66.25",
          "Volume": "2125000",
          "Adj_Close": "64.419949"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-06",
          "Open": "65.690002",
          "High": "66.239998",
          "Low": "65.599998",
          "Close": "66.129997",
          "Volume": "2538900",
          "Adj_Close": "64.303261"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-05",
          "Open": "65.480003",
          "High": "65.75",
          "Low": "65.139999",
          "Close": "65.739998",
          "Volume": "2520800",
          "Adj_Close": "63.924035"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-04",
          "Open": "64.900002",
          "High": "65.150002",
          "Low": "64.580002",
          "Close": "64.889999",
          "Volume": "2210800",
          "Adj_Close": "63.097516"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-11-03",
          "Open": "64.50",
          "High": "65.00",
          "Low": "64.50",
          "Close": "64.720001",
          "Volume": "2207400",
          "Adj_Close": "62.932214"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-31",
          "Open": "64.150002",
          "High": "65.00",
          "Low": "64.150002",
          "Close": "64.849998",
          "Volume": "3055400",
          "Adj_Close": "63.05862"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-30",
          "Open": "63.599998",
          "High": "64.129997",
          "Low": "63.419998",
          "Close": "63.91",
          "Volume": "2503900",
          "Adj_Close": "62.144587"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-29",
          "Open": "63.279999",
          "High": "63.459999",
          "Low": "62.639999",
          "Close": "62.98",
          "Volume": "2563200",
          "Adj_Close": "61.240277"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-28",
          "Open": "63.400002",
          "High": "63.700001",
          "Low": "63.220001",
          "Close": "63.23",
          "Volume": "3401800",
          "Adj_Close": "61.483371"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-27",
          "Open": "62.709999",
          "High": "63.220001",
          "Low": "62.57",
          "Close": "63.130001",
          "Volume": "3801800",
          "Adj_Close": "61.386135"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-24",
          "Open": "61.720001",
          "High": "62.630001",
          "Low": "61.720001",
          "Close": "62.57",
          "Volume": "2015400",
          "Adj_Close": "60.841603"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-23",
          "Open": "62.400002",
          "High": "62.419998",
          "Low": "61.880001",
          "Close": "62.00",
          "Volume": "2454700",
          "Adj_Close": "60.287348"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-22",
          "Open": "62.00",
          "High": "62.400002",
          "Low": "61.779999",
          "Close": "61.810001",
          "Volume": "2702600",
          "Adj_Close": "60.102598"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-21",
          "Open": "61.099998",
          "High": "62.220001",
          "Low": "60.919998",
          "Close": "62.029999",
          "Volume": "3165000",
          "Adj_Close": "60.316518"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-20",
          "Open": "60.459999",
          "High": "60.950001",
          "Low": "60.310001",
          "Close": "60.849998",
          "Volume": "1837700",
          "Adj_Close": "59.169114"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-17",
          "Open": "60.27",
          "High": "60.810001",
          "Low": "59.689999",
          "Close": "60.639999",
          "Volume": "2708400",
          "Adj_Close": "58.964916"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-16",
          "Open": "59.759998",
          "High": "60.330002",
          "Low": "59.279999",
          "Close": "59.860001",
          "Volume": "3694000",
          "Adj_Close": "58.206463"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-15",
          "Open": "61.299999",
          "High": "61.43",
          "Low": "59.73",
          "Close": "60.57",
          "Volume": "3434700",
          "Adj_Close": "58.896849"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-14",
          "Open": "61.459999",
          "High": "62.040001",
          "Low": "61.25",
          "Close": "61.619999",
          "Volume": "2896400",
          "Adj_Close": "59.917844"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-13",
          "Open": "61.299999",
          "High": "61.790001",
          "Low": "61.049999",
          "Close": "61.060001",
          "Volume": "2520200",
          "Adj_Close": "59.373316"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-10",
          "Open": "60.950001",
          "High": "61.860001",
          "Low": "60.950001",
          "Close": "61.16",
          "Volume": "2029200",
          "Adj_Close": "59.470552"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-09",
          "Open": "61.549999",
          "High": "61.860001",
          "Low": "61.00",
          "Close": "61.009998",
          "Volume": "2819200",
          "Adj_Close": "59.324694"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-08",
          "Open": "60.919998",
          "High": "61.700001",
          "Low": "60.849998",
          "Close": "61.639999",
          "Volume": "2260600",
          "Adj_Close": "59.937292"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-07",
          "Open": "61.389999",
          "High": "61.669998",
          "Low": "60.880001",
          "Close": "60.900002",
          "Volume": "1756700",
          "Adj_Close": "59.217736"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-06",
          "Open": "62.049999",
          "High": "62.23",
          "Low": "61.50",
          "Close": "61.619999",
          "Volume": "1549900",
          "Adj_Close": "59.917844"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-03",
          "Open": "61.689999",
          "High": "62.16",
          "Low": "61.68",
          "Close": "61.73",
          "Volume": "2737700",
          "Adj_Close": "60.024806"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-02",
          "Open": "60.919998",
          "High": "61.43",
          "Low": "60.740002",
          "Close": "61.139999",
          "Volume": "1961700",
          "Adj_Close": "59.451104"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-10-01",
          "Open": "61.330002",
          "High": "61.610001",
          "Low": "60.66",
          "Close": "60.810001",
          "Volume": "2238400",
          "Adj_Close": "59.130221"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-30",
          "Open": "61.119999",
          "High": "61.610001",
          "Low": "61.040001",
          "Close": "61.369999",
          "Volume": "2256900",
          "Adj_Close": "59.67475"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-29",
          "Open": "61.029999",
          "High": "61.540001",
          "Low": "60.869999",
          "Close": "61.290001",
          "Volume": "1279200",
          "Adj_Close": "59.596962"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-26",
          "Open": "61.099998",
          "High": "61.630001",
          "Low": "61.02",
          "Close": "61.41",
          "Volume": "1279300",
          "Adj_Close": "59.713646"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-25",
          "Open": "61.470001",
          "High": "61.580002",
          "Low": "61.02",
          "Close": "61.09",
          "Volume": "2005900",
          "Adj_Close": "59.402486"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-24",
          "Open": "61.279999",
          "High": "61.860001",
          "Low": "61.189999",
          "Close": "61.68",
          "Volume": "1370500",
          "Adj_Close": "59.976188"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-23",
          "Open": "61.68",
          "High": "61.77",
          "Low": "61.130001",
          "Close": "61.310001",
          "Volume": "3786200",
          "Adj_Close": "59.61641"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-22",
          "Open": "61.939999",
          "High": "62.02",
          "Low": "61.740002",
          "Close": "61.84",
          "Volume": "1740400",
          "Adj_Close": "60.131768"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-19",
          "Open": "62.549999",
          "High": "62.59",
          "Low": "62.02",
          "Close": "62.200001",
          "Volume": "2756500",
          "Adj_Close": "60.481824"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-18",
          "Open": "61.900002",
          "High": "62.41",
          "Low": "61.790001",
          "Close": "62.32",
          "Volume": "1881200",
          "Adj_Close": "60.598508"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-17",
          "Open": "61.73",
          "High": "62.00",
          "Low": "61.580002",
          "Close": "61.75",
          "Volume": "1638900",
          "Adj_Close": "60.044254"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-16",
          "Open": "61.349998",
          "High": "61.860001",
          "Low": "61.290001",
          "Close": "61.709999",
          "Volume": "1617000",
          "Adj_Close": "60.005358"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-15",
          "Open": "61.150002",
          "High": "61.869999",
          "Low": "61.09",
          "Close": "61.619999",
          "Volume": "2063000",
          "Adj_Close": "59.917844"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-12",
          "Open": "61.080002",
          "High": "61.27",
          "Low": "60.759998",
          "Close": "61.00",
          "Volume": "2215700",
          "Adj_Close": "59.314972"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-11",
          "Open": "60.799999",
          "High": "61.240002",
          "Low": "60.779999",
          "Close": "61.209999",
          "Volume": "1764800",
          "Adj_Close": "59.51917"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-10",
          "Open": "61.060001",
          "High": "61.150002",
          "Low": "60.790001",
          "Close": "60.889999",
          "Volume": "1475800",
          "Adj_Close": "59.20801"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-09",
          "Open": "61.290001",
          "High": "61.360001",
          "Low": "60.73",
          "Close": "60.84",
          "Volume": "1757600",
          "Adj_Close": "59.159392"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-08",
          "Open": "61.84",
          "High": "61.84",
          "Low": "61.200001",
          "Close": "61.389999",
          "Volume": "1203700",
          "Adj_Close": "59.694198"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-05",
          "Open": "61.389999",
          "High": "61.470001",
          "Low": "61.099998",
          "Close": "61.349998",
          "Volume": "1871800",
          "Adj_Close": "59.655302"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-04",
          "Open": "61.669998",
          "High": "61.869999",
          "Low": "61.32",
          "Close": "61.369999",
          "Volume": "1563800",
          "Adj_Close": "59.67475"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-03",
          "Open": "62.09",
          "High": "62.09",
          "Low": "61.610001",
          "Close": "61.639999",
          "Volume": "1479400",
          "Adj_Close": "59.937292"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-09-02",
          "Open": "61.73",
          "High": "61.970001",
          "Low": "61.52",
          "Close": "61.830002",
          "Volume": "1827100",
          "Adj_Close": "60.122046"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-29",
          "Open": "61.259998",
          "High": "61.50",
          "Low": "61.060001",
          "Close": "61.490002",
          "Volume": "1934700",
          "Adj_Close": "59.791438"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-28",
          "Open": "61.330002",
          "High": "61.540001",
          "Low": "61.130001",
          "Close": "61.150002",
          "Volume": "1847100",
          "Adj_Close": "59.46083"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-27",
          "Open": "61.599998",
          "High": "61.68",
          "Low": "61.419998",
          "Close": "61.529999",
          "Volume": "1666500",
          "Adj_Close": "59.83033"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-26",
          "Open": "61.880001",
          "High": "62.09",
          "Low": "61.740002",
          "Close": "61.860001",
          "Volume": "1876400",
          "Adj_Close": "59.87895"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-25",
          "Open": "61.52",
          "High": "62.009998",
          "Low": "61.380001",
          "Close": "61.91",
          "Volume": "1893800",
          "Adj_Close": "59.927348"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-22",
          "Open": "61.27",
          "High": "61.470001",
          "Low": "61.09",
          "Close": "61.220001",
          "Volume": "1978400",
          "Adj_Close": "59.259447"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-21",
          "Open": "61.400002",
          "High": "61.560001",
          "Low": "61.099998",
          "Close": "61.509998",
          "Volume": "2367600",
          "Adj_Close": "59.540157"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-20",
          "Open": "61.119999",
          "High": "61.439999",
          "Low": "60.91",
          "Close": "61.400002",
          "Volume": "1449600",
          "Adj_Close": "59.433682"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-19",
          "Open": "61.220001",
          "High": "61.290001",
          "Low": "61.049999",
          "Close": "61.09",
          "Volume": "1624900",
          "Adj_Close": "59.133609"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-18",
          "Open": "60.970001",
          "High": "61.299999",
          "Low": "60.889999",
          "Close": "61.279999",
          "Volume": "2058300",
          "Adj_Close": "59.317523"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-15",
          "Open": "60.950001",
          "High": "61.119999",
          "Low": "60.380001",
          "Close": "60.689999",
          "Volume": "2418600",
          "Adj_Close": "58.746417"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-14",
          "Open": "60.189999",
          "High": "60.790001",
          "Low": "60.189999",
          "Close": "60.779999",
          "Volume": "2512900",
          "Adj_Close": "58.833535"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-13",
          "Open": "60.25",
          "High": "60.470001",
          "Low": "60.029999",
          "Close": "60.110001",
          "Volume": "2574500",
          "Adj_Close": "58.184993"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-12",
          "Open": "59.599998",
          "High": "60.189999",
          "Low": "59.580002",
          "Close": "60.150002",
          "Volume": "3453200",
          "Adj_Close": "58.223713"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-11",
          "Open": "59.810001",
          "High": "59.869999",
          "Low": "59.400002",
          "Close": "59.560001",
          "Volume": "2272600",
          "Adj_Close": "57.652608"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-08",
          "Open": "59.549999",
          "High": "59.700001",
          "Low": "58.990002",
          "Close": "59.669998",
          "Volume": "2628400",
          "Adj_Close": "57.759082"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-07",
          "Open": "59.709999",
          "High": "59.970001",
          "Low": "59.130001",
          "Close": "59.310001",
          "Volume": "3130400",
          "Adj_Close": "57.410614"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-06",
          "Open": "58.720001",
          "High": "59.59",
          "Low": "58.720001",
          "Close": "59.580002",
          "Volume": "2474000",
          "Adj_Close": "57.671968"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-05",
          "Open": "58.919998",
          "High": "59.279999",
          "Low": "58.73",
          "Close": "58.849998",
          "Volume": "3138900",
          "Adj_Close": "56.965343"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-04",
          "Open": "58.349998",
          "High": "59.00",
          "Low": "58.119999",
          "Close": "58.959999",
          "Volume": "5669000",
          "Adj_Close": "57.07182"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-08-01",
          "Open": "58.50",
          "High": "58.73",
          "Low": "57.75",
          "Close": "58.139999",
          "Volume": "3260300",
          "Adj_Close": "56.278081"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-31",
          "Open": "58.189999",
          "High": "59.889999",
          "Low": "57.200001",
          "Close": "58.450001",
          "Volume": "6258600",
          "Adj_Close": "56.578155"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-30",
          "Open": "57.099998",
          "High": "57.18",
          "Low": "56.630001",
          "Close": "56.889999",
          "Volume": "3104200",
          "Adj_Close": "55.068112"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-29",
          "Open": "57.23",
          "High": "57.790001",
          "Low": "57.029999",
          "Close": "57.049999",
          "Volume": "3314600",
          "Adj_Close": "55.222988"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-28",
          "Open": "57.919998",
          "High": "57.959999",
          "Low": "57.360001",
          "Close": "57.939999",
          "Volume": "2130600",
          "Adj_Close": "56.084485"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-25",
          "Open": "58.25",
          "High": "58.34",
          "Low": "57.880001",
          "Close": "57.939999",
          "Volume": "1193000",
          "Adj_Close": "56.084485"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-24",
          "Open": "58.25",
          "High": "58.57",
          "Low": "58.130001",
          "Close": "58.490002",
          "Volume": "1138100",
          "Adj_Close": "56.616875"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-23",
          "Open": "58.130001",
          "High": "58.490002",
          "Low": "58.119999",
          "Close": "58.330002",
          "Volume": "1260500",
          "Adj_Close": "56.461999"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-22",
          "Open": "57.799999",
          "High": "58.18",
          "Low": "57.650002",
          "Close": "58.09",
          "Volume": "1881900",
          "Adj_Close": "56.229683"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-21",
          "Open": "57.830002",
          "High": "58.130001",
          "Low": "57.57",
          "Close": "58.009998",
          "Volume": "1493900",
          "Adj_Close": "56.152243"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-18",
          "Open": "57.860001",
          "High": "58.099998",
          "Low": "57.52",
          "Close": "58.060001",
          "Volume": "2016100",
          "Adj_Close": "56.200645"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-17",
          "Open": "58.029999",
          "High": "58.599998",
          "Low": "57.810001",
          "Close": "57.82",
          "Volume": "1970400",
          "Adj_Close": "55.968329"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-16",
          "Open": "58.560001",
          "High": "58.669998",
          "Low": "58.110001",
          "Close": "58.16",
          "Volume": "1901700",
          "Adj_Close": "56.297441"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-15",
          "Open": "58.459999",
          "High": "58.650002",
          "Low": "58.310001",
          "Close": "58.459999",
          "Volume": "2049100",
          "Adj_Close": "56.587833"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-14",
          "Open": "58.50",
          "High": "58.68",
          "Low": "58.09",
          "Close": "58.279999",
          "Volume": "2224600",
          "Adj_Close": "56.413597"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-11",
          "Open": "57.939999",
          "High": "58.25",
          "Low": "57.759998",
          "Close": "58.200001",
          "Volume": "1422800",
          "Adj_Close": "56.336161"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-10",
          "Open": "58.07",
          "High": "58.290001",
          "Low": "57.689999",
          "Close": "58.07",
          "Volume": "2701900",
          "Adj_Close": "56.210323"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-09",
          "Open": "58.380001",
          "High": "58.700001",
          "Low": "58.18",
          "Close": "58.48",
          "Volume": "2808700",
          "Adj_Close": "56.607193"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-08",
          "Open": "58.48",
          "High": "58.720001",
          "Low": "58.380001",
          "Close": "58.48",
          "Volume": "2882000",
          "Adj_Close": "56.607193"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-07",
          "Open": "58.720001",
          "High": "58.810001",
          "Low": "58.400002",
          "Close": "58.529999",
          "Volume": "2763600",
          "Adj_Close": "56.655591"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-03",
          "Open": "59.220001",
          "High": "59.400002",
          "Low": "58.93",
          "Close": "58.970001",
          "Volume": "1530200",
          "Adj_Close": "57.081502"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-02",
          "Open": "59.080002",
          "High": "59.490002",
          "Low": "58.889999",
          "Close": "59.00",
          "Volume": "1590200",
          "Adj_Close": "57.11054"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-07-01",
          "Open": "58.93",
          "High": "59.290001",
          "Low": "58.919998",
          "Close": "59.119999",
          "Volume": "1789600",
          "Adj_Close": "57.226696"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-30",
          "Open": "58.59",
          "High": "59.18",
          "Low": "58.52",
          "Close": "58.720001",
          "Volume": "1800700",
          "Adj_Close": "56.839508"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-27",
          "Open": "58.59",
          "High": "58.759998",
          "Low": "58.439999",
          "Close": "58.689999",
          "Volume": "2193600",
          "Adj_Close": "56.810467"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-26",
          "Open": "58.73",
          "High": "58.810001",
          "Low": "58.41",
          "Close": "58.549999",
          "Volume": "1734400",
          "Adj_Close": "56.674951"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-25",
          "Open": "58.84",
          "High": "58.990002",
          "Low": "58.669998",
          "Close": "58.709999",
          "Volume": "1903800",
          "Adj_Close": "56.829827"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-24",
          "Open": "58.82",
          "High": "59.290001",
          "Low": "58.77",
          "Close": "58.919998",
          "Volume": "1959500",
          "Adj_Close": "57.0331"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-23",
          "Open": "58.889999",
          "High": "59.50",
          "Low": "58.889999",
          "Close": "59.200001",
          "Volume": "2701500",
          "Adj_Close": "57.304136"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-20",
          "Open": "58.900002",
          "High": "58.959999",
          "Low": "58.52",
          "Close": "58.82",
          "Volume": "5046800",
          "Adj_Close": "56.936304"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-19",
          "Open": "59.029999",
          "High": "59.040001",
          "Low": "58.48",
          "Close": "58.82",
          "Volume": "3662800",
          "Adj_Close": "56.936304"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-18",
          "Open": "59.099998",
          "High": "59.459999",
          "Low": "58.889999",
          "Close": "59.16",
          "Volume": "2970600",
          "Adj_Close": "57.265416"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-17",
          "Open": "58.75",
          "High": "59.290001",
          "Low": "58.580002",
          "Close": "59.209999",
          "Volume": "1919500",
          "Adj_Close": "57.313814"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-16",
          "Open": "58.93",
          "High": "59.02",
          "Low": "58.59",
          "Close": "58.810001",
          "Volume": "1672400",
          "Adj_Close": "56.926626"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-13",
          "Open": "58.869999",
          "High": "59.07",
          "Low": "58.709999",
          "Close": "59.009998",
          "Volume": "1700100",
          "Adj_Close": "57.120218"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-12",
          "Open": "59.139999",
          "High": "59.259998",
          "Low": "58.580002",
          "Close": "58.709999",
          "Volume": "2087700",
          "Adj_Close": "56.829827"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-11",
          "Open": "59.23",
          "High": "59.439999",
          "Low": "58.810001",
          "Close": "59.080002",
          "Volume": "1597600",
          "Adj_Close": "57.18798"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-10",
          "Open": "59.07",
          "High": "59.400002",
          "Low": "59.07",
          "Close": "59.18",
          "Volume": "1857500",
          "Adj_Close": "57.284776"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-09",
          "Open": "59.189999",
          "High": "59.360001",
          "Low": "59.049999",
          "Close": "59.16",
          "Volume": "1516700",
          "Adj_Close": "57.265416"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-06",
          "Open": "59.209999",
          "High": "59.68",
          "Low": "59.099998",
          "Close": "59.32",
          "Volume": "1458400",
          "Adj_Close": "57.420292"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-05",
          "Open": "58.599998",
          "High": "59.18",
          "Low": "58.599998",
          "Close": "59.110001",
          "Volume": "2443700",
          "Adj_Close": "57.217018"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-04",
          "Open": "58.34",
          "High": "58.759998",
          "Low": "58.34",
          "Close": "58.619999",
          "Volume": "1678600",
          "Adj_Close": "56.742709"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-03",
          "Open": "58.43",
          "High": "58.650002",
          "Low": "58.279999",
          "Close": "58.580002",
          "Volume": "1767100",
          "Adj_Close": "56.703992"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-06-02",
          "Open": "58.470001",
          "High": "58.880001",
          "Low": "58.470001",
          "Close": "58.669998",
          "Volume": "1585900",
          "Adj_Close": "56.791107"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-30",
          "Open": "58.259998",
          "High": "58.540001",
          "Low": "58.09",
          "Close": "58.259998",
          "Volume": "3304000",
          "Adj_Close": "56.394237"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-29",
          "Open": "58.259998",
          "High": "58.380001",
          "Low": "58.040001",
          "Close": "58.299999",
          "Volume": "1240200",
          "Adj_Close": "56.432957"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-28",
          "Open": "58.220001",
          "High": "58.41",
          "Low": "58.07",
          "Close": "58.18",
          "Volume": "1738900",
          "Adj_Close": "56.316801"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-27",
          "Open": "58.439999",
          "High": "58.669998",
          "Low": "58.41",
          "Close": "58.459999",
          "Volume": "1575600",
          "Adj_Close": "56.316799"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-23",
          "Open": "58.330002",
          "High": "58.599998",
          "Low": "58.18",
          "Close": "58.380001",
          "Volume": "1418700",
          "Adj_Close": "56.239734"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-22",
          "Open": "58.400002",
          "High": "58.52",
          "Low": "58.259998",
          "Close": "58.349998",
          "Volume": "1798000",
          "Adj_Close": "56.210831"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-21",
          "Open": "58.330002",
          "High": "58.689999",
          "Low": "58.209999",
          "Close": "58.419998",
          "Volume": "1520400",
          "Adj_Close": "56.278264"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-20",
          "Open": "57.98",
          "High": "58.369999",
          "Low": "57.830002",
          "Close": "58.080002",
          "Volume": "2255700",
          "Adj_Close": "55.950733"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-19",
          "Open": "57.68",
          "High": "58.240002",
          "Low": "57.59",
          "Close": "58.200001",
          "Volume": "2085500",
          "Adj_Close": "56.066332"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-16",
          "Open": "57.529999",
          "High": "57.900002",
          "Low": "57.119999",
          "Close": "57.740002",
          "Volume": "3971100",
          "Adj_Close": "55.623197"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-15",
          "Open": "57.869999",
          "High": "57.91",
          "Low": "57.380001",
          "Close": "57.560001",
          "Volume": "3390700",
          "Adj_Close": "55.449796"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-14",
          "Open": "58.380001",
          "High": "58.529999",
          "Low": "58.00",
          "Close": "58.09",
          "Volume": "2775600",
          "Adj_Close": "55.960364"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-13",
          "Open": "58.389999",
          "High": "58.639999",
          "Low": "58.279999",
          "Close": "58.400002",
          "Volume": "2153300",
          "Adj_Close": "56.259001"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-12",
          "Open": "58.299999",
          "High": "58.439999",
          "Low": "58.099998",
          "Close": "58.349998",
          "Volume": "1800300",
          "Adj_Close": "56.210831"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-09",
          "Open": "58.060001",
          "High": "58.299999",
          "Low": "57.720001",
          "Close": "58.130001",
          "Volume": "2561500",
          "Adj_Close": "55.998899"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-08",
          "Open": "57.689999",
          "High": "58.32",
          "Low": "57.66",
          "Close": "57.98",
          "Volume": "3403400",
          "Adj_Close": "55.854397"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-07",
          "Open": "57.029999",
          "High": "57.970001",
          "Low": "56.98",
          "Close": "57.82",
          "Volume": "3056500",
          "Adj_Close": "55.700262"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-06",
          "Open": "56.91",
          "High": "57.119999",
          "Low": "56.43",
          "Close": "56.57",
          "Volume": "2982600",
          "Adj_Close": "54.496089"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-05",
          "Open": "56.959999",
          "High": "57.200001",
          "Low": "56.560001",
          "Close": "57.119999",
          "Volume": "1548600",
          "Adj_Close": "55.025924"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-02",
          "Open": "57.299999",
          "High": "57.639999",
          "Low": "57.099998",
          "Close": "57.18",
          "Volume": "1898500",
          "Adj_Close": "55.083726"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-05-01",
          "Open": "56.93",
          "High": "57.50",
          "Low": "56.790001",
          "Close": "57.290001",
          "Volume": "2177500",
          "Adj_Close": "55.189694"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-30",
          "Open": "56.849998",
          "High": "57.080002",
          "Low": "56.439999",
          "Close": "56.950001",
          "Volume": "2438900",
          "Adj_Close": "54.862159"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-29",
          "Open": "57.02",
          "High": "57.34",
          "Low": "56.84",
          "Close": "56.889999",
          "Volume": "1820000",
          "Adj_Close": "54.804357"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-28",
          "Open": "56.369999",
          "High": "57.049999",
          "Low": "56.290001",
          "Close": "56.84",
          "Volume": "3271500",
          "Adj_Close": "54.756191"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-25",
          "Open": "56.630001",
          "High": "56.700001",
          "Low": "56.080002",
          "Close": "56.110001",
          "Volume": "2208400",
          "Adj_Close": "54.052954"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-24",
          "Open": "56.369999",
          "High": "56.470001",
          "Low": "56.049999",
          "Close": "56.400002",
          "Volume": "1885600",
          "Adj_Close": "54.332323"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-23",
          "Open": "56.130001",
          "High": "56.34",
          "Low": "56.02",
          "Close": "56.189999",
          "Volume": "1663500",
          "Adj_Close": "54.130019"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-22",
          "Open": "55.75",
          "High": "56.150002",
          "Low": "55.599998",
          "Close": "56.02",
          "Volume": "1983000",
          "Adj_Close": "53.966253"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-21",
          "Open": "54.93",
          "High": "56.060001",
          "Low": "54.93",
          "Close": "55.77",
          "Volume": "2084000",
          "Adj_Close": "53.725418"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-17",
          "Open": "55.790001",
          "High": "56.27",
          "Low": "55.669998",
          "Close": "55.77",
          "Volume": "3150400",
          "Adj_Close": "53.725418"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-16",
          "Open": "56.060001",
          "High": "56.200001",
          "Low": "55.77",
          "Close": "55.990002",
          "Volume": "2705500",
          "Adj_Close": "53.937354"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-15",
          "Open": "55.369999",
          "High": "55.720001",
          "Low": "55.060001",
          "Close": "55.560001",
          "Volume": "3503000",
          "Adj_Close": "53.523118"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-14",
          "Open": "55.759998",
          "High": "55.82",
          "Low": "54.810001",
          "Close": "55.200001",
          "Volume": "3510600",
          "Adj_Close": "53.176315"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-11",
          "Open": "55.25",
          "High": "55.50",
          "Low": "54.950001",
          "Close": "55.290001",
          "Volume": "2678300",
          "Adj_Close": "53.263016"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-10",
          "Open": "56.110001",
          "High": "56.43",
          "Low": "55.50",
          "Close": "55.509998",
          "Volume": "3705600",
          "Adj_Close": "53.474948"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-09",
          "Open": "56.119999",
          "High": "56.23",
          "Low": "55.66",
          "Close": "56.130001",
          "Volume": "2186700",
          "Adj_Close": "54.072221"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-08",
          "Open": "55.68",
          "High": "56.119999",
          "Low": "55.50",
          "Close": "55.889999",
          "Volume": "2101000",
          "Adj_Close": "53.841018"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-07",
          "Open": "56.349998",
          "High": "56.48",
          "Low": "55.709999",
          "Close": "55.75",
          "Volume": "2625100",
          "Adj_Close": "53.706151"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-04",
          "Open": "56.889999",
          "High": "57.279999",
          "Low": "56.400002",
          "Close": "56.41",
          "Volume": "2615800",
          "Adj_Close": "54.341955"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-03",
          "Open": "56.48",
          "High": "56.689999",
          "Low": "56.27",
          "Close": "56.59",
          "Volume": "2207000",
          "Adj_Close": "54.515356"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-02",
          "Open": "55.73",
          "High": "56.650002",
          "Low": "55.639999",
          "Close": "56.150002",
          "Volume": "2328500",
          "Adj_Close": "54.091488"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-04-01",
          "Open": "56.830002",
          "High": "56.84",
          "Low": "56.119999",
          "Close": "56.490002",
          "Volume": "2229000",
          "Adj_Close": "54.419023"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-31",
          "Open": "56.200001",
          "High": "56.650002",
          "Low": "56.119999",
          "Close": "56.580002",
          "Volume": "2123500",
          "Adj_Close": "54.505724"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-28",
          "Open": "55.869999",
          "High": "56.060001",
          "Low": "55.509998",
          "Close": "55.799999",
          "Volume": "1468000",
          "Adj_Close": "53.754317"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-27",
          "Open": "55.599998",
          "High": "55.799999",
          "Low": "55.450001",
          "Close": "55.639999",
          "Volume": "1918800",
          "Adj_Close": "53.600183"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-26",
          "Open": "56.330002",
          "High": "56.369999",
          "Low": "55.689999",
          "Close": "55.700001",
          "Volume": "1991900",
          "Adj_Close": "53.657985"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-25",
          "Open": "56.419998",
          "High": "56.48",
          "Low": "55.630001",
          "Close": "56.00",
          "Volume": "3152100",
          "Adj_Close": "53.946986"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-24",
          "Open": "56.330002",
          "High": "56.599998",
          "Low": "55.990002",
          "Close": "56.18",
          "Volume": "2366200",
          "Adj_Close": "54.120387"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-21",
          "Open": "55.860001",
          "High": "56.41",
          "Low": "55.700001",
          "Close": "56.060001",
          "Volume": "3903200",
          "Adj_Close": "54.004787"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-20",
          "Open": "55.07",
          "High": "55.790001",
          "Low": "55.009998",
          "Close": "55.560001",
          "Volume": "2539200",
          "Adj_Close": "53.523118"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-19",
          "Open": "55.540001",
          "High": "55.669998",
          "Low": "55.02",
          "Close": "55.310001",
          "Volume": "3238800",
          "Adj_Close": "53.282283"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-18",
          "Open": "55.650002",
          "High": "55.709999",
          "Low": "55.380001",
          "Close": "55.470001",
          "Volume": "2038300",
          "Adj_Close": "53.436417"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-17",
          "Open": "55.52",
          "High": "55.68",
          "Low": "55.330002",
          "Close": "55.52",
          "Volume": "1338000",
          "Adj_Close": "53.484583"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-14",
          "Open": "55.060001",
          "High": "55.380001",
          "Low": "55.060001",
          "Close": "55.130001",
          "Volume": "2695300",
          "Adj_Close": "53.108882"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-13",
          "Open": "55.630001",
          "High": "55.709999",
          "Low": "55.07",
          "Close": "55.110001",
          "Volume": "2762500",
          "Adj_Close": "53.089615"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-12",
          "Open": "55.380001",
          "High": "55.66",
          "Low": "55.130001",
          "Close": "55.490002",
          "Volume": "2210400",
          "Adj_Close": "53.455684"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-11",
          "Open": "55.900002",
          "High": "55.93",
          "Low": "55.50",
          "Close": "55.610001",
          "Volume": "2361500",
          "Adj_Close": "53.571284"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-10",
          "Open": "55.68",
          "High": "55.810001",
          "Low": "55.369999",
          "Close": "55.799999",
          "Volume": "1956900",
          "Adj_Close": "53.754317"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-07",
          "Open": "55.419998",
          "High": "55.73",
          "Low": "55.18",
          "Close": "55.709999",
          "Volume": "2471700",
          "Adj_Close": "53.667617"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-06",
          "Open": "55.200001",
          "High": "55.48",
          "Low": "54.959999",
          "Close": "55.169998",
          "Volume": "2414200",
          "Adj_Close": "53.147413"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-05",
          "Open": "54.799999",
          "High": "55.099998",
          "Low": "54.560001",
          "Close": "55.07",
          "Volume": "2218900",
          "Adj_Close": "53.05108"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-04",
          "Open": "54.68",
          "High": "54.900002",
          "Low": "54.369999",
          "Close": "54.849998",
          "Volume": "3531400",
          "Adj_Close": "52.839144"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-03-03",
          "Open": "53.709999",
          "High": "54.32",
          "Low": "53.599998",
          "Close": "54.049999",
          "Volume": "3281600",
          "Adj_Close": "52.068474"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-28",
          "Open": "54.27",
          "High": "54.799999",
          "Low": "54.009998",
          "Close": "54.259998",
          "Volume": "3521100",
          "Adj_Close": "52.270774"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-27",
          "Open": "53.57",
          "High": "54.240002",
          "Low": "53.34",
          "Close": "54.23",
          "Volume": "2373200",
          "Adj_Close": "52.241875"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-26",
          "Open": "53.779999",
          "High": "54.049999",
          "Low": "53.470001",
          "Close": "53.849998",
          "Volume": "2025700",
          "Adj_Close": "51.606071"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-25",
          "Open": "53.77",
          "High": "53.959999",
          "Low": "53.509998",
          "Close": "53.650002",
          "Volume": "2714500",
          "Adj_Close": "51.414408"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-24",
          "Open": "53.59",
          "High": "54.299999",
          "Low": "53.25",
          "Close": "53.860001",
          "Volume": "3995900",
          "Adj_Close": "51.615656"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-21",
          "Open": "53.400002",
          "High": "54.009998",
          "Low": "53.209999",
          "Close": "53.860001",
          "Volume": "3665700",
          "Adj_Close": "51.615656"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-20",
          "Open": "53.220001",
          "High": "53.650002",
          "Low": "52.43",
          "Close": "53.470001",
          "Volume": "4347800",
          "Adj_Close": "51.241908"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-19",
          "Open": "52.00",
          "High": "52.220001",
          "Low": "51.639999",
          "Close": "51.790001",
          "Volume": "3504900",
          "Adj_Close": "49.631913"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-18",
          "Open": "53.09",
          "High": "53.169998",
          "Low": "52.169998",
          "Close": "52.18",
          "Volume": "3507200",
          "Adj_Close": "50.005662"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-14",
          "Open": "52.66",
          "High": "53.060001",
          "Low": "52.389999",
          "Close": "52.959999",
          "Volume": "2183400",
          "Adj_Close": "50.753158"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-13",
          "Open": "52.25",
          "High": "52.709999",
          "Low": "52.060001",
          "Close": "52.700001",
          "Volume": "1671300",
          "Adj_Close": "50.503994"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-12",
          "Open": "52.610001",
          "High": "52.75",
          "Low": "52.279999",
          "Close": "52.529999",
          "Volume": "3991600",
          "Adj_Close": "50.341076"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-11",
          "Open": "51.77",
          "High": "53.02",
          "Low": "51.68",
          "Close": "52.810001",
          "Volume": "3150500",
          "Adj_Close": "50.60941"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-10",
          "Open": "52.619999",
          "High": "52.619999",
          "Low": "51.50",
          "Close": "52.09",
          "Volume": "4023500",
          "Adj_Close": "49.919412"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-07",
          "Open": "52.630001",
          "High": "52.82",
          "Low": "51.91",
          "Close": "52.759998",
          "Volume": "4101000",
          "Adj_Close": "50.561491"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-06",
          "Open": "50.869999",
          "High": "52.389999",
          "Low": "50.240002",
          "Close": "52.360001",
          "Volume": "6487400",
          "Adj_Close": "50.178161"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-05",
          "Open": "49.779999",
          "High": "50.00",
          "Low": "49.18",
          "Close": "49.549999",
          "Volume": "3798600",
          "Adj_Close": "47.485253"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-04",
          "Open": "50.189999",
          "High": "50.380001",
          "Low": "49.68",
          "Close": "49.900002",
          "Volume": "3540400",
          "Adj_Close": "47.82067"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-02-03",
          "Open": "51.200001",
          "High": "51.200001",
          "Low": "49.869999",
          "Close": "49.959999",
          "Volume": "3147400",
          "Adj_Close": "47.878168"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-31",
          "Open": "51.560001",
          "High": "51.849998",
          "Low": "51.16",
          "Close": "51.200001",
          "Volume": "3877000",
          "Adj_Close": "49.066499"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-30",
          "Open": "52.049999",
          "High": "52.369999",
          "Low": "51.84",
          "Close": "52.299999",
          "Volume": "1801700",
          "Adj_Close": "50.12066"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-29",
          "Open": "51.27",
          "High": "52.139999",
          "Low": "51.27",
          "Close": "51.740002",
          "Volume": "3602000",
          "Adj_Close": "49.583998"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-28",
          "Open": "50.860001",
          "High": "51.889999",
          "Low": "50.799999",
          "Close": "51.77",
          "Volume": "3156000",
          "Adj_Close": "49.612746"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-27",
          "Open": "50.619999",
          "High": "51.110001",
          "Low": "50.349998",
          "Close": "50.700001",
          "Volume": "3864200",
          "Adj_Close": "48.587334"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-24",
          "Open": "51.220001",
          "High": "51.650002",
          "Low": "50.619999",
          "Close": "50.619999",
          "Volume": "3359800",
          "Adj_Close": "48.510665"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-23",
          "Open": "52.009998",
          "High": "52.18",
          "Low": "51.330002",
          "Close": "51.639999",
          "Volume": "2879600",
          "Adj_Close": "49.488162"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-22",
          "Open": "52.75",
          "High": "52.919998",
          "Low": "51.990002",
          "Close": "52.41",
          "Volume": "3169800",
          "Adj_Close": "50.226077"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-21",
          "Open": "53.279999",
          "High": "53.419998",
          "Low": "52.330002",
          "Close": "52.68",
          "Volume": "2973900",
          "Adj_Close": "50.484827"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-17",
          "Open": "53.240002",
          "High": "53.290001",
          "Low": "52.849998",
          "Close": "52.900002",
          "Volume": "1847000",
          "Adj_Close": "50.69566"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-16",
          "Open": "53.82",
          "High": "53.889999",
          "Low": "53.080002",
          "Close": "53.18",
          "Volume": "3703800",
          "Adj_Close": "50.963992"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-15",
          "Open": "54.009998",
          "High": "54.080002",
          "Low": "53.529999",
          "Close": "53.889999",
          "Volume": "2235700",
          "Adj_Close": "51.644405"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-14",
          "Open": "53.59",
          "High": "54.040001",
          "Low": "53.459999",
          "Close": "53.990002",
          "Volume": "2132800",
          "Adj_Close": "51.74024"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-13",
          "Open": "53.939999",
          "High": "54.18",
          "Low": "53.439999",
          "Close": "53.459999",
          "Volume": "2964300",
          "Adj_Close": "51.232323"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-10",
          "Open": "53.75",
          "High": "54.34",
          "Low": "53.52",
          "Close": "54.09",
          "Volume": "2421800",
          "Adj_Close": "51.836072"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-09",
          "Open": "53.619999",
          "High": "54.00",
          "Low": "53.549999",
          "Close": "53.830002",
          "Volume": "1991600",
          "Adj_Close": "51.586908"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-08",
          "Open": "53.240002",
          "High": "53.709999",
          "Low": "53.049999",
          "Close": "53.52",
          "Volume": "3075400",
          "Adj_Close": "51.289824"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-07",
          "Open": "53.349998",
          "High": "53.48",
          "Low": "53.139999",
          "Close": "53.349998",
          "Volume": "1882600",
          "Adj_Close": "51.126906"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-06",
          "Open": "53.540001",
          "High": "53.68",
          "Low": "52.830002",
          "Close": "53.119999",
          "Volume": "2696000",
          "Adj_Close": "50.90649"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-03",
          "Open": "53.650002",
          "High": "53.799999",
          "Low": "53.110001",
          "Close": "53.330002",
          "Volume": "1570200",
          "Adj_Close": "51.107743"
        },
        {
          "Symbol": "ALL",
          "Date": "2014-01-02",
          "Open": "54.09",
          "High": "54.450001",
          "Low": "53.50",
          "Close": "53.549999",
          "Volume": "1909100",
          "Adj_Close": "51.318573"
        }
      ]
    }
  }
},
{"query":{"count":252,"created":"2016-03-30T21:50:00Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"2","execution-time":"2","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"7","execution-stop-time":"22","execution-time":"15","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=GOOG"},{"execution-start-time":"28","execution-stop-time":"29","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=GOOG"}],"publiclyCallable":"true","cache":[{"execution-start-time":"5","execution-stop-time":"6","execution-time":"1","method":"GET","type":"MEMCACHED","content":"d2de6a4d39c322a5def4a00912219e82"},{"execution-start-time":"26","execution-stop-time":"27","execution-time":"1","method":"GET","type":"MEMCACHED","content":"058cbf4a8417d1cc0e056ef814ade503"}],"query":[{"execution-start-time":"6","execution-stop-time":"26","execution-time":"20","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=GOOG]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"27","execution-stop-time":"34","execution-time":"7","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=GOOG]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"1063","execution-time":"1059","instructions-used":"24197618","table-name":"yahoo.finance.historicaldata"},"user-time":"1069","service-time":"20","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"GOOG","Date":"2014-12-31","Open":"531.252429","High":"532.602384","Low":"525.802363","Close":"526.402397","Volume":"1368200","Adj_Close":"526.402397"},{"Symbol":"GOOG","Date":"2014-12-30","Open":"528.092396","High":"531.152424","Low":"527.132366","Close":"530.422394","Volume":"876200","Adj_Close":"530.422394"},{"Symbol":"GOOG","Date":"2014-12-29","Open":"532.192385","High":"535.482414","Low":"530.013375","Close":"530.332426","Volume":"2278500","Adj_Close":"530.332426"},{"Symbol":"GOOG","Date":"2014-12-26","Open":"528.772422","High":"534.252417","Low":"527.312364","Close":"534.032392","Volume":"1040500","Adj_Close":"534.032392"},{"Symbol":"GOOG","Date":"2014-12-24","Open":"530.512424","High":"531.761394","Low":"527.022384","Close":"528.772422","Volume":"705900","Adj_Close":"528.772422"},{"Symbol":"GOOG","Date":"2014-12-23","Open":"527.00237","High":"534.56241","Low":"526.292354","Close":"530.592416","Volume":"2197600","Adj_Close":"530.592416"},{"Symbol":"GOOG","Date":"2014-12-22","Open":"516.082347","High":"526.462376","Low":"516.082347","Close":"524.872383","Volume":"2723700","Adj_Close":"524.872383"},{"Symbol":"GOOG","Date":"2014-12-19","Open":"511.512318","High":"517.722342","Low":"506.91328","Close":"516.352313","Volume":"3690200","Adj_Close":"516.352313"},{"Symbol":"GOOG","Date":"2014-12-18","Open":"512.952333","High":"513.872306","Low":"504.70229","Close":"511.102319","Volume":"2926700","Adj_Close":"511.102319"},{"Symbol":"GOOG","Date":"2014-12-17","Open":"497.002248","High":"507.002299","Low":"496.812244","Close":"504.892295","Volume":"2883100","Adj_Close":"504.892295"},{"Symbol":"GOOG","Date":"2014-12-16","Open":"511.562321","High":"513.052308","Low":"489.00222","Close":"495.392242","Volume":"3964200","Adj_Close":"495.392242"},{"Symbol":"GOOG","Date":"2014-12-15","Open":"522.742396","High":"523.102392","Low":"513.272333","Close":"513.802351","Volume":"2813400","Adj_Close":"513.802351"},{"Symbol":"GOOG","Date":"2014-12-12","Open":"523.512391","High":"528.502395","Low":"518.662359","Close":"518.662359","Volume":"1994500","Adj_Close":"518.662359"},{"Symbol":"GOOG","Date":"2014-12-11","Open":"527.802416","High":"533.922411","Low":"527.102376","Close":"528.34241","Volume":"1610800","Adj_Close":"528.34241"},{"Symbol":"GOOG","Date":"2014-12-10","Open":"533.082399","High":"536.332401","Low":"525.562386","Close":"526.062353","Volume":"1712200","Adj_Close":"526.062353"},{"Symbol":"GOOG","Date":"2014-12-09","Open":"522.142362","High":"534.192438","Low":"520.502366","Close":"533.37244","Volume":"1871300","Adj_Close":"533.37244"},{"Symbol":"GOOG","Date":"2014-12-08","Open":"527.132366","High":"531.002415","Low":"523.792395","Close":"526.982357","Volume":"2329300","Adj_Close":"526.982357"},{"Symbol":"GOOG","Date":"2014-12-05","Open":"531.002415","High":"532.892425","Low":"524.282386","Close":"525.262369","Volume":"2565600","Adj_Close":"525.262369"},{"Symbol":"GOOG","Date":"2014-12-04","Open":"531.1624","High":"537.342434","Low":"528.592363","Close":"537.312445","Volume":"1392100","Adj_Close":"537.312445"},{"Symbol":"GOOG","Date":"2014-12-03","Open":"531.442404","High":"535.998416","Low":"529.262414","Close":"531.322384","Volume":"1277900","Adj_Close":"531.322384"},{"Symbol":"GOOG","Date":"2014-12-02","Open":"533.512412","High":"535.502427","Low":"529.802408","Close":"533.752389","Volume":"1526600","Adj_Close":"533.752389"},{"Symbol":"GOOG","Date":"2014-12-01","Open":"538.902438","High":"541.412434","Low":"531.862379","Close":"533.802391","Volume":"2115300","Adj_Close":"533.802391"},{"Symbol":"GOOG","Date":"2014-11-28","Open":"540.622426","High":"542.002431","Low":"536.602429","Close":"541.832471","Volume":"1148300","Adj_Close":"541.832471"},{"Symbol":"GOOG","Date":"2014-11-26","Open":"540.882478","High":"541.552467","Low":"537.044437","Close":"540.372473","Volume":"1522900","Adj_Close":"540.372473"},{"Symbol":"GOOG","Date":"2014-11-25","Open":"539.002444","High":"543.982471","Low":"538.60444","Close":"541.082428","Volume":"1789900","Adj_Close":"541.082428"},{"Symbol":"GOOG","Date":"2014-11-24","Open":"537.652428","High":"542.702471","Low":"535.622446","Close":"539.272471","Volume":"1706300","Adj_Close":"539.272471"},{"Symbol":"GOOG","Date":"2014-11-21","Open":"541.612446","High":"542.142464","Low":"536.562402","Close":"537.502419","Volume":"2224200","Adj_Close":"537.502419"},{"Symbol":"GOOG","Date":"2014-11-20","Open":"531.252429","High":"535.112442","Low":"531.082408","Close":"534.832438","Volume":"1563300","Adj_Close":"534.832438"},{"Symbol":"GOOG","Date":"2014-11-19","Open":"535.002399","High":"538.242425","Low":"530.082412","Close":"536.992415","Volume":"1392200","Adj_Close":"536.992415"},{"Symbol":"GOOG","Date":"2014-11-18","Open":"537.502419","High":"541.942452","Low":"534.172425","Close":"535.032449","Volume":"1962600","Adj_Close":"535.032449"},{"Symbol":"GOOG","Date":"2014-11-17","Open":"543.582448","High":"543.792436","Low":"534.063422","Close":"536.512399","Volume":"1726000","Adj_Close":"536.512399"},{"Symbol":"GOOG","Date":"2014-11-14","Open":"546.682503","High":"546.682503","Low":"542.15244","Close":"544.402446","Volume":"1289500","Adj_Close":"544.402446"},{"Symbol":"GOOG","Date":"2014-11-13","Open":"549.80251","High":"549.80251","Low":"543.482442","Close":"545.38249","Volume":"1339300","Adj_Close":"545.38249"},{"Symbol":"GOOG","Date":"2014-11-12","Open":"550.392507","High":"550.462462","Low":"545.172441","Close":"547.312465","Volume":"1129600","Adj_Close":"547.312465"},{"Symbol":"GOOG","Date":"2014-11-11","Open":"548.492459","High":"551.942473","Low":"546.302493","Close":"550.292501","Volume":"965500","Adj_Close":"550.292501"},{"Symbol":"GOOG","Date":"2014-11-10","Open":"541.462437","High":"549.592461","Low":"541.022449","Close":"547.492463","Volume":"1134600","Adj_Close":"547.492463"},{"Symbol":"GOOG","Date":"2014-11-07","Open":"546.212464","High":"546.212464","Low":"538.672437","Close":"541.012473","Volume":"1633700","Adj_Close":"541.012473"},{"Symbol":"GOOG","Date":"2014-11-06","Open":"545.502448","High":"546.887472","Low":"540.972446","Close":"542.042458","Volume":"1333200","Adj_Close":"542.042458"},{"Symbol":"GOOG","Date":"2014-11-05","Open":"556.802542","High":"556.802542","Low":"544.052487","Close":"545.922484","Volume":"2032200","Adj_Close":"545.922484"},{"Symbol":"GOOG","Date":"2014-11-04","Open":"553.002509","High":"555.502529","Low":"549.302481","Close":"554.112486","Volume":"1244200","Adj_Close":"554.112486"},{"Symbol":"GOOG","Date":"2014-11-03","Open":"555.502529","High":"557.902544","Low":"553.23251","Close":"555.222525","Volume":"1382200","Adj_Close":"555.222525"},{"Symbol":"GOOG","Date":"2014-10-31","Open":"559.352504","High":"559.572529","Low":"554.752486","Close":"559.082538","Volume":"2035000","Adj_Close":"559.082538"},{"Symbol":"GOOG","Date":"2014-10-30","Open":"548.952461","High":"552.802497","Low":"543.512432","Close":"550.312514","Volume":"1455600","Adj_Close":"550.312514"},{"Symbol":"GOOG","Date":"2014-10-29","Open":"550.00246","High":"554.192479","Low":"546.982459","Close":"549.33247","Volume":"1770500","Adj_Close":"549.33247"},{"Symbol":"GOOG","Date":"2014-10-28","Open":"543.002488","High":"548.982512","Low":"541.622422","Close":"548.902458","Volume":"1270900","Adj_Close":"548.902458"},{"Symbol":"GOOG","Date":"2014-10-27","Open":"537.032441","High":"544.412483","Low":"537.032441","Close":"540.772435","Volume":"1185300","Adj_Close":"540.772435"},{"Symbol":"GOOG","Date":"2014-10-24","Open":"544.36248","High":"544.882461","Low":"535.792407","Close":"539.782415","Volume":"1973100","Adj_Close":"539.782415"},{"Symbol":"GOOG","Date":"2014-10-23","Open":"539.322413","High":"547.222497","Low":"535.852447","Close":"543.982471","Volume":"2348800","Adj_Close":"543.982471"},{"Symbol":"GOOG","Date":"2014-10-22","Open":"529.892376","High":"539.802428","Low":"528.802412","Close":"532.712427","Volume":"2919200","Adj_Close":"532.712427"},{"Symbol":"GOOG","Date":"2014-10-21","Open":"525.192353","High":"526.792383","Low":"519.112324","Close":"526.542369","Volume":"2336200","Adj_Close":"526.542369"},{"Symbol":"GOOG","Date":"2014-10-20","Open":"509.452317","High":"521.762353","Low":"508.102301","Close":"520.842349","Volume":"2607500","Adj_Close":"520.842349"},{"Symbol":"GOOG","Date":"2014-10-17","Open":"527.252385","High":"530.982402","Low":"508.532313","Close":"511.172305","Volume":"5539300","Adj_Close":"511.172305"},{"Symbol":"GOOG","Date":"2014-10-16","Open":"519.002342","High":"529.432374","Low":"515.002358","Close":"524.512387","Volume":"3708500","Adj_Close":"524.512387"},{"Symbol":"GOOG","Date":"2014-10-15","Open":"531.012391","High":"532.802396","Low":"518.302363","Close":"530.032409","Volume":"3719300","Adj_Close":"530.032409"},{"Symbol":"GOOG","Date":"2014-10-14","Open":"538.902438","High":"547.192507","Low":"533.172429","Close":"537.942408","Volume":"2222500","Adj_Close":"537.942408"},{"Symbol":"GOOG","Date":"2014-10-13","Open":"544.992443","High":"549.502492","Low":"533.102413","Close":"533.212394","Volume":"2581600","Adj_Close":"533.212394"},{"Symbol":"GOOG","Date":"2014-10-10","Open":"557.722546","High":"565.132577","Low":"544.052487","Close":"544.492476","Volume":"3081900","Adj_Close":"544.492476"},{"Symbol":"GOOG","Date":"2014-10-09","Open":"571.182555","High":"571.49261","Low":"559.062524","Close":"560.882518","Volume":"2524800","Adj_Close":"560.882518"},{"Symbol":"GOOG","Date":"2014-10-08","Open":"565.572566","High":"573.882587","Low":"557.492545","Close":"572.502582","Volume":"1990800","Adj_Close":"572.502582"},{"Symbol":"GOOG","Date":"2014-10-07","Open":"574.402629","High":"575.27263","Low":"563.742534","Close":"563.742534","Volume":"1911300","Adj_Close":"563.742534"},{"Symbol":"GOOG","Date":"2014-10-06","Open":"578.802636","High":"581.002639","Low":"574.442595","Close":"577.352614","Volume":"1214600","Adj_Close":"577.352614"},{"Symbol":"GOOG","Date":"2014-10-03","Open":"573.052613","High":"577.227637","Low":"572.502582","Close":"575.282606","Volume":"1141700","Adj_Close":"575.282606"},{"Symbol":"GOOG","Date":"2014-10-02","Open":"567.312567","High":"571.912585","Low":"563.322559","Close":"570.082554","Volume":"1178400","Adj_Close":"570.082554"},{"Symbol":"GOOG","Date":"2014-10-01","Open":"576.012635","High":"577.582615","Low":"567.01255","Close":"568.272597","Volume":"1445400","Adj_Close":"568.272597"},{"Symbol":"GOOG","Date":"2014-09-30","Open":"576.932639","High":"579.852634","Low":"572.852602","Close":"577.36259","Volume":"1621700","Adj_Close":"577.36259"},{"Symbol":"GOOG","Date":"2014-09-29","Open":"571.7526","High":"578.192625","Low":"571.172579","Close":"576.362594","Volume":"1282400","Adj_Close":"576.362594"},{"Symbol":"GOOG","Date":"2014-09-26","Open":"576.062638","High":"579.2526","Low":"574.662619","Close":"577.1026","Volume":"1443600","Adj_Close":"577.1026"},{"Symbol":"GOOG","Date":"2014-09-25","Open":"587.552646","High":"587.982658","Low":"574.182604","Close":"575.062581","Volume":"1925900","Adj_Close":"575.062581"},{"Symbol":"GOOG","Date":"2014-09-24","Open":"581.462641","High":"589.632691","Low":"580.522624","Close":"587.992634","Volume":"1728100","Adj_Close":"587.992634"},{"Symbol":"GOOG","Date":"2014-09-23","Open":"586.852667","High":"586.852667","Low":"581.002639","Close":"581.132634","Volume":"1471400","Adj_Close":"581.132634"},{"Symbol":"GOOG","Date":"2014-09-22","Open":"593.82271","High":"593.951665","Low":"583.462632","Close":"587.372648","Volume":"1689500","Adj_Close":"587.372648"},{"Symbol":"GOOG","Date":"2014-09-19","Open":"591.502688","High":"596.482715","Low":"589.502696","Close":"596.082692","Volume":"3736600","Adj_Close":"596.082692"},{"Symbol":"GOOG","Date":"2014-09-18","Open":"587.002675","High":"589.542661","Low":"585.002622","Close":"589.272695","Volume":"1444500","Adj_Close":"589.272695"},{"Symbol":"GOOG","Date":"2014-09-17","Open":"580.012619","High":"587.522656","Low":"578.777604","Close":"584.772622","Volume":"1692800","Adj_Close":"584.772622"},{"Symbol":"GOOG","Date":"2014-09-16","Open":"572.762572","High":"581.502606","Low":"572.662566","Close":"579.95264","Volume":"1480300","Adj_Close":"579.95264"},{"Symbol":"GOOG","Date":"2014-09-15","Open":"572.94257","High":"574.952599","Low":"568.212557","Close":"573.102616","Volume":"1597500","Adj_Close":"573.102616"},{"Symbol":"GOOG","Date":"2014-09-12","Open":"581.002639","High":"581.642639","Low":"574.462608","Close":"575.622589","Volume":"1601600","Adj_Close":"575.622589"},{"Symbol":"GOOG","Date":"2014-09-11","Open":"580.362639","High":"581.812661","Low":"576.262588","Close":"581.352659","Volume":"1221000","Adj_Close":"581.352659"},{"Symbol":"GOOG","Date":"2014-09-10","Open":"581.502606","High":"583.502659","Low":"576.942615","Close":"583.102636","Volume":"977300","Adj_Close":"583.102636"},{"Symbol":"GOOG","Date":"2014-09-09","Open":"588.902662","High":"589.002667","Low":"580.002643","Close":"581.012615","Volume":"1287200","Adj_Close":"581.012615"},{"Symbol":"GOOG","Date":"2014-09-08","Open":"586.602653","High":"591.772654","Low":"586.302635","Close":"589.722659","Volume":"1431000","Adj_Close":"589.722659"},{"Symbol":"GOOG","Date":"2014-09-05","Open":"583.982613","High":"586.55265","Low":"581.952632","Close":"586.082672","Volume":"1632300","Adj_Close":"586.082672"},{"Symbol":"GOOG","Date":"2014-09-04","Open":"580.002643","High":"586.00268","Low":"579.222611","Close":"581.982621","Volume":"1458100","Adj_Close":"581.982621"},{"Symbol":"GOOG","Date":"2014-09-03","Open":"580.002643","High":"582.992655","Low":"575.002602","Close":"577.942611","Volume":"1215100","Adj_Close":"577.942611"},{"Symbol":"GOOG","Date":"2014-09-02","Open":"571.852606","High":"577.832629","Low":"571.192593","Close":"577.332601","Volume":"1578400","Adj_Close":"577.332601"},{"Symbol":"GOOG","Date":"2014-08-29","Open":"571.332564","High":"572.04258","Low":"567.07155","Close":"571.602592","Volume":"1083700","Adj_Close":"571.602592"},{"Symbol":"GOOG","Date":"2014-08-28","Open":"569.562573","High":"573.252625","Low":"567.102579","Close":"569.202577","Volume":"1292900","Adj_Close":"569.202577"},{"Symbol":"GOOG","Date":"2014-08-27","Open":"577.272622","High":"578.492642","Low":"570.105566","Close":"571.002557","Volume":"1703300","Adj_Close":"571.002557"},{"Symbol":"GOOG","Date":"2014-08-26","Open":"581.262629","High":"581.802623","Low":"576.582619","Close":"577.862619","Volume":"1639600","Adj_Close":"577.862619"},{"Symbol":"GOOG","Date":"2014-08-25","Open":"584.722619","High":"585.002622","Low":"579.002647","Close":"580.202654","Volume":"1361400","Adj_Close":"580.202654"},{"Symbol":"GOOG","Date":"2014-08-22","Open":"583.592628","High":"585.238621","Low":"580.642643","Close":"582.562642","Volume":"789000","Adj_Close":"582.562642"},{"Symbol":"GOOG","Date":"2014-08-21","Open":"583.822628","High":"584.502655","Low":"581.14261","Close":"583.372664","Volume":"914800","Adj_Close":"583.372664"},{"Symbol":"GOOG","Date":"2014-08-20","Open":"585.88266","High":"586.702658","Low":"582.572618","Close":"584.492618","Volume":"1036700","Adj_Close":"584.492618"},{"Symbol":"GOOG","Date":"2014-08-19","Open":"585.002622","High":"587.342658","Low":"584.002627","Close":"586.862643","Volume":"978600","Adj_Close":"586.862643"},{"Symbol":"GOOG","Date":"2014-08-18","Open":"576.11258","High":"584.512631","Low":"576.002598","Close":"582.162619","Volume":"1284100","Adj_Close":"582.162619"},{"Symbol":"GOOG","Date":"2014-08-15","Open":"577.862619","High":"579.382595","Low":"570.522603","Close":"573.482626","Volume":"1519100","Adj_Close":"573.482626"},{"Symbol":"GOOG","Date":"2014-08-14","Open":"576.182596","High":"577.902645","Low":"570.882599","Close":"574.652582","Volume":"985400","Adj_Close":"574.652582"},{"Symbol":"GOOG","Date":"2014-08-13","Open":"567.312567","High":"575.002602","Low":"565.752564","Close":"574.782577","Volume":"1439200","Adj_Close":"574.782577"},{"Symbol":"GOOG","Date":"2014-08-12","Open":"564.522567","High":"565.902572","Low":"560.882518","Close":"562.732562","Volume":"1542000","Adj_Close":"562.732562"},{"Symbol":"GOOG","Date":"2014-08-11","Open":"569.992585","High":"570.492553","Low":"566.002578","Close":"567.882551","Volume":"1214700","Adj_Close":"567.882551"},{"Symbol":"GOOG","Date":"2014-08-08","Open":"563.562536","High":"570.252576","Low":"560.352561","Close":"568.772565","Volume":"1494700","Adj_Close":"568.772565"},{"Symbol":"GOOG","Date":"2014-08-07","Open":"568.00257","High":"569.89258","Low":"561.102543","Close":"563.362525","Volume":"1110900","Adj_Close":"563.362525"},{"Symbol":"GOOG","Date":"2014-08-06","Open":"561.782569","High":"570.702601","Low":"560.002541","Close":"566.376589","Volume":"1334300","Adj_Close":"566.376589"},{"Symbol":"GOOG","Date":"2014-08-05","Open":"570.052564","High":"571.982601","Low":"562.612543","Close":"565.072537","Volume":"1551200","Adj_Close":"565.072537"},{"Symbol":"GOOG","Date":"2014-08-04","Open":"569.042592","High":"575.352622","Low":"564.102531","Close":"573.152619","Volume":"1427300","Adj_Close":"573.152619"},{"Symbol":"GOOG","Date":"2014-08-01","Open":"570.402584","High":"575.962633","Low":"562.85252","Close":"566.072533","Volume":"1955200","Adj_Close":"566.072533"},{"Symbol":"GOOG","Date":"2014-07-31","Open":"580.602616","High":"583.652668","Low":"570.002561","Close":"571.602592","Volume":"2102700","Adj_Close":"571.602592"},{"Symbol":"GOOG","Date":"2014-07-30","Open":"586.55265","High":"589.502696","Low":"584.002627","Close":"587.42265","Volume":"1016400","Adj_Close":"587.42265"},{"Symbol":"GOOG","Date":"2014-07-29","Open":"588.752653","High":"589.702646","Low":"583.517654","Close":"585.612633","Volume":"1349800","Adj_Close":"585.612633"},{"Symbol":"GOOG","Date":"2014-07-28","Open":"588.072688","High":"592.502683","Low":"584.755668","Close":"590.602697","Volume":"986800","Adj_Close":"590.602697"},{"Symbol":"GOOG","Date":"2014-07-25","Open":"590.402686","High":"591.862684","Low":"587.032665","Close":"589.022681","Volume":"932400","Adj_Close":"589.022681"},{"Symbol":"GOOG","Date":"2014-07-24","Open":"596.452725","High":"599.502716","Low":"591.772654","Close":"593.352671","Volume":"1035100","Adj_Close":"593.352671"},{"Symbol":"GOOG","Date":"2014-07-23","Open":"593.232713","High":"597.852683","Low":"592.502683","Close":"595.982686","Volume":"1233100","Adj_Close":"595.982686"},{"Symbol":"GOOG","Date":"2014-07-22","Open":"590.722655","High":"599.652725","Low":"590.602697","Close":"594.742713","Volume":"1699100","Adj_Close":"594.742713"},{"Symbol":"GOOG","Date":"2014-07-21","Open":"591.752702","High":"594.40267","Low":"585.235622","Close":"589.472645","Volume":"2062100","Adj_Close":"589.472645"},{"Symbol":"GOOG","Date":"2014-07-18","Open":"593.002712","High":"596.802684","Low":"582.002635","Close":"595.082696","Volume":"4014100","Adj_Close":"595.082696"},{"Symbol":"GOOG","Date":"2014-07-17","Open":"579.532604","High":"580.992601","Low":"568.61258","Close":"573.732579","Volume":"3016500","Adj_Close":"573.732579"},{"Symbol":"GOOG","Date":"2014-07-16","Open":"588.002671","High":"588.402633","Low":"582.202646","Close":"582.662648","Volume":"1397100","Adj_Close":"582.662648"},{"Symbol":"GOOG","Date":"2014-07-15","Open":"585.742628","High":"585.807626","Low":"576.562606","Close":"584.782659","Volume":"1623000","Adj_Close":"584.782659"},{"Symbol":"GOOG","Date":"2014-07-14","Open":"582.602608","High":"585.212671","Low":"578.032641","Close":"584.872627","Volume":"1854000","Adj_Close":"584.872627"},{"Symbol":"GOOG","Date":"2014-07-11","Open":"571.912585","High":"580.85263","Low":"571.422594","Close":"579.182645","Volume":"1621700","Adj_Close":"579.182645"},{"Symbol":"GOOG","Date":"2014-07-10","Open":"565.912548","High":"576.592595","Low":"565.012558","Close":"571.102563","Volume":"1356700","Adj_Close":"571.102563"},{"Symbol":"GOOG","Date":"2014-07-09","Open":"571.582578","High":"576.72259","Low":"569.378597","Close":"576.08259","Volume":"1116700","Adj_Close":"576.08259"},{"Symbol":"GOOG","Date":"2014-07-08","Open":"577.662607","High":"579.530645","Low":"566.137592","Close":"571.092587","Volume":"1909500","Adj_Close":"571.092587"},{"Symbol":"GOOG","Date":"2014-07-07","Open":"583.76265","High":"586.432631","Low":"579.592644","Close":"582.252649","Volume":"1064600","Adj_Close":"582.252649"},{"Symbol":"GOOG","Date":"2014-07-03","Open":"583.352651","High":"585.01266","Low":"580.922646","Close":"584.732656","Volume":"714100","Adj_Close":"584.732656"},{"Symbol":"GOOG","Date":"2014-07-02","Open":"583.352651","High":"585.442672","Low":"580.392628","Close":"582.33766","Volume":"1056300","Adj_Close":"582.33766"},{"Symbol":"GOOG","Date":"2014-07-01","Open":"578.32262","High":"584.402649","Low":"576.652635","Close":"582.672624","Volume":"1447900","Adj_Close":"582.672624"},{"Symbol":"GOOG","Date":"2014-06-30","Open":"578.662603","High":"579.572631","Low":"574.752588","Close":"575.282606","Volume":"1313700","Adj_Close":"575.282606"},{"Symbol":"GOOG","Date":"2014-06-27","Open":"577.182592","High":"579.872648","Low":"573.802595","Close":"577.242632","Volume":"2236900","Adj_Close":"577.242632"},{"Symbol":"GOOG","Date":"2014-06-26","Open":"581.002639","High":"582.45266","Low":"571.852606","Close":"576.002598","Volume":"1741900","Adj_Close":"576.002598"},{"Symbol":"GOOG","Date":"2014-06-25","Open":"565.262572","High":"579.962616","Low":"565.222546","Close":"578.652627","Volume":"1969300","Adj_Close":"578.652627"},{"Symbol":"GOOG","Date":"2014-06-24","Open":"565.192556","High":"572.648612","Low":"561.012513","Close":"564.622572","Volume":"2207100","Adj_Close":"564.622572"},{"Symbol":"GOOG","Date":"2014-06-23","Open":"555.152509","High":"565.002582","Low":"554.252519","Close":"564.952579","Volume":"1536800","Adj_Close":"564.952579"},{"Symbol":"GOOG","Date":"2014-06-20","Open":"556.852545","High":"557.582513","Low":"550.394465","Close":"556.362492","Volume":"4508300","Adj_Close":"556.362492"},{"Symbol":"GOOG","Date":"2014-06-19","Open":"554.242482","High":"555.0025","Low":"548.512473","Close":"554.902495","Volume":"2456800","Adj_Close":"554.902495"},{"Symbol":"GOOG","Date":"2014-06-18","Open":"544.862448","High":"553.562516","Low":"544.002484","Close":"553.372481","Volume":"1741700","Adj_Close":"553.372481"},{"Symbol":"GOOG","Date":"2014-06-17","Open":"544.202435","High":"545.32245","Low":"539.33245","Close":"543.012465","Volume":"1444500","Adj_Close":"543.012465"},{"Symbol":"GOOG","Date":"2014-06-16","Open":"549.262515","High":"549.622511","Low":"541.522477","Close":"544.282488","Volume":"1702500","Adj_Close":"544.282488"},{"Symbol":"GOOG","Date":"2014-06-13","Open":"552.262503","High":"552.30253","Low":"545.562488","Close":"551.762475","Volume":"1220500","Adj_Close":"551.762475"},{"Symbol":"GOOG","Date":"2014-06-12","Open":"557.302509","High":"557.992512","Low":"548.46247","Close":"551.352476","Volume":"1458400","Adj_Close":"551.352476"},{"Symbol":"GOOG","Date":"2014-06-11","Open":"558.002549","High":"559.882522","Low":"555.022514","Close":"558.842499","Volume":"1100100","Adj_Close":"558.842499"},{"Symbol":"GOOG","Date":"2014-06-10","Open":"560.512546","High":"563.602563","Low":"557.902544","Close":"560.552511","Volume":"1351700","Adj_Close":"560.552511"},{"Symbol":"GOOG","Date":"2014-06-09","Open":"557.152501","High":"562.902523","Low":"556.042523","Close":"562.122552","Volume":"1467500","Adj_Close":"562.122552"},{"Symbol":"GOOG","Date":"2014-06-06","Open":"558.062528","High":"558.062528","Low":"548.932509","Close":"556.332503","Volume":"1736700","Adj_Close":"556.332503"},{"Symbol":"GOOG","Date":"2014-06-05","Open":"546.402499","High":"554.952498","Low":"544.452449","Close":"553.902499","Volume":"1689100","Adj_Close":"553.902499"},{"Symbol":"GOOG","Date":"2014-06-04","Open":"541.502464","High":"548.612478","Low":"538.752429","Close":"544.662436","Volume":"1816400","Adj_Close":"544.662436"},{"Symbol":"GOOG","Date":"2014-06-03","Open":"550.99248","High":"552.342495","Low":"542.552463","Close":"544.94244","Volume":"1866600","Adj_Close":"544.94244"},{"Symbol":"GOOG","Date":"2014-06-02","Open":"560.70252","High":"560.902531","Low":"545.732448","Close":"553.932488","Volume":"1435000","Adj_Close":"553.932488"},{"Symbol":"GOOG","Date":"2014-05-30","Open":"560.802526","High":"561.352557","Low":"555.912528","Close":"559.892559","Volume":"1771100","Adj_Close":"559.892559"},{"Symbol":"GOOG","Date":"2014-05-29","Open":"563.352549","High":"564.002525","Low":"558.712504","Close":"560.082534","Volume":"1354100","Adj_Close":"560.082534"},{"Symbol":"GOOG","Date":"2014-05-28","Open":"564.57257","High":"567.842585","Low":"561.002537","Close":"561.682564","Volume":"1652000","Adj_Close":"561.682564"},{"Symbol":"GOOG","Date":"2014-05-27","Open":"556.002496","High":"566.002578","Low":"554.352525","Close":"565.952575","Volume":"2104100","Adj_Close":"565.952575"},{"Symbol":"GOOG","Date":"2014-05-23","Open":"547.262462","High":"553.642508","Low":"543.702467","Close":"552.702492","Volume":"1932100","Adj_Close":"552.702492"},{"Symbol":"GOOG","Date":"2014-05-22","Open":"541.132431","High":"547.602506","Low":"540.782472","Close":"545.062459","Volume":"1615800","Adj_Close":"545.062459"},{"Symbol":"GOOG","Date":"2014-05-21","Open":"532.902401","High":"539.185441","Low":"531.912381","Close":"538.942465","Volume":"1196200","Adj_Close":"538.942465"},{"Symbol":"GOOG","Date":"2014-05-20","Open":"529.742368","High":"536.232457","Low":"526.302392","Close":"529.772418","Volume":"1784700","Adj_Close":"529.772418"},{"Symbol":"GOOG","Date":"2014-05-19","Open":"519.702382","High":"529.782394","Low":"517.58537","Close":"528.862391","Volume":"1277700","Adj_Close":"528.862391"},{"Symbol":"GOOG","Date":"2014-05-16","Open":"521.39238","High":"521.802379","Low":"515.442347","Close":"520.632362","Volume":"1485200","Adj_Close":"520.632362"},{"Symbol":"GOOG","Date":"2014-05-15","Open":"525.702357","High":"525.872379","Low":"517.422325","Close":"519.982324","Volume":"1704300","Adj_Close":"519.982324"},{"Symbol":"GOOG","Date":"2014-05-14","Open":"533.002407","High":"533.002407","Low":"525.292358","Close":"526.652412","Volume":"1191700","Adj_Close":"526.652412"},{"Symbol":"GOOG","Date":"2014-05-13","Open":"530.892433","High":"536.072411","Low":"529.512367","Close":"533.092437","Volume":"1653400","Adj_Close":"533.092437"},{"Symbol":"GOOG","Date":"2014-05-12","Open":"523.512391","High":"530.192393","Low":"519.012379","Close":"529.922427","Volume":"1912500","Adj_Close":"529.922427"},{"Symbol":"GOOG","Date":"2014-05-09","Open":"510.752299","High":"519.902332","Low":"504.202292","Close":"518.732375","Volume":"2439400","Adj_Close":"518.732375"},{"Symbol":"GOOG","Date":"2014-05-08","Open":"508.462297","High":"517.232351","Low":"506.452298","Close":"511.002313","Volume":"2021300","Adj_Close":"511.002313"},{"Symbol":"GOOG","Date":"2014-05-07","Open":"515.792305","High":"516.68232","Low":"503.302272","Close":"509.962321","Volume":"3224300","Adj_Close":"509.962321"},{"Symbol":"GOOG","Date":"2014-05-06","Open":"525.232379","High":"526.812396","Low":"515.062337","Close":"515.14233","Volume":"1689000","Adj_Close":"515.14233"},{"Symbol":"GOOG","Date":"2014-05-05","Open":"524.822381","High":"528.902418","Low":"521.322364","Close":"527.812392","Volume":"1024100","Adj_Close":"527.812392"},{"Symbol":"GOOG","Date":"2014-05-02","Open":"533.762426","High":"534.002403","Low":"525.612389","Close":"527.932411","Volume":"1688500","Adj_Close":"527.932411"},{"Symbol":"GOOG","Date":"2014-05-01","Open":"527.112413","High":"532.932391","Low":"523.882364","Close":"531.352435","Volume":"1905500","Adj_Close":"531.352435"},{"Symbol":"GOOG","Date":"2014-04-30","Open":"527.602405","High":"528.002366","Low":"522.522372","Close":"526.662388","Volume":"1751100","Adj_Close":"526.662388"},{"Symbol":"GOOG","Date":"2014-04-29","Open":"516.902344","High":"529.462425","Low":"516.322324","Close":"527.70241","Volume":"2699000","Adj_Close":"527.70241"},{"Symbol":"GOOG","Date":"2014-04-28","Open":"517.182348","High":"518.602319","Low":"502.802274","Close":"517.152359","Volume":"3335500","Adj_Close":"517.152359"},{"Symbol":"GOOG","Date":"2014-04-25","Open":"522.512395","High":"524.702361","Low":"515.422333","Close":"516.182352","Volume":"2100300","Adj_Close":"516.182352"},{"Symbol":"GOOG","Date":"2014-04-24","Open":"530.072374","High":"531.652391","Low":"522.122349","Close":"525.162363","Volume":"1883100","Adj_Close":"525.162363"},{"Symbol":"GOOG","Date":"2014-04-23","Open":"533.792415","High":"533.872408","Low":"526.252389","Close":"526.942391","Volume":"2052300","Adj_Close":"526.942391"},{"Symbol":"GOOG","Date":"2014-04-22","Open":"528.642366","High":"537.232453","Low":"527.512375","Close":"534.812425","Volume":"2365300","Adj_Close":"534.812425"},{"Symbol":"GOOG","Date":"2014-04-21","Open":"536.1024","High":"536.702435","Low":"525.602352","Close":"528.622414","Volume":"2566700","Adj_Close":"528.622414"},{"Symbol":"GOOG","Date":"2014-04-17","Open":"548.81249","High":"549.502492","Low":"531.152424","Close":"536.1024","Volume":"6809500","Adj_Close":"536.1024"},{"Symbol":"GOOG","Date":"2014-04-16","Open":"543.002488","High":"557.002492","Low":"540.00244","Close":"556.54249","Volume":"4893200","Adj_Close":"556.54249"},{"Symbol":"GOOG","Date":"2014-04-15","Open":"536.822454","High":"538.452412","Low":"518.462348","Close":"536.442444","Volume":"3855000","Adj_Close":"536.442444"},{"Symbol":"GOOG","Date":"2014-04-14","Open":"538.252462","High":"544.10249","Low":"529.56237","Close":"532.522392","Volume":"2575000","Adj_Close":"532.522392"},{"Symbol":"GOOG","Date":"2014-04-11","Open":"532.552381","High":"540.00244","Low":"526.532392","Close":"530.602392","Volume":"3924800","Adj_Close":"530.602392"},{"Symbol":"GOOG","Date":"2014-04-10","Open":"565.002582","High":"565.002582","Low":"539.902434","Close":"540.952433","Volume":"4036800","Adj_Close":"540.952433"},{"Symbol":"GOOG","Date":"2014-04-09","Open":"559.622532","High":"565.372554","Low":"552.952506","Close":"564.142557","Volume":"3330800","Adj_Close":"564.142557"},{"Symbol":"GOOG","Date":"2014-04-08","Open":"542.602466","High":"555.0025","Low":"541.612446","Close":"554.902495","Volume":"3151200","Adj_Close":"554.902495"},{"Symbol":"GOOG","Date":"2014-04-07","Open":"540.742445","High":"548.482483","Low":"527.152379","Close":"538.152456","Volume":"4401600","Adj_Close":"538.152456"},{"Symbol":"GOOG","Date":"2014-04-04","Open":"574.652582","High":"577.772589","Low":"543.002488","Close":"543.14246","Volume":"6369300","Adj_Close":"543.14246"},{"Symbol":"GOOG","Date":"2014-04-03","Open":"569.852553","High":"587.282679","Low":"564.132581","Close":"569.742571","Volume":"5099100","Adj_Close":"569.742571"},{"Symbol":"GOOG","Date":"2014-04-02","Open":"599.992707","High":"604.832763","Low":"562.192568","Close":"567.002574","Volume":"147100","Adj_Close":"567.002574"},{"Symbol":"GOOG","Date":"2014-04-01","Open":"558.712504","High":"568.452595","Low":"558.712504","Close":"567.162558","Volume":"7900","Adj_Close":"567.162558"},{"Symbol":"GOOG","Date":"2014-03-31","Open":"566.892592","High":"567.002574","Low":"556.932537","Close":"556.972503","Volume":"10800","Adj_Close":"556.972503"},{"Symbol":"GOOG","Date":"2014-03-28","Open":"561.202549","High":"566.43259","Low":"558.672539","Close":"559.992565","Volume":"41200","Adj_Close":"559.992565"},{"Symbol":"GOOG","Date":"2014-03-27","Open":"568.00257","High":"568.00257","Low":"552.922516","Close":"558.462551","Volume":"13100","Adj_Close":"558.462551"},{"Symbol":"GOOG","Date":"2014-03-26","Open":"1162.012003","High":"1171.572011","Low":"1131.501901","Close":"1131.971918","Volume":"5179200","Adj_Close":"565.420539"},{"Symbol":"GOOG","Date":"2014-03-25","Open":"1166.002007","High":"1169.842037","Low":"1147.001947","Close":"1158.722002","Volume":"4838400","Adj_Close":"578.782219"},{"Symbol":"GOOG","Date":"2014-03-24","Open":"1184.192035","High":"1184.902085","Low":"1145.952004","Close":"1157.931941","Volume":"6096800","Adj_Close":"578.387583"},{"Symbol":"GOOG","Date":"2014-03-21","Open":"1206.312028","High":"1209.632048","Low":"1182.452014","Close":"1183.041986","Volume":"6441000","Adj_Close":"590.930063"},{"Symbol":"GOOG","Date":"2014-03-20","Open":"1199.952085","High":"1209.612076","Low":"1195.362061","Close":"1197.161999","Volume":"3381900","Adj_Close":"597.983016"},{"Symbol":"GOOG","Date":"2014-03-19","Open":"1211.80202","High":"1211.992061","Low":"1194.412101","Close":"1199.252083","Volume":"3237800","Adj_Close":"599.027014"},{"Symbol":"GOOG","Date":"2014-03-18","Open":"1194.672106","High":"1211.532091","Low":"1193.062087","Close":"1211.262039","Volume":"3643500","Adj_Close":"605.025994"},{"Symbol":"GOOG","Date":"2014-03-17","Open":"1179.25207","High":"1197.072063","Low":"1178.112069","Close":"1192.102079","Volume":"4340300","Adj_Close":"595.455584"},{"Symbol":"GOOG","Date":"2014-03-14","Open":"1181.992043","High":"1190.87202","Low":"1172.532018","Close":"1172.80207","Volume":"4604900","Adj_Close":"585.81522"},{"Symbol":"GOOG","Date":"2014-03-13","Open":"1207.952066","High":"1210.50212","Low":"1184.762035","Close":"1189.062036","Volume":"4708600","Adj_Close":"593.937081"},{"Symbol":"GOOG","Date":"2014-03-12","Open":"1196.40208","High":"1207.852083","Low":"1184.192035","Close":"1207.302054","Volume":"3943200","Adj_Close":"603.047979"},{"Symbol":"GOOG","Date":"2014-03-11","Open":"1213.772027","High":"1214.322055","Low":"1196.642112","Close":"1199.99203","Volume":"3438800","Adj_Close":"599.396618"},{"Symbol":"GOOG","Date":"2014-03-10","Open":"1215.692042","High":"1217.642076","Low":"1204.092064","Close":"1211.572035","Volume":"2438200","Adj_Close":"605.180837"},{"Symbol":"GOOG","Date":"2014-03-07","Open":"1226.802152","High":"1226.992071","Low":"1211.442033","Close":"1214.792073","Volume":"3041500","Adj_Close":"606.789247"},{"Symbol":"GOOG","Date":"2014-03-06","Open":"1222.282091","High":"1226.152141","Low":"1218.602083","Close":"1219.612082","Volume":"2545600","Adj_Close":"609.196844"},{"Symbol":"GOOG","Date":"2014-03-05","Open":"1215.052078","High":"1223.082077","Low":"1211.412136","Close":"1218.262068","Volume":"2479700","Adj_Close":"608.522511"},{"Symbol":"GOOG","Date":"2014-03-04","Open":"1215.002086","High":"1216.002038","Low":"1209.502046","Close":"1214.912028","Volume":"2946300","Adj_Close":"606.849165"},{"Symbol":"GOOG","Date":"2014-03-03","Open":"1206.752026","High":"1207.842036","Low":"1192.142024","Close":"1202.692058","Volume":"4225300","Adj_Close":"600.745284"},{"Symbol":"GOOG","Date":"2014-02-28","Open":"1220.342104","High":"1224.192059","Low":"1206.222092","Close":"1215.652097","Volume":"4644500","Adj_Close":"607.21883"},{"Symbol":"GOOG","Date":"2014-02-27","Open":"1218.39207","High":"1224.232126","Low":"1217.012037","Close":"1219.212151","Volume":"2529400","Adj_Close":"608.997078"},{"Symbol":"GOOG","Date":"2014-02-26","Open":"1224.002141","High":"1228.882066","Low":"1213.762102","Close":"1220.172036","Volume":"3979100","Adj_Close":"609.476541"},{"Symbol":"GOOG","Date":"2014-02-25","Open":"1215.942121","High":"1224.502055","Low":"1210.422109","Close":"1220.002089","Volume":"2888100","Adj_Close":"609.391653"},{"Symbol":"GOOG","Date":"2014-02-24","Open":"1205.362067","High":"1220.162111","Low":"1205.102063","Close":"1212.512071","Volume":"3361100","Adj_Close":"605.650385"},{"Symbol":"GOOG","Date":"2014-02-21","Open":"1207.812016","High":"1209.872081","Low":"1202.842033","Close":"1203.792115","Volume":"3738500","Adj_Close":"601.294763"},{"Symbol":"GOOG","Date":"2014-02-20","Open":"1203.142104","High":"1206.892075","Low":"1200.222015","Close":"1204.112036","Volume":"3414300","Adj_Close":"601.454563"},{"Symbol":"GOOG","Date":"2014-02-19","Open":"1205.302029","High":"1209.222069","Low":"1197.502014","Close":"1202.342118","Volume":"4222900","Adj_Close":"600.570489"},{"Symbol":"GOOG","Date":"2014-02-18","Open":"1201.412007","High":"1212.872058","Low":"1200.002077","Close":"1210.88208","Volume":"4233500","Adj_Close":"604.836204"},{"Symbol":"GOOG","Date":"2014-02-14","Open":"1195.612019","High":"1204.392013","Low":"1192.802082","Close":"1202.802088","Volume":"4389700","Adj_Close":"600.800244"},{"Symbol":"GOOG","Date":"2014-02-13","Open":"1180.752059","High":"1199.902094","Low":"1179.662049","Close":"1199.902094","Volume":"3686400","Adj_Close":"599.351695"},{"Symbol":"GOOG","Date":"2014-02-12","Open":"1189.001997","High":"1190.002071","Low":"1181.381976","Close":"1186.691975","Volume":"3461800","Adj_Close":"592.753234"},{"Symbol":"GOOG","Date":"2014-02-11","Open":"1180.172011","High":"1191.872094","Low":"1172.211975","Close":"1190.182065","Volume":"4116900","Adj_Close":"594.496536"},{"Symbol":"GOOG","Date":"2014-02-10","Open":"1171.801996","High":"1182.402022","Low":"1169.021957","Close":"1172.93195","Volume":"3904800","Adj_Close":"585.880095"},{"Symbol":"GOOG","Date":"2014-02-07","Open":"1167.631998","High":"1177.902056","Low":"1160.562006","Close":"1177.441963","Volume":"5292000","Adj_Close":"588.132849"},{"Symbol":"GOOG","Date":"2014-02-06","Open":"1151.132","High":"1160.161952","Low":"1147.551975","Close":"1159.961986","Volume":"3907600","Adj_Close":"579.401591"},{"Symbol":"GOOG","Date":"2014-02-05","Open":"1143.381977","High":"1150.772013","Low":"1128.021981","Close":"1143.201984","Volume":"4806800","Adj_Close":"571.029962"},{"Symbol":"GOOG","Date":"2014-02-04","Open":"1137.991967","High":"1155.001927","Low":"1137.011988","Close":"1138.161914","Volume":"5644800","Adj_Close":"568.512445"},{"Symbol":"GOOG","Date":"2014-02-03","Open":"1179.202079","High":"1181.721991","Low":"1132.011985","Close":"1133.431963","Volume":"9172400","Adj_Close":"566.149832"},{"Symbol":"GOOG","Date":"2014-01-31","Open":"1171.35195","High":"1186.542001","Low":"1151.132","Close":"1180.971997","Volume":"11174200","Adj_Close":"589.896102"},{"Symbol":"GOOG","Date":"2014-01-30","Open":"1145.001921","High":"1152.49194","Low":"1127.251892","Close":"1135.391922","Volume":"10220800","Adj_Close":"567.128832"},{"Symbol":"GOOG","Date":"2014-01-29","Open":"1119.121909","High":"1121.751974","Low":"1099.421846","Close":"1106.921912","Volume":"4777500","Adj_Close":"552.908048"},{"Symbol":"GOOG","Date":"2014-01-28","Open":"1110.321943","High":"1125.751903","Low":"1109.941861","Close":"1123.01193","Volume":"4436900","Adj_Close":"560.94502"},{"Symbol":"GOOG","Date":"2014-01-27","Open":"1126.101966","High":"1126.501898","Low":"1082.271837","Close":"1101.23183","Volume":"8739800","Adj_Close":"550.065849"},{"Symbol":"GOOG","Date":"2014-01-24","Open":"1151.011923","High":"1153.55193","Low":"1123.001883","Close":"1123.831888","Volume":"7814000","Adj_Close":"561.35459"},{"Symbol":"GOOG","Date":"2014-01-23","Open":"1160.00193","High":"1162.491946","Low":"1154.37201","Close":"1160.102036","Volume":"3912700","Adj_Close":"579.471546"},{"Symbol":"GOOG","Date":"2014-01-22","Open":"1166.611952","High":"1167.892003","Low":"1158.861929","Close":"1165.022028","Volume":"3154500","Adj_Close":"581.929085"},{"Symbol":"GOOG","Date":"2014-01-21","Open":"1160.932041","High":"1164.001982","Low":"1151.301947","Close":"1163.702033","Volume":"3974500","Adj_Close":"581.269747"},{"Symbol":"GOOG","Date":"2014-01-17","Open":"1156.851978","High":"1160.631969","Low":"1144.201935","Close":"1150.53198","Volume":"5422800","Adj_Close":"574.691299"},{"Symbol":"GOOG","Date":"2014-01-16","Open":"1149.101955","High":"1157.931941","Low":"1148.002021","Close":"1156.221939","Volume":"3380300","Adj_Close":"577.533436"},{"Symbol":"GOOG","Date":"2014-01-15","Open":"1152.991977","High":"1155.001927","Low":"1143.791956","Close":"1148.622013","Volume":"3915000","Adj_Close":"573.737269"},{"Symbol":"GOOG","Date":"2014-01-14","Open":"1137.951901","High":"1151.001998","Low":"1128.091944","Close":"1149.402027","Volume":"4983700","Adj_Close":"574.126886"},{"Symbol":"GOOG","Date":"2014-01-13","Open":"1126.471878","High":"1146.912011","Low":"1117.171875","Close":"1122.981911","Volume":"4855800","Adj_Close":"560.930026"},{"Symbol":"GOOG","Date":"2014-01-10","Open":"1139.081977","High":"1139.081977","Low":"1122.251889","Close":"1130.181906","Volume":"4302900","Adj_Close":"564.526426"},{"Symbol":"GOOG","Date":"2014-01-09","Open":"1143.442016","High":"1144.221907","Low":"1125.561985","Close":"1130.241944","Volume":"4184500","Adj_Close":"564.556416"},{"Symbol":"GOOG","Date":"2014-01-08","Open":"1146.001995","High":"1147.32199","Low":"1133.291913","Close":"1141.231977","Volume":"4501700","Adj_Close":"570.045943"},{"Symbol":"GOOG","Date":"2014-01-07","Open":"1125.001909","High":"1139.691922","Low":"1121.161879","Close":"1138.861917","Volume":"5124300","Adj_Close":"568.862096"},{"Symbol":"GOOG","Date":"2014-01-06","Open":"1113.011924","High":"1118.861905","Low":"1106.441847","Close":"1117.321972","Volume":"3551800","Adj_Close":"558.102883"},{"Symbol":"GOOG","Date":"2014-01-03","Open":"1115.001903","High":"1116.931965","Low":"1104.931933","Close":"1105.001897","Volume":"3345800","Adj_Close":"551.948999"},{"Symbol":"GOOG","Date":"2014-01-02","Open":"1115.461873","High":"1117.751923","Low":"1108.261879","Close":"1113.121955","Volume":"3656400","Adj_Close":"556.004972"}]}}},
{"query":{"count":252,"created":"2016-03-30T21:51:07Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"1","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"5","execution-stop-time":"6","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=YHOO"},{"execution-start-time":"9","execution-stop-time":"11","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=YHOO"}],"publiclyCallable":"true","cache":[{"execution-start-time":"4","execution-stop-time":"4","execution-time":"0","method":"GET","type":"MEMCACHED","content":"d5c646a2cdb443c1131727a115317dc9"},{"execution-start-time":"8","execution-stop-time":"9","execution-time":"1","method":"GET","type":"MEMCACHED","content":"7e2b5d4e9436bb3d86376e54226366e9"}],"query":[{"execution-start-time":"4","execution-stop-time":"8","execution-time":"4","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=YHOO]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"9","execution-stop-time":"13","execution-time":"4","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=YHOO]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"830","execution-time":"827","instructions-used":"24192462","table-name":"yahoo.finance.historicaldata"},"user-time":"835","service-time":"5","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"YHOO","Date":"2014-12-31","Open":"51.540001","High":"51.68","Low":"50.459999","Close":"50.509998","Volume":"9305000","Adj_Close":"50.509998"},{"Symbol":"YHOO","Date":"2014-12-30","Open":"50.349998","High":"51.27","Low":"50.349998","Close":"51.220001","Volume":"10703500","Adj_Close":"51.220001"},{"Symbol":"YHOO","Date":"2014-12-29","Open":"50.669998","High":"51.009998","Low":"50.509998","Close":"50.529999","Volume":"6624500","Adj_Close":"50.529999"},{"Symbol":"YHOO","Date":"2014-12-26","Open":"50.650002","High":"51.060001","Low":"50.610001","Close":"50.860001","Volume":"5169700","Adj_Close":"50.860001"},{"Symbol":"YHOO","Date":"2014-12-24","Open":"50.189999","High":"50.919998","Low":"50.189999","Close":"50.650002","Volume":"5961900","Adj_Close":"50.650002"},{"Symbol":"YHOO","Date":"2014-12-23","Open":"51.459999","High":"51.459999","Low":"49.93","Close":"50.02","Volume":"15514000","Adj_Close":"50.02"},{"Symbol":"YHOO","Date":"2014-12-22","Open":"50.990002","High":"51.599998","Low":"50.950001","Close":"51.150002","Volume":"24021100","Adj_Close":"51.150002"},{"Symbol":"YHOO","Date":"2014-12-19","Open":"51.060001","High":"51.470001","Low":"50.830002","Close":"50.880001","Volume":"24110200","Adj_Close":"50.880001"},{"Symbol":"YHOO","Date":"2014-12-18","Open":"50.93","High":"51.150002","Low":"50.439999","Close":"50.91","Volume":"15338900","Adj_Close":"50.91"},{"Symbol":"YHOO","Date":"2014-12-17","Open":"49.02","High":"50.25","Low":"48.900002","Close":"50.119999","Volume":"17112300","Adj_Close":"50.119999"},{"Symbol":"YHOO","Date":"2014-12-16","Open":"49.50","High":"50.080002","Low":"48.810001","Close":"48.849998","Volume":"21399300","Adj_Close":"48.849998"},{"Symbol":"YHOO","Date":"2014-12-15","Open":"50.419998","High":"50.919998","Low":"49.50","Close":"49.82","Volume":"18132500","Adj_Close":"49.82"},{"Symbol":"YHOO","Date":"2014-12-12","Open":"49.540001","High":"51.169998","Low":"49.48","Close":"50.240002","Volume":"20370500","Adj_Close":"50.240002"},{"Symbol":"YHOO","Date":"2014-12-11","Open":"49.540001","High":"50.580002","Low":"49.43","Close":"49.939999","Volume":"21100200","Adj_Close":"49.939999"},{"Symbol":"YHOO","Date":"2014-12-10","Open":"50.330002","High":"50.689999","Low":"49.189999","Close":"49.209999","Volume":"16184100","Adj_Close":"49.209999"},{"Symbol":"YHOO","Date":"2014-12-09","Open":"48.75","High":"50.529999","Low":"48.290001","Close":"50.509998","Volume":"19655600","Adj_Close":"50.509998"},{"Symbol":"YHOO","Date":"2014-12-08","Open":"50.52","High":"50.900002","Low":"49.220001","Close":"49.619999","Volume":"18190100","Adj_Close":"49.619999"},{"Symbol":"YHOO","Date":"2014-12-05","Open":"51.029999","High":"51.25","Low":"50.509998","Close":"50.990002","Volume":"15418100","Adj_Close":"50.990002"},{"Symbol":"YHOO","Date":"2014-12-04","Open":"50.189999","High":"50.669998","Low":"49.900002","Close":"50.41","Volume":"12136700","Adj_Close":"50.41"},{"Symbol":"YHOO","Date":"2014-12-03","Open":"50.709999","High":"50.970001","Low":"50.200001","Close":"50.279999","Volume":"14236000","Adj_Close":"50.279999"},{"Symbol":"YHOO","Date":"2014-12-02","Open":"50.27","High":"51.119999","Low":"50.009998","Close":"50.669998","Volume":"16099900","Adj_Close":"50.669998"},{"Symbol":"YHOO","Date":"2014-12-01","Open":"51.43","High":"51.43","Low":"49.66","Close":"50.099998","Volume":"23146900","Adj_Close":"50.099998"},{"Symbol":"YHOO","Date":"2014-11-28","Open":"51.869999","High":"52.00","Low":"51.639999","Close":"51.740002","Volume":"8913700","Adj_Close":"51.740002"},{"Symbol":"YHOO","Date":"2014-11-26","Open":"51.560001","High":"52.259998","Low":"51.52","Close":"51.93","Volume":"13428500","Adj_Close":"51.93"},{"Symbol":"YHOO","Date":"2014-11-25","Open":"51.98","High":"52.189999","Low":"51.599998","Close":"51.720001","Volume":"14219600","Adj_Close":"51.720001"},{"Symbol":"YHOO","Date":"2014-11-24","Open":"51.25","High":"51.830002","Low":"51.07","Close":"51.830002","Volume":"14643500","Adj_Close":"51.830002"},{"Symbol":"YHOO","Date":"2014-11-21","Open":"51.990002","High":"52.25","Low":"50.990002","Close":"51.040001","Volume":"22225300","Adj_Close":"51.040001"},{"Symbol":"YHOO","Date":"2014-11-20","Open":"50.599998","High":"52.23","Low":"50.27","Close":"51.25","Volume":"28916000","Adj_Close":"51.25"},{"Symbol":"YHOO","Date":"2014-11-19","Open":"51.240002","High":"51.369999","Low":"50.00","Close":"50.580002","Volume":"29260000","Adj_Close":"50.580002"},{"Symbol":"YHOO","Date":"2014-11-18","Open":"52.279999","High":"52.619999","Low":"51.34","Close":"51.75","Volume":"26847300","Adj_Close":"51.75"},{"Symbol":"YHOO","Date":"2014-11-17","Open":"51.830002","High":"52.419998","Low":"50.939999","Close":"52.369999","Volume":"38392800","Adj_Close":"52.369999"},{"Symbol":"YHOO","Date":"2014-11-14","Open":"50.52","High":"51.950001","Low":"50.470001","Close":"51.75","Volume":"28824700","Adj_Close":"51.75"},{"Symbol":"YHOO","Date":"2014-11-13","Open":"50.959999","High":"51.169998","Low":"49.950001","Close":"50.50","Volume":"35513400","Adj_Close":"50.50"},{"Symbol":"YHOO","Date":"2014-11-12","Open":"49.330002","High":"50.630001","Low":"49.220001","Close":"50.599998","Volume":"30564700","Adj_Close":"50.599998"},{"Symbol":"YHOO","Date":"2014-11-11","Open":"48.57","High":"49.18","Low":"48.099998","Close":"49.049999","Volume":"31586300","Adj_Close":"49.049999"},{"Symbol":"YHOO","Date":"2014-11-10","Open":"48.799999","High":"49.630001","Low":"48.790001","Close":"49.41","Volume":"24730300","Adj_Close":"49.41"},{"Symbol":"YHOO","Date":"2014-11-07","Open":"47.900002","High":"48.669998","Low":"47.860001","Close":"48.549999","Volume":"24166700","Adj_Close":"48.549999"},{"Symbol":"YHOO","Date":"2014-11-06","Open":"47.369999","High":"47.98","Low":"46.599998","Close":"47.93","Volume":"22636000","Adj_Close":"47.93"},{"Symbol":"YHOO","Date":"2014-11-05","Open":"47.619999","High":"48.279999","Low":"47.32","Close":"47.459999","Volume":"33021500","Adj_Close":"47.459999"},{"Symbol":"YHOO","Date":"2014-11-04","Open":"45.990002","High":"47.130001","Low":"45.740002","Close":"47.080002","Volume":"25051500","Adj_Close":"47.080002"},{"Symbol":"YHOO","Date":"2014-11-03","Open":"46.049999","High":"46.720001","Low":"45.939999","Close":"46.34","Volume":"17181500","Adj_Close":"46.34"},{"Symbol":"YHOO","Date":"2014-10-31","Open":"46.16","High":"46.52","Low":"45.669998","Close":"46.049999","Volume":"18446800","Adj_Close":"46.049999"},{"Symbol":"YHOO","Date":"2014-10-30","Open":"45.209999","High":"45.84","Low":"45.130001","Close":"45.630001","Volume":"16205500","Adj_Close":"45.630001"},{"Symbol":"YHOO","Date":"2014-10-29","Open":"45.939999","High":"45.98","Low":"45.130001","Close":"45.43","Volume":"25389100","Adj_Close":"45.43"},{"Symbol":"YHOO","Date":"2014-10-28","Open":"45.009998","High":"46.150002","Low":"44.880001","Close":"45.869999","Volume":"36834900","Adj_Close":"45.869999"},{"Symbol":"YHOO","Date":"2014-10-27","Open":"43.310001","High":"44.82","Low":"43.290001","Close":"44.700001","Volume":"36596500","Adj_Close":"44.700001"},{"Symbol":"YHOO","Date":"2014-10-24","Open":"42.529999","High":"43.650002","Low":"42.400002","Close":"43.50","Volume":"33805800","Adj_Close":"43.50"},{"Symbol":"YHOO","Date":"2014-10-23","Open":"42.400002","High":"42.830002","Low":"42.259998","Close":"42.599998","Volume":"30653400","Adj_Close":"42.599998"},{"Symbol":"YHOO","Date":"2014-10-22","Open":"42.419998","High":"42.880001","Low":"41.77","Close":"42.00","Volume":"69348900","Adj_Close":"42.00"},{"Symbol":"YHOO","Date":"2014-10-21","Open":"39.650002","High":"40.48","Low":"39.459999","Close":"40.18","Volume":"41955200","Adj_Close":"40.18"},{"Symbol":"YHOO","Date":"2014-10-20","Open":"38.470001","High":"39.400002","Low":"38.25","Close":"39.279999","Volume":"17802400","Adj_Close":"39.279999"},{"Symbol":"YHOO","Date":"2014-10-17","Open":"38.740002","High":"38.98","Low":"38.310001","Close":"38.450001","Volume":"24107000","Adj_Close":"38.450001"},{"Symbol":"YHOO","Date":"2014-10-16","Open":"36.950001","High":"38.50","Low":"36.919998","Close":"38.119999","Volume":"26998500","Adj_Close":"38.119999"},{"Symbol":"YHOO","Date":"2014-10-15","Open":"37.27","High":"38.080002","Low":"36.200001","Close":"37.82","Volume":"41973500","Adj_Close":"37.82"},{"Symbol":"YHOO","Date":"2014-10-14","Open":"38.66","High":"39.00","Low":"37.709999","Close":"37.970001","Volume":"38509000","Adj_Close":"37.970001"},{"Symbol":"YHOO","Date":"2014-10-13","Open":"39.52","High":"40.07","Low":"38.290001","Close":"38.380001","Volume":"38841900","Adj_Close":"38.380001"},{"Symbol":"YHOO","Date":"2014-10-10","Open":"40.73","High":"41.07","Low":"39.59","Close":"39.599998","Volume":"36771500","Adj_Close":"39.599998"},{"Symbol":"YHOO","Date":"2014-10-09","Open":"40.900002","High":"41.25","Low":"40.419998","Close":"41.099998","Volume":"33519600","Adj_Close":"41.099998"},{"Symbol":"YHOO","Date":"2014-10-08","Open":"41.00","High":"41.290001","Low":"40.099998","Close":"41.080002","Volume":"26593500","Adj_Close":"41.080002"},{"Symbol":"YHOO","Date":"2014-10-07","Open":"41.060001","High":"41.290001","Low":"40.779999","Close":"40.93","Volume":"22538300","Adj_Close":"40.93"},{"Symbol":"YHOO","Date":"2014-10-06","Open":"41.200001","High":"41.73","Low":"41.040001","Close":"41.52","Volume":"23576100","Adj_Close":"41.52"},{"Symbol":"YHOO","Date":"2014-10-03","Open":"40.790001","High":"41.689999","Low":"40.650002","Close":"41.029999","Volume":"38191700","Adj_Close":"41.029999"},{"Symbol":"YHOO","Date":"2014-10-02","Open":"40.240002","High":"40.639999","Low":"39.689999","Close":"40.50","Volume":"24584400","Adj_Close":"40.50"},{"Symbol":"YHOO","Date":"2014-10-01","Open":"40.66","High":"41.240002","Low":"40.110001","Close":"40.32","Volume":"35172900","Adj_Close":"40.32"},{"Symbol":"YHOO","Date":"2014-09-30","Open":"40.580002","High":"41.23","Low":"40.439999","Close":"40.75","Volume":"30386500","Adj_Close":"40.75"},{"Symbol":"YHOO","Date":"2014-09-29","Open":"40.41","High":"41.09","Low":"40.16","Close":"40.52","Volume":"35883300","Adj_Close":"40.52"},{"Symbol":"YHOO","Date":"2014-09-26","Open":"39.009998","High":"40.799999","Low":"39.00","Close":"40.66","Volume":"62189200","Adj_Close":"40.66"},{"Symbol":"YHOO","Date":"2014-09-25","Open":"39.560001","High":"39.799999","Low":"38.82","Close":"38.950001","Volume":"35916500","Adj_Close":"38.950001"},{"Symbol":"YHOO","Date":"2014-09-24","Open":"39.259998","High":"40.099998","Low":"38.91","Close":"39.880001","Volume":"49014100","Adj_Close":"39.880001"},{"Symbol":"YHOO","Date":"2014-09-23","Open":"38.150002","High":"39.27","Low":"37.900002","Close":"39.049999","Volume":"66105300","Adj_Close":"39.049999"},{"Symbol":"YHOO","Date":"2014-09-22","Open":"39.77","High":"40.040001","Low":"38.220001","Close":"38.650002","Volume":"109217100","Adj_Close":"38.650002"},{"Symbol":"YHOO","Date":"2014-09-19","Open":"42.439999","High":"43.189999","Low":"39.549999","Close":"40.93","Volume":"233872100","Adj_Close":"40.93"},{"Symbol":"YHOO","Date":"2014-09-18","Open":"43.049999","High":"43.32","Low":"41.419998","Close":"42.09","Volume":"93702100","Adj_Close":"42.09"},{"Symbol":"YHOO","Date":"2014-09-17","Open":"42.369999","High":"42.959999","Low":"42.299999","Close":"42.59","Volume":"39495500","Adj_Close":"42.59"},{"Symbol":"YHOO","Date":"2014-09-16","Open":"42.610001","High":"42.959999","Low":"41.689999","Close":"42.709999","Volume":"61490700","Adj_Close":"42.709999"},{"Symbol":"YHOO","Date":"2014-09-15","Open":"43.98","High":"44.009998","Low":"42.139999","Close":"42.549999","Volume":"72409900","Adj_Close":"42.549999"},{"Symbol":"YHOO","Date":"2014-09-12","Open":"41.73","High":"43.200001","Low":"41.50","Close":"42.880001","Volume":"69745500","Adj_Close":"42.880001"},{"Symbol":"YHOO","Date":"2014-09-11","Open":"41.02","High":"41.560001","Low":"40.93","Close":"41.259998","Volume":"25203000","Adj_Close":"41.259998"},{"Symbol":"YHOO","Date":"2014-09-10","Open":"41.049999","High":"41.23","Low":"40.330002","Close":"41.139999","Volume":"30741800","Adj_Close":"41.139999"},{"Symbol":"YHOO","Date":"2014-09-09","Open":"42.009998","High":"42.060001","Low":"40.599998","Close":"40.779999","Volume":"52683000","Adj_Close":"40.779999"},{"Symbol":"YHOO","Date":"2014-09-08","Open":"40.34","High":"41.82","Low":"40.259998","Close":"41.810001","Volume":"75520200","Adj_Close":"41.810001"},{"Symbol":"YHOO","Date":"2014-09-05","Open":"39.049999","High":"39.799999","Low":"39.049999","Close":"39.59","Volume":"26200400","Adj_Close":"39.59"},{"Symbol":"YHOO","Date":"2014-09-04","Open":"39.139999","High":"39.34","Low":"38.959999","Close":"39.189999","Volume":"14763300","Adj_Close":"39.189999"},{"Symbol":"YHOO","Date":"2014-09-03","Open":"39.490002","High":"39.599998","Low":"38.689999","Close":"38.869999","Volume":"16092900","Adj_Close":"38.869999"},{"Symbol":"YHOO","Date":"2014-09-02","Open":"38.900002","High":"39.299999","Low":"38.790001","Close":"39.27","Volume":"19803300","Adj_Close":"39.27"},{"Symbol":"YHOO","Date":"2014-08-29","Open":"38.57","High":"38.669998","Low":"38.200001","Close":"38.509998","Volume":"11634100","Adj_Close":"38.509998"},{"Symbol":"YHOO","Date":"2014-08-28","Open":"38.09","High":"38.57","Low":"37.900002","Close":"38.310001","Volume":"16490600","Adj_Close":"38.310001"},{"Symbol":"YHOO","Date":"2014-08-27","Open":"38.299999","High":"38.720001","Low":"37.830002","Close":"38.18","Volume":"24843000","Adj_Close":"38.18"},{"Symbol":"YHOO","Date":"2014-08-26","Open":"37.759998","High":"37.919998","Low":"37.560001","Close":"37.790001","Volume":"9516800","Adj_Close":"37.790001"},{"Symbol":"YHOO","Date":"2014-08-25","Open":"38.139999","High":"38.220001","Low":"37.540001","Close":"37.709999","Volume":"14356400","Adj_Close":"37.709999"},{"Symbol":"YHOO","Date":"2014-08-22","Open":"37.700001","High":"38.200001","Low":"37.639999","Close":"38.009998","Volume":"14879100","Adj_Close":"38.009998"},{"Symbol":"YHOO","Date":"2014-08-21","Open":"37.650002","High":"37.75","Low":"37.310001","Close":"37.639999","Volume":"12254900","Adj_Close":"37.639999"},{"Symbol":"YHOO","Date":"2014-08-20","Open":"37.610001","High":"37.75","Low":"37.310001","Close":"37.50","Volume":"12670300","Adj_Close":"37.50"},{"Symbol":"YHOO","Date":"2014-08-19","Open":"37.560001","High":"37.939999","Low":"37.50","Close":"37.830002","Volume":"17084900","Adj_Close":"37.830002"},{"Symbol":"YHOO","Date":"2014-08-18","Open":"36.77","High":"37.77","Low":"36.75","Close":"37.380001","Volume":"20153200","Adj_Close":"37.380001"},{"Symbol":"YHOO","Date":"2014-08-15","Open":"36.200001","High":"36.57","Low":"36.119999","Close":"36.470001","Volume":"13338900","Adj_Close":"36.470001"},{"Symbol":"YHOO","Date":"2014-08-14","Open":"36.32","High":"36.419998","Low":"36.169998","Close":"36.360001","Volume":"8927300","Adj_Close":"36.360001"},{"Symbol":"YHOO","Date":"2014-08-13","Open":"35.959999","High":"36.450001","Low":"35.77","Close":"36.189999","Volume":"16532300","Adj_Close":"36.189999"},{"Symbol":"YHOO","Date":"2014-08-12","Open":"35.799999","High":"35.990002","Low":"35.150002","Close":"35.52","Volume":"12902700","Adj_Close":"35.52"},{"Symbol":"YHOO","Date":"2014-08-11","Open":"36.099998","High":"36.150002","Low":"35.75","Close":"35.790001","Volume":"8660100","Adj_Close":"35.790001"},{"Symbol":"YHOO","Date":"2014-08-08","Open":"35.73","High":"35.959999","Low":"35.400002","Close":"35.91","Volume":"10593700","Adj_Close":"35.91"},{"Symbol":"YHOO","Date":"2014-08-07","Open":"36.00","High":"36.00","Low":"35.529999","Close":"35.66","Volume":"11306600","Adj_Close":"35.66"},{"Symbol":"YHOO","Date":"2014-08-06","Open":"35.580002","High":"35.939999","Low":"35.439999","Close":"35.790001","Volume":"11770500","Adj_Close":"35.790001"},{"Symbol":"YHOO","Date":"2014-08-05","Open":"36.32","High":"36.419998","Low":"35.619999","Close":"35.700001","Volume":"17636400","Adj_Close":"35.700001"},{"Symbol":"YHOO","Date":"2014-08-04","Open":"35.709999","High":"36.66","Low":"35.650002","Close":"36.529999","Volume":"13097200","Adj_Close":"36.529999"},{"Symbol":"YHOO","Date":"2014-08-01","Open":"35.689999","High":"36.080002","Low":"35.310001","Close":"35.619999","Volume":"14573000","Adj_Close":"35.619999"},{"Symbol":"YHOO","Date":"2014-07-31","Open":"36.259998","High":"36.490002","Low":"35.68","Close":"35.810001","Volume":"17937400","Adj_Close":"35.810001"},{"Symbol":"YHOO","Date":"2014-07-30","Open":"35.939999","High":"36.990002","Low":"35.799999","Close":"36.599998","Volume":"29876700","Adj_Close":"36.599998"},{"Symbol":"YHOO","Date":"2014-07-29","Open":"35.91","High":"36.16","Low":"35.669998","Close":"35.68","Volume":"11570900","Adj_Close":"35.68"},{"Symbol":"YHOO","Date":"2014-07-28","Open":"36.23","High":"36.23","Low":"35.509998","Close":"35.900002","Volume":"14607200","Adj_Close":"35.900002"},{"Symbol":"YHOO","Date":"2014-07-25","Open":"36.00","High":"36.330002","Low":"35.75","Close":"36.119999","Volume":"20143800","Adj_Close":"36.119999"},{"Symbol":"YHOO","Date":"2014-07-24","Open":"35.09","High":"36.549999","Low":"35.040001","Close":"36.169998","Volume":"47391000","Adj_Close":"36.169998"},{"Symbol":"YHOO","Date":"2014-07-23","Open":"33.779999","High":"34.919998","Low":"33.68","Close":"34.709999","Volume":"38622500","Adj_Close":"34.709999"},{"Symbol":"YHOO","Date":"2014-07-22","Open":"33.48","High":"33.84","Low":"33.400002","Close":"33.599998","Volume":"18153600","Adj_Close":"33.599998"},{"Symbol":"YHOO","Date":"2014-07-21","Open":"33.349998","High":"33.639999","Low":"33.16","Close":"33.279999","Volume":"18431000","Adj_Close":"33.279999"},{"Symbol":"YHOO","Date":"2014-07-18","Open":"33.18","High":"33.349998","Low":"32.93","Close":"33.330002","Volume":"21540900","Adj_Close":"33.330002"},{"Symbol":"YHOO","Date":"2014-07-17","Open":"33.82","High":"33.900002","Low":"32.98","Close":"33.209999","Volume":"37535900","Adj_Close":"33.209999"},{"Symbol":"YHOO","Date":"2014-07-16","Open":"34.419998","High":"34.450001","Low":"33.720001","Close":"33.790001","Volume":"56260600","Adj_Close":"33.790001"},{"Symbol":"YHOO","Date":"2014-07-15","Open":"35.720001","High":"35.939999","Low":"35.200001","Close":"35.610001","Volume":"36316600","Adj_Close":"35.610001"},{"Symbol":"YHOO","Date":"2014-07-14","Open":"35.799999","High":"35.950001","Low":"35.450001","Close":"35.700001","Volume":"18680500","Adj_Close":"35.700001"},{"Symbol":"YHOO","Date":"2014-07-11","Open":"34.950001","High":"35.560001","Low":"34.779999","Close":"35.43","Volume":"18379500","Adj_Close":"35.43"},{"Symbol":"YHOO","Date":"2014-07-10","Open":"34.330002","High":"34.970001","Low":"34.099998","Close":"34.93","Volume":"18064800","Adj_Close":"34.93"},{"Symbol":"YHOO","Date":"2014-07-09","Open":"34.68","High":"35.07","Low":"34.68","Close":"34.849998","Volume":"12626900","Adj_Close":"34.849998"},{"Symbol":"YHOO","Date":"2014-07-08","Open":"35.639999","High":"35.66","Low":"34.279999","Close":"34.529999","Volume":"23096900","Adj_Close":"34.529999"},{"Symbol":"YHOO","Date":"2014-07-07","Open":"36.150002","High":"36.23","Low":"35.48","Close":"35.52","Volume":"15716800","Adj_Close":"35.52"},{"Symbol":"YHOO","Date":"2014-07-03","Open":"36.07","High":"36.150002","Low":"35.900002","Close":"36.139999","Volume":"8604900","Adj_Close":"36.139999"},{"Symbol":"YHOO","Date":"2014-07-02","Open":"35.619999","High":"35.91","Low":"35.400002","Close":"35.880001","Volume":"16533600","Adj_Close":"35.880001"},{"Symbol":"YHOO","Date":"2014-07-01","Open":"35.50","High":"35.700001","Low":"35.209999","Close":"35.349998","Volume":"18609600","Adj_Close":"35.349998"},{"Symbol":"YHOO","Date":"2014-06-30","Open":"34.93","High":"35.259998","Low":"34.849998","Close":"35.130001","Volume":"20450100","Adj_Close":"35.130001"},{"Symbol":"YHOO","Date":"2014-06-27","Open":"33.849998","High":"34.549999","Low":"33.700001","Close":"34.25","Volume":"25500600","Adj_Close":"34.25"},{"Symbol":"YHOO","Date":"2014-06-26","Open":"33.25","High":"33.75","Low":"33.02","Close":"33.66","Volume":"16010000","Adj_Close":"33.66"},{"Symbol":"YHOO","Date":"2014-06-25","Open":"33.380001","High":"33.650002","Low":"33.099998","Close":"33.25","Volume":"18074400","Adj_Close":"33.25"},{"Symbol":"YHOO","Date":"2014-06-24","Open":"33.790001","High":"33.990002","Low":"33.349998","Close":"33.48","Volume":"14589800","Adj_Close":"33.48"},{"Symbol":"YHOO","Date":"2014-06-23","Open":"34.130001","High":"34.220001","Low":"33.369999","Close":"33.639999","Volume":"26206400","Adj_Close":"33.639999"},{"Symbol":"YHOO","Date":"2014-06-20","Open":"34.810001","High":"34.810001","Low":"33.970001","Close":"34.049999","Volume":"21605800","Adj_Close":"34.049999"},{"Symbol":"YHOO","Date":"2014-06-19","Open":"35.139999","High":"35.200001","Low":"34.52","Close":"34.68","Volume":"16200000","Adj_Close":"34.68"},{"Symbol":"YHOO","Date":"2014-06-18","Open":"34.669998","High":"35.009998","Low":"34.259998","Close":"34.939999","Volume":"17836000","Adj_Close":"34.939999"},{"Symbol":"YHOO","Date":"2014-06-17","Open":"34.799999","High":"34.939999","Low":"34.299999","Close":"34.43","Volume":"24402900","Adj_Close":"34.43"},{"Symbol":"YHOO","Date":"2014-06-16","Open":"35.00","High":"35.490002","Low":"34.77","Close":"34.810001","Volume":"32432300","Adj_Close":"34.810001"},{"Symbol":"YHOO","Date":"2014-06-13","Open":"36.880001","High":"37.060001","Low":"36.639999","Close":"36.939999","Volume":"12926300","Adj_Close":"36.939999"},{"Symbol":"YHOO","Date":"2014-06-12","Open":"36.50","High":"36.790001","Low":"36.34","Close":"36.779999","Volume":"12466100","Adj_Close":"36.779999"},{"Symbol":"YHOO","Date":"2014-06-11","Open":"36.25","High":"36.84","Low":"36.110001","Close":"36.630001","Volume":"13321500","Adj_Close":"36.630001"},{"Symbol":"YHOO","Date":"2014-06-10","Open":"35.869999","High":"36.52","Low":"35.860001","Close":"36.310001","Volume":"9179300","Adj_Close":"36.310001"},{"Symbol":"YHOO","Date":"2014-06-09","Open":"35.860001","High":"36.32","Low":"35.540001","Close":"36.040001","Volume":"14390000","Adj_Close":"36.040001"},{"Symbol":"YHOO","Date":"2014-06-06","Open":"35.060001","High":"36.080002","Low":"35.049999","Close":"35.919998","Volume":"18707200","Adj_Close":"35.919998"},{"Symbol":"YHOO","Date":"2014-06-05","Open":"34.790001","High":"34.990002","Low":"34.360001","Close":"34.939999","Volume":"11192800","Adj_Close":"34.939999"},{"Symbol":"YHOO","Date":"2014-06-04","Open":"34.48","High":"34.830002","Low":"34.259998","Close":"34.73","Volume":"9434100","Adj_Close":"34.73"},{"Symbol":"YHOO","Date":"2014-06-03","Open":"34.799999","High":"34.970001","Low":"34.580002","Close":"34.650002","Volume":"6557500","Adj_Close":"34.650002"},{"Symbol":"YHOO","Date":"2014-06-02","Open":"34.689999","High":"34.950001","Low":"34.279999","Close":"34.869999","Volume":"9178900","Adj_Close":"34.869999"},{"Symbol":"YHOO","Date":"2014-05-30","Open":"34.919998","High":"34.93","Low":"34.130001","Close":"34.650002","Volume":"13153000","Adj_Close":"34.650002"},{"Symbol":"YHOO","Date":"2014-05-29","Open":"34.900002","High":"35.099998","Low":"34.669998","Close":"34.900002","Volume":"9780800","Adj_Close":"34.900002"},{"Symbol":"YHOO","Date":"2014-05-28","Open":"35.150002","High":"35.169998","Low":"34.419998","Close":"34.779999","Volume":"16960500","Adj_Close":"34.779999"},{"Symbol":"YHOO","Date":"2014-05-27","Open":"35.00","High":"35.130001","Low":"34.73","Close":"35.119999","Volume":"13057000","Adj_Close":"35.119999"},{"Symbol":"YHOO","Date":"2014-05-23","Open":"34.849998","High":"35.080002","Low":"34.509998","Close":"35.02","Volume":"16294400","Adj_Close":"35.02"},{"Symbol":"YHOO","Date":"2014-05-22","Open":"34.599998","High":"34.860001","Low":"34.259998","Close":"34.700001","Volume":"17522800","Adj_Close":"34.700001"},{"Symbol":"YHOO","Date":"2014-05-21","Open":"34.00","High":"34.389999","Low":"33.889999","Close":"34.360001","Volume":"13804500","Adj_Close":"34.360001"},{"Symbol":"YHOO","Date":"2014-05-20","Open":"33.990002","High":"34.470001","Low":"33.669998","Close":"33.869999","Volume":"18596700","Adj_Close":"33.869999"},{"Symbol":"YHOO","Date":"2014-05-19","Open":"33.41","High":"33.990002","Low":"33.279999","Close":"33.889999","Volume":"14845700","Adj_Close":"33.889999"},{"Symbol":"YHOO","Date":"2014-05-16","Open":"33.66","High":"33.66","Low":"33.099998","Close":"33.41","Volume":"18847100","Adj_Close":"33.41"},{"Symbol":"YHOO","Date":"2014-05-15","Open":"34.18","High":"34.189999","Low":"33.400002","Close":"33.799999","Volume":"18879800","Adj_Close":"33.799999"},{"Symbol":"YHOO","Date":"2014-05-14","Open":"34.48","High":"34.650002","Low":"33.98","Close":"34.169998","Volume":"17039000","Adj_Close":"34.169998"},{"Symbol":"YHOO","Date":"2014-05-13","Open":"34.43","High":"34.689999","Low":"34.169998","Close":"34.400002","Volume":"12477100","Adj_Close":"34.400002"},{"Symbol":"YHOO","Date":"2014-05-12","Open":"33.990002","High":"34.599998","Low":"33.869999","Close":"34.450001","Volume":"22520600","Adj_Close":"34.450001"},{"Symbol":"YHOO","Date":"2014-05-09","Open":"34.009998","High":"34.099998","Low":"33.41","Close":"33.759998","Volume":"20303400","Adj_Close":"33.759998"},{"Symbol":"YHOO","Date":"2014-05-08","Open":"33.880001","High":"34.57","Low":"33.610001","Close":"33.919998","Volume":"30407700","Adj_Close":"33.919998"},{"Symbol":"YHOO","Date":"2014-05-07","Open":"35.990002","High":"35.990002","Low":"33.669998","Close":"34.07","Volume":"66062700","Adj_Close":"34.07"},{"Symbol":"YHOO","Date":"2014-05-06","Open":"36.939999","High":"37.169998","Low":"36.48","Close":"36.490002","Volume":"19156000","Adj_Close":"36.490002"},{"Symbol":"YHOO","Date":"2014-05-05","Open":"36.68","High":"37.049999","Low":"36.299999","Close":"36.91","Volume":"13129100","Adj_Close":"36.91"},{"Symbol":"YHOO","Date":"2014-05-02","Open":"36.59","High":"37.119999","Low":"36.209999","Close":"36.869999","Volume":"22454100","Adj_Close":"36.869999"},{"Symbol":"YHOO","Date":"2014-05-01","Open":"36.259998","High":"36.689999","Low":"36.00","Close":"36.509998","Volume":"19474700","Adj_Close":"36.509998"},{"Symbol":"YHOO","Date":"2014-04-30","Open":"35.889999","High":"36.439999","Low":"35.25","Close":"35.950001","Volume":"23341500","Adj_Close":"35.950001"},{"Symbol":"YHOO","Date":"2014-04-29","Open":"34.369999","High":"35.889999","Low":"34.119999","Close":"35.830002","Volume":"28736000","Adj_Close":"35.830002"},{"Symbol":"YHOO","Date":"2014-04-28","Open":"34.669998","High":"35.00","Low":"33.650002","Close":"33.990002","Volume":"31019200","Adj_Close":"33.990002"},{"Symbol":"YHOO","Date":"2014-04-25","Open":"35.029999","High":"35.099998","Low":"34.290001","Close":"34.48","Volume":"19401600","Adj_Close":"34.48"},{"Symbol":"YHOO","Date":"2014-04-24","Open":"35.82","High":"35.82","Low":"34.77","Close":"35.240002","Volume":"17242300","Adj_Close":"35.240002"},{"Symbol":"YHOO","Date":"2014-04-23","Open":"36.080002","High":"36.189999","Low":"35.400002","Close":"35.439999","Volume":"19051700","Adj_Close":"35.439999"},{"Symbol":"YHOO","Date":"2014-04-22","Open":"36.709999","High":"36.849998","Low":"36.110001","Close":"36.139999","Volume":"17915200","Adj_Close":"36.139999"},{"Symbol":"YHOO","Date":"2014-04-21","Open":"36.599998","High":"36.650002","Low":"35.889999","Close":"36.400002","Volume":"16685400","Adj_Close":"36.400002"},{"Symbol":"YHOO","Date":"2014-04-17","Open":"36.290001","High":"36.599998","Low":"35.549999","Close":"36.380001","Volume":"28932700","Adj_Close":"36.380001"},{"Symbol":"YHOO","Date":"2014-04-16","Open":"36.98","High":"37.299999","Low":"35.810001","Close":"36.349998","Volume":"61599100","Adj_Close":"36.349998"},{"Symbol":"YHOO","Date":"2014-04-15","Open":"33.93","High":"34.279999","Low":"32.639999","Close":"34.209999","Volume":"50600400","Adj_Close":"34.209999"},{"Symbol":"YHOO","Date":"2014-04-14","Open":"33.549999","High":"34.040001","Low":"33.040001","Close":"33.450001","Volume":"26322600","Adj_Close":"33.450001"},{"Symbol":"YHOO","Date":"2014-04-11","Open":"32.639999","High":"33.48","Low":"32.150002","Close":"32.869999","Volume":"28040700","Adj_Close":"32.869999"},{"Symbol":"YHOO","Date":"2014-04-10","Open":"34.880001","High":"34.98","Low":"33.09","Close":"33.400002","Volume":"34024900","Adj_Close":"33.400002"},{"Symbol":"YHOO","Date":"2014-04-09","Open":"34.189999","High":"35.00","Low":"33.950001","Close":"34.869999","Volume":"21651200","Adj_Close":"34.869999"},{"Symbol":"YHOO","Date":"2014-04-08","Open":"33.099998","High":"34.43","Low":"33.02","Close":"33.830002","Volume":"35486100","Adj_Close":"33.830002"},{"Symbol":"YHOO","Date":"2014-04-07","Open":"34.110001","High":"34.369999","Low":"32.529999","Close":"33.07","Volume":"47770200","Adj_Close":"33.07"},{"Symbol":"YHOO","Date":"2014-04-04","Open":"36.009998","High":"36.049999","Low":"33.830002","Close":"34.259998","Volume":"41049900","Adj_Close":"34.259998"},{"Symbol":"YHOO","Date":"2014-04-03","Open":"36.66","High":"36.790001","Low":"35.509998","Close":"35.759998","Volume":"16827800","Adj_Close":"35.759998"},{"Symbol":"YHOO","Date":"2014-04-02","Open":"36.68","High":"36.860001","Low":"36.560001","Close":"36.639999","Volume":"14522800","Adj_Close":"36.639999"},{"Symbol":"YHOO","Date":"2014-04-01","Open":"36.16","High":"36.860001","Low":"36.150002","Close":"36.490002","Volume":"15734000","Adj_Close":"36.490002"},{"Symbol":"YHOO","Date":"2014-03-31","Open":"36.459999","High":"36.580002","Low":"35.73","Close":"35.900002","Volume":"15153200","Adj_Close":"35.900002"},{"Symbol":"YHOO","Date":"2014-03-28","Open":"35.77","High":"36.73","Low":"35.529999","Close":"35.900002","Volume":"18292900","Adj_Close":"35.900002"},{"Symbol":"YHOO","Date":"2014-03-27","Open":"35.50","High":"36.150002","Low":"35.049999","Close":"35.59","Volume":"21929600","Adj_Close":"35.59"},{"Symbol":"YHOO","Date":"2014-03-26","Open":"36.240002","High":"36.740002","Low":"35.450001","Close":"35.450001","Volume":"20938800","Adj_Close":"35.450001"},{"Symbol":"YHOO","Date":"2014-03-25","Open":"37.00","High":"37.07","Low":"35.860001","Close":"35.93","Volume":"31715100","Adj_Close":"35.93"},{"Symbol":"YHOO","Date":"2014-03-24","Open":"38.00","High":"38.040001","Low":"36.279999","Close":"36.68","Volume":"29589000","Adj_Close":"36.68"},{"Symbol":"YHOO","Date":"2014-03-21","Open":"38.099998","High":"38.27","Low":"37.73","Close":"37.939999","Volume":"16044200","Adj_Close":"37.939999"},{"Symbol":"YHOO","Date":"2014-03-20","Open":"38.369999","High":"38.470001","Low":"37.419998","Close":"37.77","Volume":"19517000","Adj_Close":"37.77"},{"Symbol":"YHOO","Date":"2014-03-19","Open":"39.66","High":"39.939999","Low":"38.509998","Close":"38.610001","Volume":"19324600","Adj_Close":"38.610001"},{"Symbol":"YHOO","Date":"2014-03-18","Open":"39.00","High":"39.509998","Low":"38.799999","Close":"39.450001","Volume":"16934700","Adj_Close":"39.450001"},{"Symbol":"YHOO","Date":"2014-03-17","Open":"39.00","High":"39.360001","Low":"38.610001","Close":"39.110001","Volume":"29698300","Adj_Close":"39.110001"},{"Symbol":"YHOO","Date":"2014-03-14","Open":"36.689999","High":"38.189999","Low":"36.450001","Close":"37.599998","Volume":"30862300","Adj_Close":"37.599998"},{"Symbol":"YHOO","Date":"2014-03-13","Open":"38.049999","High":"38.419998","Low":"36.810001","Close":"37.23","Volume":"21179700","Adj_Close":"37.23"},{"Symbol":"YHOO","Date":"2014-03-12","Open":"37.209999","High":"37.610001","Low":"36.48","Close":"37.50","Volume":"14794700","Adj_Close":"37.50"},{"Symbol":"YHOO","Date":"2014-03-11","Open":"38.25","High":"38.299999","Low":"37.43","Close":"37.560001","Volume":"12592300","Adj_Close":"37.560001"},{"Symbol":"YHOO","Date":"2014-03-10","Open":"38.630001","High":"38.779999","Low":"37.91","Close":"38.049999","Volume":"11819200","Adj_Close":"38.049999"},{"Symbol":"YHOO","Date":"2014-03-07","Open":"39.709999","High":"39.91","Low":"38.450001","Close":"38.700001","Volume":"14455500","Adj_Close":"38.700001"},{"Symbol":"YHOO","Date":"2014-03-06","Open":"39.599998","High":"39.98","Low":"39.50","Close":"39.66","Volume":"10626700","Adj_Close":"39.66"},{"Symbol":"YHOO","Date":"2014-03-05","Open":"39.830002","High":"40.150002","Low":"39.189999","Close":"39.50","Volume":"12536800","Adj_Close":"39.50"},{"Symbol":"YHOO","Date":"2014-03-04","Open":"38.759998","High":"39.790001","Low":"38.68","Close":"39.630001","Volume":"16139400","Adj_Close":"39.630001"},{"Symbol":"YHOO","Date":"2014-03-03","Open":"37.650002","High":"38.66","Low":"37.43","Close":"38.25","Volume":"14714700","Adj_Close":"38.25"},{"Symbol":"YHOO","Date":"2014-02-28","Open":"38.549999","High":"39.380001","Low":"38.220001","Close":"38.669998","Volume":"16957100","Adj_Close":"38.669998"},{"Symbol":"YHOO","Date":"2014-02-27","Open":"37.799999","High":"38.48","Low":"37.740002","Close":"38.470001","Volume":"15489400","Adj_Close":"38.470001"},{"Symbol":"YHOO","Date":"2014-02-26","Open":"37.349998","High":"38.099998","Low":"37.34","Close":"37.619999","Volume":"15778900","Adj_Close":"37.619999"},{"Symbol":"YHOO","Date":"2014-02-25","Open":"37.48","High":"37.580002","Low":"37.02","Close":"37.259998","Volume":"9756900","Adj_Close":"37.259998"},{"Symbol":"YHOO","Date":"2014-02-24","Open":"37.23","High":"37.709999","Low":"36.82","Close":"37.419998","Volume":"15738900","Adj_Close":"37.419998"},{"Symbol":"YHOO","Date":"2014-02-21","Open":"37.900002","High":"37.959999","Low":"37.220001","Close":"37.290001","Volume":"12351900","Adj_Close":"37.290001"},{"Symbol":"YHOO","Date":"2014-02-20","Open":"37.830002","High":"38.040001","Low":"37.299999","Close":"37.790001","Volume":"11155900","Adj_Close":"37.790001"},{"Symbol":"YHOO","Date":"2014-02-19","Open":"38.060001","High":"38.330002","Low":"37.68","Close":"37.810001","Volume":"15851900","Adj_Close":"37.810001"},{"Symbol":"YHOO","Date":"2014-02-18","Open":"38.310001","High":"38.59","Low":"38.09","Close":"38.310001","Volume":"12096400","Adj_Close":"38.310001"},{"Symbol":"YHOO","Date":"2014-02-14","Open":"38.43","High":"38.450001","Low":"38.110001","Close":"38.23","Volume":"9975800","Adj_Close":"38.23"},{"Symbol":"YHOO","Date":"2014-02-13","Open":"37.919998","High":"38.689999","Low":"37.790001","Close":"38.52","Volume":"12088100","Adj_Close":"38.52"},{"Symbol":"YHOO","Date":"2014-02-12","Open":"38.599998","High":"38.91","Low":"38.029999","Close":"38.110001","Volume":"14088500","Adj_Close":"38.110001"},{"Symbol":"YHOO","Date":"2014-02-11","Open":"38.150002","High":"38.860001","Low":"38.09","Close":"38.50","Volume":"18348000","Adj_Close":"38.50"},{"Symbol":"YHOO","Date":"2014-02-10","Open":"38.00","High":"38.130001","Low":"37.25","Close":"37.759998","Volume":"17642900","Adj_Close":"37.759998"},{"Symbol":"YHOO","Date":"2014-02-07","Open":"36.650002","High":"37.27","Low":"36.240002","Close":"37.23","Volume":"16178500","Adj_Close":"37.23"},{"Symbol":"YHOO","Date":"2014-02-06","Open":"35.650002","High":"36.75","Low":"35.610001","Close":"36.240002","Volume":"14250000","Adj_Close":"36.240002"},{"Symbol":"YHOO","Date":"2014-02-05","Open":"35.599998","High":"35.939999","Low":"34.990002","Close":"35.490002","Volume":"14022900","Adj_Close":"35.490002"},{"Symbol":"YHOO","Date":"2014-02-04","Open":"35.110001","High":"35.860001","Low":"34.860001","Close":"35.66","Volume":"21082500","Adj_Close":"35.66"},{"Symbol":"YHOO","Date":"2014-02-03","Open":"35.939999","High":"36.009998","Low":"34.66","Close":"34.900002","Volume":"22195200","Adj_Close":"34.900002"},{"Symbol":"YHOO","Date":"2014-01-31","Open":"34.689999","High":"36.330002","Low":"34.549999","Close":"36.009998","Volume":"30072400","Adj_Close":"36.009998"},{"Symbol":"YHOO","Date":"2014-01-30","Open":"34.889999","High":"35.810001","Low":"34.450001","Close":"35.310001","Volume":"32244700","Adj_Close":"35.310001"},{"Symbol":"YHOO","Date":"2014-01-29","Open":"35.77","High":"36.310001","Low":"34.82","Close":"34.889999","Volume":"67190500","Adj_Close":"34.889999"},{"Symbol":"YHOO","Date":"2014-01-28","Open":"36.830002","High":"38.32","Low":"36.52","Close":"38.220001","Volume":"39765300","Adj_Close":"38.220001"},{"Symbol":"YHOO","Date":"2014-01-27","Open":"37.599998","High":"37.939999","Low":"36.619999","Close":"36.650002","Volume":"26728000","Adj_Close":"36.650002"},{"Symbol":"YHOO","Date":"2014-01-24","Open":"38.669998","High":"38.98","Low":"37.619999","Close":"37.91","Volume":"26309000","Adj_Close":"37.91"},{"Symbol":"YHOO","Date":"2014-01-23","Open":"39.310001","High":"39.77","Low":"39.139999","Close":"39.389999","Volume":"15384300","Adj_Close":"39.389999"},{"Symbol":"YHOO","Date":"2014-01-22","Open":"39.66","High":"40.400002","Low":"39.32","Close":"40.18","Volume":"12994600","Adj_Close":"40.18"},{"Symbol":"YHOO","Date":"2014-01-21","Open":"39.98","High":"40.049999","Low":"38.860001","Close":"39.52","Volume":"21436400","Adj_Close":"39.52"},{"Symbol":"YHOO","Date":"2014-01-17","Open":"40.119999","High":"40.439999","Low":"39.470001","Close":"40.009998","Volume":"19262500","Adj_Close":"40.009998"},{"Symbol":"YHOO","Date":"2014-01-16","Open":"40.43","High":"40.75","Low":"40.110001","Close":"40.34","Volume":"16348200","Adj_Close":"40.34"},{"Symbol":"YHOO","Date":"2014-01-15","Open":"41.060001","High":"41.310001","Low":"40.759998","Close":"41.07","Volume":"9475500","Adj_Close":"41.07"},{"Symbol":"YHOO","Date":"2014-01-14","Open":"40.209999","High":"41.139999","Low":"40.040001","Close":"41.139999","Volume":"14473900","Adj_Close":"41.139999"},{"Symbol":"YHOO","Date":"2014-01-13","Open":"41.16","High":"41.220001","Low":"39.799999","Close":"39.990002","Volume":"16047200","Adj_Close":"39.990002"},{"Symbol":"YHOO","Date":"2014-01-10","Open":"40.950001","High":"41.349998","Low":"40.82","Close":"41.23","Volume":"8721700","Adj_Close":"41.23"},{"Symbol":"YHOO","Date":"2014-01-09","Open":"41.330002","High":"41.349998","Low":"40.610001","Close":"40.919998","Volume":"12897300","Adj_Close":"40.919998"},{"Symbol":"YHOO","Date":"2014-01-08","Open":"41.290001","High":"41.720001","Low":"41.02","Close":"41.02","Volume":"18638200","Adj_Close":"41.02"},{"Symbol":"YHOO","Date":"2014-01-07","Open":"40.080002","High":"41.200001","Low":"40.080002","Close":"40.919998","Volume":"14100000","Adj_Close":"40.919998"},{"Symbol":"YHOO","Date":"2014-01-06","Open":"40.049999","High":"40.32","Low":"39.75","Close":"39.93","Volume":"12467500","Adj_Close":"39.93"},{"Symbol":"YHOO","Date":"2014-01-03","Open":"40.16","High":"40.439999","Low":"39.82","Close":"40.119999","Volume":"15755200","Adj_Close":"40.119999"},{"Symbol":"YHOO","Date":"2014-01-02","Open":"40.369999","High":"40.490002","Low":"39.310001","Close":"39.59","Volume":"21504200","Adj_Close":"39.59"}]}}},
{"query":{"count":252,"created":"2016-03-30T21:57:32Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"1","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"6","execution-stop-time":"34","execution-time":"28","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=IBM"},{"execution-start-time":"39","execution-stop-time":"41","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=IBM"}],"publiclyCallable":"true","cache":[{"execution-start-time":"5","execution-stop-time":"5","execution-time":"0","method":"GET","type":"MEMCACHED","content":"e3a4f7d403c4524d800c6667598c20a8"},{"execution-start-time":"38","execution-stop-time":"39","execution-time":"1","method":"GET","type":"MEMCACHED","content":"f6f74a96e49a727670521af6ab97425c"}],"query":[{"execution-start-time":"5","execution-stop-time":"38","execution-time":"33","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=IBM]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"39","execution-stop-time":"44","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=IBM]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"1047","execution-time":"1043","instructions-used":"24195234","table-name":"yahoo.finance.historicaldata"},"user-time":"1053","service-time":"32","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"IBM","Date":"2014-12-31","Open":"160.410004","High":"161.50","Low":"160.380005","Close":"160.440002","Volume":"4011900","Adj_Close":"153.795546"},{"Symbol":"IBM","Date":"2014-12-30","Open":"160.020004","High":"160.820007","Low":"159.789993","Close":"160.050003","Volume":"2829900","Adj_Close":"153.421698"},{"Symbol":"IBM","Date":"2014-12-29","Open":"162.00","High":"162.339996","Low":"159.449997","Close":"160.509995","Volume":"3331800","Adj_Close":"153.86264"},{"Symbol":"IBM","Date":"2014-12-26","Open":"162.270004","High":"163.089996","Low":"162.009995","Close":"162.339996","Volume":"1912200","Adj_Close":"155.616854"},{"Symbol":"IBM","Date":"2014-12-24","Open":"162.880005","High":"162.990005","Low":"161.610001","Close":"161.820007","Volume":"1868100","Adj_Close":"155.1184"},{"Symbol":"IBM","Date":"2014-12-23","Open":"162.229996","High":"162.899994","Low":"161.610001","Close":"162.240005","Volume":"4043300","Adj_Close":"155.521004"},{"Symbol":"IBM","Date":"2014-12-22","Open":"158.330002","High":"161.910004","Low":"158.330002","Close":"161.440002","Volume":"4682500","Adj_Close":"154.754132"},{"Symbol":"IBM","Date":"2014-12-19","Open":"157.490005","High":"160.410004","Low":"157.490005","Close":"158.509995","Volume":"8864900","Adj_Close":"151.945467"},{"Symbol":"IBM","Date":"2014-12-18","Open":"153.580002","High":"157.679993","Low":"153.300003","Close":"157.679993","Volume":"7302400","Adj_Close":"151.149839"},{"Symbol":"IBM","Date":"2014-12-17","Open":"151.520004","High":"153.309998","Low":"151.110001","Close":"151.929993","Volume":"5131000","Adj_Close":"145.63797"},{"Symbol":"IBM","Date":"2014-12-16","Open":"152.029999","High":"154.889999","Low":"150.50","Close":"151.410004","Volume":"6782600","Adj_Close":"145.139515"},{"Symbol":"IBM","Date":"2014-12-15","Open":"155.929993","High":"156.740005","Low":"152.839996","Close":"153.059998","Volume":"6500300","Adj_Close":"146.721177"},{"Symbol":"IBM","Date":"2014-12-12","Open":"160.25","High":"160.50","Low":"155.330002","Close":"155.380005","Volume":"8611700","Adj_Close":"148.945103"},{"Symbol":"IBM","Date":"2014-12-11","Open":"160.820007","High":"162.929993","Low":"160.520004","Close":"161.070007","Volume":"3989600","Adj_Close":"154.39946"},{"Symbol":"IBM","Date":"2014-12-10","Open":"163.009995","High":"163.330002","Low":"160.029999","Close":"160.509995","Volume":"4072800","Adj_Close":"153.86264"},{"Symbol":"IBM","Date":"2014-12-09","Open":"160.839996","High":"163.020004","Low":"160.800003","Close":"162.990005","Volume":"3861200","Adj_Close":"156.239943"},{"Symbol":"IBM","Date":"2014-12-08","Open":"163.289993","High":"163.289993","Low":"161.539993","Close":"161.860001","Volume":"2851000","Adj_Close":"155.156737"},{"Symbol":"IBM","Date":"2014-12-05","Open":"163.610001","High":"164.50","Low":"162.910004","Close":"163.270004","Volume":"3013500","Adj_Close":"156.508346"},{"Symbol":"IBM","Date":"2014-12-04","Open":"164.009995","High":"164.50","Low":"163.009995","Close":"164.050003","Volume":"3859400","Adj_Close":"157.256042"},{"Symbol":"IBM","Date":"2014-12-03","Open":"162.470001","High":"164.520004","Low":"162.00","Close":"164.520004","Volume":"6429100","Adj_Close":"157.706579"},{"Symbol":"IBM","Date":"2014-12-02","Open":"162.470001","High":"162.729996","Low":"161.639999","Close":"162.669998","Volume":"3464100","Adj_Close":"155.933189"},{"Symbol":"IBM","Date":"2014-12-01","Open":"161.639999","High":"163.320007","Low":"161.350006","Close":"161.539993","Volume":"4168400","Adj_Close":"154.849982"},{"Symbol":"IBM","Date":"2014-11-28","Open":"162.75","High":"163.369995","Low":"161.440002","Close":"162.169998","Volume":"2405500","Adj_Close":"155.453896"},{"Symbol":"IBM","Date":"2014-11-26","Open":"161.929993","High":"162.100006","Low":"161.009995","Close":"161.949997","Volume":"3966000","Adj_Close":"155.243006"},{"Symbol":"IBM","Date":"2014-11-25","Open":"162.649994","High":"163.50","Low":"161.559998","Close":"161.759995","Volume":"4062300","Adj_Close":"155.060872"},{"Symbol":"IBM","Date":"2014-11-24","Open":"161.539993","High":"163.860001","Low":"161.059998","Close":"162.149994","Volume":"6618500","Adj_Close":"155.43472"},{"Symbol":"IBM","Date":"2014-11-21","Open":"161.830002","High":"161.949997","Low":"160.75","Close":"160.919998","Volume":"4076900","Adj_Close":"154.255663"},{"Symbol":"IBM","Date":"2014-11-20","Open":"160.949997","High":"161.50","Low":"159.800003","Close":"160.639999","Volume":"4182200","Adj_Close":"153.98726"},{"Symbol":"IBM","Date":"2014-11-19","Open":"162.050003","High":"162.100006","Low":"160.960007","Close":"161.429993","Volume":"3802200","Adj_Close":"154.744537"},{"Symbol":"IBM","Date":"2014-11-18","Open":"164.729996","High":"164.75","Low":"161.889999","Close":"161.889999","Volume":"5410100","Adj_Close":"155.185493"},{"Symbol":"IBM","Date":"2014-11-17","Open":"164.160004","High":"164.970001","Low":"163.720001","Close":"164.160004","Volume":"4798900","Adj_Close":"157.361487"},{"Symbol":"IBM","Date":"2014-11-14","Open":"162.100006","High":"164.490005","Low":"161.690002","Close":"164.160004","Volume":"4976700","Adj_Close":"157.361487"},{"Symbol":"IBM","Date":"2014-11-13","Open":"162.00","High":"162.800003","Low":"161.800003","Close":"162.789993","Volume":"3239500","Adj_Close":"156.048215"},{"Symbol":"IBM","Date":"2014-11-12","Open":"162.279999","High":"163.00","Low":"161.759995","Close":"161.919998","Volume":"3377600","Adj_Close":"155.214249"},{"Symbol":"IBM","Date":"2014-11-11","Open":"163.699997","High":"163.899994","Low":"162.600006","Close":"163.300003","Volume":"3534400","Adj_Close":"156.537103"},{"Symbol":"IBM","Date":"2014-11-10","Open":"161.899994","High":"164.470001","Low":"161.610001","Close":"163.490005","Volume":"4958200","Adj_Close":"156.719236"},{"Symbol":"IBM","Date":"2014-11-07","Open":"161.419998","High":"162.210007","Low":"160.850006","Close":"162.070007","Volume":"3494800","Adj_Close":"155.358046"},{"Symbol":"IBM","Date":"2014-11-06","Open":"161.279999","High":"161.529999","Low":"160.050003","Close":"161.460007","Volume":"4067600","Adj_Close":"154.773308"},{"Symbol":"IBM","Date":"2014-11-05","Open":"163.130005","High":"163.539993","Low":"161.559998","Close":"161.820007","Volume":"4104700","Adj_Close":"154.063955"},{"Symbol":"IBM","Date":"2014-11-04","Open":"164.339996","High":"164.360001","Low":"162.240005","Close":"162.649994","Volume":"4246900","Adj_Close":"154.85416"},{"Symbol":"IBM","Date":"2014-11-03","Open":"164.25","High":"164.539993","Low":"163.380005","Close":"164.360001","Volume":"4688200","Adj_Close":"156.482206"},{"Symbol":"IBM","Date":"2014-10-31","Open":"165.479996","High":"165.589996","Low":"163.619995","Close":"164.399994","Volume":"5818000","Adj_Close":"156.520282"},{"Symbol":"IBM","Date":"2014-10-30","Open":"163.50","High":"164.619995","Low":"163.020004","Close":"164.350006","Volume":"3896000","Adj_Close":"156.47269"},{"Symbol":"IBM","Date":"2014-10-29","Open":"164.330002","High":"164.619995","Low":"162.759995","Close":"163.460007","Volume":"4739300","Adj_Close":"155.625349"},{"Symbol":"IBM","Date":"2014-10-28","Open":"162.00","High":"163.600006","Low":"161.800003","Close":"163.600006","Volume":"7895300","Adj_Close":"155.758638"},{"Symbol":"IBM","Date":"2014-10-27","Open":"162.00","High":"162.910004","Low":"161.809998","Close":"161.869995","Volume":"4989100","Adj_Close":"154.111547"},{"Symbol":"IBM","Date":"2014-10-24","Open":"162.080002","High":"162.440002","Low":"161.449997","Close":"162.080002","Volume":"6652100","Adj_Close":"154.311488"},{"Symbol":"IBM","Date":"2014-10-23","Open":"162.119995","High":"162.830002","Low":"161.539993","Close":"162.179993","Volume":"7599400","Adj_Close":"154.406686"},{"Symbol":"IBM","Date":"2014-10-22","Open":"162.410004","High":"165.410004","Low":"161.100006","Close":"161.789993","Volume":"11084800","Adj_Close":"154.035379"},{"Symbol":"IBM","Date":"2014-10-21","Open":"166.399994","High":"166.679993","Low":"161.679993","Close":"163.229996","Volume":"20949800","Adj_Close":"155.406362"},{"Symbol":"IBM","Date":"2014-10-20","Open":"166.850006","High":"170.330002","Low":"166.690002","Close":"169.100006","Volume":"23416500","Adj_Close":"160.995022"},{"Symbol":"IBM","Date":"2014-10-17","Open":"181.240005","High":"182.839996","Low":"180.220001","Close":"182.050003","Volume":"4350200","Adj_Close":"173.324324"},{"Symbol":"IBM","Date":"2014-10-16","Open":"179.800003","High":"181.479996","Low":"178.690002","Close":"179.839996","Volume":"5578600","Adj_Close":"171.220243"},{"Symbol":"IBM","Date":"2014-10-15","Open":"182.460007","High":"183.789993","Low":"178.75","Close":"181.75","Volume":"6895800","Adj_Close":"173.0387"},{"Symbol":"IBM","Date":"2014-10-14","Open":"184.889999","High":"185.720001","Low":"183.589996","Close":"183.800003","Volume":"3924700","Adj_Close":"174.990447"},{"Symbol":"IBM","Date":"2014-10-13","Open":"185.490005","High":"186.649994","Low":"183.419998","Close":"183.520004","Volume":"3596700","Adj_Close":"174.723868"},{"Symbol":"IBM","Date":"2014-10-10","Open":"185.860001","High":"187.740005","Low":"185.100006","Close":"185.929993","Volume":"5090200","Adj_Close":"177.018346"},{"Symbol":"IBM","Date":"2014-10-09","Open":"189.119995","High":"189.50","Low":"186.089996","Close":"186.419998","Volume":"2625400","Adj_Close":"177.484865"},{"Symbol":"IBM","Date":"2014-10-08","Open":"185.970001","High":"189.600006","Low":"185.610001","Close":"189.360001","Volume":"2984800","Adj_Close":"180.283953"},{"Symbol":"IBM","Date":"2014-10-07","Open":"187.770004","High":"188.119995","Low":"185.539993","Close":"185.710007","Volume":"2991300","Adj_Close":"176.808904"},{"Symbol":"IBM","Date":"2014-10-06","Open":"189.690002","High":"190.889999","Low":"188.710007","Close":"189.039993","Volume":"2099500","Adj_Close":"179.979283"},{"Symbol":"IBM","Date":"2014-10-03","Open":"188.110001","High":"189.369995","Low":"187.559998","Close":"188.669998","Volume":"3071500","Adj_Close":"179.627022"},{"Symbol":"IBM","Date":"2014-10-02","Open":"187.660004","High":"187.779999","Low":"186.240005","Close":"186.910004","Volume":"2283100","Adj_Close":"177.951384"},{"Symbol":"IBM","Date":"2014-10-01","Open":"189.910004","High":"190.399994","Low":"186.789993","Close":"187.169998","Volume":"3723200","Adj_Close":"178.198917"},{"Symbol":"IBM","Date":"2014-09-30","Open":"189.639999","High":"190.850006","Low":"189.149994","Close":"189.830002","Volume":"2932600","Adj_Close":"180.731427"},{"Symbol":"IBM","Date":"2014-09-29","Open":"188.509995","High":"189.960007","Low":"188.119995","Close":"189.639999","Volume":"2336300","Adj_Close":"180.550531"},{"Symbol":"IBM","Date":"2014-09-26","Open":"188.929993","High":"190.330002","Low":"188.610001","Close":"190.059998","Volume":"2493900","Adj_Close":"180.950399"},{"Symbol":"IBM","Date":"2014-09-25","Open":"192.050003","High":"192.50","Low":"188.970001","Close":"189.009995","Volume":"4151400","Adj_Close":"179.950723"},{"Symbol":"IBM","Date":"2014-09-24","Open":"191.00","High":"192.449997","Low":"189.880005","Close":"192.309998","Volume":"3082600","Adj_Close":"183.092556"},{"Symbol":"IBM","Date":"2014-09-23","Open":"192.75","High":"193.070007","Low":"191.520004","Close":"191.619995","Volume":"3301800","Adj_Close":"182.435625"},{"Symbol":"IBM","Date":"2014-09-22","Open":"193.720001","High":"194.139999","Low":"192.630005","Close":"193.110001","Volume":"3318000","Adj_Close":"183.854215"},{"Symbol":"IBM","Date":"2014-09-19","Open":"194.539993","High":"195.00","Low":"193.190002","Close":"194.00","Volume":"8852000","Adj_Close":"184.701556"},{"Symbol":"IBM","Date":"2014-09-18","Open":"192.789993","High":"194.130005","Low":"192.710007","Close":"193.75","Volume":"2963300","Adj_Close":"184.463539"},{"Symbol":"IBM","Date":"2014-09-17","Open":"193.220001","High":"193.639999","Low":"192.300003","Close":"192.800003","Volume":"3210800","Adj_Close":"183.559075"},{"Symbol":"IBM","Date":"2014-09-16","Open":"191.25","High":"193.570007","Low":"190.820007","Close":"192.960007","Volume":"2561500","Adj_Close":"183.71141"},{"Symbol":"IBM","Date":"2014-09-15","Open":"191.419998","High":"192.490005","Low":"190.580002","Close":"191.809998","Volume":"2456400","Adj_Close":"182.616521"},{"Symbol":"IBM","Date":"2014-09-12","Open":"191.470001","High":"191.600006","Low":"190.570007","Close":"191.279999","Volume":"2901000","Adj_Close":"182.111925"},{"Symbol":"IBM","Date":"2014-09-11","Open":"191.080002","High":"192.779999","Low":"190.119995","Close":"191.720001","Volume":"2298500","Adj_Close":"182.530838"},{"Symbol":"IBM","Date":"2014-09-10","Open":"190.119995","High":"192.149994","Low":"190.100006","Close":"191.539993","Volume":"2764000","Adj_Close":"182.359458"},{"Symbol":"IBM","Date":"2014-09-09","Open":"190.339996","High":"190.740005","Low":"189.779999","Close":"189.990005","Volume":"2403600","Adj_Close":"180.883761"},{"Symbol":"IBM","Date":"2014-09-08","Open":"190.75","High":"191.199997","Low":"189.509995","Close":"190.139999","Volume":"2524200","Adj_Close":"181.026566"},{"Symbol":"IBM","Date":"2014-09-05","Open":"190.529999","High":"191.75","Low":"190.089996","Close":"191.199997","Volume":"2260200","Adj_Close":"182.035758"},{"Symbol":"IBM","Date":"2014-09-04","Open":"191.690002","High":"192.690002","Low":"190.059998","Close":"190.679993","Volume":"2865000","Adj_Close":"181.540677"},{"Symbol":"IBM","Date":"2014-09-03","Open":"192.389999","High":"192.949997","Low":"191.860001","Close":"191.949997","Volume":"1822800","Adj_Close":"182.74981"},{"Symbol":"IBM","Date":"2014-09-02","Open":"192.679993","High":"192.970001","Low":"190.929993","Close":"191.559998","Volume":"2679700","Adj_Close":"182.378504"},{"Symbol":"IBM","Date":"2014-08-29","Open":"192.279999","High":"192.75","Low":"191.139999","Close":"192.300003","Volume":"2909400","Adj_Close":"183.083041"},{"Symbol":"IBM","Date":"2014-08-28","Open":"191.470001","High":"192.300003","Low":"190.660004","Close":"192.00","Volume":"1503600","Adj_Close":"182.797417"},{"Symbol":"IBM","Date":"2014-08-27","Open":"193.029999","High":"194.130005","Low":"191.559998","Close":"192.25","Volume":"2190200","Adj_Close":"183.035434"},{"Symbol":"IBM","Date":"2014-08-26","Open":"191.020004","High":"193.529999","Low":"191.020004","Close":"192.990005","Volume":"3175400","Adj_Close":"183.739971"},{"Symbol":"IBM","Date":"2014-08-25","Open":"191.389999","High":"191.809998","Low":"190.710007","Close":"191.160004","Volume":"1723600","Adj_Close":"181.997681"},{"Symbol":"IBM","Date":"2014-08-22","Open":"190.770004","High":"191.880005","Low":"190.289993","Close":"190.410004","Volume":"1940300","Adj_Close":"181.283629"},{"Symbol":"IBM","Date":"2014-08-21","Open":"190.899994","High":"192.070007","Low":"190.50","Close":"191.229996","Volume":"2496500","Adj_Close":"182.064319"},{"Symbol":"IBM","Date":"2014-08-20","Open":"189.860001","High":"190.389999","Low":"189.25","Close":"190.100006","Volume":"2177600","Adj_Close":"180.98849"},{"Symbol":"IBM","Date":"2014-08-19","Open":"190.039993","High":"190.25","Low":"189.360001","Close":"190.070007","Volume":"2040100","Adj_Close":"180.959929"},{"Symbol":"IBM","Date":"2014-08-18","Open":"188.100006","High":"189.809998","Low":"187.759995","Close":"189.360001","Volume":"2420300","Adj_Close":"180.283953"},{"Symbol":"IBM","Date":"2014-08-15","Open":"187.850006","High":"188.880005","Low":"186.789993","Close":"187.380005","Volume":"2814800","Adj_Close":"178.398858"},{"Symbol":"IBM","Date":"2014-08-14","Open":"187.570007","High":"188.169998","Low":"186.929993","Close":"187.880005","Volume":"1929500","Adj_Close":"178.874893"},{"Symbol":"IBM","Date":"2014-08-13","Open":"188.00","High":"188.479996","Low":"187.369995","Close":"187.949997","Volume":"1797000","Adj_Close":"178.941531"},{"Symbol":"IBM","Date":"2014-08-12","Open":"187.449997","High":"188.690002","Low":"186.809998","Close":"187.339996","Volume":"1858600","Adj_Close":"178.360768"},{"Symbol":"IBM","Date":"2014-08-11","Open":"187.809998","High":"188.360001","Low":"186.279999","Close":"187.470001","Volume":"2527200","Adj_Close":"178.484541"},{"Symbol":"IBM","Date":"2014-08-08","Open":"184.399994","High":"186.669998","Low":"183.580002","Close":"186.630005","Volume":"2781500","Adj_Close":"177.684806"},{"Symbol":"IBM","Date":"2014-08-07","Open":"186.639999","High":"186.679993","Low":"183.580002","Close":"184.300003","Volume":"2708600","Adj_Close":"175.466482"},{"Symbol":"IBM","Date":"2014-08-06","Open":"185.360001","High":"186.880005","Low":"184.440002","Close":"185.970001","Volume":"3847000","Adj_Close":"177.056436"},{"Symbol":"IBM","Date":"2014-08-05","Open":"188.75","High":"189.199997","Low":"186.440002","Close":"187.100006","Volume":"3307900","Adj_Close":"177.084993"},{"Symbol":"IBM","Date":"2014-08-04","Open":"189.350006","High":"189.949997","Low":"188.600006","Close":"189.639999","Volume":"2125900","Adj_Close":"179.489027"},{"Symbol":"IBM","Date":"2014-08-01","Open":"190.50","High":"191.50","Low":"188.860001","Close":"189.149994","Volume":"5181100","Adj_Close":"179.02525"},{"Symbol":"IBM","Date":"2014-07-31","Open":"192.839996","High":"194.289993","Low":"191.539993","Close":"191.669998","Volume":"4207500","Adj_Close":"181.410364"},{"Symbol":"IBM","Date":"2014-07-30","Open":"195.199997","High":"195.990005","Low":"192.899994","Close":"194.00","Volume":"3943800","Adj_Close":"183.615647"},{"Symbol":"IBM","Date":"2014-07-29","Open":"195.300003","High":"195.889999","Low":"194.539993","Close":"194.570007","Volume":"3264100","Adj_Close":"184.155143"},{"Symbol":"IBM","Date":"2014-07-28","Open":"194.300003","High":"196.399994","Low":"193.649994","Close":"195.779999","Volume":"3242400","Adj_Close":"185.300367"},{"Symbol":"IBM","Date":"2014-07-25","Open":"195.300003","High":"195.899994","Low":"193.789993","Close":"194.399994","Volume":"3376400","Adj_Close":"183.99423"},{"Symbol":"IBM","Date":"2014-07-24","Open":"193.949997","High":"195.619995","Low":"193.75","Close":"195.240005","Volume":"3612700","Adj_Close":"184.789278"},{"Symbol":"IBM","Date":"2014-07-23","Open":"194.110001","High":"194.899994","Low":"193.570007","Close":"193.630005","Volume":"3584200","Adj_Close":"183.265457"},{"Symbol":"IBM","Date":"2014-07-22","Open":"191.589996","High":"194.720001","Low":"191.559998","Close":"194.089996","Volume":"4853000","Adj_Close":"183.700826"},{"Symbol":"IBM","Date":"2014-07-21","Open":"191.300003","High":"191.699997","Low":"189.25","Close":"190.850006","Volume":"4154400","Adj_Close":"180.634265"},{"Symbol":"IBM","Date":"2014-07-18","Open":"191.960007","High":"193.440002","Low":"190.00","Close":"192.50","Volume":"8166400","Adj_Close":"182.195938"},{"Symbol":"IBM","Date":"2014-07-17","Open":"192.360001","High":"195.949997","Low":"192.00","Close":"192.490005","Volume":"8872300","Adj_Close":"182.186479"},{"Symbol":"IBM","Date":"2014-07-16","Open":"192.240005","High":"193.360001","Low":"190.759995","Close":"192.360001","Volume":"7812600","Adj_Close":"182.063433"},{"Symbol":"IBM","Date":"2014-07-15","Open":"189.539993","High":"190.080002","Low":"188.210007","Close":"188.490005","Volume":"4864700","Adj_Close":"178.400589"},{"Symbol":"IBM","Date":"2014-07-14","Open":"188.550003","High":"190.440002","Low":"188.529999","Close":"189.860001","Volume":"4501100","Adj_Close":"179.697252"},{"Symbol":"IBM","Date":"2014-07-11","Open":"187.729996","High":"188.350006","Low":"186.710007","Close":"188.00","Volume":"2402500","Adj_Close":"177.936812"},{"Symbol":"IBM","Date":"2014-07-10","Open":"186.440002","High":"188.050003","Low":"186.210007","Close":"187.699997","Volume":"3177800","Adj_Close":"177.652868"},{"Symbol":"IBM","Date":"2014-07-09","Open":"187.679993","High":"188.899994","Low":"186.889999","Close":"188.419998","Volume":"3309600","Adj_Close":"178.334329"},{"Symbol":"IBM","Date":"2014-07-08","Open":"187.649994","High":"188.080002","Low":"186.369995","Close":"187.220001","Volume":"3135100","Adj_Close":"177.198565"},{"Symbol":"IBM","Date":"2014-07-07","Open":"187.610001","High":"188.270004","Low":"187.440002","Close":"188.039993","Volume":"2958700","Adj_Close":"177.974665"},{"Symbol":"IBM","Date":"2014-07-03","Open":"188.389999","High":"188.809998","Low":"187.350006","Close":"188.529999","Volume":"2422400","Adj_Close":"178.438442"},{"Symbol":"IBM","Date":"2014-07-02","Open":"186.339996","High":"188.990005","Low":"186.169998","Close":"188.389999","Volume":"5093000","Adj_Close":"178.305936"},{"Symbol":"IBM","Date":"2014-07-01","Open":"181.699997","High":"187.270004","Low":"181.699997","Close":"186.350006","Volume":"6643100","Adj_Close":"176.375139"},{"Symbol":"IBM","Date":"2014-06-30","Open":"181.330002","High":"181.929993","Low":"180.259995","Close":"181.270004","Volume":"4223800","Adj_Close":"171.567057"},{"Symbol":"IBM","Date":"2014-06-27","Open":"179.770004","High":"182.460007","Low":"179.660004","Close":"181.710007","Volume":"4575500","Adj_Close":"171.983507"},{"Symbol":"IBM","Date":"2014-06-26","Open":"180.869995","High":"181.369995","Low":"179.270004","Close":"180.369995","Volume":"3258500","Adj_Close":"170.715223"},{"Symbol":"IBM","Date":"2014-06-25","Open":"180.25","High":"180.970001","Low":"180.059998","Close":"180.720001","Volume":"2762800","Adj_Close":"171.046494"},{"Symbol":"IBM","Date":"2014-06-24","Open":"181.50","High":"183.00","Low":"180.649994","Close":"180.880005","Volume":"3875400","Adj_Close":"171.197933"},{"Symbol":"IBM","Date":"2014-06-23","Open":"181.919998","High":"182.25","Low":"181.00","Close":"182.139999","Volume":"3231700","Adj_Close":"172.390484"},{"Symbol":"IBM","Date":"2014-06-20","Open":"182.589996","High":"182.669998","Low":"181.399994","Close":"181.550003","Volume":"10686800","Adj_Close":"171.832068"},{"Symbol":"IBM","Date":"2014-06-19","Open":"184.119995","High":"184.470001","Low":"182.360001","Close":"182.820007","Volume":"3551100","Adj_Close":"173.034092"},{"Symbol":"IBM","Date":"2014-06-18","Open":"182.039993","High":"183.610001","Low":"181.789993","Close":"183.600006","Volume":"3931800","Adj_Close":"173.77234"},{"Symbol":"IBM","Date":"2014-06-17","Open":"181.899994","High":"182.809998","Low":"181.559998","Close":"182.259995","Volume":"2460900","Adj_Close":"172.504056"},{"Symbol":"IBM","Date":"2014-06-16","Open":"182.399994","High":"182.710007","Low":"181.240005","Close":"182.350006","Volume":"3556200","Adj_Close":"172.589249"},{"Symbol":"IBM","Date":"2014-06-13","Open":"182.00","High":"183.00","Low":"181.520004","Close":"182.559998","Volume":"2773600","Adj_Close":"172.788"},{"Symbol":"IBM","Date":"2014-06-12","Open":"182.479996","High":"182.550003","Low":"180.910004","Close":"181.220001","Volume":"4425300","Adj_Close":"171.519731"},{"Symbol":"IBM","Date":"2014-06-11","Open":"183.610001","High":"184.199997","Low":"182.009995","Close":"182.25","Volume":"4061700","Adj_Close":"172.494596"},{"Symbol":"IBM","Date":"2014-06-10","Open":"186.199997","High":"186.220001","Low":"183.820007","Close":"184.289993","Volume":"4154900","Adj_Close":"174.425393"},{"Symbol":"IBM","Date":"2014-06-09","Open":"186.220001","High":"187.639999","Low":"185.960007","Close":"186.220001","Volume":"2728400","Adj_Close":"176.252093"},{"Symbol":"IBM","Date":"2014-06-06","Open":"186.470001","High":"187.649994","Low":"185.899994","Close":"186.369995","Volume":"3296700","Adj_Close":"176.394058"},{"Symbol":"IBM","Date":"2014-06-05","Open":"184.660004","High":"186.089996","Low":"183.919998","Close":"185.979996","Volume":"2852200","Adj_Close":"176.024934"},{"Symbol":"IBM","Date":"2014-06-04","Open":"184.710007","High":"185.449997","Low":"184.199997","Close":"184.509995","Volume":"2376800","Adj_Close":"174.633619"},{"Symbol":"IBM","Date":"2014-06-03","Open":"185.550003","High":"185.759995","Low":"184.119995","Close":"184.369995","Volume":"2517100","Adj_Close":"174.501113"},{"Symbol":"IBM","Date":"2014-06-02","Open":"184.759995","High":"186.279999","Low":"184.669998","Close":"185.690002","Volume":"3200500","Adj_Close":"175.750463"},{"Symbol":"IBM","Date":"2014-05-30","Open":"183.380005","High":"184.570007","Low":"182.490005","Close":"184.360001","Volume":"4620500","Adj_Close":"174.491653"},{"Symbol":"IBM","Date":"2014-05-29","Open":"183.639999","High":"183.779999","Low":"182.330002","Close":"183.759995","Volume":"2759900","Adj_Close":"173.923764"},{"Symbol":"IBM","Date":"2014-05-28","Open":"184.479996","High":"184.880005","Low":"182.940002","Close":"183.080002","Volume":"3721600","Adj_Close":"173.28017"},{"Symbol":"IBM","Date":"2014-05-27","Open":"184.800003","High":"185.649994","Low":"183.929993","Close":"184.779999","Volume":"4793800","Adj_Close":"174.88917"},{"Symbol":"IBM","Date":"2014-05-23","Open":"185.839996","High":"186.139999","Low":"185.309998","Close":"185.940002","Volume":"2562900","Adj_Close":"175.987082"},{"Symbol":"IBM","Date":"2014-05-22","Open":"186.449997","High":"186.449997","Low":"185.029999","Close":"185.679993","Volume":"2218000","Adj_Close":"175.740989"},{"Symbol":"IBM","Date":"2014-05-21","Open":"185.850006","High":"187.160004","Low":"184.949997","Close":"186.389999","Volume":"2988000","Adj_Close":"176.412991"},{"Symbol":"IBM","Date":"2014-05-20","Open":"186.25","High":"186.699997","Low":"184.699997","Close":"184.889999","Volume":"3026500","Adj_Close":"174.993283"},{"Symbol":"IBM","Date":"2014-05-19","Open":"186.610001","High":"187.130005","Low":"186.039993","Close":"187.00","Volume":"3270700","Adj_Close":"176.99034"},{"Symbol":"IBM","Date":"2014-05-16","Open":"186.270004","High":"187.410004","Low":"185.929993","Close":"187.059998","Volume":"3949500","Adj_Close":"177.047126"},{"Symbol":"IBM","Date":"2014-05-15","Open":"189.070007","High":"189.080002","Low":"186.179993","Close":"186.460007","Volume":"4202200","Adj_Close":"176.479251"},{"Symbol":"IBM","Date":"2014-05-14","Open":"191.910004","High":"191.990005","Low":"188.169998","Close":"188.720001","Volume":"5251500","Adj_Close":"178.618274"},{"Symbol":"IBM","Date":"2014-05-13","Open":"192.789993","High":"193.029999","Low":"191.759995","Close":"192.190002","Volume":"2226600","Adj_Close":"181.902534"},{"Symbol":"IBM","Date":"2014-05-12","Open":"191.119995","High":"193.020004","Low":"190.940002","Close":"192.570007","Volume":"3777400","Adj_Close":"182.262198"},{"Symbol":"IBM","Date":"2014-05-09","Open":"188.979996","High":"190.589996","Low":"188.369995","Close":"190.080002","Volume":"2261600","Adj_Close":"179.905477"},{"Symbol":"IBM","Date":"2014-05-08","Open":"189.160004","High":"190.570007","Low":"188.229996","Close":"188.910004","Volume":"2431900","Adj_Close":"178.798106"},{"Symbol":"IBM","Date":"2014-05-07","Open":"189.339996","High":"190.300003","Low":"186.929993","Close":"189.300003","Volume":"3821000","Adj_Close":"179.167229"},{"Symbol":"IBM","Date":"2014-05-06","Open":"190.929993","High":"190.949997","Low":"189.25","Close":"190.029999","Volume":"3188700","Adj_Close":"178.817037"},{"Symbol":"IBM","Date":"2014-05-05","Open":"191.050003","High":"191.490005","Low":"189.800003","Close":"191.259995","Volume":"2222100","Adj_Close":"179.974455"},{"Symbol":"IBM","Date":"2014-05-02","Open":"193.75","High":"193.839996","Low":"191.25","Close":"191.440002","Volume":"3049900","Adj_Close":"180.143841"},{"Symbol":"IBM","Date":"2014-05-01","Open":"196.309998","High":"196.740005","Low":"193.149994","Close":"193.529999","Volume":"3674000","Adj_Close":"182.110515"},{"Symbol":"IBM","Date":"2014-04-30","Open":"194.380005","High":"196.860001","Low":"194.350006","Close":"196.470001","Volume":"4206800","Adj_Close":"184.877039"},{"Symbol":"IBM","Date":"2014-04-29","Open":"193.589996","High":"195.940002","Low":"193.410004","Close":"195.110001","Volume":"4626300","Adj_Close":"183.597287"},{"Symbol":"IBM","Date":"2014-04-28","Open":"191.139999","High":"193.990005","Low":"190.580002","Close":"193.139999","Volume":"5638300","Adj_Close":"181.743528"},{"Symbol":"IBM","Date":"2014-04-25","Open":"190.539993","High":"190.669998","Low":"189.110001","Close":"189.630005","Volume":"3871000","Adj_Close":"178.440645"},{"Symbol":"IBM","Date":"2014-04-24","Open":"192.220001","High":"192.220001","Low":"190.029999","Close":"190.220001","Volume":"4407100","Adj_Close":"178.995828"},{"Symbol":"IBM","Date":"2014-04-23","Open":"191.789993","High":"192.410004","Low":"190.110001","Close":"191.729996","Volume":"4736400","Adj_Close":"180.416723"},{"Symbol":"IBM","Date":"2014-04-22","Open":"192.009995","High":"193.00","Low":"191.199997","Close":"192.149994","Volume":"3878600","Adj_Close":"180.811939"},{"Symbol":"IBM","Date":"2014-04-21","Open":"189.800003","High":"192.809998","Low":"189.740005","Close":"192.270004","Volume":"5419700","Adj_Close":"180.924868"},{"Symbol":"IBM","Date":"2014-04-17","Open":"187.25","High":"190.699997","Low":"187.009995","Close":"190.009995","Volume":"11255500","Adj_Close":"178.798213"},{"Symbol":"IBM","Date":"2014-04-16","Open":"198.050003","High":"198.710007","Low":"195.00","Close":"196.399994","Volume":"8527300","Adj_Close":"184.811162"},{"Symbol":"IBM","Date":"2014-04-15","Open":"195.979996","High":"197.410004","Low":"195.419998","Close":"197.020004","Volume":"5351300","Adj_Close":"185.394588"},{"Symbol":"IBM","Date":"2014-04-14","Open":"196.240005","High":"198.240005","Low":"195.880005","Close":"197.770004","Volume":"5431100","Adj_Close":"186.100333"},{"Symbol":"IBM","Date":"2014-04-11","Open":"195.039993","High":"197.00","Low":"194.270004","Close":"195.190002","Volume":"4835000","Adj_Close":"183.672568"},{"Symbol":"IBM","Date":"2014-04-10","Open":"196.059998","High":"199.210007","Low":"195.660004","Close":"195.679993","Volume":"8417900","Adj_Close":"184.133645"},{"Symbol":"IBM","Date":"2014-04-09","Open":"193.880005","High":"197.00","Low":"193.600006","Close":"196.639999","Volume":"5480100","Adj_Close":"185.037006"},{"Symbol":"IBM","Date":"2014-04-08","Open":"193.889999","High":"194.169998","Low":"192.690002","Close":"193.289993","Volume":"5125000","Adj_Close":"181.884671"},{"Symbol":"IBM","Date":"2014-04-07","Open":"191.720001","High":"195.309998","Low":"191.570007","Close":"194.520004","Volume":"6740500","Adj_Close":"183.042104"},{"Symbol":"IBM","Date":"2014-04-04","Open":"193.119995","High":"193.970001","Low":"191.279999","Close":"191.770004","Volume":"6089900","Adj_Close":"180.454371"},{"Symbol":"IBM","Date":"2014-04-03","Open":"193.199997","High":"193.380005","Low":"192.350006","Close":"192.690002","Volume":"4091100","Adj_Close":"181.320083"},{"Symbol":"IBM","Date":"2014-04-02","Open":"194.240005","High":"194.50","Low":"192.490005","Close":"193.550003","Volume":"4924100","Adj_Close":"182.129339"},{"Symbol":"IBM","Date":"2014-04-01","Open":"193.119995","High":"195.130005","Low":"192.779999","Close":"194.50","Volume":"5394100","Adj_Close":"183.02328"},{"Symbol":"IBM","Date":"2014-03-31","Open":"191.639999","High":"193.770004","Low":"191.399994","Close":"192.490005","Volume":"8537300","Adj_Close":"181.131888"},{"Symbol":"IBM","Date":"2014-03-28","Open":"189.940002","High":"192.619995","Low":"189.110001","Close":"190.449997","Volume":"5194400","Adj_Close":"179.212252"},{"Symbol":"IBM","Date":"2014-03-27","Open":"191.910004","High":"192.669998","Low":"189.320007","Close":"189.830002","Volume":"6767700","Adj_Close":"178.628841"},{"Symbol":"IBM","Date":"2014-03-26","Open":"194.979996","High":"195.630005","Low":"191.960007","Close":"192.619995","Volume":"6851700","Adj_Close":"181.254207"},{"Symbol":"IBM","Date":"2014-03-25","Open":"188.759995","High":"195.399994","Low":"188.699997","Close":"195.039993","Volume":"10912700","Adj_Close":"183.53141"},{"Symbol":"IBM","Date":"2014-03-24","Open":"187.429993","High":"189.440002","Low":"187.369995","Close":"188.25","Volume":"5738500","Adj_Close":"177.142069"},{"Symbol":"IBM","Date":"2014-03-21","Open":"188.50","High":"188.699997","Low":"186.399994","Close":"186.669998","Volume":"12535200","Adj_Close":"175.655297"},{"Symbol":"IBM","Date":"2014-03-20","Open":"184.470001","High":"188.259995","Low":"184.169998","Close":"187.899994","Volume":"5062600","Adj_Close":"176.812715"},{"Symbol":"IBM","Date":"2014-03-19","Open":"185.600006","High":"186.699997","Low":"183.50","Close":"184.710007","Volume":"4323900","Adj_Close":"173.810957"},{"Symbol":"IBM","Date":"2014-03-18","Open":"185.990005","High":"187.899994","Low":"185.539993","Close":"186.809998","Volume":"3961300","Adj_Close":"175.787036"},{"Symbol":"IBM","Date":"2014-03-17","Open":"182.660004","High":"186.350006","Low":"182.660004","Close":"185.809998","Volume":"4938100","Adj_Close":"174.846042"},{"Symbol":"IBM","Date":"2014-03-14","Open":"183.889999","High":"184.289993","Low":"182.210007","Close":"182.210007","Volume":"5490300","Adj_Close":"171.458473"},{"Symbol":"IBM","Date":"2014-03-13","Open":"186.410004","High":"187.00","Low":"183.710007","Close":"183.899994","Volume":"4913200","Adj_Close":"173.048741"},{"Symbol":"IBM","Date":"2014-03-12","Open":"186.009995","High":"187.449997","Low":"185.889999","Close":"186.220001","Volume":"4833000","Adj_Close":"175.231853"},{"Symbol":"IBM","Date":"2014-03-11","Open":"187.410004","High":"188.449997","Low":"186.039993","Close":"186.759995","Volume":"4229500","Adj_Close":"175.739983"},{"Symbol":"IBM","Date":"2014-03-10","Open":"187.550003","High":"188.369995","Low":"185.850006","Close":"186.389999","Volume":"4591200","Adj_Close":"175.39182"},{"Symbol":"IBM","Date":"2014-03-07","Open":"188.350006","High":"188.919998","Low":"187.179993","Close":"187.679993","Volume":"4117800","Adj_Close":"176.605696"},{"Symbol":"IBM","Date":"2014-03-06","Open":"187.369995","High":"188.389999","Low":"186.899994","Close":"187.639999","Volume":"3817300","Adj_Close":"176.568062"},{"Symbol":"IBM","Date":"2014-03-05","Open":"186.570007","High":"187.949997","Low":"186.399994","Close":"187.139999","Volume":"3485200","Adj_Close":"176.097565"},{"Symbol":"IBM","Date":"2014-03-04","Open":"185.809998","High":"187.160004","Low":"185.679993","Close":"186.440002","Volume":"4733000","Adj_Close":"175.438873"},{"Symbol":"IBM","Date":"2014-03-03","Open":"183.330002","High":"184.639999","Low":"182.820007","Close":"184.259995","Volume":"3950100","Adj_Close":"173.387499"},{"Symbol":"IBM","Date":"2014-02-28","Open":"185.380005","High":"186.119995","Low":"183.649994","Close":"185.169998","Volume":"4667900","Adj_Close":"174.243807"},{"Symbol":"IBM","Date":"2014-02-27","Open":"183.830002","High":"185.949997","Low":"183.809998","Close":"185.270004","Volume":"3827800","Adj_Close":"174.337912"},{"Symbol":"IBM","Date":"2014-02-26","Open":"183.940002","High":"185.279999","Low":"183.559998","Close":"184.059998","Volume":"3740700","Adj_Close":"173.199303"},{"Symbol":"IBM","Date":"2014-02-25","Open":"183.520004","High":"184.600006","Low":"182.880005","Close":"183.229996","Volume":"3902300","Adj_Close":"172.418276"},{"Symbol":"IBM","Date":"2014-02-24","Open":"182.820007","High":"185.160004","Low":"182.820007","Close":"183.449997","Volume":"4595300","Adj_Close":"172.625296"},{"Symbol":"IBM","Date":"2014-02-21","Open":"184.25","High":"185.710007","Low":"182.619995","Close":"182.789993","Volume":"5699300","Adj_Close":"172.004237"},{"Symbol":"IBM","Date":"2014-02-20","Open":"182.960007","High":"184.860001","Low":"182.789993","Close":"184.259995","Volume":"4968200","Adj_Close":"173.387499"},{"Symbol":"IBM","Date":"2014-02-19","Open":"182.740005","High":"185.649994","Low":"182.410004","Close":"182.949997","Volume":"4671500","Adj_Close":"172.154799"},{"Symbol":"IBM","Date":"2014-02-18","Open":"183.179993","High":"184.00","Low":"182.320007","Close":"183.190002","Volume":"4435200","Adj_Close":"172.380643"},{"Symbol":"IBM","Date":"2014-02-14","Open":"181.259995","High":"184.429993","Low":"180.990005","Close":"183.690002","Volume":"4659900","Adj_Close":"172.85114"},{"Symbol":"IBM","Date":"2014-02-13","Open":"178.220001","High":"182.360001","Low":"177.860001","Close":"181.839996","Volume":"4482000","Adj_Close":"171.110296"},{"Symbol":"IBM","Date":"2014-02-12","Open":"179.520004","High":"181.25","Low":"179.259995","Close":"180.240005","Volume":"3983000","Adj_Close":"169.604714"},{"Symbol":"IBM","Date":"2014-02-11","Open":"176.809998","High":"180.389999","Low":"176.800003","Close":"179.699997","Volume":"4647300","Adj_Close":"169.09657"},{"Symbol":"IBM","Date":"2014-02-10","Open":"176.970001","High":"177.649994","Low":"176.25","Close":"177.139999","Volume":"3540400","Adj_Close":"166.687628"},{"Symbol":"IBM","Date":"2014-02-07","Open":"175.639999","High":"177.559998","Low":"175.070007","Close":"177.25","Volume":"4692900","Adj_Close":"166.791138"},{"Symbol":"IBM","Date":"2014-02-06","Open":"173.970001","High":"174.850006","Low":"173.789993","Close":"174.669998","Volume":"4292200","Adj_Close":"164.363372"},{"Symbol":"IBM","Date":"2014-02-05","Open":"172.190002","High":"174.970001","Low":"172.190002","Close":"174.240005","Volume":"4712300","Adj_Close":"163.064809"},{"Symbol":"IBM","Date":"2014-02-04","Open":"173.529999","High":"173.75","Low":"172.360001","Close":"172.839996","Volume":"4349800","Adj_Close":"161.754592"},{"Symbol":"IBM","Date":"2014-02-03","Open":"176.020004","High":"176.020004","Low":"172.720001","Close":"172.899994","Volume":"7186800","Adj_Close":"161.810741"},{"Symbol":"IBM","Date":"2014-01-31","Open":"176.110001","High":"177.839996","Low":"175.339996","Close":"176.679993","Volume":"5193400","Adj_Close":"165.348303"},{"Symbol":"IBM","Date":"2014-01-30","Open":"177.169998","High":"177.860001","Low":"176.360001","Close":"177.360001","Volume":"4853700","Adj_Close":"165.984697"},{"Symbol":"IBM","Date":"2014-01-29","Open":"175.979996","High":"178.529999","Low":"175.889999","Close":"176.399994","Volume":"4970900","Adj_Close":"165.086262"},{"Symbol":"IBM","Date":"2014-01-28","Open":"178.050003","High":"178.449997","Low":"176.160004","Close":"176.850006","Volume":"5333300","Adj_Close":"165.507412"},{"Symbol":"IBM","Date":"2014-01-27","Open":"179.610001","High":"179.649994","Low":"177.660004","Close":"177.899994","Volume":"5208600","Adj_Close":"166.490057"},{"Symbol":"IBM","Date":"2014-01-24","Open":"181.25","High":"182.809998","Low":"179.639999","Close":"179.639999","Volume":"6890600","Adj_Close":"168.118464"},{"Symbol":"IBM","Date":"2014-01-23","Open":"181.429993","High":"183.720001","Low":"180.710007","Close":"182.729996","Volume":"6973900","Adj_Close":"171.010278"},{"Symbol":"IBM","Date":"2014-01-22","Open":"181.279999","High":"183.50","Low":"179.669998","Close":"182.25","Volume":"13796100","Adj_Close":"170.561068"},{"Symbol":"IBM","Date":"2014-01-21","Open":"190.229996","High":"190.389999","Low":"186.789993","Close":"188.429993","Volume":"11076300","Adj_Close":"176.344695"},{"Symbol":"IBM","Date":"2014-01-17","Open":"188.039993","High":"190.809998","Low":"187.860001","Close":"190.089996","Volume":"7644600","Adj_Close":"177.898232"},{"Symbol":"IBM","Date":"2014-01-16","Open":"187.529999","High":"188.990005","Low":"186.800003","Close":"188.759995","Volume":"4770300","Adj_Close":"176.653532"},{"Symbol":"IBM","Date":"2014-01-15","Open":"185.820007","High":"188.649994","Low":"185.490005","Close":"187.740005","Volume":"4816500","Adj_Close":"175.698962"},{"Symbol":"IBM","Date":"2014-01-14","Open":"185.059998","High":"186.429993","Low":"183.880005","Close":"185.919998","Volume":"4619200","Adj_Close":"173.995684"},{"Symbol":"IBM","Date":"2014-01-13","Open":"186.259995","High":"186.949997","Low":"183.860001","Close":"184.160004","Volume":"5784700","Adj_Close":"172.34857"},{"Symbol":"IBM","Date":"2014-01-10","Open":"188.309998","High":"188.570007","Low":"186.279999","Close":"187.259995","Volume":"4022400","Adj_Close":"175.249737"},{"Symbol":"IBM","Date":"2014-01-09","Open":"189.020004","High":"189.50","Low":"186.550003","Close":"187.380005","Volume":"4321300","Adj_Close":"175.36205"},{"Symbol":"IBM","Date":"2014-01-08","Open":"189.330002","High":"189.419998","Low":"187.259995","Close":"187.970001","Volume":"4603700","Adj_Close":"175.914206"},{"Symbol":"IBM","Date":"2014-01-07","Open":"186.389999","High":"190.350006","Low":"186.380005","Close":"189.710007","Volume":"5932300","Adj_Close":"177.542613"},{"Symbol":"IBM","Date":"2014-01-06","Open":"187.149994","High":"187.360001","Low":"185.300003","Close":"186.00","Volume":"4067800","Adj_Close":"174.070555"},{"Symbol":"IBM","Date":"2014-01-03","Open":"185.830002","High":"187.350006","Low":"185.300003","Close":"186.639999","Volume":"4063200","Adj_Close":"174.669506"},{"Symbol":"IBM","Date":"2014-01-02","Open":"187.210007","High":"187.399994","Low":"185.199997","Close":"185.529999","Volume":"4546500","Adj_Close":"173.630698"}]}}},
{"query":{"count":252,"created":"2016-03-30T21:58:27Z","lang":"en-us","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"1","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"5","execution-stop-time":"31","execution-time":"26","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TM"},{"execution-start-time":"35","execution-stop-time":"37","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TM"}],"publiclyCallable":"true","cache":[{"execution-start-time":"4","execution-stop-time":"5","execution-time":"1","method":"GET","type":"MEMCACHED","content":"3887ee3dc24da806aa45f01b13d18216"},{"execution-start-time":"34","execution-stop-time":"35","execution-time":"1","method":"GET","type":"MEMCACHED","content":"f9d35c540fe444f64ef51e65e2d8b45d"}],"query":[{"execution-start-time":"5","execution-stop-time":"34","execution-time":"29","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TM]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"35","execution-stop-time":"40","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TM]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"845","execution-time":"842","instructions-used":"24192450","table-name":"yahoo.finance.historicaldata"},"user-time":"850","service-time":"31","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"TM","Date":"2014-12-31","Open":"125.599998","High":"126.209999","Low":"125.400002","Close":"125.480003","Volume":"151100","Adj_Close":"125.480003"},{"Symbol":"TM","Date":"2014-12-30","Open":"125.959999","High":"126.07","Low":"125.330002","Close":"125.910004","Volume":"169100","Adj_Close":"125.910004"},{"Symbol":"TM","Date":"2014-12-29","Open":"127.080002","High":"127.599998","Low":"126.860001","Close":"127.370003","Volume":"203600","Adj_Close":"127.370003"},{"Symbol":"TM","Date":"2014-12-26","Open":"127.00","High":"128.289993","Low":"127.00","Close":"128.100006","Volume":"160100","Adj_Close":"128.100006"},{"Symbol":"TM","Date":"2014-12-24","Open":"127.199997","High":"127.330002","Low":"126.760002","Close":"126.760002","Volume":"80000","Adj_Close":"126.760002"},{"Symbol":"TM","Date":"2014-12-23","Open":"126.739998","High":"127.309998","Low":"126.559998","Close":"126.760002","Volume":"188200","Adj_Close":"126.760002"},{"Symbol":"TM","Date":"2014-12-22","Open":"126.300003","High":"126.889999","Low":"125.93","Close":"126.639999","Volume":"598000","Adj_Close":"126.639999"},{"Symbol":"TM","Date":"2014-12-19","Open":"126.720001","High":"127.459999","Low":"126.519997","Close":"127.010002","Volume":"396700","Adj_Close":"127.010002"},{"Symbol":"TM","Date":"2014-12-18","Open":"124.129997","High":"124.790001","Low":"123.82","Close":"124.739998","Volume":"306700","Adj_Close":"124.739998"},{"Symbol":"TM","Date":"2014-12-17","Open":"122.00","High":"123.629997","Low":"122.00","Close":"123.220001","Volume":"338000","Adj_Close":"123.220001"},{"Symbol":"TM","Date":"2014-12-16","Open":"122.360001","High":"123.480003","Low":"121.75","Close":"121.940002","Volume":"543500","Adj_Close":"121.940002"},{"Symbol":"TM","Date":"2014-12-15","Open":"123.540001","High":"123.809998","Low":"121.059998","Close":"121.550003","Volume":"597000","Adj_Close":"121.550003"},{"Symbol":"TM","Date":"2014-12-12","Open":"125.660004","High":"126.07","Low":"124.519997","Close":"124.540001","Volume":"350100","Adj_Close":"124.540001"},{"Symbol":"TM","Date":"2014-12-11","Open":"126.550003","High":"127.330002","Low":"125.870003","Close":"126.089996","Volume":"251900","Adj_Close":"126.089996"},{"Symbol":"TM","Date":"2014-12-10","Open":"126.900002","High":"126.910004","Low":"125.120003","Close":"125.489998","Volume":"508800","Adj_Close":"125.489998"},{"Symbol":"TM","Date":"2014-12-09","Open":"127.849998","High":"128.419998","Low":"126.82","Close":"128.360001","Volume":"472100","Adj_Close":"128.360001"},{"Symbol":"TM","Date":"2014-12-08","Open":"129.039993","High":"129.190002","Low":"128.25","Close":"128.419998","Volume":"359500","Adj_Close":"128.419998"},{"Symbol":"TM","Date":"2014-12-05","Open":"128.860001","High":"129.300003","Low":"128.470001","Close":"129.029999","Volume":"423500","Adj_Close":"129.029999"},{"Symbol":"TM","Date":"2014-12-04","Open":"128.809998","High":"128.809998","Low":"128.100006","Close":"128.600006","Volume":"505100","Adj_Close":"128.600006"},{"Symbol":"TM","Date":"2014-12-03","Open":"127.50","High":"127.889999","Low":"127.120003","Close":"127.709999","Volume":"471300","Adj_Close":"127.709999"},{"Symbol":"TM","Date":"2014-12-02","Open":"126.559998","High":"127.029999","Low":"126.32","Close":"126.57","Volume":"493800","Adj_Close":"126.57"},{"Symbol":"TM","Date":"2014-12-01","Open":"124.660004","High":"125.57","Low":"124.550003","Close":"124.940002","Volume":"485800","Adj_Close":"124.940002"},{"Symbol":"TM","Date":"2014-11-28","Open":"122.910004","High":"123.330002","Low":"122.440002","Close":"123.129997","Volume":"234400","Adj_Close":"123.129997"},{"Symbol":"TM","Date":"2014-11-26","Open":"121.989998","High":"122.00","Low":"121.410004","Close":"121.699997","Volume":"291800","Adj_Close":"121.699997"},{"Symbol":"TM","Date":"2014-11-25","Open":"121.75","High":"121.989998","Low":"121.739998","Close":"121.809998","Volume":"190200","Adj_Close":"121.809998"},{"Symbol":"TM","Date":"2014-11-24","Open":"121.489998","High":"121.739998","Low":"121.300003","Close":"121.459999","Volume":"661000","Adj_Close":"121.459999"},{"Symbol":"TM","Date":"2014-11-21","Open":"120.610001","High":"121.699997","Low":"120.610001","Close":"121.290001","Volume":"920500","Adj_Close":"121.290001"},{"Symbol":"TM","Date":"2014-11-20","Open":"119.75","High":"120.029999","Low":"119.510002","Close":"119.720001","Volume":"163000","Adj_Close":"119.720001"},{"Symbol":"TM","Date":"2014-11-19","Open":"120.07","High":"120.519997","Low":"119.459999","Close":"120.349998","Volume":"389700","Adj_Close":"120.349998"},{"Symbol":"TM","Date":"2014-11-18","Open":"119.68","High":"120.389999","Low":"119.57","Close":"120.07","Volume":"332300","Adj_Close":"120.07"},{"Symbol":"TM","Date":"2014-11-17","Open":"118.50","High":"119.139999","Low":"118.080002","Close":"118.589996","Volume":"324100","Adj_Close":"118.589996"},{"Symbol":"TM","Date":"2014-11-14","Open":"119.580002","High":"119.879997","Low":"119.230003","Close":"119.82","Volume":"214200","Adj_Close":"119.82"},{"Symbol":"TM","Date":"2014-11-13","Open":"119.650002","High":"120.370003","Low":"119.650002","Close":"119.82","Volume":"269800","Adj_Close":"119.82"},{"Symbol":"TM","Date":"2014-11-12","Open":"118.739998","High":"118.940002","Low":"118.110001","Close":"118.790001","Volume":"252800","Adj_Close":"118.790001"},{"Symbol":"TM","Date":"2014-11-11","Open":"118.50","High":"119.43","Low":"118.43","Close":"119.139999","Volume":"526100","Adj_Close":"119.139999"},{"Symbol":"TM","Date":"2014-11-10","Open":"117.809998","High":"118.290001","Low":"117.50","Close":"117.970001","Volume":"429800","Adj_Close":"117.970001"},{"Symbol":"TM","Date":"2014-11-07","Open":"118.43","High":"118.669998","Low":"117.68","Close":"118.669998","Volume":"570800","Adj_Close":"118.669998"},{"Symbol":"TM","Date":"2014-11-06","Open":"119.519997","High":"119.980003","Low":"119.019997","Close":"119.830002","Volume":"435500","Adj_Close":"119.830002"},{"Symbol":"TM","Date":"2014-11-05","Open":"121.029999","High":"121.75","Low":"120.410004","Close":"121.370003","Volume":"394100","Adj_Close":"121.370003"},{"Symbol":"TM","Date":"2014-11-04","Open":"119.50","High":"119.720001","Low":"118.309998","Close":"119.400002","Volume":"569600","Adj_Close":"119.400002"},{"Symbol":"TM","Date":"2014-11-03","Open":"121.300003","High":"122.029999","Low":"120.809998","Close":"122.00","Volume":"856900","Adj_Close":"122.00"},{"Symbol":"TM","Date":"2014-10-31","Open":"119.050003","High":"121.440002","Low":"118.50","Close":"121.349998","Volume":"1280500","Adj_Close":"121.349998"},{"Symbol":"TM","Date":"2014-10-30","Open":"114.800003","High":"116.300003","Low":"114.790001","Close":"115.860001","Volume":"194900","Adj_Close":"115.860001"},{"Symbol":"TM","Date":"2014-10-29","Open":"116.00","High":"116.650002","Low":"115.269997","Close":"115.809998","Volume":"245800","Adj_Close":"115.809998"},{"Symbol":"TM","Date":"2014-10-28","Open":"114.650002","High":"115.099998","Low":"114.110001","Close":"115.099998","Volume":"389900","Adj_Close":"115.099998"},{"Symbol":"TM","Date":"2014-10-27","Open":"114.32","High":"114.849998","Low":"113.860001","Close":"114.339996","Volume":"198500","Adj_Close":"114.339996"},{"Symbol":"TM","Date":"2014-10-24","Open":"114.410004","High":"114.650002","Low":"113.870003","Close":"114.510002","Volume":"312500","Adj_Close":"114.510002"},{"Symbol":"TM","Date":"2014-10-23","Open":"113.25","High":"114.150002","Low":"112.93","Close":"113.410004","Volume":"408300","Adj_Close":"113.410004"},{"Symbol":"TM","Date":"2014-10-22","Open":"113.110001","High":"113.419998","Low":"112.199997","Close":"112.269997","Volume":"413600","Adj_Close":"112.269997"},{"Symbol":"TM","Date":"2014-10-21","Open":"112.360001","High":"113.470001","Low":"112.129997","Close":"113.349998","Volume":"665400","Adj_Close":"113.349998"},{"Symbol":"TM","Date":"2014-10-20","Open":"112.330002","High":"113.50","Low":"112.300003","Close":"113.309998","Volume":"408900","Adj_Close":"113.309998"},{"Symbol":"TM","Date":"2014-10-17","Open":"108.989998","High":"110.389999","Low":"108.940002","Close":"109.790001","Volume":"469100","Adj_Close":"109.790001"},{"Symbol":"TM","Date":"2014-10-16","Open":"108.989998","High":"110.839996","Low":"108.620003","Close":"110.18","Volume":"441700","Adj_Close":"110.18"},{"Symbol":"TM","Date":"2014-10-15","Open":"109.779999","High":"110.379997","Low":"108.400002","Close":"110.059998","Volume":"632600","Adj_Close":"110.059998"},{"Symbol":"TM","Date":"2014-10-14","Open":"111.940002","High":"112.040001","Low":"111.260002","Close":"111.620003","Volume":"759400","Adj_Close":"111.620003"},{"Symbol":"TM","Date":"2014-10-13","Open":"114.169998","High":"114.669998","Low":"112.589996","Close":"112.669998","Volume":"425700","Adj_Close":"112.669998"},{"Symbol":"TM","Date":"2014-10-10","Open":"115.010002","High":"115.75","Low":"113.849998","Close":"113.970001","Volume":"448400","Adj_Close":"113.970001"},{"Symbol":"TM","Date":"2014-10-09","Open":"116.209999","High":"116.300003","Low":"114.239998","Close":"114.519997","Volume":"371200","Adj_Close":"114.519997"},{"Symbol":"TM","Date":"2014-10-08","Open":"115.580002","High":"116.349998","Low":"114.230003","Close":"116.260002","Volume":"446000","Adj_Close":"116.260002"},{"Symbol":"TM","Date":"2014-10-07","Open":"117.00","High":"117.139999","Low":"115.800003","Close":"115.82","Volume":"398400","Adj_Close":"115.82"},{"Symbol":"TM","Date":"2014-10-06","Open":"116.610001","High":"117.220001","Low":"116.410004","Close":"116.699997","Volume":"339200","Adj_Close":"116.699997"},{"Symbol":"TM","Date":"2014-10-03","Open":"115.699997","High":"116.309998","Low":"115.480003","Close":"116.160004","Volume":"281500","Adj_Close":"116.160004"},{"Symbol":"TM","Date":"2014-10-02","Open":"115.019997","High":"115.18","Low":"113.639999","Close":"114.480003","Volume":"507300","Adj_Close":"114.480003"},{"Symbol":"TM","Date":"2014-10-01","Open":"117.940002","High":"117.989998","Low":"116.459999","Close":"116.650002","Volume":"676800","Adj_Close":"116.650002"},{"Symbol":"TM","Date":"2014-09-30","Open":"117.900002","High":"118.110001","Low":"117.040001","Close":"117.529999","Volume":"481100","Adj_Close":"117.529999"},{"Symbol":"TM","Date":"2014-09-29","Open":"118.07","High":"118.150002","Low":"117.080002","Close":"117.519997","Volume":"365700","Adj_Close":"117.519997"},{"Symbol":"TM","Date":"2014-09-26","Open":"118.239998","High":"118.800003","Low":"118.110001","Close":"118.650002","Volume":"271300","Adj_Close":"118.650002"},{"Symbol":"TM","Date":"2014-09-25","Open":"119.019997","High":"119.43","Low":"117.779999","Close":"117.870003","Volume":"437800","Adj_Close":"117.870003"},{"Symbol":"TM","Date":"2014-09-24","Open":"118.059998","High":"118.910004","Low":"118.029999","Close":"118.849998","Volume":"272900","Adj_Close":"118.849998"},{"Symbol":"TM","Date":"2014-09-23","Open":"118.980003","High":"119.00","Low":"118.019997","Close":"118.25","Volume":"314500","Adj_Close":"118.25"},{"Symbol":"TM","Date":"2014-09-22","Open":"119.110001","High":"119.809998","Low":"118.910004","Close":"119.010002","Volume":"409700","Adj_Close":"119.010002"},{"Symbol":"TM","Date":"2014-09-19","Open":"119.300003","High":"119.400002","Low":"118.559998","Close":"118.760002","Volume":"262100","Adj_Close":"118.760002"},{"Symbol":"TM","Date":"2014-09-18","Open":"118.82","High":"119.50","Low":"118.739998","Close":"119.43","Volume":"356500","Adj_Close":"119.43"},{"Symbol":"TM","Date":"2014-09-17","Open":"117.389999","High":"117.940002","Low":"116.879997","Close":"117.349998","Volume":"262800","Adj_Close":"117.349998"},{"Symbol":"TM","Date":"2014-09-16","Open":"117.239998","High":"117.849998","Low":"117.019997","Close":"117.589996","Volume":"320900","Adj_Close":"117.589996"},{"Symbol":"TM","Date":"2014-09-15","Open":"116.980003","High":"117.279999","Low":"116.690002","Close":"117.160004","Volume":"176700","Adj_Close":"117.160004"},{"Symbol":"TM","Date":"2014-09-12","Open":"117.379997","High":"117.400002","Low":"116.830002","Close":"117.110001","Volume":"233400","Adj_Close":"117.110001"},{"Symbol":"TM","Date":"2014-09-11","Open":"116.260002","High":"116.480003","Low":"116.00","Close":"116.370003","Volume":"189600","Adj_Close":"116.370003"},{"Symbol":"TM","Date":"2014-09-10","Open":"116.07","High":"116.589996","Low":"115.779999","Close":"116.489998","Volume":"359500","Adj_Close":"116.489998"},{"Symbol":"TM","Date":"2014-09-09","Open":"115.400002","High":"115.449997","Low":"114.970001","Close":"115.019997","Volume":"323400","Adj_Close":"115.019997"},{"Symbol":"TM","Date":"2014-09-08","Open":"116.160004","High":"116.309998","Low":"115.510002","Close":"116.040001","Volume":"219100","Adj_Close":"116.040001"},{"Symbol":"TM","Date":"2014-09-05","Open":"116.089996","High":"116.419998","Low":"115.919998","Close":"116.389999","Volume":"162200","Adj_Close":"116.389999"},{"Symbol":"TM","Date":"2014-09-04","Open":"116.190002","High":"116.760002","Low":"115.900002","Close":"116.050003","Volume":"382700","Adj_Close":"116.050003"},{"Symbol":"TM","Date":"2014-09-03","Open":"116.120003","High":"116.360001","Low":"115.849998","Close":"115.959999","Volume":"244300","Adj_Close":"115.959999"},{"Symbol":"TM","Date":"2014-09-02","Open":"115.940002","High":"116.209999","Low":"115.730003","Close":"116.199997","Volume":"294000","Adj_Close":"116.199997"},{"Symbol":"TM","Date":"2014-08-29","Open":"114.50","High":"114.559998","Low":"113.919998","Close":"114.32","Volume":"170300","Adj_Close":"114.32"},{"Symbol":"TM","Date":"2014-08-28","Open":"114.599998","High":"114.900002","Low":"114.029999","Close":"114.43","Volume":"281300","Adj_Close":"114.43"},{"Symbol":"TM","Date":"2014-08-27","Open":"115.099998","High":"115.190002","Low":"114.760002","Close":"114.910004","Volume":"268800","Adj_Close":"114.910004"},{"Symbol":"TM","Date":"2014-08-26","Open":"115.129997","High":"115.699997","Low":"114.919998","Close":"115.080002","Volume":"251000","Adj_Close":"115.080002"},{"Symbol":"TM","Date":"2014-08-25","Open":"114.769997","High":"115.150002","Low":"114.660004","Close":"114.870003","Volume":"238900","Adj_Close":"114.870003"},{"Symbol":"TM","Date":"2014-08-22","Open":"114.779999","High":"114.779999","Low":"113.940002","Close":"114.089996","Volume":"477000","Adj_Close":"114.089996"},{"Symbol":"TM","Date":"2014-08-21","Open":"115.75","High":"116.25","Low":"115.709999","Close":"115.779999","Volume":"263900","Adj_Close":"115.779999"},{"Symbol":"TM","Date":"2014-08-20","Open":"115.620003","High":"115.879997","Low":"115.199997","Close":"115.699997","Volume":"319900","Adj_Close":"115.699997"},{"Symbol":"TM","Date":"2014-08-19","Open":"117.099998","High":"117.209999","Low":"116.809998","Close":"116.949997","Volume":"221900","Adj_Close":"116.949997"},{"Symbol":"TM","Date":"2014-08-18","Open":"117.010002","High":"117.470001","Low":"117.010002","Close":"117.209999","Volume":"156900","Adj_Close":"117.209999"},{"Symbol":"TM","Date":"2014-08-15","Open":"117.25","High":"117.379997","Low":"116.260002","Close":"116.889999","Volume":"220300","Adj_Close":"116.889999"},{"Symbol":"TM","Date":"2014-08-14","Open":"117.470001","High":"117.790001","Low":"117.25","Close":"117.739998","Volume":"181500","Adj_Close":"117.739998"},{"Symbol":"TM","Date":"2014-08-13","Open":"117.849998","High":"118.330002","Low":"117.769997","Close":"117.93","Volume":"217800","Adj_Close":"117.93"},{"Symbol":"TM","Date":"2014-08-12","Open":"117.07","High":"117.550003","Low":"116.830002","Close":"117.239998","Volume":"242500","Adj_Close":"117.239998"},{"Symbol":"TM","Date":"2014-08-11","Open":"116.730003","High":"117.199997","Low":"116.50","Close":"116.760002","Volume":"264800","Adj_Close":"116.760002"},{"Symbol":"TM","Date":"2014-08-08","Open":"116.639999","High":"117.660004","Low":"116.150002","Close":"117.629997","Volume":"254400","Adj_Close":"117.629997"},{"Symbol":"TM","Date":"2014-08-07","Open":"117.459999","High":"118.080002","Low":"116.43","Close":"116.68","Volume":"260400","Adj_Close":"116.68"},{"Symbol":"TM","Date":"2014-08-06","Open":"116.129997","High":"116.760002","Low":"115.43","Close":"116.610001","Volume":"429300","Adj_Close":"116.610001"},{"Symbol":"TM","Date":"2014-08-05","Open":"119.010002","High":"119.82","Low":"118.510002","Close":"119.029999","Volume":"360300","Adj_Close":"119.029999"},{"Symbol":"TM","Date":"2014-08-04","Open":"117.93","High":"118.330002","Low":"117.620003","Close":"118.120003","Volume":"131300","Adj_Close":"118.120003"},{"Symbol":"TM","Date":"2014-08-01","Open":"117.709999","High":"118.080002","Low":"117.290001","Close":"117.589996","Volume":"206900","Adj_Close":"117.589996"},{"Symbol":"TM","Date":"2014-07-31","Open":"119.309998","High":"119.709999","Low":"117.940002","Close":"117.989998","Volume":"290900","Adj_Close":"117.989998"},{"Symbol":"TM","Date":"2014-07-30","Open":"120.519997","High":"120.519997","Low":"119.540001","Close":"120.040001","Volume":"293100","Adj_Close":"120.040001"},{"Symbol":"TM","Date":"2014-07-29","Open":"120.589996","High":"121.459999","Low":"120.50","Close":"120.580002","Volume":"399200","Adj_Close":"120.580002"},{"Symbol":"TM","Date":"2014-07-28","Open":"119.959999","High":"120.760002","Low":"119.75","Close":"120.580002","Volume":"172800","Adj_Close":"120.580002"},{"Symbol":"TM","Date":"2014-07-25","Open":"119.919998","High":"120.00","Low":"119.32","Close":"119.629997","Volume":"140200","Adj_Close":"119.629997"},{"Symbol":"TM","Date":"2014-07-24","Open":"119.610001","High":"119.989998","Low":"119.370003","Close":"119.379997","Volume":"152600","Adj_Close":"119.379997"},{"Symbol":"TM","Date":"2014-07-23","Open":"119.389999","High":"119.650002","Low":"119.050003","Close":"119.43","Volume":"171200","Adj_Close":"119.43"},{"Symbol":"TM","Date":"2014-07-22","Open":"118.720001","High":"119.419998","Low":"118.720001","Close":"119.18","Volume":"117700","Adj_Close":"119.18"},{"Symbol":"TM","Date":"2014-07-21","Open":"118.690002","High":"119.00","Low":"118.029999","Close":"118.660004","Volume":"143900","Adj_Close":"118.660004"},{"Symbol":"TM","Date":"2014-07-18","Open":"118.839996","High":"118.989998","Low":"118.349998","Close":"118.900002","Volume":"208000","Adj_Close":"118.900002"},{"Symbol":"TM","Date":"2014-07-17","Open":"119.199997","High":"119.480003","Low":"118.199997","Close":"118.379997","Volume":"244700","Adj_Close":"118.379997"},{"Symbol":"TM","Date":"2014-07-16","Open":"119.400002","High":"119.519997","Low":"119.110001","Close":"119.150002","Volume":"181200","Adj_Close":"119.150002"},{"Symbol":"TM","Date":"2014-07-15","Open":"119.00","High":"119.089996","Low":"118.330002","Close":"118.709999","Volume":"187700","Adj_Close":"118.709999"},{"Symbol":"TM","Date":"2014-07-14","Open":"119.370003","High":"119.489998","Low":"118.889999","Close":"119.00","Volume":"166800","Adj_Close":"119.00"},{"Symbol":"TM","Date":"2014-07-11","Open":"118.410004","High":"118.800003","Low":"118.120003","Close":"118.519997","Volume":"347300","Adj_Close":"118.519997"},{"Symbol":"TM","Date":"2014-07-10","Open":"117.480003","High":"118.389999","Low":"116.610001","Close":"118.050003","Volume":"466700","Adj_Close":"118.050003"},{"Symbol":"TM","Date":"2014-07-09","Open":"119.800003","High":"120.290001","Low":"119.00","Close":"120.040001","Volume":"292300","Adj_Close":"120.040001"},{"Symbol":"TM","Date":"2014-07-08","Open":"120.940002","High":"120.940002","Low":"119.629997","Close":"120.300003","Volume":"343400","Adj_Close":"120.300003"},{"Symbol":"TM","Date":"2014-07-07","Open":"121.25","High":"121.800003","Low":"120.860001","Close":"121.160004","Volume":"328700","Adj_Close":"121.160004"},{"Symbol":"TM","Date":"2014-07-03","Open":"121.349998","High":"121.900002","Low":"121.050003","Close":"121.730003","Volume":"195900","Adj_Close":"121.730003"},{"Symbol":"TM","Date":"2014-07-02","Open":"122.339996","High":"122.349998","Low":"121.629997","Close":"121.879997","Volume":"223500","Adj_Close":"121.879997"},{"Symbol":"TM","Date":"2014-07-01","Open":"121.43","High":"122.279999","Low":"121.349998","Close":"122.260002","Volume":"501000","Adj_Close":"122.260002"},{"Symbol":"TM","Date":"2014-06-30","Open":"119.75","High":"119.879997","Low":"119.440002","Close":"119.660004","Volume":"505000","Adj_Close":"119.660004"},{"Symbol":"TM","Date":"2014-06-27","Open":"118.709999","High":"118.940002","Low":"118.470001","Close":"118.839996","Volume":"353200","Adj_Close":"118.839996"},{"Symbol":"TM","Date":"2014-06-26","Open":"118.00","High":"118.00","Low":"117.290001","Close":"117.650002","Volume":"195600","Adj_Close":"117.650002"},{"Symbol":"TM","Date":"2014-06-25","Open":"116.910004","High":"117.519997","Low":"116.629997","Close":"117.470001","Volume":"208600","Adj_Close":"117.470001"},{"Symbol":"TM","Date":"2014-06-24","Open":"117.260002","High":"117.389999","Low":"116.50","Close":"116.550003","Volume":"219600","Adj_Close":"116.550003"},{"Symbol":"TM","Date":"2014-06-23","Open":"117.099998","High":"117.290001","Low":"116.699997","Close":"117.220001","Volume":"233800","Adj_Close":"117.220001"},{"Symbol":"TM","Date":"2014-06-20","Open":"118.209999","High":"118.419998","Low":"117.720001","Close":"118.220001","Volume":"513600","Adj_Close":"118.220001"},{"Symbol":"TM","Date":"2014-06-19","Open":"117.50","High":"118.07","Low":"117.029999","Close":"117.75","Volume":"660300","Adj_Close":"117.75"},{"Symbol":"TM","Date":"2014-06-18","Open":"114.839996","High":"116.220001","Low":"114.639999","Close":"116.050003","Volume":"360700","Adj_Close":"116.050003"},{"Symbol":"TM","Date":"2014-06-17","Open":"115.129997","High":"115.239998","Low":"114.510002","Close":"114.709999","Volume":"222000","Adj_Close":"114.709999"},{"Symbol":"TM","Date":"2014-06-16","Open":"114.269997","High":"114.660004","Low":"113.900002","Close":"114.480003","Volume":"225200","Adj_Close":"114.480003"},{"Symbol":"TM","Date":"2014-06-13","Open":"114.120003","High":"114.360001","Low":"114.00","Close":"114.239998","Volume":"185200","Adj_Close":"114.239998"},{"Symbol":"TM","Date":"2014-06-12","Open":"114.779999","High":"115.290001","Low":"114.110001","Close":"114.260002","Volume":"292400","Adj_Close":"114.260002"},{"Symbol":"TM","Date":"2014-06-11","Open":"114.059998","High":"114.470001","Low":"113.779999","Close":"114.059998","Volume":"207000","Adj_Close":"114.059998"},{"Symbol":"TM","Date":"2014-06-10","Open":"113.68","High":"114.120003","Low":"113.379997","Close":"113.870003","Volume":"348900","Adj_Close":"113.870003"},{"Symbol":"TM","Date":"2014-06-09","Open":"115.00","High":"115.309998","Low":"114.830002","Close":"115.07","Volume":"220200","Adj_Close":"115.07"},{"Symbol":"TM","Date":"2014-06-06","Open":"114.620003","High":"115.459999","Low":"114.519997","Close":"115.150002","Volume":"370900","Adj_Close":"115.150002"},{"Symbol":"TM","Date":"2014-06-05","Open":"114.199997","High":"114.800003","Low":"113.82","Close":"114.589996","Volume":"318500","Adj_Close":"114.589996"},{"Symbol":"TM","Date":"2014-06-04","Open":"114.510002","High":"114.660004","Low":"113.389999","Close":"114.480003","Volume":"558100","Adj_Close":"114.480003"},{"Symbol":"TM","Date":"2014-06-03","Open":"114.160004","High":"115.029999","Low":"114.160004","Close":"114.919998","Volume":"593400","Adj_Close":"114.919998"},{"Symbol":"TM","Date":"2014-06-02","Open":"114.120003","High":"114.190002","Low":"113.269997","Close":"113.949997","Volume":"660400","Adj_Close":"113.949997"},{"Symbol":"TM","Date":"2014-05-30","Open":"113.349998","High":"113.389999","Low":"112.900002","Close":"113.110001","Volume":"449700","Adj_Close":"113.110001"},{"Symbol":"TM","Date":"2014-05-29","Open":"111.290001","High":"111.709999","Low":"111.07","Close":"111.489998","Volume":"348500","Adj_Close":"111.489998"},{"Symbol":"TM","Date":"2014-05-28","Open":"110.550003","High":"110.800003","Low":"109.50","Close":"109.910004","Volume":"259100","Adj_Close":"109.910004"},{"Symbol":"TM","Date":"2014-05-27","Open":"109.93","High":"110.169998","Low":"109.529999","Close":"110.110001","Volume":"296400","Adj_Close":"110.110001"},{"Symbol":"TM","Date":"2014-05-23","Open":"109.510002","High":"109.730003","Low":"109.379997","Close":"109.639999","Volume":"175600","Adj_Close":"109.639999"},{"Symbol":"TM","Date":"2014-05-22","Open":"108.900002","High":"109.900002","Low":"108.870003","Close":"109.489998","Volume":"547100","Adj_Close":"109.489998"},{"Symbol":"TM","Date":"2014-05-21","Open":"107.800003","High":"108.220001","Low":"107.589996","Close":"108.059998","Volume":"307000","Adj_Close":"108.059998"},{"Symbol":"TM","Date":"2014-05-20","Open":"108.169998","High":"108.279999","Low":"107.629997","Close":"107.669998","Volume":"333200","Adj_Close":"107.669998"},{"Symbol":"TM","Date":"2014-05-19","Open":"108.110001","High":"108.790001","Low":"107.809998","Close":"108.610001","Volume":"358900","Adj_Close":"108.610001"},{"Symbol":"TM","Date":"2014-05-16","Open":"109.370003","High":"109.620003","Low":"108.959999","Close":"109.610001","Volume":"237400","Adj_Close":"109.610001"},{"Symbol":"TM","Date":"2014-05-15","Open":"110.339996","High":"110.660004","Low":"109.00","Close":"109.50","Volume":"257900","Adj_Close":"109.50"},{"Symbol":"TM","Date":"2014-05-14","Open":"111.07","High":"111.440002","Low":"110.410004","Close":"110.43","Volume":"699500","Adj_Close":"110.43"},{"Symbol":"TM","Date":"2014-05-13","Open":"110.209999","High":"111.540001","Low":"110.089996","Close":"111.379997","Volume":"564200","Adj_Close":"111.379997"},{"Symbol":"TM","Date":"2014-05-12","Open":"108.870003","High":"109.32","Low":"108.599998","Close":"109.209999","Volume":"346200","Adj_Close":"109.209999"},{"Symbol":"TM","Date":"2014-05-09","Open":"108.959999","High":"109.379997","Low":"108.529999","Close":"108.870003","Volume":"371700","Adj_Close":"108.870003"},{"Symbol":"TM","Date":"2014-05-08","Open":"108.50","High":"108.610001","Low":"107.529999","Close":"108.150002","Volume":"366500","Adj_Close":"108.150002"},{"Symbol":"TM","Date":"2014-05-07","Open":"109.00","High":"109.139999","Low":"108.580002","Close":"109.029999","Volume":"319000","Adj_Close":"109.029999"},{"Symbol":"TM","Date":"2014-05-06","Open":"109.50","High":"109.57","Low":"108.720001","Close":"109.00","Volume":"429400","Adj_Close":"109.00"},{"Symbol":"TM","Date":"2014-05-05","Open":"109.779999","High":"109.93","Low":"109.410004","Close":"109.440002","Volume":"274800","Adj_Close":"109.440002"},{"Symbol":"TM","Date":"2014-05-02","Open":"109.989998","High":"110.18","Low":"109.669998","Close":"109.93","Volume":"420500","Adj_Close":"109.93"},{"Symbol":"TM","Date":"2014-05-01","Open":"110.019997","High":"110.150002","Low":"109.370003","Close":"109.730003","Volume":"340900","Adj_Close":"109.730003"},{"Symbol":"TM","Date":"2014-04-30","Open":"108.00","High":"108.50","Low":"107.669998","Close":"108.419998","Volume":"467700","Adj_Close":"108.419998"},{"Symbol":"TM","Date":"2014-04-29","Open":"107.809998","High":"107.989998","Low":"107.379997","Close":"107.50","Volume":"296500","Adj_Close":"107.50"},{"Symbol":"TM","Date":"2014-04-28","Open":"107.400002","High":"107.459999","Low":"106.349998","Close":"107.07","Volume":"392800","Adj_Close":"107.07"},{"Symbol":"TM","Date":"2014-04-25","Open":"106.809998","High":"107.220001","Low":"106.349998","Close":"106.489998","Volume":"436500","Adj_Close":"106.489998"},{"Symbol":"TM","Date":"2014-04-24","Open":"107.339996","High":"107.339996","Low":"106.580002","Close":"107.040001","Volume":"459600","Adj_Close":"107.040001"},{"Symbol":"TM","Date":"2014-04-23","Open":"108.279999","High":"108.489998","Low":"108.120003","Close":"108.150002","Volume":"276800","Adj_Close":"108.150002"},{"Symbol":"TM","Date":"2014-04-22","Open":"108.449997","High":"108.629997","Low":"108.209999","Close":"108.419998","Volume":"343900","Adj_Close":"108.419998"},{"Symbol":"TM","Date":"2014-04-21","Open":"108.900002","High":"108.93","Low":"108.440002","Close":"108.639999","Volume":"377000","Adj_Close":"108.639999"},{"Symbol":"TM","Date":"2014-04-17","Open":"108.540001","High":"108.620003","Low":"107.690002","Close":"108.019997","Volume":"393100","Adj_Close":"108.019997"},{"Symbol":"TM","Date":"2014-04-16","Open":"108.00","High":"108.50","Low":"107.699997","Close":"108.470001","Volume":"372700","Adj_Close":"108.470001"},{"Symbol":"TM","Date":"2014-04-15","Open":"106.629997","High":"106.970001","Low":"105.669998","Close":"106.860001","Volume":"488000","Adj_Close":"106.860001"},{"Symbol":"TM","Date":"2014-04-14","Open":"107.18","High":"107.699997","Low":"106.730003","Close":"107.32","Volume":"497400","Adj_Close":"107.32"},{"Symbol":"TM","Date":"2014-04-11","Open":"104.300003","High":"105.809998","Low":"104.050003","Close":"104.889999","Volume":"912300","Adj_Close":"104.889999"},{"Symbol":"TM","Date":"2014-04-10","Open":"105.07","High":"105.279999","Low":"103.379997","Close":"103.389999","Volume":"1535400","Adj_Close":"103.389999"},{"Symbol":"TM","Date":"2014-04-09","Open":"106.900002","High":"107.830002","Low":"106.669998","Close":"107.730003","Volume":"1117600","Adj_Close":"107.730003"},{"Symbol":"TM","Date":"2014-04-08","Open":"109.099998","High":"109.339996","Low":"108.629997","Close":"109.099998","Volume":"611900","Adj_Close":"109.099998"},{"Symbol":"TM","Date":"2014-04-07","Open":"111.510002","High":"111.760002","Low":"110.839996","Close":"111.389999","Volume":"401800","Adj_Close":"111.389999"},{"Symbol":"TM","Date":"2014-04-04","Open":"112.220001","High":"112.599998","Low":"111.029999","Close":"111.260002","Volume":"598400","Adj_Close":"111.260002"},{"Symbol":"TM","Date":"2014-04-03","Open":"112.93","High":"113.589996","Low":"112.540001","Close":"112.860001","Volume":"453200","Adj_Close":"112.860001"},{"Symbol":"TM","Date":"2014-04-02","Open":"113.360001","High":"113.510002","Low":"112.699997","Close":"113.440002","Volume":"351100","Adj_Close":"113.440002"},{"Symbol":"TM","Date":"2014-04-01","Open":"112.949997","High":"113.339996","Low":"112.809998","Close":"113.220001","Volume":"539200","Adj_Close":"113.220001"},{"Symbol":"TM","Date":"2014-03-31","Open":"113.099998","High":"113.489998","Low":"112.550003","Close":"112.900002","Volume":"481000","Adj_Close":"112.900002"},{"Symbol":"TM","Date":"2014-03-28","Open":"113.419998","High":"113.720001","Low":"112.57","Close":"112.830002","Volume":"539400","Adj_Close":"112.830002"},{"Symbol":"TM","Date":"2014-03-27","Open":"111.900002","High":"112.00","Low":"111.309998","Close":"111.580002","Volume":"559000","Adj_Close":"111.580002"},{"Symbol":"TM","Date":"2014-03-26","Open":"110.940002","High":"111.980003","Low":"110.25","Close":"110.529999","Volume":"858400","Adj_Close":"110.529999"},{"Symbol":"TM","Date":"2014-03-25","Open":"108.919998","High":"109.309998","Low":"108.300003","Close":"108.459999","Volume":"349300","Adj_Close":"108.459999"},{"Symbol":"TM","Date":"2014-03-24","Open":"108.300003","High":"108.440002","Low":"107.190002","Close":"107.940002","Volume":"362500","Adj_Close":"107.940002"},{"Symbol":"TM","Date":"2014-03-21","Open":"107.650002","High":"108.43","Low":"107.339996","Close":"107.370003","Volume":"413200","Adj_Close":"107.370003"},{"Symbol":"TM","Date":"2014-03-20","Open":"106.550003","High":"107.730003","Low":"106.309998","Close":"107.610001","Volume":"668100","Adj_Close":"107.610001"},{"Symbol":"TM","Date":"2014-03-19","Open":"109.209999","High":"109.739998","Low":"108.160004","Close":"108.68","Volume":"513300","Adj_Close":"108.68"},{"Symbol":"TM","Date":"2014-03-18","Open":"109.449997","High":"110.269997","Low":"109.339996","Close":"109.830002","Volume":"319000","Adj_Close":"109.830002"},{"Symbol":"TM","Date":"2014-03-17","Open":"110.07","High":"110.809998","Low":"109.93","Close":"110.669998","Volume":"438500","Adj_Close":"110.669998"},{"Symbol":"TM","Date":"2014-03-14","Open":"109.07","High":"109.43","Low":"108.489998","Close":"108.760002","Volume":"753200","Adj_Close":"108.760002"},{"Symbol":"TM","Date":"2014-03-13","Open":"111.489998","High":"111.779999","Low":"109.68","Close":"110.209999","Volume":"396100","Adj_Close":"110.209999"},{"Symbol":"TM","Date":"2014-03-12","Open":"111.279999","High":"111.639999","Low":"110.57","Close":"111.300003","Volume":"483900","Adj_Close":"111.300003"},{"Symbol":"TM","Date":"2014-03-11","Open":"113.209999","High":"113.43","Low":"112.410004","Close":"112.459999","Volume":"224100","Adj_Close":"112.459999"},{"Symbol":"TM","Date":"2014-03-10","Open":"113.610001","High":"113.800003","Low":"113.00","Close":"113.339996","Volume":"235500","Adj_Close":"113.339996"},{"Symbol":"TM","Date":"2014-03-07","Open":"114.800003","High":"114.970001","Low":"113.800003","Close":"113.959999","Volume":"309000","Adj_Close":"113.959999"},{"Symbol":"TM","Date":"2014-03-06","Open":"114.800003","High":"114.949997","Low":"114.540001","Close":"114.650002","Volume":"392200","Adj_Close":"114.650002"},{"Symbol":"TM","Date":"2014-03-05","Open":"113.18","High":"113.739998","Low":"112.830002","Close":"113.260002","Volume":"621900","Adj_Close":"113.260002"},{"Symbol":"TM","Date":"2014-03-04","Open":"114.830002","High":"115.279999","Low":"114.660004","Close":"115.209999","Volume":"286500","Adj_Close":"115.209999"},{"Symbol":"TM","Date":"2014-03-03","Open":"113.839996","High":"113.980003","Low":"113.150002","Close":"113.599998","Volume":"456300","Adj_Close":"113.599998"},{"Symbol":"TM","Date":"2014-02-28","Open":"115.169998","High":"115.919998","Low":"114.860001","Close":"115.300003","Volume":"307800","Adj_Close":"115.300003"},{"Symbol":"TM","Date":"2014-02-27","Open":"115.25","High":"116.019997","Low":"114.870003","Close":"116.019997","Volume":"227800","Adj_Close":"116.019997"},{"Symbol":"TM","Date":"2014-02-26","Open":"116.00","High":"116.019997","Low":"115.370003","Close":"115.580002","Volume":"231300","Adj_Close":"115.580002"},{"Symbol":"TM","Date":"2014-02-25","Open":"116.25","High":"116.919998","Low":"115.940002","Close":"116.470001","Volume":"298600","Adj_Close":"116.470001"},{"Symbol":"TM","Date":"2014-02-24","Open":"116.050003","High":"116.540001","Low":"115.860001","Close":"116.169998","Volume":"328600","Adj_Close":"116.169998"},{"Symbol":"TM","Date":"2014-02-21","Open":"116.389999","High":"117.07","Low":"116.269997","Close":"116.339996","Volume":"315800","Adj_Close":"116.339996"},{"Symbol":"TM","Date":"2014-02-20","Open":"115.410004","High":"115.769997","Low":"114.860001","Close":"115.330002","Volume":"242300","Adj_Close":"115.330002"},{"Symbol":"TM","Date":"2014-02-19","Open":"115.910004","High":"116.419998","Low":"115.099998","Close":"115.220001","Volume":"279900","Adj_Close":"115.220001"},{"Symbol":"TM","Date":"2014-02-18","Open":"116.519997","High":"117.110001","Low":"115.75","Close":"116.279999","Volume":"387500","Adj_Close":"116.279999"},{"Symbol":"TM","Date":"2014-02-14","Open":"115.099998","High":"115.769997","Low":"115.00","Close":"115.169998","Volume":"621700","Adj_Close":"115.169998"},{"Symbol":"TM","Date":"2014-02-13","Open":"114.980003","High":"116.389999","Low":"114.860001","Close":"116.150002","Volume":"419000","Adj_Close":"116.150002"},{"Symbol":"TM","Date":"2014-02-12","Open":"117.550003","High":"118.410004","Low":"117.25","Close":"117.559998","Volume":"466700","Adj_Close":"117.559998"},{"Symbol":"TM","Date":"2014-02-11","Open":"117.790001","High":"118.110001","Low":"117.099998","Close":"117.910004","Volume":"366100","Adj_Close":"117.910004"},{"Symbol":"TM","Date":"2014-02-10","Open":"117.50","High":"117.510002","Low":"116.599998","Close":"117.040001","Volume":"385000","Adj_Close":"117.040001"},{"Symbol":"TM","Date":"2014-02-07","Open":"115.900002","High":"117.660004","Low":"115.709999","Close":"117.379997","Volume":"610900","Adj_Close":"117.379997"},{"Symbol":"TM","Date":"2014-02-06","Open":"114.580002","High":"116.18","Low":"114.440002","Close":"115.959999","Volume":"439300","Adj_Close":"115.959999"},{"Symbol":"TM","Date":"2014-02-05","Open":"114.790001","High":"115.849998","Low":"114.110001","Close":"115.660004","Volume":"709900","Adj_Close":"115.660004"},{"Symbol":"TM","Date":"2014-02-04","Open":"111.849998","High":"112.660004","Low":"110.75","Close":"112.489998","Volume":"561200","Adj_Close":"112.489998"},{"Symbol":"TM","Date":"2014-02-03","Open":"113.970001","High":"114.150002","Low":"112.080002","Close":"112.75","Volume":"553800","Adj_Close":"112.75"},{"Symbol":"TM","Date":"2014-01-31","Open":"114.919998","High":"115.50","Low":"113.610001","Close":"114.760002","Volume":"566300","Adj_Close":"114.760002"},{"Symbol":"TM","Date":"2014-01-30","Open":"117.440002","High":"117.830002","Low":"116.699997","Close":"117.160004","Volume":"329900","Adj_Close":"117.160004"},{"Symbol":"TM","Date":"2014-01-29","Open":"118.260002","High":"118.32","Low":"116.919998","Close":"117.199997","Volume":"542300","Adj_Close":"117.199997"},{"Symbol":"TM","Date":"2014-01-28","Open":"117.529999","High":"118.269997","Low":"117.290001","Close":"117.830002","Volume":"564400","Adj_Close":"117.830002"},{"Symbol":"TM","Date":"2014-01-27","Open":"117.879997","High":"118.260002","Low":"116.150002","Close":"117.029999","Volume":"673000","Adj_Close":"117.029999"},{"Symbol":"TM","Date":"2014-01-24","Open":"118.989998","High":"119.040001","Low":"117.709999","Close":"117.879997","Volume":"591900","Adj_Close":"117.879997"},{"Symbol":"TM","Date":"2014-01-23","Open":"120.400002","High":"120.440002","Low":"119.059998","Close":"119.360001","Volume":"435900","Adj_Close":"119.360001"},{"Symbol":"TM","Date":"2014-01-22","Open":"121.290001","High":"121.739998","Low":"120.739998","Close":"121.690002","Volume":"371400","Adj_Close":"121.690002"},{"Symbol":"TM","Date":"2014-01-21","Open":"120.50","High":"120.540001","Low":"119.629997","Close":"120.459999","Volume":"550000","Adj_Close":"120.459999"},{"Symbol":"TM","Date":"2014-01-17","Open":"119.379997","High":"119.980003","Low":"118.949997","Close":"119.190002","Volume":"407800","Adj_Close":"119.190002"},{"Symbol":"TM","Date":"2014-01-16","Open":"119.599998","High":"119.830002","Low":"118.900002","Close":"119.830002","Volume":"244600","Adj_Close":"119.830002"},{"Symbol":"TM","Date":"2014-01-15","Open":"119.449997","High":"120.040001","Low":"119.110001","Close":"119.470001","Volume":"426400","Adj_Close":"119.470001"},{"Symbol":"TM","Date":"2014-01-14","Open":"119.25","High":"119.75","Low":"118.669998","Close":"119.459999","Volume":"473300","Adj_Close":"119.459999"},{"Symbol":"TM","Date":"2014-01-13","Open":"120.50","High":"120.50","Low":"119.199997","Close":"119.400002","Volume":"421600","Adj_Close":"119.400002"},{"Symbol":"TM","Date":"2014-01-10","Open":"120.489998","High":"120.889999","Low":"120.00","Close":"120.809998","Volume":"242000","Adj_Close":"120.809998"},{"Symbol":"TM","Date":"2014-01-09","Open":"120.330002","High":"120.50","Low":"119.589996","Close":"120.330002","Volume":"338500","Adj_Close":"120.330002"},{"Symbol":"TM","Date":"2014-01-08","Open":"120.18","High":"120.18","Low":"119.650002","Close":"119.849998","Volume":"349400","Adj_Close":"119.849998"},{"Symbol":"TM","Date":"2014-01-07","Open":"120.389999","High":"120.589996","Low":"119.989998","Close":"120.459999","Volume":"306200","Adj_Close":"120.459999"},{"Symbol":"TM","Date":"2014-01-06","Open":"120.879997","High":"120.980003","Low":"120.00","Close":"120.169998","Volume":"441100","Adj_Close":"120.169998"},{"Symbol":"TM","Date":"2014-01-03","Open":"121.00","High":"121.290001","Low":"119.870003","Close":"120.510002","Volume":"530500","Adj_Close":"120.510002"},{"Symbol":"TM","Date":"2014-01-02","Open":"121.599998","High":"121.599998","Low":"120.099998","Close":"120.629997","Volume":"239400","Adj_Close":"120.629997"}]}}},
{"query":{"count":252,"created":"2016-03-30T21:59:20Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"1","execution-stop-time":"2","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"6","execution-stop-time":"20","execution-time":"14","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=HMC"},{"execution-start-time":"25","execution-stop-time":"26","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=HMC"}],"publiclyCallable":"true","cache":[{"execution-start-time":"5","execution-stop-time":"5","execution-time":"0","method":"GET","type":"MEMCACHED","content":"f4b83e7e6b3e9b4f5c90c78452023ac3"},{"execution-start-time":"24","execution-stop-time":"24","execution-time":"0","method":"GET","type":"MEMCACHED","content":"5c73fb0569c7fcb530a7dc703dc35105"}],"query":[{"execution-start-time":"5","execution-stop-time":"24","execution-time":"19","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=HMC]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"24","execution-stop-time":"29","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=HMC]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"1262","execution-time":"1259","instructions-used":"24189594","table-name":"yahoo.finance.historicaldata"},"user-time":"1270","service-time":"16","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"HMC","Date":"2014-12-31","Open":"29.639999","High":"29.799999","Low":"29.48","Close":"29.52","Volume":"981300","Adj_Close":"29.52"},{"Symbol":"HMC","Date":"2014-12-30","Open":"29.60","High":"29.639999","Low":"29.40","Close":"29.60","Volume":"1368500","Adj_Close":"29.60"},{"Symbol":"HMC","Date":"2014-12-29","Open":"29.969999","High":"30.110001","Low":"29.860001","Close":"30.040001","Volume":"1080700","Adj_Close":"30.040001"},{"Symbol":"HMC","Date":"2014-12-26","Open":"30.299999","High":"30.40","Low":"30.23","Close":"30.33","Volume":"674600","Adj_Close":"30.33"},{"Symbol":"HMC","Date":"2014-12-24","Open":"30.469999","High":"30.52","Low":"30.35","Close":"30.370001","Volume":"311000","Adj_Close":"30.370001"},{"Symbol":"HMC","Date":"2014-12-23","Open":"30.27","High":"30.43","Low":"30.23","Close":"30.23","Volume":"985900","Adj_Close":"30.23"},{"Symbol":"HMC","Date":"2014-12-22","Open":"30.09","High":"30.25","Low":"30.02","Close":"30.200001","Volume":"816300","Adj_Close":"30.200001"},{"Symbol":"HMC","Date":"2014-12-19","Open":"30.219999","High":"30.42","Low":"30.129999","Close":"30.33","Volume":"1296800","Adj_Close":"30.33"},{"Symbol":"HMC","Date":"2014-12-18","Open":"30.01","High":"30.16","Low":"29.93","Close":"30.139999","Volume":"2180600","Adj_Close":"30.139999"},{"Symbol":"HMC","Date":"2014-12-17","Open":"29.23","High":"29.959999","Low":"29.23","Close":"29.809999","Volume":"2369300","Adj_Close":"29.809999"},{"Symbol":"HMC","Date":"2014-12-16","Open":"28.969999","High":"29.35","Low":"28.83","Close":"28.870001","Volume":"3047800","Adj_Close":"28.870001"},{"Symbol":"HMC","Date":"2014-12-15","Open":"29.40","High":"29.459999","Low":"28.879999","Close":"28.93","Volume":"1320800","Adj_Close":"28.93"},{"Symbol":"HMC","Date":"2014-12-12","Open":"29.75","High":"30.00","Low":"29.32","Close":"29.34","Volume":"1086700","Adj_Close":"29.34"},{"Symbol":"HMC","Date":"2014-12-11","Open":"30.25","High":"30.40","Low":"30.01","Close":"30.059999","Volume":"2073600","Adj_Close":"30.059999"},{"Symbol":"HMC","Date":"2014-12-10","Open":"30.440001","High":"30.450001","Low":"30.09","Close":"30.139999","Volume":"2317700","Adj_Close":"30.139999"},{"Symbol":"HMC","Date":"2014-12-09","Open":"30.700001","High":"31.02","Low":"30.57","Close":"31.01","Volume":"1535400","Adj_Close":"31.01"},{"Symbol":"HMC","Date":"2014-12-08","Open":"30.809999","High":"30.82","Low":"30.51","Close":"30.540001","Volume":"1757100","Adj_Close":"30.540001"},{"Symbol":"HMC","Date":"2014-12-05","Open":"30.92","High":"31.200001","Low":"30.85","Close":"31.139999","Volume":"1583100","Adj_Close":"31.139999"},{"Symbol":"HMC","Date":"2014-12-04","Open":"31.120001","High":"31.25","Low":"31.00","Close":"31.209999","Volume":"1420100","Adj_Close":"31.209999"},{"Symbol":"HMC","Date":"2014-12-03","Open":"30.860001","High":"31.049999","Low":"30.719999","Close":"30.98","Volume":"1786200","Adj_Close":"30.98"},{"Symbol":"HMC","Date":"2014-12-02","Open":"30.709999","High":"30.940001","Low":"30.66","Close":"30.76","Volume":"2424300","Adj_Close":"30.76"},{"Symbol":"HMC","Date":"2014-12-01","Open":"30.389999","High":"30.59","Low":"30.27","Close":"30.51","Volume":"1479300","Adj_Close":"30.51"},{"Symbol":"HMC","Date":"2014-11-28","Open":"30.440001","High":"30.559999","Low":"30.25","Close":"30.32","Volume":"2003000","Adj_Close":"30.32"},{"Symbol":"HMC","Date":"2014-11-26","Open":"31.01","High":"31.030001","Low":"30.889999","Close":"30.969999","Volume":"1182200","Adj_Close":"30.969999"},{"Symbol":"HMC","Date":"2014-11-25","Open":"31.66","High":"31.90","Low":"31.66","Close":"31.790001","Volume":"848300","Adj_Close":"31.790001"},{"Symbol":"HMC","Date":"2014-11-24","Open":"31.83","High":"31.84","Low":"31.66","Close":"31.68","Volume":"775500","Adj_Close":"31.68"},{"Symbol":"HMC","Date":"2014-11-21","Open":"31.459999","High":"31.85","Low":"31.459999","Close":"31.74","Volume":"1111200","Adj_Close":"31.74"},{"Symbol":"HMC","Date":"2014-11-20","Open":"31.059999","High":"31.200001","Low":"30.969999","Close":"31.16","Volume":"2861200","Adj_Close":"31.16"},{"Symbol":"HMC","Date":"2014-11-19","Open":"31.01","High":"31.27","Low":"30.950001","Close":"31.129999","Volume":"1732300","Adj_Close":"31.129999"},{"Symbol":"HMC","Date":"2014-11-18","Open":"31.559999","High":"31.690001","Low":"31.48","Close":"31.65","Volume":"423400","Adj_Close":"31.65"},{"Symbol":"HMC","Date":"2014-11-17","Open":"31.530001","High":"31.60","Low":"31.42","Close":"31.51","Volume":"1126300","Adj_Close":"31.51"},{"Symbol":"HMC","Date":"2014-11-14","Open":"31.92","High":"32.02","Low":"31.809999","Close":"31.99","Volume":"506600","Adj_Close":"31.99"},{"Symbol":"HMC","Date":"2014-11-13","Open":"31.129999","High":"31.549999","Low":"31.129999","Close":"31.530001","Volume":"1092500","Adj_Close":"31.530001"},{"Symbol":"HMC","Date":"2014-11-12","Open":"31.110001","High":"31.280001","Low":"31.030001","Close":"31.190001","Volume":"688900","Adj_Close":"31.190001"},{"Symbol":"HMC","Date":"2014-11-11","Open":"30.84","High":"31.110001","Low":"30.780001","Close":"31.01","Volume":"2505800","Adj_Close":"31.01"},{"Symbol":"HMC","Date":"2014-11-10","Open":"31.629999","High":"31.67","Low":"31.33","Close":"31.549999","Volume":"759700","Adj_Close":"31.549999"},{"Symbol":"HMC","Date":"2014-11-07","Open":"31.51","High":"31.629999","Low":"31.450001","Close":"31.620001","Volume":"1077800","Adj_Close":"31.620001"},{"Symbol":"HMC","Date":"2014-11-06","Open":"31.620001","High":"31.709999","Low":"31.440001","Close":"31.66","Volume":"470000","Adj_Close":"31.66"},{"Symbol":"HMC","Date":"2014-11-05","Open":"31.75","High":"31.809999","Low":"31.620001","Close":"31.690001","Volume":"633400","Adj_Close":"31.690001"},{"Symbol":"HMC","Date":"2014-11-04","Open":"31.17","High":"31.17","Low":"30.790001","Close":"31.02","Volume":"1051700","Adj_Close":"31.02"},{"Symbol":"HMC","Date":"2014-11-03","Open":"32.110001","High":"32.43","Low":"32.009998","Close":"32.400002","Volume":"1100700","Adj_Close":"32.400002"},{"Symbol":"HMC","Date":"2014-10-31","Open":"31.879999","High":"32.189999","Low":"31.82","Close":"32.119999","Volume":"1073800","Adj_Close":"32.119999"},{"Symbol":"HMC","Date":"2014-10-30","Open":"30.440001","High":"30.809999","Low":"30.33","Close":"30.65","Volume":"1050800","Adj_Close":"30.65"},{"Symbol":"HMC","Date":"2014-10-29","Open":"30.540001","High":"30.809999","Low":"30.49","Close":"30.690001","Volume":"1516400","Adj_Close":"30.690001"},{"Symbol":"HMC","Date":"2014-10-28","Open":"30.43","High":"30.450001","Low":"29.299999","Close":"29.99","Volume":"3091500","Adj_Close":"29.99"},{"Symbol":"HMC","Date":"2014-10-27","Open":"30.799999","High":"30.92","Low":"30.68","Close":"30.82","Volume":"891700","Adj_Close":"30.82"},{"Symbol":"HMC","Date":"2014-10-24","Open":"30.99","High":"31.129999","Low":"30.780001","Close":"31.07","Volume":"1026000","Adj_Close":"31.07"},{"Symbol":"HMC","Date":"2014-10-23","Open":"31.60","High":"31.860001","Low":"31.459999","Close":"31.620001","Volume":"475700","Adj_Close":"31.620001"},{"Symbol":"HMC","Date":"2014-10-22","Open":"31.790001","High":"31.98","Low":"31.620001","Close":"31.620001","Volume":"570900","Adj_Close":"31.620001"},{"Symbol":"HMC","Date":"2014-10-21","Open":"31.40","High":"31.60","Low":"31.309999","Close":"31.549999","Volume":"652800","Adj_Close":"31.549999"},{"Symbol":"HMC","Date":"2014-10-20","Open":"31.41","High":"31.65","Low":"31.290001","Close":"31.610001","Volume":"641700","Adj_Close":"31.610001"},{"Symbol":"HMC","Date":"2014-10-17","Open":"31.110001","High":"31.280001","Low":"30.98","Close":"31.129999","Volume":"875700","Adj_Close":"31.129999"},{"Symbol":"HMC","Date":"2014-10-16","Open":"30.639999","High":"31.10","Low":"30.43","Close":"30.91","Volume":"1211900","Adj_Close":"30.91"},{"Symbol":"HMC","Date":"2014-10-15","Open":"31.389999","High":"31.42","Low":"30.540001","Close":"31.25","Volume":"2873700","Adj_Close":"31.25"},{"Symbol":"HMC","Date":"2014-10-14","Open":"31.77","High":"31.870001","Low":"31.459999","Close":"31.549999","Volume":"2152400","Adj_Close":"31.549999"},{"Symbol":"HMC","Date":"2014-10-13","Open":"31.870001","High":"31.98","Low":"31.360001","Close":"31.389999","Volume":"845600","Adj_Close":"31.389999"},{"Symbol":"HMC","Date":"2014-10-10","Open":"32.27","High":"32.27","Low":"31.67","Close":"31.700001","Volume":"739200","Adj_Close":"31.700001"},{"Symbol":"HMC","Date":"2014-10-09","Open":"32.610001","High":"32.610001","Low":"32.080002","Close":"32.150002","Volume":"1382600","Adj_Close":"32.150002"},{"Symbol":"HMC","Date":"2014-10-08","Open":"32.50","High":"32.900002","Low":"32.169998","Close":"32.860001","Volume":"2839500","Adj_Close":"32.860001"},{"Symbol":"HMC","Date":"2014-10-07","Open":"32.959999","High":"32.959999","Low":"32.560001","Close":"32.59","Volume":"2442100","Adj_Close":"32.59"},{"Symbol":"HMC","Date":"2014-10-06","Open":"32.830002","High":"32.98","Low":"32.669998","Close":"32.720001","Volume":"1290300","Adj_Close":"32.720001"},{"Symbol":"HMC","Date":"2014-10-03","Open":"32.490002","High":"32.639999","Low":"32.34","Close":"32.48","Volume":"3741100","Adj_Close":"32.48"},{"Symbol":"HMC","Date":"2014-10-02","Open":"33.279999","High":"33.279999","Low":"31.26","Close":"32.00","Volume":"6873800","Adj_Close":"32.00"},{"Symbol":"HMC","Date":"2014-10-01","Open":"34.139999","High":"34.16","Low":"33.700001","Close":"33.790001","Volume":"694200","Adj_Close":"33.790001"},{"Symbol":"HMC","Date":"2014-09-30","Open":"34.369999","High":"34.48","Low":"34.25","Close":"34.279999","Volume":"788800","Adj_Close":"34.279999"},{"Symbol":"HMC","Date":"2014-09-29","Open":"34.23","High":"34.25","Low":"34.040001","Close":"34.040001","Volume":"822200","Adj_Close":"34.040001"},{"Symbol":"HMC","Date":"2014-09-26","Open":"34.32","High":"34.459999","Low":"34.259998","Close":"34.419998","Volume":"672300","Adj_Close":"34.419998"},{"Symbol":"HMC","Date":"2014-09-25","Open":"34.650002","High":"34.73","Low":"34.310001","Close":"34.360001","Volume":"632000","Adj_Close":"34.360001"},{"Symbol":"HMC","Date":"2014-09-24","Open":"34.619999","High":"34.830002","Low":"34.619999","Close":"34.759998","Volume":"722100","Adj_Close":"34.759998"},{"Symbol":"HMC","Date":"2014-09-23","Open":"34.639999","High":"34.849998","Low":"34.27","Close":"34.32","Volume":"532400","Adj_Close":"34.32"},{"Symbol":"HMC","Date":"2014-09-22","Open":"34.639999","High":"34.810001","Low":"34.560001","Close":"34.59","Volume":"509200","Adj_Close":"34.59"},{"Symbol":"HMC","Date":"2014-09-19","Open":"34.549999","High":"34.599998","Low":"34.380001","Close":"34.459999","Volume":"306100","Adj_Close":"34.459999"},{"Symbol":"HMC","Date":"2014-09-18","Open":"34.169998","High":"34.540001","Low":"34.169998","Close":"34.529999","Volume":"386000","Adj_Close":"34.529999"},{"Symbol":"HMC","Date":"2014-09-17","Open":"34.060001","High":"34.139999","Low":"33.860001","Close":"33.93","Volume":"437800","Adj_Close":"33.93"},{"Symbol":"HMC","Date":"2014-09-16","Open":"34.07","High":"34.25","Low":"34.049999","Close":"34.130001","Volume":"1231600","Adj_Close":"34.130001"},{"Symbol":"HMC","Date":"2014-09-15","Open":"34.439999","High":"34.540001","Low":"34.34","Close":"34.50","Volume":"982000","Adj_Close":"34.50"},{"Symbol":"HMC","Date":"2014-09-12","Open":"34.41","High":"34.529999","Low":"34.400002","Close":"34.50","Volume":"667500","Adj_Close":"34.50"},{"Symbol":"HMC","Date":"2014-09-11","Open":"34.150002","High":"34.419998","Low":"34.150002","Close":"34.400002","Volume":"401300","Adj_Close":"34.400002"},{"Symbol":"HMC","Date":"2014-09-10","Open":"34.16","High":"34.240002","Low":"34.060001","Close":"34.23","Volume":"538200","Adj_Close":"34.23"},{"Symbol":"HMC","Date":"2014-09-09","Open":"33.860001","High":"33.869999","Low":"33.68","Close":"33.689999","Volume":"428200","Adj_Close":"33.689999"},{"Symbol":"HMC","Date":"2014-09-08","Open":"33.82","High":"33.880001","Low":"33.73","Close":"33.849998","Volume":"655000","Adj_Close":"33.849998"},{"Symbol":"HMC","Date":"2014-09-05","Open":"33.849998","High":"33.880001","Low":"33.75","Close":"33.849998","Volume":"951000","Adj_Close":"33.849998"},{"Symbol":"HMC","Date":"2014-09-04","Open":"33.990002","High":"34.07","Low":"33.880001","Close":"33.889999","Volume":"901100","Adj_Close":"33.889999"},{"Symbol":"HMC","Date":"2014-09-03","Open":"33.849998","High":"34.040001","Low":"33.849998","Close":"33.959999","Volume":"929400","Adj_Close":"33.959999"},{"Symbol":"HMC","Date":"2014-09-02","Open":"33.82","High":"33.849998","Low":"33.68","Close":"33.77","Volume":"950400","Adj_Close":"33.77"},{"Symbol":"HMC","Date":"2014-08-29","Open":"33.98","High":"34.080002","Low":"33.939999","Close":"34.049999","Volume":"768000","Adj_Close":"34.049999"},{"Symbol":"HMC","Date":"2014-08-28","Open":"33.950001","High":"34.110001","Low":"33.799999","Close":"34.07","Volume":"622400","Adj_Close":"34.07"},{"Symbol":"HMC","Date":"2014-08-27","Open":"34.16","High":"34.279999","Low":"33.93","Close":"33.950001","Volume":"1158400","Adj_Close":"33.950001"},{"Symbol":"HMC","Date":"2014-08-26","Open":"34.200001","High":"34.389999","Low":"34.110001","Close":"34.279999","Volume":"611500","Adj_Close":"34.279999"},{"Symbol":"HMC","Date":"2014-08-25","Open":"34.540001","High":"34.610001","Low":"34.400002","Close":"34.50","Volume":"524700","Adj_Close":"34.50"},{"Symbol":"HMC","Date":"2014-08-22","Open":"34.490002","High":"34.490002","Low":"34.299999","Close":"34.349998","Volume":"533600","Adj_Close":"34.349998"},{"Symbol":"HMC","Date":"2014-08-21","Open":"34.400002","High":"34.799999","Low":"34.400002","Close":"34.73","Volume":"679600","Adj_Close":"34.73"},{"Symbol":"HMC","Date":"2014-08-20","Open":"34.080002","High":"34.18","Low":"33.970001","Close":"34.09","Volume":"433500","Adj_Close":"34.09"},{"Symbol":"HMC","Date":"2014-08-19","Open":"34.049999","High":"34.119999","Low":"33.990002","Close":"34.080002","Volume":"715600","Adj_Close":"34.080002"},{"Symbol":"HMC","Date":"2014-08-18","Open":"34.040001","High":"34.16","Low":"34.029999","Close":"34.119999","Volume":"580000","Adj_Close":"34.119999"},{"Symbol":"HMC","Date":"2014-08-15","Open":"34.099998","High":"34.130001","Low":"33.790001","Close":"33.959999","Volume":"433400","Adj_Close":"33.959999"},{"Symbol":"HMC","Date":"2014-08-14","Open":"34.02","High":"34.130001","Low":"33.91","Close":"34.099998","Volume":"870200","Adj_Close":"34.099998"},{"Symbol":"HMC","Date":"2014-08-13","Open":"34.240002","High":"34.419998","Low":"34.220001","Close":"34.34","Volume":"848600","Adj_Close":"34.34"},{"Symbol":"HMC","Date":"2014-08-12","Open":"33.869999","High":"33.98","Low":"33.849998","Close":"33.91","Volume":"669700","Adj_Close":"33.91"},{"Symbol":"HMC","Date":"2014-08-11","Open":"34.00","High":"34.139999","Low":"33.93","Close":"34.02","Volume":"553700","Adj_Close":"34.02"},{"Symbol":"HMC","Date":"2014-08-08","Open":"33.869999","High":"34.200001","Low":"33.549999","Close":"34.200001","Volume":"784800","Adj_Close":"34.200001"},{"Symbol":"HMC","Date":"2014-08-07","Open":"34.139999","High":"34.32","Low":"33.91","Close":"33.990002","Volume":"624000","Adj_Close":"33.990002"},{"Symbol":"HMC","Date":"2014-08-06","Open":"34.099998","High":"34.209999","Low":"33.869999","Close":"34.060001","Volume":"619800","Adj_Close":"34.060001"},{"Symbol":"HMC","Date":"2014-08-05","Open":"34.41","High":"34.50","Low":"34.110001","Close":"34.209999","Volume":"635600","Adj_Close":"34.209999"},{"Symbol":"HMC","Date":"2014-08-04","Open":"34.59","High":"34.630001","Low":"34.400002","Close":"34.50","Volume":"1324400","Adj_Close":"34.50"},{"Symbol":"HMC","Date":"2014-08-01","Open":"34.93","High":"34.98","Low":"34.560001","Close":"34.599998","Volume":"1120300","Adj_Close":"34.599998"},{"Symbol":"HMC","Date":"2014-07-31","Open":"35.599998","High":"35.599998","Low":"34.869999","Close":"34.880001","Volume":"945600","Adj_Close":"34.880001"},{"Symbol":"HMC","Date":"2014-07-30","Open":"35.990002","High":"35.990002","Low":"35.709999","Close":"35.84","Volume":"1322900","Adj_Close":"35.84"},{"Symbol":"HMC","Date":"2014-07-29","Open":"35.50","High":"36.02","Low":"35.299999","Close":"36.02","Volume":"1330000","Adj_Close":"36.02"},{"Symbol":"HMC","Date":"2014-07-28","Open":"35.16","High":"35.220001","Low":"34.939999","Close":"35.18","Volume":"395600","Adj_Close":"35.18"},{"Symbol":"HMC","Date":"2014-07-25","Open":"35.119999","High":"35.150002","Low":"34.919998","Close":"34.990002","Volume":"350200","Adj_Close":"34.990002"},{"Symbol":"HMC","Date":"2014-07-24","Open":"35.209999","High":"35.299999","Low":"35.080002","Close":"35.130001","Volume":"224600","Adj_Close":"35.130001"},{"Symbol":"HMC","Date":"2014-07-23","Open":"35.200001","High":"35.200001","Low":"35.009998","Close":"35.150002","Volume":"430800","Adj_Close":"35.150002"},{"Symbol":"HMC","Date":"2014-07-22","Open":"35.27","High":"35.50","Low":"35.25","Close":"35.450001","Volume":"368200","Adj_Close":"35.450001"},{"Symbol":"HMC","Date":"2014-07-21","Open":"35.18","High":"35.279999","Low":"35.009998","Close":"35.27","Volume":"481100","Adj_Close":"35.27"},{"Symbol":"HMC","Date":"2014-07-18","Open":"35.380001","High":"35.43","Low":"35.240002","Close":"35.290001","Volume":"297700","Adj_Close":"35.290001"},{"Symbol":"HMC","Date":"2014-07-17","Open":"35.50","High":"35.529999","Low":"35.02","Close":"35.099998","Volume":"541500","Adj_Close":"35.099998"},{"Symbol":"HMC","Date":"2014-07-16","Open":"35.700001","High":"35.75","Low":"35.610001","Close":"35.689999","Volume":"433400","Adj_Close":"35.689999"},{"Symbol":"HMC","Date":"2014-07-15","Open":"35.529999","High":"35.549999","Low":"35.25","Close":"35.369999","Volume":"431300","Adj_Close":"35.369999"},{"Symbol":"HMC","Date":"2014-07-14","Open":"35.279999","High":"35.380001","Low":"35.169998","Close":"35.220001","Volume":"404100","Adj_Close":"35.220001"},{"Symbol":"HMC","Date":"2014-07-11","Open":"34.970001","High":"35.009998","Low":"34.84","Close":"34.959999","Volume":"934600","Adj_Close":"34.959999"},{"Symbol":"HMC","Date":"2014-07-10","Open":"34.91","High":"35.029999","Low":"34.650002","Close":"34.990002","Volume":"991700","Adj_Close":"34.990002"},{"Symbol":"HMC","Date":"2014-07-09","Open":"35.389999","High":"35.450001","Low":"35.279999","Close":"35.41","Volume":"603200","Adj_Close":"35.41"},{"Symbol":"HMC","Date":"2014-07-08","Open":"35.18","High":"35.189999","Low":"34.970001","Close":"34.990002","Volume":"394300","Adj_Close":"34.990002"},{"Symbol":"HMC","Date":"2014-07-07","Open":"35.18","High":"35.220001","Low":"35.060001","Close":"35.169998","Volume":"558200","Adj_Close":"35.169998"},{"Symbol":"HMC","Date":"2014-07-03","Open":"34.900002","High":"35.099998","Low":"34.880001","Close":"35.00","Volume":"386600","Adj_Close":"35.00"},{"Symbol":"HMC","Date":"2014-07-02","Open":"35.18","High":"35.200001","Low":"35.009998","Close":"35.040001","Volume":"225900","Adj_Close":"35.040001"},{"Symbol":"HMC","Date":"2014-07-01","Open":"35.060001","High":"35.279999","Low":"35.049999","Close":"35.23","Volume":"314800","Adj_Close":"35.23"},{"Symbol":"HMC","Date":"2014-06-30","Open":"34.990002","High":"35.07","Low":"34.91","Close":"34.990002","Volume":"359700","Adj_Close":"34.990002"},{"Symbol":"HMC","Date":"2014-06-27","Open":"34.799999","High":"34.889999","Low":"34.720001","Close":"34.849998","Volume":"271100","Adj_Close":"34.849998"},{"Symbol":"HMC","Date":"2014-06-26","Open":"34.970001","High":"34.970001","Low":"34.709999","Close":"34.810001","Volume":"533200","Adj_Close":"34.810001"},{"Symbol":"HMC","Date":"2014-06-25","Open":"34.720001","High":"34.900002","Low":"34.639999","Close":"34.880001","Volume":"414300","Adj_Close":"34.880001"},{"Symbol":"HMC","Date":"2014-06-24","Open":"34.860001","High":"35.150002","Low":"34.830002","Close":"34.869999","Volume":"1023300","Adj_Close":"34.869999"},{"Symbol":"HMC","Date":"2014-06-23","Open":"35.330002","High":"35.330002","Low":"35.049999","Close":"35.169998","Volume":"384800","Adj_Close":"35.169998"},{"Symbol":"HMC","Date":"2014-06-20","Open":"35.889999","High":"35.919998","Low":"35.509998","Close":"35.630001","Volume":"506400","Adj_Close":"35.630001"},{"Symbol":"HMC","Date":"2014-06-19","Open":"35.330002","High":"35.650002","Low":"35.310001","Close":"35.650002","Volume":"682900","Adj_Close":"35.650002"},{"Symbol":"HMC","Date":"2014-06-18","Open":"34.84","High":"35.049999","Low":"34.75","Close":"35.00","Volume":"368900","Adj_Close":"35.00"},{"Symbol":"HMC","Date":"2014-06-17","Open":"34.75","High":"34.77","Low":"34.529999","Close":"34.740002","Volume":"316400","Adj_Close":"34.740002"},{"Symbol":"HMC","Date":"2014-06-16","Open":"34.549999","High":"34.75","Low":"34.459999","Close":"34.669998","Volume":"378800","Adj_Close":"34.669998"},{"Symbol":"HMC","Date":"2014-06-13","Open":"34.669998","High":"34.759998","Low":"34.580002","Close":"34.68","Volume":"485300","Adj_Close":"34.68"},{"Symbol":"HMC","Date":"2014-06-12","Open":"35.060001","High":"35.099998","Low":"34.66","Close":"34.700001","Volume":"462000","Adj_Close":"34.700001"},{"Symbol":"HMC","Date":"2014-06-11","Open":"34.919998","High":"35.00","Low":"34.77","Close":"34.869999","Volume":"304900","Adj_Close":"34.869999"},{"Symbol":"HMC","Date":"2014-06-10","Open":"34.84","High":"34.93","Low":"34.77","Close":"34.849998","Volume":"396400","Adj_Close":"34.849998"},{"Symbol":"HMC","Date":"2014-06-09","Open":"35.00","High":"35.080002","Low":"34.68","Close":"35.00","Volume":"1040600","Adj_Close":"35.00"},{"Symbol":"HMC","Date":"2014-06-06","Open":"35.09","High":"35.310001","Low":"35.029999","Close":"35.09","Volume":"380400","Adj_Close":"35.09"},{"Symbol":"HMC","Date":"2014-06-05","Open":"34.900002","High":"35.110001","Low":"34.75","Close":"35.029999","Volume":"614600","Adj_Close":"35.029999"},{"Symbol":"HMC","Date":"2014-06-04","Open":"34.82","High":"34.91","Low":"34.52","Close":"34.900002","Volume":"1048400","Adj_Close":"34.900002"},{"Symbol":"HMC","Date":"2014-06-03","Open":"35.119999","High":"35.27","Low":"34.939999","Close":"35.18","Volume":"400700","Adj_Close":"35.18"},{"Symbol":"HMC","Date":"2014-06-02","Open":"35.279999","High":"35.279999","Low":"35.040001","Close":"35.27","Volume":"428400","Adj_Close":"35.27"},{"Symbol":"HMC","Date":"2014-05-30","Open":"35.040001","High":"35.23","Low":"35.02","Close":"35.18","Volume":"526200","Adj_Close":"35.18"},{"Symbol":"HMC","Date":"2014-05-29","Open":"34.889999","High":"34.919998","Low":"34.709999","Close":"34.869999","Volume":"1198000","Adj_Close":"34.869999"},{"Symbol":"HMC","Date":"2014-05-28","Open":"34.639999","High":"34.709999","Low":"34.439999","Close":"34.599998","Volume":"446700","Adj_Close":"34.599998"},{"Symbol":"HMC","Date":"2014-05-27","Open":"34.91","High":"34.98","Low":"34.66","Close":"34.880001","Volume":"775300","Adj_Close":"34.880001"},{"Symbol":"HMC","Date":"2014-05-23","Open":"34.43","High":"34.709999","Low":"34.400002","Close":"34.709999","Volume":"1095100","Adj_Close":"34.709999"},{"Symbol":"HMC","Date":"2014-05-22","Open":"34.07","High":"34.330002","Low":"34.07","Close":"34.259998","Volume":"753700","Adj_Close":"34.259998"},{"Symbol":"HMC","Date":"2014-05-21","Open":"33.77","High":"33.98","Low":"33.759998","Close":"33.939999","Volume":"1442500","Adj_Close":"33.939999"},{"Symbol":"HMC","Date":"2014-05-20","Open":"33.630001","High":"33.720001","Low":"33.52","Close":"33.610001","Volume":"1730200","Adj_Close":"33.610001"},{"Symbol":"HMC","Date":"2014-05-19","Open":"33.290001","High":"33.68","Low":"33.290001","Close":"33.630001","Volume":"2129600","Adj_Close":"33.630001"},{"Symbol":"HMC","Date":"2014-05-16","Open":"33.200001","High":"33.369999","Low":"33.110001","Close":"33.349998","Volume":"454900","Adj_Close":"33.349998"},{"Symbol":"HMC","Date":"2014-05-15","Open":"33.25","High":"33.279999","Low":"32.919998","Close":"33.060001","Volume":"503600","Adj_Close":"33.060001"},{"Symbol":"HMC","Date":"2014-05-14","Open":"33.709999","High":"33.75","Low":"33.48","Close":"33.48","Volume":"473800","Adj_Close":"33.48"},{"Symbol":"HMC","Date":"2014-05-13","Open":"33.34","High":"33.84","Low":"33.34","Close":"33.77","Volume":"1130100","Adj_Close":"33.77"},{"Symbol":"HMC","Date":"2014-05-12","Open":"32.689999","High":"32.919998","Low":"32.68","Close":"32.880001","Volume":"782400","Adj_Close":"32.880001"},{"Symbol":"HMC","Date":"2014-05-09","Open":"32.950001","High":"33.009998","Low":"32.799999","Close":"32.93","Volume":"1087700","Adj_Close":"32.93"},{"Symbol":"HMC","Date":"2014-05-08","Open":"33.049999","High":"33.25","Low":"33.009998","Close":"33.049999","Volume":"684000","Adj_Close":"33.049999"},{"Symbol":"HMC","Date":"2014-05-07","Open":"33.330002","High":"33.59","Low":"33.169998","Close":"33.549999","Volume":"1076400","Adj_Close":"33.549999"},{"Symbol":"HMC","Date":"2014-05-06","Open":"33.740002","High":"33.82","Low":"33.610001","Close":"33.66","Volume":"395000","Adj_Close":"33.66"},{"Symbol":"HMC","Date":"2014-05-05","Open":"33.77","High":"33.84","Low":"33.59","Close":"33.799999","Volume":"770900","Adj_Close":"33.799999"},{"Symbol":"HMC","Date":"2014-05-02","Open":"33.950001","High":"34.060001","Low":"33.68","Close":"33.720001","Volume":"773400","Adj_Close":"33.720001"},{"Symbol":"HMC","Date":"2014-05-01","Open":"33.560001","High":"33.700001","Low":"33.470001","Close":"33.669998","Volume":"808400","Adj_Close":"33.669998"},{"Symbol":"HMC","Date":"2014-04-30","Open":"32.98","High":"33.34","Low":"32.91","Close":"33.299999","Volume":"850000","Adj_Close":"33.299999"},{"Symbol":"HMC","Date":"2014-04-29","Open":"32.869999","High":"32.93","Low":"32.75","Close":"32.790001","Volume":"860800","Adj_Close":"32.790001"},{"Symbol":"HMC","Date":"2014-04-28","Open":"32.610001","High":"32.73","Low":"32.419998","Close":"32.68","Volume":"1173500","Adj_Close":"32.68"},{"Symbol":"HMC","Date":"2014-04-25","Open":"33.439999","High":"33.610001","Low":"32.849998","Close":"33.029999","Volume":"1646100","Adj_Close":"33.029999"},{"Symbol":"HMC","Date":"2014-04-24","Open":"33.66","High":"33.759998","Low":"33.50","Close":"33.68","Volume":"865400","Adj_Close":"33.68"},{"Symbol":"HMC","Date":"2014-04-23","Open":"33.900002","High":"33.98","Low":"33.830002","Close":"33.849998","Volume":"506800","Adj_Close":"33.849998"},{"Symbol":"HMC","Date":"2014-04-22","Open":"33.610001","High":"33.740002","Low":"33.580002","Close":"33.650002","Volume":"926000","Adj_Close":"33.650002"},{"Symbol":"HMC","Date":"2014-04-21","Open":"33.799999","High":"33.919998","Low":"33.700001","Close":"33.810001","Volume":"1172000","Adj_Close":"33.810001"},{"Symbol":"HMC","Date":"2014-04-17","Open":"34.00","High":"34.290001","Low":"33.950001","Close":"34.169998","Volume":"652300","Adj_Close":"34.169998"},{"Symbol":"HMC","Date":"2014-04-16","Open":"34.43","High":"34.619999","Low":"34.330002","Close":"34.560001","Volume":"672100","Adj_Close":"34.560001"},{"Symbol":"HMC","Date":"2014-04-15","Open":"34.150002","High":"34.209999","Low":"33.740002","Close":"34.080002","Volume":"731900","Adj_Close":"34.080002"},{"Symbol":"HMC","Date":"2014-04-14","Open":"34.150002","High":"34.330002","Low":"34.00","Close":"34.200001","Volume":"696900","Adj_Close":"34.200001"},{"Symbol":"HMC","Date":"2014-04-11","Open":"33.830002","High":"34.029999","Low":"33.68","Close":"33.740002","Volume":"1102500","Adj_Close":"33.740002"},{"Symbol":"HMC","Date":"2014-04-10","Open":"33.82","High":"33.84","Low":"33.32","Close":"33.32","Volume":"1633500","Adj_Close":"33.32"},{"Symbol":"HMC","Date":"2014-04-09","Open":"33.939999","High":"34.209999","Low":"33.849998","Close":"34.189999","Volume":"2300100","Adj_Close":"34.189999"},{"Symbol":"HMC","Date":"2014-04-08","Open":"33.540001","High":"33.919998","Low":"33.450001","Close":"33.759998","Volume":"3180600","Adj_Close":"33.759998"},{"Symbol":"HMC","Date":"2014-04-07","Open":"34.849998","High":"34.860001","Low":"34.43","Close":"34.439999","Volume":"1776800","Adj_Close":"34.439999"},{"Symbol":"HMC","Date":"2014-04-04","Open":"35.59","High":"35.700001","Low":"35.18","Close":"35.240002","Volume":"2855700","Adj_Close":"35.240002"},{"Symbol":"HMC","Date":"2014-04-03","Open":"35.599998","High":"35.650002","Low":"35.490002","Close":"35.59","Volume":"404500","Adj_Close":"35.59"},{"Symbol":"HMC","Date":"2014-04-02","Open":"35.459999","High":"35.580002","Low":"35.360001","Close":"35.509998","Volume":"515900","Adj_Close":"35.509998"},{"Symbol":"HMC","Date":"2014-04-01","Open":"35.27","High":"35.330002","Low":"35.049999","Close":"35.200001","Volume":"447500","Adj_Close":"35.200001"},{"Symbol":"HMC","Date":"2014-03-31","Open":"35.290001","High":"35.369999","Low":"35.189999","Close":"35.34","Volume":"647800","Adj_Close":"35.34"},{"Symbol":"HMC","Date":"2014-03-28","Open":"34.860001","High":"35.049999","Low":"34.77","Close":"34.84","Volume":"626400","Adj_Close":"34.84"},{"Symbol":"HMC","Date":"2014-03-27","Open":"34.490002","High":"34.73","Low":"34.400002","Close":"34.549999","Volume":"1600800","Adj_Close":"34.549999"},{"Symbol":"HMC","Date":"2014-03-26","Open":"34.740002","High":"34.82","Low":"34.450001","Close":"34.450001","Volume":"1059400","Adj_Close":"34.450001"},{"Symbol":"HMC","Date":"2014-03-25","Open":"34.560001","High":"34.689999","Low":"34.50","Close":"34.650002","Volume":"668100","Adj_Close":"34.650002"},{"Symbol":"HMC","Date":"2014-03-24","Open":"34.580002","High":"34.650002","Low":"34.240002","Close":"34.400002","Volume":"894600","Adj_Close":"34.400002"},{"Symbol":"HMC","Date":"2014-03-21","Open":"35.23","High":"35.32","Low":"34.990002","Close":"35.009998","Volume":"382200","Adj_Close":"35.009998"},{"Symbol":"HMC","Date":"2014-03-20","Open":"34.900002","High":"35.049999","Low":"34.720001","Close":"35.00","Volume":"402200","Adj_Close":"35.00"},{"Symbol":"HMC","Date":"2014-03-19","Open":"35.299999","High":"35.439999","Low":"35.029999","Close":"35.200001","Volume":"536200","Adj_Close":"35.200001"},{"Symbol":"HMC","Date":"2014-03-18","Open":"35.169998","High":"35.43","Low":"35.099998","Close":"35.360001","Volume":"709800","Adj_Close":"35.360001"},{"Symbol":"HMC","Date":"2014-03-17","Open":"35.709999","High":"35.93","Low":"35.700001","Close":"35.900002","Volume":"263500","Adj_Close":"35.900002"},{"Symbol":"HMC","Date":"2014-03-14","Open":"35.470001","High":"35.630001","Low":"35.369999","Close":"35.470001","Volume":"414600","Adj_Close":"35.470001"},{"Symbol":"HMC","Date":"2014-03-13","Open":"36.419998","High":"36.459999","Low":"35.75","Close":"35.84","Volume":"624100","Adj_Close":"35.84"},{"Symbol":"HMC","Date":"2014-03-12","Open":"36.540001","High":"36.599998","Low":"36.34","Close":"36.560001","Volume":"348600","Adj_Close":"36.560001"},{"Symbol":"HMC","Date":"2014-03-11","Open":"37.16","High":"37.23","Low":"36.849998","Close":"36.889999","Volume":"622200","Adj_Close":"36.889999"},{"Symbol":"HMC","Date":"2014-03-10","Open":"36.32","High":"36.669998","Low":"36.25","Close":"36.57","Volume":"1229900","Adj_Close":"36.57"},{"Symbol":"HMC","Date":"2014-03-07","Open":"37.25","High":"37.25","Low":"37.00","Close":"37.119999","Volume":"603600","Adj_Close":"37.119999"},{"Symbol":"HMC","Date":"2014-03-06","Open":"37.209999","High":"37.400002","Low":"37.099998","Close":"37.299999","Volume":"774000","Adj_Close":"37.299999"},{"Symbol":"HMC","Date":"2014-03-05","Open":"36.639999","High":"37.029999","Low":"36.540001","Close":"36.919998","Volume":"1495300","Adj_Close":"36.919998"},{"Symbol":"HMC","Date":"2014-03-04","Open":"36.709999","High":"36.950001","Low":"36.509998","Close":"36.93","Volume":"975800","Adj_Close":"36.93"},{"Symbol":"HMC","Date":"2014-03-03","Open":"36.459999","High":"36.619999","Low":"36.240002","Close":"36.400002","Volume":"761600","Adj_Close":"36.400002"},{"Symbol":"HMC","Date":"2014-02-28","Open":"35.98","High":"36.259998","Low":"35.860001","Close":"36.049999","Volume":"514800","Adj_Close":"36.049999"},{"Symbol":"HMC","Date":"2014-02-27","Open":"36.09","High":"36.459999","Low":"35.93","Close":"36.43","Volume":"1224900","Adj_Close":"36.43"},{"Symbol":"HMC","Date":"2014-02-26","Open":"36.279999","High":"36.279999","Low":"35.950001","Close":"36.060001","Volume":"315400","Adj_Close":"36.060001"},{"Symbol":"HMC","Date":"2014-02-25","Open":"36.27","High":"36.459999","Low":"36.029999","Close":"36.240002","Volume":"846900","Adj_Close":"36.240002"},{"Symbol":"HMC","Date":"2014-02-24","Open":"36.099998","High":"36.299999","Low":"36.080002","Close":"36.119999","Volume":"650500","Adj_Close":"36.119999"},{"Symbol":"HMC","Date":"2014-02-21","Open":"36.23","High":"36.360001","Low":"36.119999","Close":"36.139999","Volume":"539000","Adj_Close":"36.139999"},{"Symbol":"HMC","Date":"2014-02-20","Open":"36.00","High":"36.209999","Low":"35.860001","Close":"36.16","Volume":"552500","Adj_Close":"36.16"},{"Symbol":"HMC","Date":"2014-02-19","Open":"36.77","High":"36.990002","Low":"36.529999","Close":"36.599998","Volume":"662000","Adj_Close":"36.599998"},{"Symbol":"HMC","Date":"2014-02-18","Open":"37.25","High":"37.25","Low":"36.959999","Close":"37.169998","Volume":"284000","Adj_Close":"37.169998"},{"Symbol":"HMC","Date":"2014-02-14","Open":"36.779999","High":"36.950001","Low":"36.599998","Close":"36.75","Volume":"408800","Adj_Close":"36.75"},{"Symbol":"HMC","Date":"2014-02-13","Open":"36.59","High":"37.049999","Low":"36.400002","Close":"37.02","Volume":"398500","Adj_Close":"37.02"},{"Symbol":"HMC","Date":"2014-02-12","Open":"37.220001","High":"37.369999","Low":"37.16","Close":"37.220001","Volume":"323800","Adj_Close":"37.220001"},{"Symbol":"HMC","Date":"2014-02-11","Open":"36.59","High":"36.82","Low":"36.509998","Close":"36.700001","Volume":"459300","Adj_Close":"36.700001"},{"Symbol":"HMC","Date":"2014-02-10","Open":"36.400002","High":"36.529999","Low":"36.32","Close":"36.48","Volume":"1138900","Adj_Close":"36.48"},{"Symbol":"HMC","Date":"2014-02-07","Open":"36.299999","High":"36.689999","Low":"36.119999","Close":"36.549999","Volume":"946500","Adj_Close":"36.549999"},{"Symbol":"HMC","Date":"2014-02-06","Open":"35.490002","High":"35.98","Low":"35.419998","Close":"35.900002","Volume":"525500","Adj_Close":"35.900002"},{"Symbol":"HMC","Date":"2014-02-05","Open":"35.900002","High":"36.049999","Low":"35.610001","Close":"35.970001","Volume":"426500","Adj_Close":"35.970001"},{"Symbol":"HMC","Date":"2014-02-04","Open":"35.880001","High":"35.970001","Low":"35.509998","Close":"35.919998","Volume":"572900","Adj_Close":"35.919998"},{"Symbol":"HMC","Date":"2014-02-03","Open":"37.16","High":"37.16","Low":"36.23","Close":"36.439999","Volume":"738200","Adj_Close":"36.439999"},{"Symbol":"HMC","Date":"2014-01-31","Open":"37.50","High":"37.939999","Low":"37.369999","Close":"37.509998","Volume":"248600","Adj_Close":"37.509998"},{"Symbol":"HMC","Date":"2014-01-30","Open":"38.310001","High":"38.360001","Low":"38.009998","Close":"38.200001","Volume":"317700","Adj_Close":"38.200001"},{"Symbol":"HMC","Date":"2014-01-29","Open":"38.48","High":"38.48","Low":"38.00","Close":"38.240002","Volume":"397600","Adj_Close":"38.240002"},{"Symbol":"HMC","Date":"2014-01-28","Open":"37.950001","High":"38.299999","Low":"37.900002","Close":"38.060001","Volume":"383600","Adj_Close":"38.060001"},{"Symbol":"HMC","Date":"2014-01-27","Open":"38.299999","High":"38.439999","Low":"37.799999","Close":"38.080002","Volume":"363600","Adj_Close":"38.080002"},{"Symbol":"HMC","Date":"2014-01-24","Open":"38.259998","High":"38.41","Low":"37.900002","Close":"38.00","Volume":"900700","Adj_Close":"38.00"},{"Symbol":"HMC","Date":"2014-01-23","Open":"39.189999","High":"39.490002","Low":"38.779999","Close":"38.939999","Volume":"601600","Adj_Close":"38.939999"},{"Symbol":"HMC","Date":"2014-01-22","Open":"39.689999","High":"39.779999","Low":"39.549999","Close":"39.720001","Volume":"572800","Adj_Close":"39.720001"},{"Symbol":"HMC","Date":"2014-01-21","Open":"39.75","High":"39.869999","Low":"39.529999","Close":"39.830002","Volume":"612600","Adj_Close":"39.830002"},{"Symbol":"HMC","Date":"2014-01-17","Open":"39.880001","High":"39.990002","Low":"39.610001","Close":"39.759998","Volume":"253000","Adj_Close":"39.759998"},{"Symbol":"HMC","Date":"2014-01-16","Open":"39.799999","High":"39.959999","Low":"39.689999","Close":"39.93","Volume":"748600","Adj_Close":"39.93"},{"Symbol":"HMC","Date":"2014-01-15","Open":"39.799999","High":"40.00","Low":"39.57","Close":"39.93","Volume":"306400","Adj_Close":"39.93"},{"Symbol":"HMC","Date":"2014-01-14","Open":"40.07","High":"40.18","Low":"39.849998","Close":"40.09","Volume":"746900","Adj_Close":"40.09"},{"Symbol":"HMC","Date":"2014-01-13","Open":"40.57","High":"40.68","Low":"40.16","Close":"40.220001","Volume":"404100","Adj_Close":"40.220001"},{"Symbol":"HMC","Date":"2014-01-10","Open":"40.689999","High":"40.860001","Low":"40.52","Close":"40.84","Volume":"162700","Adj_Close":"40.84"},{"Symbol":"HMC","Date":"2014-01-09","Open":"40.700001","High":"40.75","Low":"40.470001","Close":"40.73","Volume":"170800","Adj_Close":"40.73"},{"Symbol":"HMC","Date":"2014-01-08","Open":"40.720001","High":"40.720001","Low":"40.50","Close":"40.650002","Volume":"258100","Adj_Close":"40.650002"},{"Symbol":"HMC","Date":"2014-01-07","Open":"40.669998","High":"40.810001","Low":"40.560001","Close":"40.709999","Volume":"207000","Adj_Close":"40.709999"},{"Symbol":"HMC","Date":"2014-01-06","Open":"41.080002","High":"41.380001","Low":"40.66","Close":"40.799999","Volume":"277000","Adj_Close":"40.799999"},{"Symbol":"HMC","Date":"2014-01-03","Open":"40.68","High":"40.82","Low":"40.50","Close":"40.689999","Volume":"191900","Adj_Close":"40.689999"},{"Symbol":"HMC","Date":"2014-01-02","Open":"41.099998","High":"41.130001","Low":"40.599998","Close":"40.689999","Volume":"179400","Adj_Close":"40.689999"}]}}},
{"query":{"count":252,"created":"2016-03-30T22:00:00Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"1","execution-stop-time":"2","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"6","execution-stop-time":"33","execution-time":"27","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=F"},{"execution-start-time":"37","execution-stop-time":"39","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=F"}],"publiclyCallable":"true","cache":[{"execution-start-time":"4","execution-stop-time":"5","execution-time":"1","method":"GET","type":"MEMCACHED","content":"db9a72892b8fe835b21c23b713d2d508"},{"execution-start-time":"36","execution-stop-time":"37","execution-time":"1","method":"GET","type":"MEMCACHED","content":"94509fdc48befdec8e89b7862a60ab30"}],"query":[{"execution-start-time":"5","execution-stop-time":"36","execution-time":"31","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=F]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"37","execution-stop-time":"42","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=F]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"3177","execution-time":"3174","instructions-used":"24184368","table-name":"yahoo.finance.historicaldata"},"user-time":"3196","service-time":"32","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"F","Date":"2014-12-31","Open":"15.51","High":"15.64","Low":"15.47","Close":"15.50","Volume":"17930200","Adj_Close":"14.408843"},{"Symbol":"F","Date":"2014-12-30","Open":"15.48","High":"15.60","Low":"15.45","Close":"15.50","Volume":"14795000","Adj_Close":"14.408843"},{"Symbol":"F","Date":"2014-12-29","Open":"15.37","High":"15.68","Low":"15.34","Close":"15.52","Volume":"19137500","Adj_Close":"14.427436"},{"Symbol":"F","Date":"2014-12-26","Open":"15.30","High":"15.49","Low":"15.26","Close":"15.45","Volume":"11666400","Adj_Close":"14.362363"},{"Symbol":"F","Date":"2014-12-24","Open":"15.37","High":"15.38","Low":"15.25","Close":"15.30","Volume":"7128800","Adj_Close":"14.222923"},{"Symbol":"F","Date":"2014-12-23","Open":"15.21","High":"15.45","Low":"15.21","Close":"15.33","Volume":"20828700","Adj_Close":"14.250811"},{"Symbol":"F","Date":"2014-12-22","Open":"15.08","High":"15.24","Low":"15.00","Close":"15.22","Volume":"25366800","Adj_Close":"14.148555"},{"Symbol":"F","Date":"2014-12-19","Open":"14.79","High":"15.05","Low":"14.74","Close":"15.03","Volume":"40843500","Adj_Close":"13.97193"},{"Symbol":"F","Date":"2014-12-18","Open":"14.70","High":"14.81","Low":"14.51","Close":"14.81","Volume":"35542500","Adj_Close":"13.767418"},{"Symbol":"F","Date":"2014-12-17","Open":"14.17","High":"14.52","Low":"14.11","Close":"14.45","Volume":"29504200","Adj_Close":"13.43276"},{"Symbol":"F","Date":"2014-12-16","Open":"14.19","High":"14.46","Low":"13.93","Close":"14.09","Volume":"43879300","Adj_Close":"13.098104"},{"Symbol":"F","Date":"2014-12-15","Open":"14.86","High":"14.92","Low":"14.27","Close":"14.28","Volume":"47476400","Adj_Close":"13.274728"},{"Symbol":"F","Date":"2014-12-12","Open":"15.20","High":"15.21","Low":"14.99","Close":"14.99","Volume":"22684500","Adj_Close":"13.934746"},{"Symbol":"F","Date":"2014-12-11","Open":"15.17","High":"15.49","Low":"15.03","Close":"15.28","Volume":"30359300","Adj_Close":"14.204331"},{"Symbol":"F","Date":"2014-12-10","Open":"15.43","High":"15.43","Low":"15.15","Close":"15.16","Volume":"24615500","Adj_Close":"14.092778"},{"Symbol":"F","Date":"2014-12-09","Open":"15.05","High":"15.43","Low":"14.75","Close":"15.43","Volume":"23382800","Adj_Close":"14.343772"},{"Symbol":"F","Date":"2014-12-08","Open":"15.68","High":"15.75","Low":"15.38","Close":"15.43","Volume":"25519100","Adj_Close":"14.343772"},{"Symbol":"F","Date":"2014-12-05","Open":"15.90","High":"15.94","Low":"15.63","Close":"15.70","Volume":"29700300","Adj_Close":"14.594764"},{"Symbol":"F","Date":"2014-12-04","Open":"16.00","High":"16.030001","Low":"15.75","Close":"15.81","Volume":"23264600","Adj_Close":"14.697021"},{"Symbol":"F","Date":"2014-12-03","Open":"15.88","High":"16.129999","Low":"15.88","Close":"16.01","Volume":"37561100","Adj_Close":"14.882941"},{"Symbol":"F","Date":"2014-12-02","Open":"15.86","High":"15.95","Low":"15.61","Close":"15.90","Volume":"32273000","Adj_Close":"14.780684"},{"Symbol":"F","Date":"2014-12-01","Open":"15.78","High":"15.89","Low":"15.70","Close":"15.77","Volume":"30022000","Adj_Close":"14.659837"},{"Symbol":"F","Date":"2014-11-28","Open":"15.65","High":"15.73","Low":"15.47","Close":"15.73","Volume":"18620300","Adj_Close":"14.622652"},{"Symbol":"F","Date":"2014-11-26","Open":"15.65","High":"15.68","Low":"15.52","Close":"15.61","Volume":"20003200","Adj_Close":"14.511099"},{"Symbol":"F","Date":"2014-11-25","Open":"15.74","High":"15.84","Low":"15.61","Close":"15.68","Volume":"32253500","Adj_Close":"14.576172"},{"Symbol":"F","Date":"2014-11-24","Open":"15.51","High":"15.69","Low":"15.50","Close":"15.67","Volume":"32794200","Adj_Close":"14.566876"},{"Symbol":"F","Date":"2014-11-21","Open":"15.64","High":"15.65","Low":"15.37","Close":"15.43","Volume":"25609600","Adj_Close":"14.343772"},{"Symbol":"F","Date":"2014-11-20","Open":"15.37","High":"15.65","Low":"15.28","Close":"15.46","Volume":"21163200","Adj_Close":"14.371659"},{"Symbol":"F","Date":"2014-11-19","Open":"15.48","High":"15.48","Low":"15.26","Close":"15.44","Volume":"22625500","Adj_Close":"14.353067"},{"Symbol":"F","Date":"2014-11-18","Open":"15.70","High":"15.75","Low":"15.25","Close":"15.50","Volume":"43647800","Adj_Close":"14.408843"},{"Symbol":"F","Date":"2014-11-17","Open":"15.35","High":"15.60","Low":"15.20","Close":"15.54","Volume":"46517300","Adj_Close":"14.446028"},{"Symbol":"F","Date":"2014-11-14","Open":"15.01","High":"15.27","Low":"14.99","Close":"15.14","Volume":"37092900","Adj_Close":"14.074187"},{"Symbol":"F","Date":"2014-11-13","Open":"14.71","High":"15.17","Low":"14.70","Close":"14.93","Volume":"50284000","Adj_Close":"13.87897"},{"Symbol":"F","Date":"2014-11-12","Open":"14.32","High":"14.63","Low":"14.26","Close":"14.58","Volume":"36221100","Adj_Close":"13.553609"},{"Symbol":"F","Date":"2014-11-11","Open":"14.05","High":"14.43","Low":"14.00","Close":"14.37","Volume":"35345600","Adj_Close":"13.358392"},{"Symbol":"F","Date":"2014-11-10","Open":"14.19","High":"14.20","Low":"13.95","Close":"14.00","Volume":"36413300","Adj_Close":"13.014439"},{"Symbol":"F","Date":"2014-11-07","Open":"14.22","High":"14.27","Low":"14.13","Close":"14.17","Volume":"30254700","Adj_Close":"13.172472"},{"Symbol":"F","Date":"2014-11-06","Open":"13.92","High":"14.22","Low":"13.92","Close":"14.19","Volume":"36431700","Adj_Close":"13.191063"},{"Symbol":"F","Date":"2014-11-05","Open":"14.03","High":"14.05","Low":"13.87","Close":"13.94","Volume":"26042800","Adj_Close":"12.958663"},{"Symbol":"F","Date":"2014-11-04","Open":"13.94","High":"14.00","Low":"13.86","Close":"13.95","Volume":"19695700","Adj_Close":"12.967959"},{"Symbol":"F","Date":"2014-11-03","Open":"14.10","High":"14.17","Low":"13.94","Close":"13.99","Volume":"31620700","Adj_Close":"13.005143"},{"Symbol":"F","Date":"2014-10-31","Open":"14.13","High":"14.15","Low":"14.04","Close":"14.09","Volume":"37277800","Adj_Close":"13.098104"},{"Symbol":"F","Date":"2014-10-30","Open":"13.88","High":"13.97","Low":"13.68","Close":"13.95","Volume":"25506000","Adj_Close":"12.967959"},{"Symbol":"F","Date":"2014-10-29","Open":"14.14","High":"14.18","Low":"13.76","Close":"13.91","Volume":"31263900","Adj_Close":"12.930775"},{"Symbol":"F","Date":"2014-10-28","Open":"13.89","High":"14.16","Low":"13.86","Close":"14.16","Volume":"36735400","Adj_Close":"13.046975"},{"Symbol":"F","Date":"2014-10-27","Open":"13.87","High":"13.89","Low":"13.68","Close":"13.82","Volume":"61472200","Adj_Close":"12.7337"},{"Symbol":"F","Date":"2014-10-24","Open":"14.41","High":"14.44","Low":"13.65","Close":"13.78","Volume":"91944000","Adj_Close":"12.696844"},{"Symbol":"F","Date":"2014-10-23","Open":"14.30","High":"14.49","Low":"14.28","Close":"14.40","Volume":"30418400","Adj_Close":"13.26811"},{"Symbol":"F","Date":"2014-10-22","Open":"14.29","High":"14.33","Low":"14.08","Close":"14.13","Volume":"24285200","Adj_Close":"13.019333"},{"Symbol":"F","Date":"2014-10-21","Open":"14.26","High":"14.28","Low":"14.10","Close":"14.26","Volume":"29926800","Adj_Close":"13.139115"},{"Symbol":"F","Date":"2014-10-20","Open":"14.04","High":"14.18","Low":"13.95","Close":"14.17","Volume":"18972600","Adj_Close":"13.056189"},{"Symbol":"F","Date":"2014-10-17","Open":"14.20","High":"14.25","Low":"13.97","Close":"14.02","Volume":"31548000","Adj_Close":"12.91798"},{"Symbol":"F","Date":"2014-10-16","Open":"13.39","High":"14.06","Low":"13.36","Close":"13.98","Volume":"41375500","Adj_Close":"12.881123"},{"Symbol":"F","Date":"2014-10-15","Open":"13.59","High":"13.77","Low":"13.26","Close":"13.62","Volume":"46497000","Adj_Close":"12.549421"},{"Symbol":"F","Date":"2014-10-14","Open":"13.60","High":"14.04","Low":"13.54","Close":"13.78","Volume":"43392900","Adj_Close":"12.696844"},{"Symbol":"F","Date":"2014-10-13","Open":"13.78","High":"13.88","Low":"13.52","Close":"13.54","Volume":"37691700","Adj_Close":"12.475709"},{"Symbol":"F","Date":"2014-10-10","Open":"13.71","High":"13.92","Low":"13.52","Close":"13.79","Volume":"41079500","Adj_Close":"12.706058"},{"Symbol":"F","Date":"2014-10-09","Open":"14.21","High":"14.22","Low":"13.80","Close":"13.84","Volume":"31768500","Adj_Close":"12.752128"},{"Symbol":"F","Date":"2014-10-08","Open":"14.07","High":"14.24","Low":"13.62","Close":"14.21","Volume":"50319300","Adj_Close":"13.093045"},{"Symbol":"F","Date":"2014-10-07","Open":"14.47","High":"14.49","Low":"14.08","Close":"14.10","Volume":"42850700","Adj_Close":"12.991692"},{"Symbol":"F","Date":"2014-10-06","Open":"14.66","High":"14.70","Low":"14.50","Close":"14.52","Volume":"23974300","Adj_Close":"13.378678"},{"Symbol":"F","Date":"2014-10-03","Open":"14.66","High":"14.69","Low":"14.50","Close":"14.59","Volume":"38177500","Adj_Close":"13.443176"},{"Symbol":"F","Date":"2014-10-02","Open":"14.66","High":"14.67","Low":"14.44","Close":"14.56","Volume":"37781800","Adj_Close":"13.415534"},{"Symbol":"F","Date":"2014-10-01","Open":"14.77","High":"14.83","Low":"14.56","Close":"14.59","Volume":"55948300","Adj_Close":"13.443176"},{"Symbol":"F","Date":"2014-09-30","Open":"15.01","High":"15.15","Low":"14.49","Close":"14.79","Volume":"115056700","Adj_Close":"13.627455"},{"Symbol":"F","Date":"2014-09-29","Open":"16.15","High":"16.40","Low":"14.83","Close":"15.11","Volume":"82938700","Adj_Close":"13.922302"},{"Symbol":"F","Date":"2014-09-26","Open":"16.23","High":"16.33","Low":"16.18","Close":"16.33","Volume":"20432100","Adj_Close":"15.046406"},{"Symbol":"F","Date":"2014-09-25","Open":"16.40","High":"16.40","Low":"16.17","Close":"16.200001","Volume":"19054900","Adj_Close":"14.926625"},{"Symbol":"F","Date":"2014-09-24","Open":"16.24","High":"16.450001","Low":"16.24","Close":"16.41","Volume":"22021600","Adj_Close":"15.120117"},{"Symbol":"F","Date":"2014-09-23","Open":"16.309999","High":"16.35","Low":"16.139999","Close":"16.17","Volume":"28285100","Adj_Close":"14.898982"},{"Symbol":"F","Date":"2014-09-22","Open":"16.58","High":"16.610001","Low":"16.34","Close":"16.360001","Volume":"23800300","Adj_Close":"15.074048"},{"Symbol":"F","Date":"2014-09-19","Open":"16.68","High":"16.77","Low":"16.58","Close":"16.65","Volume":"35006900","Adj_Close":"15.341252"},{"Symbol":"F","Date":"2014-09-18","Open":"16.540001","High":"16.65","Low":"16.50","Close":"16.58","Volume":"19453000","Adj_Close":"15.276755"},{"Symbol":"F","Date":"2014-09-17","Open":"16.59","High":"16.700001","Low":"16.52","Close":"16.530001","Volume":"25366300","Adj_Close":"15.230686"},{"Symbol":"F","Date":"2014-09-16","Open":"16.379999","High":"16.530001","Low":"16.16","Close":"16.52","Volume":"23772600","Adj_Close":"15.221471"},{"Symbol":"F","Date":"2014-09-15","Open":"16.559999","High":"16.620001","Low":"16.42","Close":"16.469999","Volume":"23691600","Adj_Close":"15.175401"},{"Symbol":"F","Date":"2014-09-12","Open":"16.639999","High":"16.68","Low":"16.50","Close":"16.59","Volume":"16512700","Adj_Close":"15.285969"},{"Symbol":"F","Date":"2014-09-11","Open":"16.59","High":"16.67","Low":"16.51","Close":"16.66","Volume":"14658900","Adj_Close":"15.350466"},{"Symbol":"F","Date":"2014-09-10","Open":"16.65","High":"16.719999","Low":"16.610001","Close":"16.629999","Volume":"16644400","Adj_Close":"15.322824"},{"Symbol":"F","Date":"2014-09-09","Open":"16.790001","High":"16.82","Low":"16.59","Close":"16.629999","Volume":"26656600","Adj_Close":"15.322824"},{"Symbol":"F","Date":"2014-09-08","Open":"16.74","High":"16.870001","Low":"16.709999","Close":"16.799999","Volume":"47565300","Adj_Close":"15.479461"},{"Symbol":"F","Date":"2014-09-05","Open":"17.299999","High":"17.299999","Low":"16.940001","Close":"17.139999","Volume":"29801700","Adj_Close":"15.792736"},{"Symbol":"F","Date":"2014-09-04","Open":"17.459999","High":"17.629999","Low":"17.190001","Close":"17.27","Volume":"20733700","Adj_Close":"15.912519"},{"Symbol":"F","Date":"2014-09-03","Open":"17.709999","High":"17.870001","Low":"17.440001","Close":"17.469999","Volume":"25723900","Adj_Close":"16.096797"},{"Symbol":"F","Date":"2014-09-02","Open":"17.48","High":"17.620001","Low":"17.48","Close":"17.60","Volume":"18538300","Adj_Close":"16.21658"},{"Symbol":"F","Date":"2014-08-29","Open":"17.469999","High":"17.49","Low":"17.389999","Close":"17.41","Volume":"15373400","Adj_Close":"16.041514"},{"Symbol":"F","Date":"2014-08-28","Open":"17.27","High":"17.450001","Low":"17.209999","Close":"17.42","Volume":"16855000","Adj_Close":"16.050728"},{"Symbol":"F","Date":"2014-08-27","Open":"17.23","High":"17.40","Low":"17.209999","Close":"17.360001","Volume":"18221100","Adj_Close":"15.995445"},{"Symbol":"F","Date":"2014-08-26","Open":"17.26","High":"17.35","Low":"17.190001","Close":"17.190001","Volume":"12167200","Adj_Close":"15.838807"},{"Symbol":"F","Date":"2014-08-25","Open":"17.209999","High":"17.290001","Low":"17.200001","Close":"17.23","Volume":"10770300","Adj_Close":"15.875662"},{"Symbol":"F","Date":"2014-08-22","Open":"17.32","High":"17.389999","Low":"17.15","Close":"17.17","Volume":"20294800","Adj_Close":"15.820379"},{"Symbol":"F","Date":"2014-08-21","Open":"17.43","High":"17.49","Low":"17.370001","Close":"17.40","Volume":"15051300","Adj_Close":"16.0323"},{"Symbol":"F","Date":"2014-08-20","Open":"17.35","High":"17.43","Low":"17.25","Close":"17.41","Volume":"14204600","Adj_Close":"16.041514"},{"Symbol":"F","Date":"2014-08-19","Open":"17.51","High":"17.52","Low":"17.32","Close":"17.360001","Volume":"15899400","Adj_Close":"15.995445"},{"Symbol":"F","Date":"2014-08-18","Open":"17.379999","High":"17.52","Low":"17.379999","Close":"17.43","Volume":"17174900","Adj_Close":"16.059942"},{"Symbol":"F","Date":"2014-08-15","Open":"17.49","High":"17.49","Low":"17.17","Close":"17.309999","Volume":"20958100","Adj_Close":"15.949374"},{"Symbol":"F","Date":"2014-08-14","Open":"17.40","High":"17.48","Low":"17.23","Close":"17.43","Volume":"19733500","Adj_Close":"16.059942"},{"Symbol":"F","Date":"2014-08-13","Open":"17.48","High":"17.48","Low":"17.32","Close":"17.42","Volume":"26177800","Adj_Close":"16.050728"},{"Symbol":"F","Date":"2014-08-12","Open":"17.15","High":"17.41","Low":"17.139999","Close":"17.209999","Volume":"25514800","Adj_Close":"15.857234"},{"Symbol":"F","Date":"2014-08-11","Open":"17.17","High":"17.25","Low":"17.110001","Close":"17.17","Volume":"17814900","Adj_Close":"15.820379"},{"Symbol":"F","Date":"2014-08-08","Open":"16.799999","High":"17.120001","Low":"16.75","Close":"17.09","Volume":"29370400","Adj_Close":"15.746667"},{"Symbol":"F","Date":"2014-08-07","Open":"17.040001","High":"17.10","Low":"16.77","Close":"16.82","Volume":"19997700","Adj_Close":"15.49789"},{"Symbol":"F","Date":"2014-08-06","Open":"16.74","High":"17.08","Low":"16.74","Close":"16.98","Volume":"21872900","Adj_Close":"15.645313"},{"Symbol":"F","Date":"2014-08-05","Open":"16.940001","High":"17.139999","Low":"16.780001","Close":"16.870001","Volume":"24843500","Adj_Close":"15.543961"},{"Symbol":"F","Date":"2014-08-04","Open":"16.959999","High":"17.139999","Low":"16.940001","Close":"17.02","Volume":"24871300","Adj_Close":"15.68217"},{"Symbol":"F","Date":"2014-08-01","Open":"17.049999","High":"17.18","Low":"16.719999","Close":"16.809999","Volume":"33678000","Adj_Close":"15.488676"},{"Symbol":"F","Date":"2014-07-31","Open":"17.299999","High":"17.33","Low":"17.01","Close":"17.02","Volume":"34170600","Adj_Close":"15.68217"},{"Symbol":"F","Date":"2014-07-30","Open":"17.52","High":"17.60","Low":"17.32","Close":"17.459999","Volume":"30169700","Adj_Close":"16.087583"},{"Symbol":"F","Date":"2014-07-29","Open":"17.65","High":"17.85","Low":"17.540001","Close":"17.57","Volume":"32972800","Adj_Close":"16.073763"},{"Symbol":"F","Date":"2014-07-28","Open":"17.620001","High":"17.709999","Low":"17.469999","Close":"17.639999","Volume":"29662100","Adj_Close":"16.137802"},{"Symbol":"F","Date":"2014-07-25","Open":"17.90","High":"17.92","Low":"17.51","Close":"17.620001","Volume":"34499800","Adj_Close":"16.119506"},{"Symbol":"F","Date":"2014-07-24","Open":"18.01","High":"18.120001","Low":"17.68","Close":"17.84","Volume":"53838000","Adj_Close":"16.320771"},{"Symbol":"F","Date":"2014-07-23","Open":"17.83","High":"17.950001","Low":"17.780001","Close":"17.780001","Volume":"30932500","Adj_Close":"16.265881"},{"Symbol":"F","Date":"2014-07-22","Open":"17.77","High":"17.860001","Low":"17.67","Close":"17.82","Volume":"24546100","Adj_Close":"16.302474"},{"Symbol":"F","Date":"2014-07-21","Open":"17.65","High":"17.90","Low":"17.65","Close":"17.700001","Volume":"19197700","Adj_Close":"16.192694"},{"Symbol":"F","Date":"2014-07-18","Open":"17.799999","High":"17.84","Low":"17.65","Close":"17.719999","Volume":"24838800","Adj_Close":"16.210989"},{"Symbol":"F","Date":"2014-07-17","Open":"17.66","High":"18.08","Low":"17.639999","Close":"17.74","Volume":"47287300","Adj_Close":"16.229286"},{"Symbol":"F","Date":"2014-07-16","Open":"17.66","High":"17.870001","Low":"17.620001","Close":"17.799999","Volume":"36063400","Adj_Close":"16.284176"},{"Symbol":"F","Date":"2014-07-15","Open":"17.549999","High":"17.65","Low":"17.450001","Close":"17.540001","Volume":"22626400","Adj_Close":"16.046319"},{"Symbol":"F","Date":"2014-07-14","Open":"17.51","High":"17.60","Low":"17.450001","Close":"17.549999","Volume":"20446700","Adj_Close":"16.055466"},{"Symbol":"F","Date":"2014-07-11","Open":"17.309999","High":"17.49","Low":"17.290001","Close":"17.469999","Volume":"20150000","Adj_Close":"15.982279"},{"Symbol":"F","Date":"2014-07-10","Open":"17.200001","High":"17.389999","Low":"17.17","Close":"17.299999","Volume":"20164400","Adj_Close":"15.826756"},{"Symbol":"F","Date":"2014-07-09","Open":"17.16","High":"17.450001","Low":"17.139999","Close":"17.43","Volume":"27037000","Adj_Close":"15.945686"},{"Symbol":"F","Date":"2014-07-08","Open":"17.219999","High":"17.24","Low":"17.049999","Close":"17.110001","Volume":"23323400","Adj_Close":"15.652937"},{"Symbol":"F","Date":"2014-07-07","Open":"17.190001","High":"17.40","Low":"17.190001","Close":"17.32","Volume":"20271600","Adj_Close":"15.845053"},{"Symbol":"F","Date":"2014-07-03","Open":"17.23","High":"17.34","Low":"17.219999","Close":"17.32","Volume":"13581200","Adj_Close":"15.845053"},{"Symbol":"F","Date":"2014-07-02","Open":"17.190001","High":"17.299999","Low":"17.17","Close":"17.219999","Volume":"17001400","Adj_Close":"15.753569"},{"Symbol":"F","Date":"2014-07-01","Open":"17.34","High":"17.40","Low":"17.07","Close":"17.209999","Volume":"36171500","Adj_Close":"15.74442"},{"Symbol":"F","Date":"2014-06-30","Open":"17.299999","High":"17.35","Low":"17.200001","Close":"17.24","Volume":"24100000","Adj_Close":"15.771866"},{"Symbol":"F","Date":"2014-06-27","Open":"17.18","High":"17.290001","Low":"17.15","Close":"17.280001","Volume":"31415200","Adj_Close":"15.80846"},{"Symbol":"F","Date":"2014-06-26","Open":"17.27","High":"17.27","Low":"17.049999","Close":"17.200001","Volume":"22189100","Adj_Close":"15.735273"},{"Symbol":"F","Date":"2014-06-25","Open":"16.950001","High":"17.26","Low":"16.92","Close":"17.200001","Volume":"37496700","Adj_Close":"15.735273"},{"Symbol":"F","Date":"2014-06-24","Open":"16.84","High":"17.200001","Low":"16.83","Close":"16.969999","Volume":"37736500","Adj_Close":"15.524858"},{"Symbol":"F","Date":"2014-06-23","Open":"16.700001","High":"16.92","Low":"16.68","Close":"16.879999","Volume":"23084400","Adj_Close":"15.442522"},{"Symbol":"F","Date":"2014-06-20","Open":"16.870001","High":"16.870001","Low":"16.65","Close":"16.67","Volume":"29981400","Adj_Close":"15.250406"},{"Symbol":"F","Date":"2014-06-19","Open":"16.870001","High":"16.870001","Low":"16.76","Close":"16.780001","Volume":"16728500","Adj_Close":"15.35104"},{"Symbol":"F","Date":"2014-06-18","Open":"16.790001","High":"16.85","Low":"16.629999","Close":"16.83","Volume":"22925800","Adj_Close":"15.396781"},{"Symbol":"F","Date":"2014-06-17","Open":"16.58","High":"16.799999","Low":"16.530001","Close":"16.790001","Volume":"17785400","Adj_Close":"15.360188"},{"Symbol":"F","Date":"2014-06-16","Open":"16.469999","High":"16.68","Low":"16.379999","Close":"16.629999","Volume":"22219600","Adj_Close":"15.213812"},{"Symbol":"F","Date":"2014-06-13","Open":"16.530001","High":"16.65","Low":"16.50","Close":"16.559999","Volume":"20323400","Adj_Close":"15.149773"},{"Symbol":"F","Date":"2014-06-12","Open":"16.889999","High":"16.93","Low":"16.50","Close":"16.52","Volume":"28544500","Adj_Close":"15.113181"},{"Symbol":"F","Date":"2014-06-11","Open":"16.969999","High":"17.01","Low":"16.879999","Close":"16.90","Volume":"21409200","Adj_Close":"15.46082"},{"Symbol":"F","Date":"2014-06-10","Open":"17.01","High":"17.08","Low":"16.99","Close":"17.01","Volume":"21980100","Adj_Close":"15.561453"},{"Symbol":"F","Date":"2014-06-09","Open":"17.01","High":"17.120001","Low":"17.00","Close":"17.00","Volume":"23144300","Adj_Close":"15.552304"},{"Symbol":"F","Date":"2014-06-06","Open":"16.67","High":"17.08","Low":"16.67","Close":"17.08","Volume":"38583400","Adj_Close":"15.625491"},{"Symbol":"F","Date":"2014-06-05","Open":"16.82","High":"16.889999","Low":"16.60","Close":"16.68","Volume":"34824800","Adj_Close":"15.259555"},{"Symbol":"F","Date":"2014-06-04","Open":"16.549999","High":"16.85","Low":"16.459999","Close":"16.790001","Volume":"33699600","Adj_Close":"15.360188"},{"Symbol":"F","Date":"2014-06-03","Open":"16.459999","High":"16.719999","Low":"16.450001","Close":"16.549999","Volume":"32579900","Adj_Close":"15.140625"},{"Symbol":"F","Date":"2014-06-02","Open":"16.51","High":"16.51","Low":"16.379999","Close":"16.440001","Volume":"17975100","Adj_Close":"15.039993"},{"Symbol":"F","Date":"2014-05-30","Open":"16.40","High":"16.540001","Low":"16.370001","Close":"16.440001","Volume":"23065400","Adj_Close":"15.039993"},{"Symbol":"F","Date":"2014-05-29","Open":"16.40","High":"16.559999","Low":"16.370001","Close":"16.540001","Volume":"42832500","Adj_Close":"15.131478"},{"Symbol":"F","Date":"2014-05-28","Open":"16.17","High":"16.360001","Low":"16.15","Close":"16.309999","Volume":"23241400","Adj_Close":"14.921063"},{"Symbol":"F","Date":"2014-05-27","Open":"16.09","High":"16.200001","Low":"16.049999","Close":"16.16","Volume":"21034700","Adj_Close":"14.783837"},{"Symbol":"F","Date":"2014-05-23","Open":"15.91","High":"16.030001","Low":"15.90","Close":"16.02","Volume":"17004400","Adj_Close":"14.65576"},{"Symbol":"F","Date":"2014-05-22","Open":"15.85","High":"16.030001","Low":"15.85","Close":"15.91","Volume":"24843700","Adj_Close":"14.555127"},{"Symbol":"F","Date":"2014-05-21","Open":"15.82","High":"15.98","Low":"15.80","Close":"15.91","Volume":"17809700","Adj_Close":"14.555127"},{"Symbol":"F","Date":"2014-05-20","Open":"15.90","High":"15.93","Low":"15.74","Close":"15.77","Volume":"20348900","Adj_Close":"14.42705"},{"Symbol":"F","Date":"2014-05-19","Open":"15.72","High":"15.94","Low":"15.72","Close":"15.92","Volume":"17368300","Adj_Close":"14.564275"},{"Symbol":"F","Date":"2014-05-16","Open":"15.70","High":"15.86","Low":"15.56","Close":"15.76","Volume":"25639200","Adj_Close":"14.417901"},{"Symbol":"F","Date":"2014-05-15","Open":"15.74","High":"15.75","Low":"15.55","Close":"15.69","Volume":"27244300","Adj_Close":"14.353861"},{"Symbol":"F","Date":"2014-05-14","Open":"15.85","High":"15.89","Low":"15.75","Close":"15.75","Volume":"15087900","Adj_Close":"14.408752"},{"Symbol":"F","Date":"2014-05-13","Open":"15.85","High":"15.90","Low":"15.75","Close":"15.86","Volume":"16509300","Adj_Close":"14.509385"},{"Symbol":"F","Date":"2014-05-12","Open":"15.81","High":"15.90","Low":"15.78","Close":"15.84","Volume":"17441400","Adj_Close":"14.491088"},{"Symbol":"F","Date":"2014-05-09","Open":"15.73","High":"15.90","Low":"15.73","Close":"15.77","Volume":"25172600","Adj_Close":"14.42705"},{"Symbol":"F","Date":"2014-05-08","Open":"15.54","High":"15.95","Low":"15.51","Close":"15.81","Volume":"36793400","Adj_Close":"14.463643"},{"Symbol":"F","Date":"2014-05-07","Open":"15.63","High":"15.63","Low":"15.43","Close":"15.46","Volume":"32181800","Adj_Close":"14.143448"},{"Symbol":"F","Date":"2014-05-06","Open":"15.74","High":"15.76","Low":"15.53","Close":"15.56","Volume":"23289100","Adj_Close":"14.234933"},{"Symbol":"F","Date":"2014-05-05","Open":"15.81","High":"15.87","Low":"15.71","Close":"15.74","Volume":"25120400","Adj_Close":"14.399604"},{"Symbol":"F","Date":"2014-05-02","Open":"15.95","High":"15.98","Low":"15.80","Close":"15.90","Volume":"22173000","Adj_Close":"14.545978"},{"Symbol":"F","Date":"2014-05-01","Open":"16.15","High":"16.200001","Low":"15.85","Close":"15.91","Volume":"30722100","Adj_Close":"14.555127"},{"Symbol":"F","Date":"2014-04-30","Open":"16.030001","High":"16.18","Low":"15.92","Close":"16.15","Volume":"26525000","Adj_Close":"14.774688"},{"Symbol":"F","Date":"2014-04-29","Open":"16.00","High":"16.15","Low":"15.91","Close":"16.120001","Volume":"27163700","Adj_Close":"14.632889"},{"Symbol":"F","Date":"2014-04-28","Open":"15.94","High":"16.049999","Low":"15.75","Close":"15.97","Volume":"33030100","Adj_Close":"14.496726"},{"Symbol":"F","Date":"2014-04-25","Open":"15.81","High":"15.90","Low":"15.71","Close":"15.78","Volume":"53874200","Adj_Close":"14.324254"},{"Symbol":"F","Date":"2014-04-24","Open":"16.41","High":"16.440001","Low":"16.200001","Close":"16.32","Volume":"27453200","Adj_Close":"14.814437"},{"Symbol":"F","Date":"2014-04-23","Open":"16.08","High":"16.32","Low":"16.08","Close":"16.23","Volume":"19808700","Adj_Close":"14.73274"},{"Symbol":"F","Date":"2014-04-22","Open":"15.96","High":"16.18","Low":"15.93","Close":"16.10","Volume":"18916800","Adj_Close":"14.614733"},{"Symbol":"F","Date":"2014-04-21","Open":"16.01","High":"16.08","Low":"15.90","Close":"15.98","Volume":"24911800","Adj_Close":"14.505803"},{"Symbol":"F","Date":"2014-04-17","Open":"15.99","High":"16.10","Low":"15.99","Close":"16.00","Volume":"17657900","Adj_Close":"14.523958"},{"Symbol":"F","Date":"2014-04-16","Open":"15.94","High":"16.07","Low":"15.90","Close":"16.07","Volume":"21853800","Adj_Close":"14.5875"},{"Symbol":"F","Date":"2014-04-15","Open":"15.77","High":"15.88","Low":"15.66","Close":"15.84","Volume":"28666200","Adj_Close":"14.378719"},{"Symbol":"F","Date":"2014-04-14","Open":"15.73","High":"15.77","Low":"15.53","Close":"15.70","Volume":"20414700","Adj_Close":"14.251634"},{"Symbol":"F","Date":"2014-04-11","Open":"15.80","High":"15.93","Low":"15.60","Close":"15.63","Volume":"39337200","Adj_Close":"14.188092"},{"Symbol":"F","Date":"2014-04-10","Open":"15.90","High":"15.91","Low":"15.59","Close":"15.63","Volume":"31254900","Adj_Close":"14.188092"},{"Symbol":"F","Date":"2014-04-09","Open":"16.00","High":"16.09","Low":"15.75","Close":"15.84","Volume":"36882800","Adj_Close":"14.378719"},{"Symbol":"F","Date":"2014-04-08","Open":"15.99","High":"16.16","Low":"15.92","Close":"16.10","Volume":"26836400","Adj_Close":"14.614733"},{"Symbol":"F","Date":"2014-04-07","Open":"16.08","High":"16.17","Low":"15.86","Close":"15.94","Volume":"28112900","Adj_Close":"14.469493"},{"Symbol":"F","Date":"2014-04-04","Open":"16.49","High":"16.49","Low":"16.110001","Close":"16.129999","Volume":"30524900","Adj_Close":"14.641965"},{"Symbol":"F","Date":"2014-04-03","Open":"16.459999","High":"16.49","Low":"16.34","Close":"16.389999","Volume":"26108300","Adj_Close":"14.877979"},{"Symbol":"F","Date":"2014-04-02","Open":"16.25","High":"16.49","Low":"16.15","Close":"16.459999","Volume":"39927100","Adj_Close":"14.941521"},{"Symbol":"F","Date":"2014-04-01","Open":"15.67","High":"16.450001","Low":"15.67","Close":"16.32","Volume":"84938900","Adj_Close":"14.814437"},{"Symbol":"F","Date":"2014-03-31","Open":"15.60","High":"15.63","Low":"15.48","Close":"15.60","Volume":"27054500","Adj_Close":"14.16086"},{"Symbol":"F","Date":"2014-03-28","Open":"15.32","High":"15.58","Low":"15.31","Close":"15.45","Volume":"36615100","Adj_Close":"14.024697"},{"Symbol":"F","Date":"2014-03-27","Open":"15.25","High":"15.38","Low":"15.17","Close":"15.25","Volume":"28244800","Adj_Close":"13.843148"},{"Symbol":"F","Date":"2014-03-26","Open":"15.38","High":"15.44","Low":"15.23","Close":"15.25","Volume":"24444100","Adj_Close":"13.843148"},{"Symbol":"F","Date":"2014-03-25","Open":"15.42","High":"15.46","Low":"15.29","Close":"15.33","Volume":"24656700","Adj_Close":"13.915767"},{"Symbol":"F","Date":"2014-03-24","Open":"15.48","High":"15.54","Low":"15.30","Close":"15.39","Volume":"27033600","Adj_Close":"13.970233"},{"Symbol":"F","Date":"2014-03-21","Open":"15.73","High":"15.74","Low":"15.45","Close":"15.47","Volume":"31678500","Adj_Close":"14.042852"},{"Symbol":"F","Date":"2014-03-20","Open":"15.45","High":"15.55","Low":"15.37","Close":"15.55","Volume":"21203100","Adj_Close":"14.115472"},{"Symbol":"F","Date":"2014-03-19","Open":"15.51","High":"15.55","Low":"15.35","Close":"15.48","Volume":"24374300","Adj_Close":"14.051929"},{"Symbol":"F","Date":"2014-03-18","Open":"15.29","High":"15.57","Low":"15.28","Close":"15.49","Volume":"28324200","Adj_Close":"14.061007"},{"Symbol":"F","Date":"2014-03-17","Open":"15.18","High":"15.33","Low":"15.16","Close":"15.28","Volume":"26929100","Adj_Close":"13.87038"},{"Symbol":"F","Date":"2014-03-14","Open":"15.18","High":"15.25","Low":"15.06","Close":"15.08","Volume":"26943300","Adj_Close":"13.688831"},{"Symbol":"F","Date":"2014-03-13","Open":"15.46","High":"15.46","Low":"15.10","Close":"15.18","Volume":"34344100","Adj_Close":"13.779606"},{"Symbol":"F","Date":"2014-03-12","Open":"15.24","High":"15.42","Low":"15.15","Close":"15.40","Volume":"31250500","Adj_Close":"13.979309"},{"Symbol":"F","Date":"2014-03-11","Open":"15.49","High":"15.52","Low":"15.17","Close":"15.30","Volume":"34612800","Adj_Close":"13.888535"},{"Symbol":"F","Date":"2014-03-10","Open":"15.50","High":"15.64","Low":"15.45","Close":"15.51","Volume":"30496600","Adj_Close":"14.079162"},{"Symbol":"F","Date":"2014-03-07","Open":"15.72","High":"15.80","Low":"15.54","Close":"15.62","Volume":"23666900","Adj_Close":"14.179014"},{"Symbol":"F","Date":"2014-03-06","Open":"15.72","High":"15.83","Low":"15.66","Close":"15.67","Volume":"26630800","Adj_Close":"14.224402"},{"Symbol":"F","Date":"2014-03-05","Open":"15.38","High":"15.67","Low":"15.36","Close":"15.63","Volume":"32955900","Adj_Close":"14.188092"},{"Symbol":"F","Date":"2014-03-04","Open":"15.33","High":"15.39","Low":"15.27","Close":"15.37","Volume":"33071700","Adj_Close":"13.952077"},{"Symbol":"F","Date":"2014-03-03","Open":"15.20","High":"15.32","Low":"15.03","Close":"15.20","Volume":"42824000","Adj_Close":"13.79776"},{"Symbol":"F","Date":"2014-02-28","Open":"15.33","High":"15.41","Low":"15.23","Close":"15.39","Volume":"35687900","Adj_Close":"13.970233"},{"Symbol":"F","Date":"2014-02-27","Open":"15.22","High":"15.43","Low":"15.16","Close":"15.39","Volume":"25727700","Adj_Close":"13.970233"},{"Symbol":"F","Date":"2014-02-26","Open":"15.14","High":"15.46","Low":"15.07","Close":"15.26","Volume":"34682200","Adj_Close":"13.852225"},{"Symbol":"F","Date":"2014-02-25","Open":"15.21","High":"15.29","Low":"15.11","Close":"15.15","Volume":"26401400","Adj_Close":"13.752373"},{"Symbol":"F","Date":"2014-02-24","Open":"15.18","High":"15.36","Low":"15.12","Close":"15.18","Volume":"30412900","Adj_Close":"13.779606"},{"Symbol":"F","Date":"2014-02-21","Open":"15.27","High":"15.31","Low":"15.11","Close":"15.16","Volume":"29967600","Adj_Close":"13.76145"},{"Symbol":"F","Date":"2014-02-20","Open":"15.27","High":"15.30","Low":"15.15","Close":"15.27","Volume":"20647300","Adj_Close":"13.861303"},{"Symbol":"F","Date":"2014-02-19","Open":"15.31","High":"15.49","Low":"15.21","Close":"15.25","Volume":"26262500","Adj_Close":"13.843148"},{"Symbol":"F","Date":"2014-02-18","Open":"15.38","High":"15.45","Low":"15.28","Close":"15.39","Volume":"32167900","Adj_Close":"13.970233"},{"Symbol":"F","Date":"2014-02-14","Open":"15.12","High":"15.36","Low":"15.03","Close":"15.24","Volume":"34282200","Adj_Close":"13.83407"},{"Symbol":"F","Date":"2014-02-13","Open":"14.90","High":"15.09","Low":"14.88","Close":"15.08","Volume":"27008800","Adj_Close":"13.688831"},{"Symbol":"F","Date":"2014-02-12","Open":"15.09","High":"15.12","Low":"14.99","Close":"15.00","Volume":"30519400","Adj_Close":"13.616211"},{"Symbol":"F","Date":"2014-02-11","Open":"14.91","High":"15.01","Low":"14.82","Close":"14.96","Volume":"43482100","Adj_Close":"13.579901"},{"Symbol":"F","Date":"2014-02-10","Open":"15.05","High":"15.06","Low":"14.78","Close":"14.84","Volume":"36217700","Adj_Close":"13.470971"},{"Symbol":"F","Date":"2014-02-07","Open":"14.94","High":"15.13","Low":"14.94","Close":"14.97","Volume":"38410500","Adj_Close":"13.588979"},{"Symbol":"F","Date":"2014-02-06","Open":"14.57","High":"14.85","Low":"14.53","Close":"14.85","Volume":"47527100","Adj_Close":"13.480049"},{"Symbol":"F","Date":"2014-02-05","Open":"14.93","High":"14.93","Low":"14.50","Close":"14.73","Volume":"45466500","Adj_Close":"13.371119"},{"Symbol":"F","Date":"2014-02-04","Open":"14.57","High":"14.93","Low":"14.45","Close":"14.87","Volume":"55397500","Adj_Close":"13.498204"},{"Symbol":"F","Date":"2014-02-03","Open":"15.00","High":"15.00","Low":"14.40","Close":"14.55","Volume":"92427200","Adj_Close":"13.207725"},{"Symbol":"F","Date":"2014-01-31","Open":"15.09","High":"15.10","Low":"14.90","Close":"14.96","Volume":"64132600","Adj_Close":"13.579901"},{"Symbol":"F","Date":"2014-01-30","Open":"15.43","High":"15.45","Low":"15.18","Close":"15.25","Volume":"32654100","Adj_Close":"13.843148"},{"Symbol":"F","Date":"2014-01-29","Open":"15.48","High":"15.53","Low":"15.20","Close":"15.26","Volume":"52241500","Adj_Close":"13.852225"},{"Symbol":"F","Date":"2014-01-28","Open":"15.97","High":"16.01","Low":"15.51","Close":"15.72","Volume":"57677500","Adj_Close":"14.156321"},{"Symbol":"F","Date":"2014-01-27","Open":"15.90","High":"15.91","Low":"15.52","Close":"15.71","Volume":"51218700","Adj_Close":"14.147316"},{"Symbol":"F","Date":"2014-01-24","Open":"16.190001","High":"16.209999","Low":"15.78","Close":"15.83","Volume":"66023500","Adj_Close":"14.255379"},{"Symbol":"F","Date":"2014-01-23","Open":"16.49","High":"16.530001","Low":"16.309999","Close":"16.43","Volume":"37860800","Adj_Close":"14.795697"},{"Symbol":"F","Date":"2014-01-22","Open":"16.440001","High":"16.620001","Low":"16.370001","Close":"16.549999","Volume":"28741900","Adj_Close":"14.90376"},{"Symbol":"F","Date":"2014-01-21","Open":"16.639999","High":"16.68","Low":"16.360001","Close":"16.41","Volume":"35597200","Adj_Close":"14.777686"},{"Symbol":"F","Date":"2014-01-17","Open":"16.780001","High":"16.780001","Low":"16.450001","Close":"16.52","Volume":"37152100","Adj_Close":"14.876745"},{"Symbol":"F","Date":"2014-01-16","Open":"16.67","High":"16.76","Low":"16.559999","Close":"16.73","Volume":"38410800","Adj_Close":"15.065855"},{"Symbol":"F","Date":"2014-01-15","Open":"16.370001","High":"16.73","Low":"16.35","Close":"16.700001","Volume":"64118200","Adj_Close":"15.03884"},{"Symbol":"F","Date":"2014-01-14","Open":"16.309999","High":"16.43","Low":"16.17","Close":"16.40","Volume":"44039200","Adj_Close":"14.768681"},{"Symbol":"F","Date":"2014-01-13","Open":"16.370001","High":"16.530001","Low":"16.08","Close":"16.110001","Volume":"57566400","Adj_Close":"14.507528"},{"Symbol":"F","Date":"2014-01-10","Open":"16.01","High":"16.110001","Low":"15.94","Close":"16.07","Volume":"44984000","Adj_Close":"14.471506"},{"Symbol":"F","Date":"2014-01-09","Open":"15.83","High":"16.02","Low":"15.77","Close":"15.84","Volume":"67836500","Adj_Close":"14.264385"},{"Symbol":"F","Date":"2014-01-08","Open":"15.60","High":"15.71","Low":"15.51","Close":"15.54","Volume":"48448300","Adj_Close":"13.994226"},{"Symbol":"F","Date":"2014-01-07","Open":"15.73","High":"15.74","Low":"15.35","Close":"15.38","Volume":"54476300","Adj_Close":"13.850141"},{"Symbol":"F","Date":"2014-01-06","Open":"15.72","High":"15.76","Low":"15.52","Close":"15.58","Volume":"42657600","Adj_Close":"14.030247"},{"Symbol":"F","Date":"2014-01-03","Open":"15.52","High":"15.64","Low":"15.30","Close":"15.51","Volume":"46122300","Adj_Close":"13.96721"},{"Symbol":"F","Date":"2014-01-02","Open":"15.42","High":"15.45","Low":"15.28","Close":"15.44","Volume":"31528500","Adj_Close":"13.904172"}]}}},
{"query":{"count":252,"created":"2016-03-30T22:01:31Z","lang":"en-us","diagnostics":{"url":[{"execution-start-time":"1","execution-stop-time":"8","execution-time":"7","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"19","execution-stop-time":"21","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TSLA"},{"execution-start-time":"25","execution-stop-time":"26","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TSLA"}],"publiclyCallable":"true","cache":[{"execution-start-time":"13","execution-stop-time":"19","execution-time":"6","method":"GET","type":"MEMCACHED","content":"770ed83c5126f690038596e048fe55d4"},{"execution-start-time":"24","execution-stop-time":"24","execution-time":"0","method":"GET","type":"MEMCACHED","content":"d1d658c6f2c17b3a507504d547be1dc1"}],"query":[{"execution-start-time":"19","execution-stop-time":"23","execution-time":"4","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TSLA]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"24","execution-stop-time":"29","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TSLA]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"12","execution-stop-time":"2243","execution-time":"2231","instructions-used":"24196284","table-name":"yahoo.finance.historicaldata"},"user-time":"2253","service-time":"16","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"TSLA","Date":"2014-12-31","Open":"223.089996","High":"225.679993","Low":"222.25","Close":"222.410004","Volume":"2297500","Adj_Close":"222.410004"},{"Symbol":"TSLA","Date":"2014-12-30","Open":"223.990005","High":"225.649994","Low":"221.399994","Close":"222.229996","Volume":"2903200","Adj_Close":"222.229996"},{"Symbol":"TSLA","Date":"2014-12-29","Open":"226.899994","High":"227.910004","Low":"224.020004","Close":"225.710007","Volume":"2802500","Adj_Close":"225.710007"},{"Symbol":"TSLA","Date":"2014-12-26","Open":"221.509995","High":"228.50","Low":"221.50","Close":"227.820007","Volume":"3327000","Adj_Close":"227.820007"},{"Symbol":"TSLA","Date":"2014-12-24","Open":"219.770004","High":"222.50","Low":"219.25","Close":"222.259995","Volume":"1332200","Adj_Close":"222.259995"},{"Symbol":"TSLA","Date":"2014-12-23","Open":"223.809998","High":"224.320007","Low":"219.520004","Close":"220.970001","Volume":"4505700","Adj_Close":"220.970001"},{"Symbol":"TSLA","Date":"2014-12-22","Open":"220.00","High":"224.059998","Low":"218.259995","Close":"222.600006","Volume":"4799400","Adj_Close":"222.600006"},{"Symbol":"TSLA","Date":"2014-12-19","Open":"220.190002","High":"220.399994","Low":"214.50","Close":"219.289993","Volume":"6910500","Adj_Close":"219.289993"},{"Symbol":"TSLA","Date":"2014-12-18","Open":"212.380005","High":"218.440002","Low":"211.800003","Close":"218.259995","Volume":"7483300","Adj_Close":"218.259995"},{"Symbol":"TSLA","Date":"2014-12-17","Open":"193.059998","High":"206.649994","Low":"192.649994","Close":"205.820007","Volume":"7367800","Adj_Close":"205.820007"},{"Symbol":"TSLA","Date":"2014-12-16","Open":"200.889999","High":"203.679993","Low":"195.369995","Close":"197.809998","Volume":"8426100","Adj_Close":"197.809998"},{"Symbol":"TSLA","Date":"2014-12-15","Open":"209.289993","High":"209.800003","Low":"202.669998","Close":"204.039993","Volume":"5218300","Adj_Close":"204.039993"},{"Symbol":"TSLA","Date":"2014-12-12","Open":"204.820007","High":"211.679993","Low":"204.50","Close":"207.00","Volume":"7173800","Adj_Close":"207.00"},{"Symbol":"TSLA","Date":"2014-12-11","Open":"210.529999","High":"215.429993","Low":"208.229996","Close":"208.880005","Volume":"6694400","Adj_Close":"208.880005"},{"Symbol":"TSLA","Date":"2014-12-10","Open":"214.130005","High":"216.770004","Low":"207.699997","Close":"209.839996","Volume":"7314100","Adj_Close":"209.839996"},{"Symbol":"TSLA","Date":"2014-12-09","Open":"209.339996","High":"217.729996","Low":"204.270004","Close":"216.889999","Volume":"9431500","Adj_Close":"216.889999"},{"Symbol":"TSLA","Date":"2014-12-08","Open":"221.539993","High":"224.860001","Low":"212.339996","Close":"214.360001","Volume":"9225600","Adj_Close":"214.360001"},{"Symbol":"TSLA","Date":"2014-12-05","Open":"228.669998","High":"229.389999","Low":"222.259995","Close":"223.710007","Volume":"6063600","Adj_Close":"223.710007"},{"Symbol":"TSLA","Date":"2014-12-04","Open":"228.600006","High":"230.899994","Low":"227.809998","Close":"228.279999","Volume":"3855600","Adj_Close":"228.279999"},{"Symbol":"TSLA","Date":"2014-12-03","Open":"226.25","High":"229.720001","Low":"225.50","Close":"229.300003","Volume":"5307700","Adj_Close":"229.300003"},{"Symbol":"TSLA","Date":"2014-12-02","Open":"234.570007","High":"234.880005","Low":"228.00","Close":"231.429993","Volume":"5887000","Adj_Close":"231.429993"},{"Symbol":"TSLA","Date":"2014-12-01","Open":"241.160004","High":"242.470001","Low":"229.009995","Close":"231.639999","Volume":"8619400","Adj_Close":"231.639999"},{"Symbol":"TSLA","Date":"2014-11-28","Open":"245.350006","High":"246.690002","Low":"242.520004","Close":"244.520004","Volume":"2119700","Adj_Close":"244.520004"},{"Symbol":"TSLA","Date":"2014-11-26","Open":"248.339996","High":"249.00","Low":"246.600006","Close":"248.440002","Volume":"1981200","Adj_Close":"248.440002"},{"Symbol":"TSLA","Date":"2014-11-25","Open":"247.350006","High":"249.720001","Low":"246.089996","Close":"248.089996","Volume":"3159800","Adj_Close":"248.089996"},{"Symbol":"TSLA","Date":"2014-11-24","Open":"245.199997","High":"247.600006","Low":"240.639999","Close":"246.720001","Volume":"4789700","Adj_Close":"246.720001"},{"Symbol":"TSLA","Date":"2014-11-21","Open":"252.210007","High":"252.779999","Low":"242.169998","Close":"242.779999","Volume":"7485100","Adj_Close":"242.779999"},{"Symbol":"TSLA","Date":"2014-11-20","Open":"247.949997","High":"250.929993","Low":"246.00","Close":"248.710007","Volume":"3587200","Adj_Close":"248.710007"},{"Symbol":"TSLA","Date":"2014-11-19","Open":"250.610001","High":"251.880005","Low":"245.600006","Close":"247.740005","Volume":"7918500","Adj_Close":"247.740005"},{"Symbol":"TSLA","Date":"2014-11-18","Open":"255.860001","High":"259.98999","Low":"255.509995","Close":"257.700012","Volume":"4473000","Adj_Close":"257.700012"},{"Symbol":"TSLA","Date":"2014-11-17","Open":"257.48999","High":"259.00","Low":"252.020004","Close":"253.979996","Volume":"4025700","Adj_Close":"253.979996"},{"Symbol":"TSLA","Date":"2014-11-14","Open":"250.00","High":"258.850006","Low":"248.50","Close":"258.679993","Volume":"6101100","Adj_Close":"258.679993"},{"Symbol":"TSLA","Date":"2014-11-13","Open":"250.619995","High":"255.75","Low":"250.25","Close":"251.699997","Volume":"6236000","Adj_Close":"251.699997"},{"Symbol":"TSLA","Date":"2014-11-12","Open":"249.720001","High":"252.339996","Low":"245.580002","Close":"249.100006","Volume":"5870800","Adj_Close":"249.100006"},{"Symbol":"TSLA","Date":"2014-11-11","Open":"242.550003","High":"251.820007","Low":"242.00","Close":"251.080002","Volume":"7948800","Adj_Close":"251.080002"},{"Symbol":"TSLA","Date":"2014-11-10","Open":"239.110001","High":"242.880005","Low":"236.800003","Close":"241.929993","Volume":"4577200","Adj_Close":"241.929993"},{"Symbol":"TSLA","Date":"2014-11-07","Open":"242.190002","High":"242.839996","Low":"237.199997","Close":"240.199997","Volume":"5161000","Adj_Close":"240.199997"},{"Symbol":"TSLA","Date":"2014-11-06","Open":"234.490005","High":"246.690002","Low":"228.50","Close":"241.220001","Volume":"15354700","Adj_Close":"241.220001"},{"Symbol":"TSLA","Date":"2014-11-05","Open":"241.00","High":"241.360001","Low":"230.529999","Close":"230.970001","Volume":"9045900","Adj_Close":"230.970001"},{"Symbol":"TSLA","Date":"2014-11-04","Open":"240.490005","High":"242.350006","Low":"236.529999","Close":"238.929993","Volume":"3682600","Adj_Close":"238.929993"},{"Symbol":"TSLA","Date":"2014-11-03","Open":"243.00","High":"247.559998","Low":"241.320007","Close":"242.589996","Volume":"4203800","Adj_Close":"242.589996"},{"Symbol":"TSLA","Date":"2014-10-31","Open":"242.509995","High":"243.119995","Low":"238.75","Close":"241.699997","Volume":"3775300","Adj_Close":"241.699997"},{"Symbol":"TSLA","Date":"2014-10-30","Open":"238.139999","High":"240.50","Low":"235.059998","Close":"238.660004","Volume":"3228400","Adj_Close":"238.660004"},{"Symbol":"TSLA","Date":"2014-10-29","Open":"241.130005","High":"241.50","Low":"235.639999","Close":"238.100006","Volume":"4962500","Adj_Close":"238.100006"},{"Symbol":"TSLA","Date":"2014-10-28","Open":"229.600006","High":"244.600006","Low":"228.25","Close":"242.770004","Volume":"10516300","Adj_Close":"242.770004"},{"Symbol":"TSLA","Date":"2014-10-27","Open":"234.25","High":"234.610001","Low":"220.309998","Close":"221.669998","Volume":"9553300","Adj_Close":"221.669998"},{"Symbol":"TSLA","Date":"2014-10-24","Open":"236.270004","High":"237.800003","Low":"231.199997","Close":"235.240005","Volume":"3463300","Adj_Close":"235.240005"},{"Symbol":"TSLA","Date":"2014-10-23","Open":"234.660004","High":"236.279999","Low":"232.00","Close":"235.289993","Volume":"3492400","Adj_Close":"235.289993"},{"Symbol":"TSLA","Date":"2014-10-22","Open":"233.190002","High":"237.389999","Low":"230.559998","Close":"231.100006","Volume":"4116600","Adj_Close":"231.100006"},{"Symbol":"TSLA","Date":"2014-10-21","Open":"234.270004","High":"235.389999","Low":"230.800003","Close":"235.339996","Volume":"4130300","Adj_Close":"235.339996"},{"Symbol":"TSLA","Date":"2014-10-20","Open":"226.720001","High":"232.399994","Low":"225.509995","Close":"230.470001","Volume":"3494400","Adj_Close":"230.470001"},{"Symbol":"TSLA","Date":"2014-10-17","Open":"233.380005","High":"234.770004","Low":"226.550003","Close":"227.479996","Volume":"10549400","Adj_Close":"227.479996"},{"Symbol":"TSLA","Date":"2014-10-16","Open":"219.720001","High":"229.919998","Low":"219.100006","Close":"226.350006","Volume":"5399300","Adj_Close":"226.350006"},{"Symbol":"TSLA","Date":"2014-10-15","Open":"220.00","High":"230.990005","Low":"217.320007","Close":"229.699997","Volume":"9147300","Adj_Close":"229.699997"},{"Symbol":"TSLA","Date":"2014-10-14","Open":"228.25","High":"232.470001","Low":"223.00","Close":"227.059998","Volume":"7105300","Adj_Close":"227.059998"},{"Symbol":"TSLA","Date":"2014-10-13","Open":"238.570007","High":"238.960007","Low":"221.00","Close":"224.589996","Volume":"11268700","Adj_Close":"224.589996"},{"Symbol":"TSLA","Date":"2014-10-10","Open":"244.639999","High":"245.889999","Low":"235.199997","Close":"236.910004","Volume":"12888300","Adj_Close":"236.910004"},{"Symbol":"TSLA","Date":"2014-10-09","Open":"262.25","High":"265.540009","Low":"254.399994","Close":"257.01001","Volume":"7361300","Adj_Close":"257.01001"},{"Symbol":"TSLA","Date":"2014-10-08","Open":"260.100006","High":"262.880005","Low":"252.639999","Close":"259.279999","Volume":"5055100","Adj_Close":"259.279999"},{"Symbol":"TSLA","Date":"2014-10-07","Open":"258.529999","High":"261.459991","Low":"255.729996","Close":"259.570007","Volume":"4485500","Adj_Close":"259.570007"},{"Symbol":"TSLA","Date":"2014-10-06","Open":"259.130005","High":"262.48999","Low":"257.799988","Close":"260.619995","Volume":"7713300","Adj_Close":"260.619995"},{"Symbol":"TSLA","Date":"2014-10-03","Open":"253.059998","High":"256.50","Low":"251.029999","Close":"255.210007","Volume":"5406300","Adj_Close":"255.210007"},{"Symbol":"TSLA","Date":"2014-10-02","Open":"250.199997","High":"252.789993","Low":"245.360001","Close":"251.419998","Volume":"8998200","Adj_Close":"251.419998"},{"Symbol":"TSLA","Date":"2014-10-01","Open":"242.199997","High":"242.660004","Low":"235.649994","Close":"240.240005","Volume":"5941700","Adj_Close":"240.240005"},{"Symbol":"TSLA","Date":"2014-09-30","Open":"246.919998","High":"247.649994","Low":"240.119995","Close":"242.679993","Volume":"4238300","Adj_Close":"242.679993"},{"Symbol":"TSLA","Date":"2014-09-29","Open":"244.00","High":"248.639999","Low":"241.380005","Close":"245.259995","Volume":"4852700","Adj_Close":"245.259995"},{"Symbol":"TSLA","Date":"2014-09-26","Open":"248.25","High":"249.729996","Low":"246.070007","Close":"246.600006","Volume":"3795400","Adj_Close":"246.600006"},{"Symbol":"TSLA","Date":"2014-09-25","Open":"252.520004","High":"254.960007","Low":"246.100006","Close":"246.949997","Volume":"4834200","Adj_Close":"246.949997"},{"Symbol":"TSLA","Date":"2014-09-24","Open":"251.119995","High":"252.839996","Low":"247.039993","Close":"252.139999","Volume":"3749500","Adj_Close":"252.139999"},{"Symbol":"TSLA","Date":"2014-09-23","Open":"245.220001","High":"253.800003","Low":"245.00","Close":"250.410004","Volume":"5658700","Adj_Close":"250.410004"},{"Symbol":"TSLA","Date":"2014-09-22","Open":"255.00","High":"256.019989","Low":"244.710007","Close":"250.029999","Volume":"8214100","Adj_Close":"250.029999"},{"Symbol":"TSLA","Date":"2014-09-19","Open":"257.98999","High":"261.429993","Low":"255.270004","Close":"259.320007","Volume":"6810900","Adj_Close":"259.320007"},{"Symbol":"TSLA","Date":"2014-09-18","Open":"263.359985","High":"265.600006","Low":"262.320007","Close":"263.820007","Volume":"3692600","Adj_Close":"263.820007"},{"Symbol":"TSLA","Date":"2014-09-17","Open":"262.410004","High":"264.700012","Low":"259.50","Close":"261.380005","Volume":"5177700","Adj_Close":"261.380005"},{"Symbol":"TSLA","Date":"2014-09-16","Open":"255.149994","High":"262.459991","Low":"252.419998","Close":"260.73999","Volume":"8300100","Adj_Close":"260.73999"},{"Symbol":"TSLA","Date":"2014-09-15","Open":"274.369995","High":"274.399994","Low":"249.130005","Close":"253.860001","Volume":"16455400","Adj_Close":"253.860001"},{"Symbol":"TSLA","Date":"2014-09-12","Open":"280.50","High":"282.390015","Low":"277.00","Close":"279.200012","Volume":"3324600","Adj_Close":"279.200012"},{"Symbol":"TSLA","Date":"2014-09-11","Open":"280.459991","High":"284.790009","Low":"278.630005","Close":"280.309998","Volume":"3766100","Adj_Close":"280.309998"},{"Symbol":"TSLA","Date":"2014-09-10","Open":"279.50","High":"281.410004","Low":"273.660004","Close":"281.100006","Volume":"3781300","Adj_Close":"281.100006"},{"Symbol":"TSLA","Date":"2014-09-09","Open":"282.98999","High":"285.48999","Low":"277.00","Close":"278.480011","Volume":"4558800","Adj_Close":"278.480011"},{"Symbol":"TSLA","Date":"2014-09-08","Open":"277.619995","High":"284.880005","Low":"277.519989","Close":"282.109985","Volume":"5501600","Adj_Close":"282.109985"},{"Symbol":"TSLA","Date":"2014-09-05","Open":"282.549988","High":"282.899994","Low":"272.51001","Close":"277.390015","Volume":"11169900","Adj_Close":"277.390015"},{"Symbol":"TSLA","Date":"2014-09-04","Open":"284.01001","High":"291.420013","Low":"280.399994","Close":"286.040009","Volume":"8341700","Adj_Close":"286.040009"},{"Symbol":"TSLA","Date":"2014-09-03","Open":"287.670013","High":"288.00","Low":"280.100006","Close":"281.190002","Volume":"6772300","Adj_Close":"281.190002"},{"Symbol":"TSLA","Date":"2014-09-02","Open":"275.50","High":"284.890015","Low":"274.299988","Close":"284.119995","Volume":"9852400","Adj_Close":"284.119995"},{"Symbol":"TSLA","Date":"2014-08-29","Open":"268.700012","High":"272.00","Low":"267.51001","Close":"269.700012","Volume":"6447100","Adj_Close":"269.700012"},{"Symbol":"TSLA","Date":"2014-08-28","Open":"261.890015","High":"264.480011","Low":"261.640015","Close":"263.859985","Volume":"2844900","Adj_Close":"263.859985"},{"Symbol":"TSLA","Date":"2014-08-27","Open":"263.50","High":"264.23999","Low":"260.290009","Close":"263.25","Volume":"2985100","Adj_Close":"263.25"},{"Symbol":"TSLA","Date":"2014-08-26","Open":"264.980011","High":"265.50","Low":"261.660004","Close":"261.73999","Volume":"3818000","Adj_Close":"261.73999"},{"Symbol":"TSLA","Date":"2014-08-25","Open":"258.190002","High":"263.679993","Low":"258.190002","Close":"262.549988","Volume":"4318100","Adj_Close":"262.549988"},{"Symbol":"TSLA","Date":"2014-08-22","Open":"254.539993","High":"256.950012","Low":"252.610001","Close":"256.779999","Volume":"2833400","Adj_Close":"256.779999"},{"Symbol":"TSLA","Date":"2014-08-21","Open":"256.519989","High":"258.799988","Low":"253.259995","Close":"254.339996","Volume":"2915600","Adj_Close":"254.339996"},{"Symbol":"TSLA","Date":"2014-08-20","Open":"254.669998","High":"258.73999","Low":"253.00","Close":"255.710007","Volume":"3027900","Adj_Close":"255.710007"},{"Symbol":"TSLA","Date":"2014-08-19","Open":"258.869995","High":"259.329987","Low":"251.619995","Close":"256.76001","Volume":"5334800","Adj_Close":"256.76001"},{"Symbol":"TSLA","Date":"2014-08-18","Open":"263.25","High":"267.26001","Low":"259.75","Close":"259.940002","Volume":"5849200","Adj_Close":"259.940002"},{"Symbol":"TSLA","Date":"2014-08-15","Open":"261.480011","High":"262.089996","Low":"258.50","Close":"262.01001","Volume":"3867900","Adj_Close":"262.01001"},{"Symbol":"TSLA","Date":"2014-08-14","Open":"262.48999","High":"263.00","Low":"256.50","Close":"261.380005","Volume":"4126600","Adj_Close":"261.380005"},{"Symbol":"TSLA","Date":"2014-08-13","Open":"262.01001","High":"265.640015","Low":"259.609985","Close":"260.309998","Volume":"6932600","Adj_Close":"260.309998"},{"Symbol":"TSLA","Date":"2014-08-12","Open":"258.079987","High":"260.299988","Low":"254.580002","Close":"259.959991","Volume":"6382300","Adj_Close":"259.959991"},{"Symbol":"TSLA","Date":"2014-08-11","Open":"255.479996","High":"263.73999","Low":"255.00","Close":"259.320007","Volume":"8101300","Adj_Close":"259.320007"},{"Symbol":"TSLA","Date":"2014-08-08","Open":"251.160004","High":"251.759995","Low":"246.50","Close":"248.130005","Volume":"5090100","Adj_Close":"248.130005"},{"Symbol":"TSLA","Date":"2014-08-07","Open":"250.119995","High":"256.690002","Low":"249.119995","Close":"252.389999","Volume":"7478900","Adj_Close":"252.389999"},{"Symbol":"TSLA","Date":"2014-08-06","Open":"238.899994","High":"251.419998","Low":"238.580002","Close":"248.929993","Volume":"9249300","Adj_Close":"248.929993"},{"Symbol":"TSLA","Date":"2014-08-05","Open":"237.470001","High":"242.990005","Low":"235.690002","Close":"238.490005","Volume":"5388600","Adj_Close":"238.490005"},{"Symbol":"TSLA","Date":"2014-08-04","Open":"234.380005","High":"240.50","Low":"233.270004","Close":"238.520004","Volume":"5959700","Adj_Close":"238.520004"},{"Symbol":"TSLA","Date":"2014-08-01","Open":"226.089996","High":"237.50","Low":"226.00","Close":"233.270004","Volume":"11895800","Adj_Close":"233.270004"},{"Symbol":"TSLA","Date":"2014-07-31","Open":"229.259995","High":"231.399994","Low":"221.50","Close":"223.300003","Volume":"7749100","Adj_Close":"223.300003"},{"Symbol":"TSLA","Date":"2014-07-30","Open":"221.919998","High":"229.600006","Low":"221.039993","Close":"228.919998","Volume":"4927800","Adj_Close":"228.919998"},{"Symbol":"TSLA","Date":"2014-07-29","Open":"226.610001","High":"228.300003","Low":"224.860001","Close":"225.009995","Volume":"3382400","Adj_Close":"225.009995"},{"Symbol":"TSLA","Date":"2014-07-28","Open":"224.25","High":"232.00","Low":"221.399994","Close":"224.820007","Volume":"6514300","Adj_Close":"224.820007"},{"Symbol":"TSLA","Date":"2014-07-25","Open":"222.720001","High":"226.970001","Low":"221.75","Close":"223.570007","Volume":"3087100","Adj_Close":"223.570007"},{"Symbol":"TSLA","Date":"2014-07-24","Open":"223.25","High":"225.100006","Low":"220.800003","Close":"223.539993","Volume":"3245500","Adj_Close":"223.539993"},{"Symbol":"TSLA","Date":"2014-07-23","Open":"220.009995","High":"224.75","Low":"219.429993","Close":"222.490005","Volume":"3083300","Adj_Close":"222.490005"},{"Symbol":"TSLA","Date":"2014-07-22","Open":"222.190002","High":"223.300003","Low":"219.110001","Close":"219.580002","Volume":"2730000","Adj_Close":"219.580002"},{"Symbol":"TSLA","Date":"2014-07-21","Open":"217.25","High":"223.210007","Low":"216.720001","Close":"220.539993","Volume":"3822200","Adj_Close":"220.539993"},{"Symbol":"TSLA","Date":"2014-07-18","Open":"215.949997","High":"221.210007","Low":"215.929993","Close":"220.020004","Volume":"4253700","Adj_Close":"220.020004"},{"Symbol":"TSLA","Date":"2014-07-17","Open":"216.160004","High":"220.550003","Low":"213.600006","Close":"215.399994","Volume":"4649400","Adj_Close":"215.399994"},{"Symbol":"TSLA","Date":"2014-07-16","Open":"221.820007","High":"224.800003","Low":"216.820007","Close":"217.160004","Volume":"4044500","Adj_Close":"217.160004"},{"Symbol":"TSLA","Date":"2014-07-15","Open":"226.729996","High":"227.649994","Low":"218.100006","Close":"219.580002","Volume":"5718500","Adj_Close":"219.580002"},{"Symbol":"TSLA","Date":"2014-07-14","Open":"219.990005","High":"228.789993","Low":"215.449997","Close":"226.699997","Volume":"7203200","Adj_Close":"226.699997"},{"Symbol":"TSLA","Date":"2014-07-11","Open":"220.610001","High":"221.600006","Low":"217.600006","Close":"218.130005","Volume":"3302300","Adj_Close":"218.130005"},{"Symbol":"TSLA","Date":"2014-07-10","Open":"217.179993","High":"222.220001","Low":"216.039993","Close":"219.460007","Volume":"4863900","Adj_Close":"219.460007"},{"Symbol":"TSLA","Date":"2014-07-09","Open":"221.270004","High":"224.220001","Low":"219.210007","Close":"223.059998","Volume":"4115400","Adj_Close":"223.059998"},{"Symbol":"TSLA","Date":"2014-07-08","Open":"218.649994","High":"220.960007","Low":"214.270004","Close":"219.070007","Volume":"7836200","Adj_Close":"219.070007"},{"Symbol":"TSLA","Date":"2014-07-07","Open":"227.50","High":"229.779999","Low":"220.399994","Close":"222.660004","Volume":"5893700","Adj_Close":"222.660004"},{"Symbol":"TSLA","Date":"2014-07-03","Open":"231.289993","High":"231.899994","Low":"224.00","Close":"229.25","Volume":"5166700","Adj_Close":"229.25"},{"Symbol":"TSLA","Date":"2014-07-02","Open":"240.660004","High":"242.330002","Low":"227.070007","Close":"229.429993","Volume":"8027400","Adj_Close":"229.429993"},{"Symbol":"TSLA","Date":"2014-07-01","Open":"242.460007","High":"243.440002","Low":"238.699997","Close":"239.720001","Volume":"4336100","Adj_Close":"239.720001"},{"Symbol":"TSLA","Date":"2014-06-30","Open":"239.550003","High":"244.490005","Low":"239.00","Close":"240.059998","Volume":"4828600","Adj_Close":"240.059998"},{"Symbol":"TSLA","Date":"2014-06-27","Open":"234.690002","High":"240.00","Low":"234.50","Close":"239.059998","Volume":"5635000","Adj_Close":"239.059998"},{"Symbol":"TSLA","Date":"2014-06-26","Open":"237.169998","High":"240.399994","Low":"234.210007","Close":"235.600006","Volume":"5121400","Adj_Close":"235.600006"},{"Symbol":"TSLA","Date":"2014-06-25","Open":"233.050003","High":"237.550003","Low":"230.240005","Close":"236.889999","Volume":"5801600","Adj_Close":"236.889999"},{"Symbol":"TSLA","Date":"2014-06-24","Open":"238.970001","High":"241.880005","Low":"231.630005","Close":"232.50","Volume":"8075900","Adj_Close":"232.50"},{"Symbol":"TSLA","Date":"2014-06-23","Open":"229.509995","High":"238.990005","Low":"228.220001","Close":"237.220001","Volume":"7791100","Adj_Close":"237.220001"},{"Symbol":"TSLA","Date":"2014-06-20","Open":"228.520004","High":"231.289993","Low":"226.199997","Close":"229.589996","Volume":"4903900","Adj_Close":"229.589996"},{"Symbol":"TSLA","Date":"2014-06-19","Open":"228.880005","High":"235.309998","Low":"227.00","Close":"227.789993","Volume":"8793100","Adj_Close":"227.789993"},{"Symbol":"TSLA","Date":"2014-06-18","Open":"231.50","High":"231.710007","Low":"226.119995","Close":"227.119995","Volume":"6940200","Adj_Close":"227.119995"},{"Symbol":"TSLA","Date":"2014-06-17","Open":"224.110001","High":"235.539993","Low":"222.850006","Close":"231.669998","Volume":"13304900","Adj_Close":"231.669998"},{"Symbol":"TSLA","Date":"2014-06-16","Open":"206.759995","High":"225.490005","Low":"206.259995","Close":"224.610001","Volume":"13246400","Adj_Close":"224.610001"},{"Symbol":"TSLA","Date":"2014-06-13","Open":"204.779999","High":"206.789993","Low":"201.580002","Close":"206.419998","Volume":"3544300","Adj_Close":"206.419998"},{"Symbol":"TSLA","Date":"2014-06-12","Open":"205.100006","High":"209.880005","Low":"202.710007","Close":"203.520004","Volume":"5993700","Adj_Close":"203.520004"},{"Symbol":"TSLA","Date":"2014-06-11","Open":"201.50","High":"205.00","Low":"199.25","Close":"204.470001","Volume":"3977500","Adj_Close":"204.470001"},{"Symbol":"TSLA","Date":"2014-06-10","Open":"204.429993","High":"206.970001","Low":"201.550003","Close":"202.300003","Volume":"3514700","Adj_Close":"202.300003"},{"Symbol":"TSLA","Date":"2014-06-09","Open":"207.949997","High":"209.990005","Low":"204.199997","Close":"205.309998","Volume":"2805700","Adj_Close":"205.309998"},{"Symbol":"TSLA","Date":"2014-06-06","Open":"209.75","High":"210.809998","Low":"207.179993","Close":"208.169998","Volume":"3073800","Adj_Close":"208.169998"},{"Symbol":"TSLA","Date":"2014-06-05","Open":"204.470001","High":"209.199997","Low":"204.050003","Close":"206.899994","Volume":"4054600","Adj_Close":"206.899994"},{"Symbol":"TSLA","Date":"2014-06-04","Open":"204.350006","High":"206.259995","Low":"200.399994","Close":"203.990005","Volume":"3427400","Adj_Close":"203.990005"},{"Symbol":"TSLA","Date":"2014-06-03","Open":"203.490005","High":"208.00","Low":"202.589996","Close":"204.940002","Volume":"3860800","Adj_Close":"204.940002"},{"Symbol":"TSLA","Date":"2014-06-02","Open":"207.330002","High":"209.350006","Low":"201.669998","Close":"204.699997","Volume":"4668100","Adj_Close":"204.699997"},{"Symbol":"TSLA","Date":"2014-05-30","Open":"210.300003","High":"214.800003","Low":"207.020004","Close":"207.770004","Volume":"5581100","Adj_Close":"207.770004"},{"Symbol":"TSLA","Date":"2014-05-29","Open":"210.570007","High":"212.490005","Low":"207.720001","Close":"210.240005","Volume":"3692500","Adj_Close":"210.240005"},{"Symbol":"TSLA","Date":"2014-05-28","Open":"210.020004","High":"212.770004","Low":"205.259995","Close":"210.240005","Volume":"5495100","Adj_Close":"210.240005"},{"Symbol":"TSLA","Date":"2014-05-27","Open":"208.520004","High":"213.869995","Low":"207.699997","Close":"211.559998","Volume":"5341100","Adj_Close":"211.559998"},{"Symbol":"TSLA","Date":"2014-05-23","Open":"204.529999","High":"207.759995","Low":"202.50","Close":"207.300003","Volume":"4006800","Adj_Close":"207.300003"},{"Symbol":"TSLA","Date":"2014-05-22","Open":"200.350006","High":"206.880005","Low":"199.559998","Close":"204.880005","Volume":"6214500","Adj_Close":"204.880005"},{"Symbol":"TSLA","Date":"2014-05-21","Open":"196.179993","High":"199.869995","Low":"194.789993","Close":"199.449997","Volume":"5285400","Adj_Close":"199.449997"},{"Symbol":"TSLA","Date":"2014-05-20","Open":"196.940002","High":"199.330002","Low":"193.070007","Close":"195.300003","Volume":"5546100","Adj_Close":"195.300003"},{"Symbol":"TSLA","Date":"2014-05-19","Open":"190.720001","High":"196.889999","Low":"190.00","Close":"196.089996","Volume":"4571700","Adj_Close":"196.089996"},{"Symbol":"TSLA","Date":"2014-05-16","Open":"188.949997","High":"192.039993","Low":"187.720001","Close":"191.559998","Volume":"4487700","Adj_Close":"191.559998"},{"Symbol":"TSLA","Date":"2014-05-15","Open":"189.979996","High":"192.660004","Low":"185.300003","Close":"188.589996","Volume":"6040400","Adj_Close":"188.589996"},{"Symbol":"TSLA","Date":"2014-05-14","Open":"188.949997","High":"193.479996","Low":"187.100006","Close":"190.619995","Volume":"5406700","Adj_Close":"190.619995"},{"Symbol":"TSLA","Date":"2014-05-13","Open":"183.759995","High":"191.339996","Low":"183.00","Close":"190.160004","Volume":"7097200","Adj_Close":"190.160004"},{"Symbol":"TSLA","Date":"2014-05-12","Open":"183.869995","High":"187.190002","Low":"179.880005","Close":"184.669998","Volume":"7002300","Adj_Close":"184.669998"},{"Symbol":"TSLA","Date":"2014-05-09","Open":"179.860001","High":"183.399994","Low":"177.220001","Close":"182.259995","Volume":"8495200","Adj_Close":"182.259995"},{"Symbol":"TSLA","Date":"2014-05-08","Open":"182.00","High":"194.399994","Low":"178.00","Close":"178.589996","Volume":"20056600","Adj_Close":"178.589996"},{"Symbol":"TSLA","Date":"2014-05-07","Open":"209.639999","High":"210.199997","Low":"197.25","Close":"201.350006","Volume":"10179300","Adj_Close":"201.350006"},{"Symbol":"TSLA","Date":"2014-05-06","Open":"216.600006","High":"218.660004","Low":"206.850006","Close":"207.279999","Volume":"5636700","Adj_Close":"207.279999"},{"Symbol":"TSLA","Date":"2014-05-05","Open":"209.479996","High":"217.690002","Low":"208.520004","Close":"216.610001","Volume":"5147000","Adj_Close":"216.610001"},{"Symbol":"TSLA","Date":"2014-05-02","Open":"208.600006","High":"211.360001","Low":"206.520004","Close":"210.910004","Volume":"4086800","Adj_Close":"210.910004"},{"Symbol":"TSLA","Date":"2014-05-01","Open":"207.080002","High":"214.020004","Low":"205.690002","Close":"207.729996","Volume":"5439900","Adj_Close":"207.729996"},{"Symbol":"TSLA","Date":"2014-04-30","Open":"203.600006","High":"208.160004","Low":"201.279999","Close":"207.889999","Volume":"4440600","Adj_Close":"207.889999"},{"Symbol":"TSLA","Date":"2014-04-29","Open":"198.210007","High":"207.149994","Low":"195.529999","Close":"206.919998","Volume":"5779100","Adj_Close":"206.919998"},{"Symbol":"TSLA","Date":"2014-04-28","Open":"200.00","High":"203.789993","Low":"190.50","Close":"198.509995","Volume":"7042000","Adj_Close":"198.509995"},{"Symbol":"TSLA","Date":"2014-04-25","Open":"202.00","High":"206.699997","Low":"197.649994","Close":"199.850006","Volume":"6996700","Adj_Close":"199.850006"},{"Symbol":"TSLA","Date":"2014-04-24","Open":"210.809998","High":"212.800003","Low":"203.199997","Close":"207.860001","Volume":"5495200","Adj_Close":"207.860001"},{"Symbol":"TSLA","Date":"2014-04-23","Open":"216.330002","High":"216.740005","Low":"207.00","Close":"207.990005","Volume":"7295600","Adj_Close":"207.990005"},{"Symbol":"TSLA","Date":"2014-04-22","Open":"206.360001","High":"219.330002","Low":"205.009995","Close":"218.639999","Volume":"9804700","Adj_Close":"218.639999"},{"Symbol":"TSLA","Date":"2014-04-21","Open":"197.080002","High":"206.199997","Low":"194.00","Close":"204.380005","Volume":"5258200","Adj_Close":"204.380005"},{"Symbol":"TSLA","Date":"2014-04-17","Open":"199.610001","High":"202.289993","Low":"194.080002","Close":"198.119995","Volume":"5926800","Adj_Close":"198.119995"},{"Symbol":"TSLA","Date":"2014-04-16","Open":"197.00","High":"199.990005","Low":"190.820007","Close":"199.110001","Volume":"7202200","Adj_Close":"199.110001"},{"Symbol":"TSLA","Date":"2014-04-15","Open":"199.089996","High":"199.289993","Low":"184.320007","Close":"193.910004","Volume":"13659300","Adj_Close":"193.910004"},{"Symbol":"TSLA","Date":"2014-04-14","Open":"207.600006","High":"208.440002","Low":"194.410004","Close":"198.089996","Volume":"7703000","Adj_Close":"198.089996"},{"Symbol":"TSLA","Date":"2014-04-11","Open":"200.610001","High":"207.00","Low":"198.600006","Close":"203.779999","Volume":"9067200","Adj_Close":"203.779999"},{"Symbol":"TSLA","Date":"2014-04-10","Open":"216.820007","High":"217.50","Low":"203.789993","Close":"204.190002","Volume":"7211500","Adj_Close":"204.190002"},{"Symbol":"TSLA","Date":"2014-04-09","Open":"216.759995","High":"218.449997","Low":"210.889999","Close":"216.929993","Volume":"5157900","Adj_Close":"216.929993"},{"Symbol":"TSLA","Date":"2014-04-08","Open":"210.050003","High":"216.490005","Low":"206.419998","Close":"215.460007","Volume":"6889300","Adj_Close":"215.460007"},{"Symbol":"TSLA","Date":"2014-04-07","Open":"205.809998","High":"216.199997","Low":"203.509995","Close":"207.520004","Volume":"9855500","Adj_Close":"207.520004"},{"Symbol":"TSLA","Date":"2014-04-04","Open":"226.009995","High":"228.270004","Low":"211.25","Close":"212.229996","Volume":"11345600","Adj_Close":"212.229996"},{"Symbol":"TSLA","Date":"2014-04-03","Open":"230.300003","High":"235.729996","Low":"222.00","Close":"225.399994","Volume":"10923700","Adj_Close":"225.399994"},{"Symbol":"TSLA","Date":"2014-04-02","Open":"220.00","High":"230.889999","Low":"218.050003","Close":"230.289993","Volume":"10782300","Adj_Close":"230.289993"},{"Symbol":"TSLA","Date":"2014-04-01","Open":"209.020004","High":"218.160004","Low":"208.580002","Close":"216.970001","Volume":"7371400","Adj_Close":"216.970001"},{"Symbol":"TSLA","Date":"2014-03-31","Open":"216.50","High":"216.75","Low":"206.389999","Close":"208.449997","Volume":"8380000","Adj_Close":"208.449997"},{"Symbol":"TSLA","Date":"2014-03-28","Open":"212.800003","High":"216.720001","Low":"210.270004","Close":"212.369995","Volume":"9684800","Adj_Close":"212.369995"},{"Symbol":"TSLA","Date":"2014-03-27","Open":"212.369995","High":"213.600006","Low":"203.00","Close":"207.320007","Volume":"9495700","Adj_Close":"207.320007"},{"Symbol":"TSLA","Date":"2014-03-26","Open":"221.949997","High":"222.600006","Low":"211.350006","Close":"212.960007","Volume":"6907300","Adj_Close":"212.960007"},{"Symbol":"TSLA","Date":"2014-03-25","Open":"224.139999","High":"227.050003","Low":"217.899994","Close":"220.440002","Volume":"7865400","Adj_Close":"220.440002"},{"Symbol":"TSLA","Date":"2014-03-24","Open":"229.75","High":"229.899994","Low":"210.270004","Close":"220.169998","Volume":"11328800","Adj_Close":"220.169998"},{"Symbol":"TSLA","Date":"2014-03-21","Open":"236.020004","High":"236.199997","Low":"227.50","Close":"228.889999","Volume":"8216900","Adj_Close":"228.889999"},{"Symbol":"TSLA","Date":"2014-03-20","Open":"236.160004","High":"239.25","Low":"233.360001","Close":"234.910004","Volume":"3817900","Adj_Close":"234.910004"},{"Symbol":"TSLA","Date":"2014-03-19","Open":"241.389999","High":"241.550003","Low":"233.509995","Close":"235.839996","Volume":"5071300","Adj_Close":"235.839996"},{"Symbol":"TSLA","Date":"2014-03-18","Open":"236.949997","High":"241.50","Low":"235.020004","Close":"240.039993","Volume":"6242300","Adj_Close":"240.039993"},{"Symbol":"TSLA","Date":"2014-03-17","Open":"234.949997","High":"237.929993","Low":"230.50","Close":"233.979996","Volume":"5912600","Adj_Close":"233.979996"},{"Symbol":"TSLA","Date":"2014-03-14","Open":"235.289993","High":"236.940002","Low":"228.320007","Close":"230.970001","Volume":"8289700","Adj_Close":"230.970001"},{"Symbol":"TSLA","Date":"2014-03-13","Open":"243.789993","High":"244.190002","Low":"234.00","Close":"237.789993","Volume":"6236300","Adj_Close":"237.789993"},{"Symbol":"TSLA","Date":"2014-03-12","Open":"231.50","High":"247.50","Low":"231.110001","Close":"241.490005","Volume":"9754400","Adj_Close":"241.490005"},{"Symbol":"TSLA","Date":"2014-03-11","Open":"236.50","High":"244.600006","Low":"232.429993","Close":"234.410004","Volume":"8810100","Adj_Close":"234.410004"},{"Symbol":"TSLA","Date":"2014-03-10","Open":"242.699997","High":"243.00","Low":"236.059998","Close":"238.839996","Volume":"7728100","Adj_Close":"238.839996"},{"Symbol":"TSLA","Date":"2014-03-07","Open":"252.940002","High":"254.850006","Low":"244.410004","Close":"246.210007","Volume":"7812300","Adj_Close":"246.210007"},{"Symbol":"TSLA","Date":"2014-03-06","Open":"254.139999","High":"257.50","Low":"249.449997","Close":"252.940002","Volume":"7361100","Adj_Close":"252.940002"},{"Symbol":"TSLA","Date":"2014-03-05","Open":"256.720001","High":"256.98999","Low":"251.800003","Close":"252.660004","Volume":"5935700","Adj_Close":"252.660004"},{"Symbol":"TSLA","Date":"2014-03-04","Open":"258.480011","High":"260.00","Low":"252.830002","Close":"254.839996","Volume":"8745600","Adj_Close":"254.839996"},{"Symbol":"TSLA","Date":"2014-03-03","Open":"237.259995","High":"251.649994","Low":"234.990005","Close":"250.559998","Volume":"13089300","Adj_Close":"250.559998"},{"Symbol":"TSLA","Date":"2014-02-28","Open":"249.649994","High":"252.679993","Low":"242.550003","Close":"244.809998","Volume":"14589800","Adj_Close":"244.809998"},{"Symbol":"TSLA","Date":"2014-02-27","Open":"261.25","High":"261.899994","Low":"248.330002","Close":"252.539993","Volume":"17945800","Adj_Close":"252.539993"},{"Symbol":"TSLA","Date":"2014-02-26","Open":"258.579987","High":"265.00","Low":"247.50","Close":"253.00","Volume":"24604600","Adj_Close":"253.00"},{"Symbol":"TSLA","Date":"2014-02-25","Open":"230.00","High":"259.200012","Low":"228.449997","Close":"248.00","Volume":"32681700","Adj_Close":"248.00"},{"Symbol":"TSLA","Date":"2014-02-24","Open":"208.759995","High":"218.360001","Low":"208.320007","Close":"217.649994","Volume":"8278400","Adj_Close":"217.649994"},{"Symbol":"TSLA","Date":"2014-02-21","Open":"211.639999","High":"213.979996","Low":"209.190002","Close":"209.600006","Volume":"7818800","Adj_Close":"209.600006"},{"Symbol":"TSLA","Date":"2014-02-20","Open":"215.009995","High":"215.210007","Low":"206.270004","Close":"209.970001","Volume":"18002300","Adj_Close":"209.970001"},{"Symbol":"TSLA","Date":"2014-02-19","Open":"203.699997","High":"203.699997","Low":"193.410004","Close":"193.639999","Volume":"16169000","Adj_Close":"193.639999"},{"Symbol":"TSLA","Date":"2014-02-18","Open":"205.240005","High":"206.00","Low":"201.360001","Close":"203.699997","Volume":"9332800","Adj_Close":"203.699997"},{"Symbol":"TSLA","Date":"2014-02-14","Open":"198.100006","High":"201.880005","Low":"197.00","Close":"198.229996","Volume":"6158000","Adj_Close":"198.229996"},{"Symbol":"TSLA","Date":"2014-02-13","Open":"193.339996","High":"202.720001","Low":"193.25","Close":"199.630005","Volume":"8029300","Adj_Close":"199.630005"},{"Symbol":"TSLA","Date":"2014-02-12","Open":"195.779999","High":"198.270004","Low":"194.320007","Close":"195.320007","Volume":"5173700","Adj_Close":"195.320007"},{"Symbol":"TSLA","Date":"2014-02-11","Open":"198.970001","High":"202.199997","Low":"192.699997","Close":"196.619995","Volume":"10709900","Adj_Close":"196.619995"},{"Symbol":"TSLA","Date":"2014-02-10","Open":"189.339996","High":"199.300003","Low":"189.320007","Close":"196.559998","Volume":"12970700","Adj_Close":"196.559998"},{"Symbol":"TSLA","Date":"2014-02-07","Open":"181.009995","High":"186.630005","Low":"179.600006","Close":"186.529999","Volume":"8928500","Adj_Close":"186.529999"},{"Symbol":"TSLA","Date":"2014-02-06","Open":"176.300003","High":"180.110001","Low":"176.00","Close":"178.380005","Volume":"5841600","Adj_Close":"178.380005"},{"Symbol":"TSLA","Date":"2014-02-05","Open":"178.300003","High":"180.589996","Low":"169.360001","Close":"174.419998","Volume":"7268000","Adj_Close":"174.419998"},{"Symbol":"TSLA","Date":"2014-02-04","Open":"180.699997","High":"181.600006","Low":"176.199997","Close":"178.729996","Volume":"4686300","Adj_Close":"178.729996"},{"Symbol":"TSLA","Date":"2014-02-03","Open":"182.889999","High":"184.880005","Low":"175.160004","Close":"177.110001","Volume":"6764900","Adj_Close":"177.110001"},{"Symbol":"TSLA","Date":"2014-01-31","Open":"178.850006","High":"186.00","Low":"178.509995","Close":"181.410004","Volume":"6508800","Adj_Close":"181.410004"},{"Symbol":"TSLA","Date":"2014-01-30","Open":"178.00","High":"184.779999","Low":"177.009995","Close":"182.839996","Volume":"8565000","Adj_Close":"182.839996"},{"Symbol":"TSLA","Date":"2014-01-29","Open":"175.300003","High":"179.089996","Low":"173.130005","Close":"175.229996","Volume":"5935500","Adj_Close":"175.229996"},{"Symbol":"TSLA","Date":"2014-01-28","Open":"171.50","High":"178.979996","Low":"171.00","Close":"178.380005","Volume":"6093400","Adj_Close":"178.380005"},{"Symbol":"TSLA","Date":"2014-01-27","Open":"175.160004","High":"177.919998","Low":"164.710007","Close":"169.619995","Volume":"8716400","Adj_Close":"169.619995"},{"Symbol":"TSLA","Date":"2014-01-24","Open":"177.850006","High":"180.479996","Low":"173.529999","Close":"174.600006","Volume":"7664300","Adj_Close":"174.600006"},{"Symbol":"TSLA","Date":"2014-01-23","Open":"177.229996","High":"182.380005","Low":"173.419998","Close":"181.50","Volume":"7867400","Adj_Close":"181.50"},{"Symbol":"TSLA","Date":"2014-01-22","Open":"177.809998","High":"180.320007","Low":"174.759995","Close":"178.559998","Volume":"7022600","Adj_Close":"178.559998"},{"Symbol":"TSLA","Date":"2014-01-21","Open":"171.240005","High":"177.289993","Low":"170.809998","Close":"176.679993","Volume":"9734700","Adj_Close":"176.679993"},{"Symbol":"TSLA","Date":"2014-01-17","Open":"170.190002","High":"173.199997","Low":"167.949997","Close":"170.009995","Volume":"9206200","Adj_Close":"170.009995"},{"Symbol":"TSLA","Date":"2014-01-16","Open":"162.50","High":"172.699997","Low":"162.399994","Close":"170.970001","Volume":"11959400","Adj_Close":"170.970001"},{"Symbol":"TSLA","Date":"2014-01-15","Open":"168.449997","High":"172.229996","Low":"162.100006","Close":"164.130005","Volume":"20465600","Adj_Close":"164.130005"},{"Symbol":"TSLA","Date":"2014-01-14","Open":"140.50","High":"162.00","Low":"136.669998","Close":"161.270004","Volume":"27607000","Adj_Close":"161.270004"},{"Symbol":"TSLA","Date":"2014-01-13","Open":"145.779999","High":"147.00","Low":"137.820007","Close":"139.339996","Volume":"6316100","Adj_Close":"139.339996"},{"Symbol":"TSLA","Date":"2014-01-10","Open":"148.460007","High":"148.899994","Low":"142.25","Close":"145.720001","Volume":"7446100","Adj_Close":"145.720001"},{"Symbol":"TSLA","Date":"2014-01-09","Open":"152.50","High":"153.429993","Low":"146.850006","Close":"147.529999","Volume":"5382000","Adj_Close":"147.529999"},{"Symbol":"TSLA","Date":"2014-01-08","Open":"148.850006","High":"153.699997","Low":"148.759995","Close":"151.279999","Volume":"6163200","Adj_Close":"151.279999"},{"Symbol":"TSLA","Date":"2014-01-07","Open":"147.619995","High":"150.399994","Low":"145.25","Close":"149.360001","Volume":"5034100","Adj_Close":"149.360001"},{"Symbol":"TSLA","Date":"2014-01-06","Open":"150.00","High":"150.399994","Low":"145.240005","Close":"147.00","Volume":"5361100","Adj_Close":"147.00"},{"Symbol":"TSLA","Date":"2014-01-03","Open":"150.00","High":"152.190002","Low":"148.600006","Close":"149.559998","Volume":"4695000","Adj_Close":"149.559998"},{"Symbol":"TSLA","Date":"2014-01-02","Open":"149.800003","High":"152.479996","Low":"146.550003","Close":"150.100006","Volume":"6188400","Adj_Close":"150.100006"}]}}},
{"query":{"count":252,"created":"2016-03-30T22:02:47Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"1","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"5","execution-stop-time":"197","execution-time":"192","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TWTR"},{"execution-start-time":"205","execution-stop-time":"207","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TWTR"}],"publiclyCallable":"true","cache":[{"execution-start-time":"4","execution-stop-time":"4","execution-time":"0","method":"GET","type":"MEMCACHED","content":"289f7af187e30acc14d4cdc873eea30a"},{"execution-start-time":"199","execution-stop-time":"201","execution-time":"2","method":"GET","type":"MEMCACHED","content":"21434dfb794f58f69eb603cdc7391f6f"}],"query":[{"execution-start-time":"4","execution-stop-time":"199","execution-time":"195","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TWTR]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"205","execution-stop-time":"210","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=TWTR]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"1636","execution-time":"1632","instructions-used":"24192416","table-name":"yahoo.finance.historicaldata"},"user-time":"1640","service-time":"197","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"TWTR","Date":"2014-12-31","Open":"35.889999","High":"36.490002","Low":"35.470001","Close":"35.869999","Volume":"17650100","Adj_Close":"35.869999"},{"Symbol":"TWTR","Date":"2014-12-30","Open":"36.02","High":"36.240002","Low":"35.459999","Close":"35.860001","Volume":"19494600","Adj_Close":"35.860001"},{"Symbol":"TWTR","Date":"2014-12-29","Open":"37.389999","High":"37.509998","Low":"36.380001","Close":"36.419998","Volume":"13565400","Adj_Close":"36.419998"},{"Symbol":"TWTR","Date":"2014-12-26","Open":"37.759998","High":"38.099998","Low":"37.540001","Close":"37.599998","Volume":"7324000","Adj_Close":"37.599998"},{"Symbol":"TWTR","Date":"2014-12-24","Open":"37.669998","High":"38.349998","Low":"37.560001","Close":"37.610001","Volume":"6254200","Adj_Close":"37.610001"},{"Symbol":"TWTR","Date":"2014-12-23","Open":"38.580002","High":"39.25","Low":"37.459999","Close":"37.57","Volume":"16858000","Adj_Close":"37.57"},{"Symbol":"TWTR","Date":"2014-12-22","Open":"37.50","High":"38.82","Low":"37.310001","Close":"38.43","Volume":"20079000","Adj_Close":"38.43"},{"Symbol":"TWTR","Date":"2014-12-19","Open":"36.700001","High":"37.450001","Low":"36.50","Close":"37.080002","Volume":"16068700","Adj_Close":"37.080002"},{"Symbol":"TWTR","Date":"2014-12-18","Open":"36.130001","High":"37.27","Low":"35.950001","Close":"36.73","Volume":"19087500","Adj_Close":"36.73"},{"Symbol":"TWTR","Date":"2014-12-17","Open":"35.560001","High":"35.900002","Low":"34.950001","Close":"35.57","Volume":"18544800","Adj_Close":"35.57"},{"Symbol":"TWTR","Date":"2014-12-16","Open":"36.50","High":"36.709999","Low":"35.09","Close":"35.130001","Volume":"19241200","Adj_Close":"35.130001"},{"Symbol":"TWTR","Date":"2014-12-15","Open":"38.130001","High":"38.380001","Low":"36.73","Close":"36.849998","Volume":"16833000","Adj_Close":"36.849998"},{"Symbol":"TWTR","Date":"2014-12-12","Open":"36.310001","High":"37.709999","Low":"36.099998","Close":"37.099998","Volume":"15222500","Adj_Close":"37.099998"},{"Symbol":"TWTR","Date":"2014-12-11","Open":"36.450001","High":"37.23","Low":"36.25","Close":"36.700001","Volume":"15707100","Adj_Close":"36.700001"},{"Symbol":"TWTR","Date":"2014-12-10","Open":"36.91","High":"37.779999","Low":"36.25","Close":"36.349998","Volume":"16497700","Adj_Close":"36.349998"},{"Symbol":"TWTR","Date":"2014-12-09","Open":"34.970001","High":"37.09","Low":"34.619999","Close":"37.049999","Volume":"20542800","Adj_Close":"37.049999"},{"Symbol":"TWTR","Date":"2014-12-08","Open":"38.080002","High":"38.119999","Low":"35.75","Close":"36.290001","Volume":"30112800","Adj_Close":"36.290001"},{"Symbol":"TWTR","Date":"2014-12-05","Open":"38.970001","High":"39.07","Low":"38.349998","Close":"38.490002","Volume":"12587700","Adj_Close":"38.490002"},{"Symbol":"TWTR","Date":"2014-12-04","Open":"38.799999","High":"39.66","Low":"38.619999","Close":"38.790001","Volume":"13012200","Adj_Close":"38.790001"},{"Symbol":"TWTR","Date":"2014-12-03","Open":"39.00","High":"39.419998","Low":"38.380001","Close":"39.060001","Volume":"13241300","Adj_Close":"39.060001"},{"Symbol":"TWTR","Date":"2014-12-02","Open":"39.400002","High":"39.400002","Low":"38.330002","Close":"38.91","Volume":"16394300","Adj_Close":"38.91"},{"Symbol":"TWTR","Date":"2014-12-01","Open":"41.290001","High":"41.290001","Low":"39.00","Close":"39.040001","Volume":"22214000","Adj_Close":"39.040001"},{"Symbol":"TWTR","Date":"2014-11-28","Open":"41.09","High":"42.080002","Low":"40.830002","Close":"41.740002","Volume":"11113900","Adj_Close":"41.740002"},{"Symbol":"TWTR","Date":"2014-11-26","Open":"39.830002","High":"41.560001","Low":"39.740002","Close":"41.130001","Volume":"23773300","Adj_Close":"41.130001"},{"Symbol":"TWTR","Date":"2014-11-25","Open":"40.119999","High":"40.299999","Low":"39.560001","Close":"39.759998","Volume":"16165100","Adj_Close":"39.759998"},{"Symbol":"TWTR","Date":"2014-11-24","Open":"39.990002","High":"40.470001","Low":"39.580002","Close":"40.189999","Volume":"15176000","Adj_Close":"40.189999"},{"Symbol":"TWTR","Date":"2014-11-21","Open":"40.25","High":"40.279999","Low":"39.799999","Close":"40.029999","Volume":"12066600","Adj_Close":"40.029999"},{"Symbol":"TWTR","Date":"2014-11-20","Open":"39.490002","High":"40.549999","Low":"39.32","Close":"39.810001","Volume":"13717100","Adj_Close":"39.810001"},{"Symbol":"TWTR","Date":"2014-11-19","Open":"40.349998","High":"40.470001","Low":"39.209999","Close":"39.709999","Volume":"19050100","Adj_Close":"39.709999"},{"Symbol":"TWTR","Date":"2014-11-18","Open":"40.689999","High":"41.169998","Low":"39.950001","Close":"40.610001","Volume":"18605000","Adj_Close":"40.610001"},{"Symbol":"TWTR","Date":"2014-11-17","Open":"41.459999","High":"41.68","Low":"40.41","Close":"40.470001","Volume":"20665200","Adj_Close":"40.470001"},{"Symbol":"TWTR","Date":"2014-11-14","Open":"40.02","High":"41.849998","Low":"39.77","Close":"41.849998","Volume":"33059800","Adj_Close":"41.849998"},{"Symbol":"TWTR","Date":"2014-11-13","Open":"43.549999","High":"43.950001","Low":"39.950001","Close":"40.040001","Volume":"67287400","Adj_Close":"40.040001"},{"Symbol":"TWTR","Date":"2014-11-12","Open":"39.939999","High":"42.939999","Low":"39.599998","Close":"42.540001","Volume":"51814100","Adj_Close":"42.540001"},{"Symbol":"TWTR","Date":"2014-11-11","Open":"39.310001","High":"39.84","Low":"38.810001","Close":"39.59","Volume":"19176600","Adj_Close":"39.59"},{"Symbol":"TWTR","Date":"2014-11-10","Open":"40.34","High":"40.689999","Low":"39.419998","Close":"39.59","Volume":"19069300","Adj_Close":"39.59"},{"Symbol":"TWTR","Date":"2014-11-07","Open":"40.740002","High":"40.740002","Low":"39.700001","Close":"40.310001","Volume":"18558900","Adj_Close":"40.310001"},{"Symbol":"TWTR","Date":"2014-11-06","Open":"40.189999","High":"41.349998","Low":"40.099998","Close":"40.84","Volume":"16292100","Adj_Close":"40.84"},{"Symbol":"TWTR","Date":"2014-11-05","Open":"41.689999","High":"41.799999","Low":"40.130001","Close":"40.369999","Volume":"19742200","Adj_Close":"40.369999"},{"Symbol":"TWTR","Date":"2014-11-04","Open":"40.029999","High":"41.099998","Low":"39.75","Close":"40.900002","Volume":"19544300","Adj_Close":"40.900002"},{"Symbol":"TWTR","Date":"2014-11-03","Open":"40.549999","High":"41.200001","Low":"40.16","Close":"40.209999","Volume":"31441900","Adj_Close":"40.209999"},{"Symbol":"TWTR","Date":"2014-10-31","Open":"42.689999","High":"42.849998","Low":"41.34","Close":"41.470001","Volume":"23895100","Adj_Close":"41.470001"},{"Symbol":"TWTR","Date":"2014-10-30","Open":"41.560001","High":"42.48","Low":"39.939999","Close":"41.799999","Volume":"42012600","Adj_Close":"41.799999"},{"Symbol":"TWTR","Date":"2014-10-29","Open":"43.849998","High":"44.16","Low":"41.810001","Close":"42.080002","Volume":"40261900","Adj_Close":"42.080002"},{"Symbol":"TWTR","Date":"2014-10-28","Open":"42.25","High":"44.580002","Low":"41.759998","Close":"43.779999","Volume":"83179400","Adj_Close":"43.779999"},{"Symbol":"TWTR","Date":"2014-10-27","Open":"50.02","High":"50.240002","Low":"47.18","Close":"48.560001","Volume":"51896300","Adj_Close":"48.560001"},{"Symbol":"TWTR","Date":"2014-10-24","Open":"50.16","High":"50.189999","Low":"49.150002","Close":"49.950001","Volume":"12035200","Adj_Close":"49.950001"},{"Symbol":"TWTR","Date":"2014-10-23","Open":"50.130001","High":"50.400002","Low":"49.200001","Close":"49.669998","Volume":"23099800","Adj_Close":"49.669998"},{"Symbol":"TWTR","Date":"2014-10-22","Open":"51.130001","High":"51.84","Low":"49.00","Close":"49.080002","Volume":"26109900","Adj_Close":"49.080002"},{"Symbol":"TWTR","Date":"2014-10-21","Open":"51.759998","High":"52.150002","Low":"50.299999","Close":"50.630001","Volume":"21351000","Adj_Close":"50.630001"},{"Symbol":"TWTR","Date":"2014-10-20","Open":"49.07","High":"50.889999","Low":"48.799999","Close":"50.700001","Volume":"17781100","Adj_Close":"50.700001"},{"Symbol":"TWTR","Date":"2014-10-17","Open":"49.720001","High":"50.25","Low":"48.650002","Close":"48.77","Volume":"24630600","Adj_Close":"48.77"},{"Symbol":"TWTR","Date":"2014-10-16","Open":"48.34","High":"49.82","Low":"47.169998","Close":"48.23","Volume":"30818800","Adj_Close":"48.23"},{"Symbol":"TWTR","Date":"2014-10-15","Open":"47.110001","High":"50.52","Low":"46.380001","Close":"49.990002","Volume":"34371500","Adj_Close":"49.990002"},{"Symbol":"TWTR","Date":"2014-10-14","Open":"49.060001","High":"49.529999","Low":"47.080002","Close":"48.580002","Volume":"29723600","Adj_Close":"48.580002"},{"Symbol":"TWTR","Date":"2014-10-13","Open":"50.540001","High":"51.91","Low":"48.259998","Close":"48.490002","Volume":"35326800","Adj_Close":"48.490002"},{"Symbol":"TWTR","Date":"2014-10-10","Open":"54.57","High":"55.66","Low":"50.299999","Close":"50.400002","Volume":"46727300","Adj_Close":"50.400002"},{"Symbol":"TWTR","Date":"2014-10-09","Open":"55.290001","High":"55.990002","Low":"54.919998","Close":"55.290001","Volume":"29741400","Adj_Close":"55.290001"},{"Symbol":"TWTR","Date":"2014-10-08","Open":"53.619999","High":"55.669998","Low":"52.599998","Close":"55.419998","Volume":"31098500","Adj_Close":"55.419998"},{"Symbol":"TWTR","Date":"2014-10-07","Open":"53.119999","High":"54.990002","Low":"53.099998","Close":"53.529999","Volume":"26082300","Adj_Close":"53.529999"},{"Symbol":"TWTR","Date":"2014-10-06","Open":"53.939999","High":"54.450001","Low":"53.23","Close":"53.490002","Volume":"20033400","Adj_Close":"53.490002"},{"Symbol":"TWTR","Date":"2014-10-03","Open":"52.75","High":"54.73","Low":"52.110001","Close":"53.939999","Volume":"31227200","Adj_Close":"53.939999"},{"Symbol":"TWTR","Date":"2014-10-02","Open":"51.029999","High":"52.099998","Low":"50.009998","Close":"51.849998","Volume":"27056500","Adj_Close":"51.849998"},{"Symbol":"TWTR","Date":"2014-10-01","Open":"51.080002","High":"51.290001","Low":"49.150002","Close":"50.060001","Volume":"24733500","Adj_Close":"50.060001"},{"Symbol":"TWTR","Date":"2014-09-30","Open":"52.00","High":"52.189999","Low":"51.169998","Close":"51.580002","Volume":"12315700","Adj_Close":"51.580002"},{"Symbol":"TWTR","Date":"2014-09-29","Open":"51.09","High":"52.18","Low":"50.880001","Close":"51.740002","Volume":"15404300","Adj_Close":"51.740002"},{"Symbol":"TWTR","Date":"2014-09-26","Open":"51.970001","High":"52.610001","Low":"51.700001","Close":"51.889999","Volume":"14125300","Adj_Close":"51.889999"},{"Symbol":"TWTR","Date":"2014-09-25","Open":"52.709999","High":"53.23","Low":"51.27","Close":"51.450001","Volume":"21071500","Adj_Close":"51.450001"},{"Symbol":"TWTR","Date":"2014-09-24","Open":"52.549999","High":"53.34","Low":"52.130001","Close":"52.959999","Volume":"17656100","Adj_Close":"52.959999"},{"Symbol":"TWTR","Date":"2014-09-23","Open":"51.459999","High":"52.560001","Low":"51.02","Close":"52.169998","Volume":"19990500","Adj_Close":"52.169998"},{"Symbol":"TWTR","Date":"2014-09-22","Open":"52.380001","High":"52.900002","Low":"51.360001","Close":"51.939999","Volume":"21744400","Adj_Close":"51.939999"},{"Symbol":"TWTR","Date":"2014-09-19","Open":"50.779999","High":"53.00","Low":"50.18","Close":"53.00","Volume":"38192600","Adj_Close":"53.00"},{"Symbol":"TWTR","Date":"2014-09-18","Open":"50.970001","High":"51.880001","Low":"50.529999","Close":"50.880001","Volume":"22484800","Adj_Close":"50.880001"},{"Symbol":"TWTR","Date":"2014-09-17","Open":"50.970001","High":"51.599998","Low":"50.16","Close":"50.700001","Volume":"22874400","Adj_Close":"50.700001"},{"Symbol":"TWTR","Date":"2014-09-16","Open":"48.700001","High":"50.91","Low":"48.400002","Close":"50.830002","Volume":"26744800","Adj_Close":"50.830002"},{"Symbol":"TWTR","Date":"2014-09-15","Open":"51.599998","High":"51.93","Low":"47.560001","Close":"49.380001","Volume":"38374100","Adj_Close":"49.380001"},{"Symbol":"TWTR","Date":"2014-09-12","Open":"52.549999","High":"52.82","Low":"52.02","Close":"52.110001","Volume":"22986500","Adj_Close":"52.110001"},{"Symbol":"TWTR","Date":"2014-09-11","Open":"52.549999","High":"53.639999","Low":"52.18","Close":"52.639999","Volume":"38055400","Adj_Close":"52.639999"},{"Symbol":"TWTR","Date":"2014-09-10","Open":"52.110001","High":"53.330002","Low":"51.849998","Close":"52.91","Volume":"38057700","Adj_Close":"52.91"},{"Symbol":"TWTR","Date":"2014-09-09","Open":"52.23","High":"52.400002","Low":"50.220001","Close":"50.610001","Volume":"25034400","Adj_Close":"50.610001"},{"Symbol":"TWTR","Date":"2014-09-08","Open":"51.799999","High":"52.68","Low":"51.68","Close":"52.00","Volume":"30836400","Adj_Close":"52.00"},{"Symbol":"TWTR","Date":"2014-09-05","Open":"50.09","High":"50.880001","Low":"49.52","Close":"50.700001","Volume":"20251400","Adj_Close":"50.700001"},{"Symbol":"TWTR","Date":"2014-09-04","Open":"49.689999","High":"50.860001","Low":"49.220001","Close":"50.240002","Volume":"24413100","Adj_Close":"50.240002"},{"Symbol":"TWTR","Date":"2014-09-03","Open":"51.830002","High":"51.849998","Low":"49.049999","Close":"49.330002","Volume":"34411200","Adj_Close":"49.330002"},{"Symbol":"TWTR","Date":"2014-09-02","Open":"50.02","High":"51.34","Low":"49.900002","Close":"51.02","Volume":"28267200","Adj_Close":"51.02"},{"Symbol":"TWTR","Date":"2014-08-29","Open":"49.889999","High":"50.349998","Low":"49.130001","Close":"49.75","Volume":"31926900","Adj_Close":"49.75"},{"Symbol":"TWTR","Date":"2014-08-28","Open":"47.98","High":"49.880001","Low":"47.860001","Close":"49.43","Volume":"35076300","Adj_Close":"49.43"},{"Symbol":"TWTR","Date":"2014-08-27","Open":"48.240002","High":"48.459999","Low":"47.18","Close":"48.060001","Volume":"26127600","Adj_Close":"48.060001"},{"Symbol":"TWTR","Date":"2014-08-26","Open":"46.099998","High":"48.200001","Low":"46.040001","Close":"48.169998","Volume":"27716200","Adj_Close":"48.169998"},{"Symbol":"TWTR","Date":"2014-08-25","Open":"46.220001","High":"46.360001","Low":"45.700001","Close":"46.099998","Volume":"17583500","Adj_Close":"46.099998"},{"Symbol":"TWTR","Date":"2014-08-22","Open":"45.040001","High":"46.139999","Low":"44.799999","Close":"45.98","Volume":"19429800","Adj_Close":"45.98"},{"Symbol":"TWTR","Date":"2014-08-21","Open":"45.290001","High":"45.349998","Low":"44.84","Close":"45.110001","Volume":"10619300","Adj_Close":"45.110001"},{"Symbol":"TWTR","Date":"2014-08-20","Open":"44.93","High":"45.209999","Low":"44.759998","Close":"45.060001","Volume":"10383200","Adj_Close":"45.060001"},{"Symbol":"TWTR","Date":"2014-08-19","Open":"45.240002","High":"45.450001","Low":"45.029999","Close":"45.09","Volume":"11903400","Adj_Close":"45.09"},{"Symbol":"TWTR","Date":"2014-08-18","Open":"45.060001","High":"45.330002","Low":"44.77","Close":"45.119999","Volume":"14835400","Adj_Close":"45.119999"},{"Symbol":"TWTR","Date":"2014-08-15","Open":"45.470001","High":"45.50","Low":"44.439999","Close":"44.759998","Volume":"17776700","Adj_Close":"44.759998"},{"Symbol":"TWTR","Date":"2014-08-14","Open":"44.400002","High":"45.34","Low":"44.040001","Close":"45.330002","Volume":"23638900","Adj_Close":"45.330002"},{"Symbol":"TWTR","Date":"2014-08-13","Open":"44.119999","High":"44.34","Low":"43.619999","Close":"44.150002","Volume":"16180800","Adj_Close":"44.150002"},{"Symbol":"TWTR","Date":"2014-08-12","Open":"44.380001","High":"44.720001","Low":"43.610001","Close":"43.810001","Volume":"29582300","Adj_Close":"43.810001"},{"Symbol":"TWTR","Date":"2014-08-11","Open":"43.48","High":"43.599998","Low":"42.709999","Close":"43.27","Volume":"18420300","Adj_Close":"43.27"},{"Symbol":"TWTR","Date":"2014-08-08","Open":"43.02","High":"43.360001","Low":"42.509998","Close":"43.130001","Volume":"14967900","Adj_Close":"43.130001"},{"Symbol":"TWTR","Date":"2014-08-07","Open":"43.369999","High":"44.369999","Low":"42.889999","Close":"43.00","Volume":"25389100","Adj_Close":"43.00"},{"Symbol":"TWTR","Date":"2014-08-06","Open":"43.389999","High":"44.040001","Low":"42.75","Close":"43.459999","Volume":"20355300","Adj_Close":"43.459999"},{"Symbol":"TWTR","Date":"2014-08-05","Open":"43.25","High":"44.48","Low":"43.02","Close":"43.830002","Volume":"26404100","Adj_Close":"43.830002"},{"Symbol":"TWTR","Date":"2014-08-04","Open":"43.700001","High":"44.529999","Low":"43.439999","Close":"43.470001","Volume":"22425000","Adj_Close":"43.470001"},{"Symbol":"TWTR","Date":"2014-08-01","Open":"45.009998","High":"45.540001","Low":"43.810001","Close":"44.130001","Volume":"37194800","Adj_Close":"44.130001"},{"Symbol":"TWTR","Date":"2014-07-31","Open":"44.619999","High":"45.84","Low":"44.299999","Close":"45.189999","Volume":"47170200","Adj_Close":"45.189999"},{"Symbol":"TWTR","Date":"2014-07-30","Open":"47.009998","High":"48.00","Low":"45.650002","Close":"46.299999","Volume":"116195900","Adj_Close":"46.299999"},{"Symbol":"TWTR","Date":"2014-07-29","Open":"38.110001","High":"38.919998","Low":"37.990002","Close":"38.59","Volume":"65338000","Adj_Close":"38.59"},{"Symbol":"TWTR","Date":"2014-07-28","Open":"38.299999","High":"38.439999","Low":"37.560001","Close":"37.93","Volume":"16781700","Adj_Close":"37.93"},{"Symbol":"TWTR","Date":"2014-07-25","Open":"38.200001","High":"38.799999","Low":"38.02","Close":"38.16","Volume":"15980800","Adj_Close":"38.16"},{"Symbol":"TWTR","Date":"2014-07-24","Open":"38.709999","High":"39.00","Low":"37.849998","Close":"38.709999","Volume":"22105600","Adj_Close":"38.709999"},{"Symbol":"TWTR","Date":"2014-07-23","Open":"37.650002","High":"38.189999","Low":"37.560001","Close":"37.75","Volume":"13220700","Adj_Close":"37.75"},{"Symbol":"TWTR","Date":"2014-07-22","Open":"38.310001","High":"38.599998","Low":"37.450001","Close":"37.650002","Volume":"16837800","Adj_Close":"37.650002"},{"Symbol":"TWTR","Date":"2014-07-21","Open":"37.23","High":"38.290001","Low":"36.849998","Close":"38.049999","Volume":"19685400","Adj_Close":"38.049999"},{"Symbol":"TWTR","Date":"2014-07-18","Open":"36.810001","High":"37.080002","Low":"35.950001","Close":"37.049999","Volume":"26435500","Adj_Close":"37.049999"},{"Symbol":"TWTR","Date":"2014-07-17","Open":"36.799999","High":"37.169998","Low":"36.380001","Close":"36.869999","Volume":"22631500","Adj_Close":"36.869999"},{"Symbol":"TWTR","Date":"2014-07-16","Open":"38.310001","High":"38.52","Low":"37.099998","Close":"37.43","Volume":"19726500","Adj_Close":"37.43"},{"Symbol":"TWTR","Date":"2014-07-15","Open":"38.59","High":"38.990002","Low":"37.619999","Close":"37.880001","Volume":"24630600","Adj_Close":"37.880001"},{"Symbol":"TWTR","Date":"2014-07-14","Open":"38.57","High":"39.380001","Low":"38.200001","Close":"38.310001","Volume":"19705000","Adj_Close":"38.310001"},{"Symbol":"TWTR","Date":"2014-07-11","Open":"38.150002","High":"38.790001","Low":"38.00","Close":"38.330002","Volume":"21084800","Adj_Close":"38.330002"},{"Symbol":"TWTR","Date":"2014-07-10","Open":"36.490002","High":"38.099998","Low":"36.110001","Close":"37.84","Volume":"26549700","Adj_Close":"37.84"},{"Symbol":"TWTR","Date":"2014-07-09","Open":"37.82","High":"38.349998","Low":"37.349998","Close":"38.060001","Volume":"26838300","Adj_Close":"38.060001"},{"Symbol":"TWTR","Date":"2014-07-08","Open":"39.959999","High":"40.040001","Low":"36.84","Close":"37.41","Volume":"49952000","Adj_Close":"37.41"},{"Symbol":"TWTR","Date":"2014-07-07","Open":"41.080002","High":"41.450001","Low":"40.139999","Close":"40.23","Volume":"21454500","Adj_Close":"40.23"},{"Symbol":"TWTR","Date":"2014-07-03","Open":"41.939999","High":"42.00","Low":"40.830002","Close":"41.330002","Volume":"15795100","Adj_Close":"41.330002"},{"Symbol":"TWTR","Date":"2014-07-02","Open":"42.830002","High":"42.830002","Low":"41.419998","Close":"41.77","Volume":"24377500","Adj_Close":"41.77"},{"Symbol":"TWTR","Date":"2014-07-01","Open":"42.060001","High":"42.950001","Low":"41.91","Close":"42.049999","Volume":"36019300","Adj_Close":"42.049999"},{"Symbol":"TWTR","Date":"2014-06-30","Open":"40.810001","High":"41.34","Low":"40.349998","Close":"40.970001","Volume":"22783000","Adj_Close":"40.970001"},{"Symbol":"TWTR","Date":"2014-06-27","Open":"40.700001","High":"41.150002","Low":"40.110001","Close":"40.93","Volume":"48253400","Adj_Close":"40.93"},{"Symbol":"TWTR","Date":"2014-06-26","Open":"40.049999","High":"42.00","Low":"39.810001","Close":"41.439999","Volume":"45348500","Adj_Close":"41.439999"},{"Symbol":"TWTR","Date":"2014-06-25","Open":"38.240002","High":"39.59","Low":"38.009998","Close":"39.459999","Volume":"25457200","Adj_Close":"39.459999"},{"Symbol":"TWTR","Date":"2014-06-24","Open":"39.439999","High":"39.639999","Low":"38.259998","Close":"38.48","Volume":"24477900","Adj_Close":"38.48"},{"Symbol":"TWTR","Date":"2014-06-23","Open":"39.07","High":"39.580002","Low":"38.73","Close":"39.52","Volume":"22591300","Adj_Close":"39.52"},{"Symbol":"TWTR","Date":"2014-06-20","Open":"38.82","High":"39.240002","Low":"37.77","Close":"39.240002","Volume":"41501100","Adj_Close":"39.240002"},{"Symbol":"TWTR","Date":"2014-06-19","Open":"38.73","High":"39.299999","Low":"38.32","Close":"38.900002","Volume":"24648300","Adj_Close":"38.900002"},{"Symbol":"TWTR","Date":"2014-06-18","Open":"38.16","High":"38.830002","Low":"37.75","Close":"38.740002","Volume":"23707500","Adj_Close":"38.740002"},{"Symbol":"TWTR","Date":"2014-06-17","Open":"38.029999","High":"38.549999","Low":"37.299999","Close":"38.02","Volume":"30321500","Adj_Close":"38.02"},{"Symbol":"TWTR","Date":"2014-06-16","Open":"36.700001","High":"38.169998","Low":"36.439999","Close":"38.02","Volume":"29889300","Adj_Close":"38.02"},{"Symbol":"TWTR","Date":"2014-06-13","Open":"36.849998","High":"37.25","Low":"35.900002","Close":"36.900002","Volume":"29129900","Adj_Close":"36.900002"},{"Symbol":"TWTR","Date":"2014-06-12","Open":"35.060001","High":"37.27","Low":"35.060001","Close":"36.790001","Volume":"58146100","Adj_Close":"36.790001"},{"Symbol":"TWTR","Date":"2014-06-11","Open":"35.07","High":"35.970001","Low":"34.93","Close":"35.540001","Volume":"30021300","Adj_Close":"35.540001"},{"Symbol":"TWTR","Date":"2014-06-10","Open":"34.73","High":"35.50","Low":"34.66","Close":"35.369999","Volume":"36503400","Adj_Close":"35.369999"},{"Symbol":"TWTR","Date":"2014-06-09","Open":"33.240002","High":"34.549999","Low":"33.09","Close":"34.470001","Volume":"23397200","Adj_Close":"34.470001"},{"Symbol":"TWTR","Date":"2014-06-06","Open":"34.139999","High":"34.41","Low":"33.220001","Close":"33.330002","Volume":"23353200","Adj_Close":"33.330002"},{"Symbol":"TWTR","Date":"2014-06-05","Open":"33.669998","High":"34.889999","Low":"33.110001","Close":"33.889999","Volume":"40904900","Adj_Close":"33.889999"},{"Symbol":"TWTR","Date":"2014-06-04","Open":"32.490002","High":"33.32","Low":"31.85","Close":"32.900002","Volume":"24863000","Adj_Close":"32.900002"},{"Symbol":"TWTR","Date":"2014-06-03","Open":"31.73","High":"32.689999","Low":"31.65","Close":"32.580002","Volume":"19948800","Adj_Close":"32.580002"},{"Symbol":"TWTR","Date":"2014-06-02","Open":"32.889999","High":"33.200001","Low":"31.620001","Close":"31.75","Volume":"31154200","Adj_Close":"31.75"},{"Symbol":"TWTR","Date":"2014-05-30","Open":"33.73","High":"33.860001","Low":"32.110001","Close":"32.439999","Volume":"40566000","Adj_Close":"32.439999"},{"Symbol":"TWTR","Date":"2014-05-29","Open":"34.669998","High":"35.139999","Low":"33.880001","Close":"34.00","Volume":"54016300","Adj_Close":"34.00"},{"Symbol":"TWTR","Date":"2014-05-28","Open":"31.50","High":"33.84","Low":"31.09","Close":"33.77","Volume":"60302800","Adj_Close":"33.77"},{"Symbol":"TWTR","Date":"2014-05-27","Open":"30.940001","High":"31.200001","Low":"30.379999","Close":"30.51","Volume":"25240100","Adj_Close":"30.51"},{"Symbol":"TWTR","Date":"2014-05-23","Open":"31.51","High":"31.68","Low":"30.450001","Close":"30.50","Volume":"27448000","Adj_Close":"30.50"},{"Symbol":"TWTR","Date":"2014-05-22","Open":"31.33","High":"32.25","Low":"30.52","Close":"31.52","Volume":"35566200","Adj_Close":"31.52"},{"Symbol":"TWTR","Date":"2014-05-21","Open":"31.85","High":"31.950001","Low":"31.15","Close":"31.75","Volume":"15562600","Adj_Close":"31.75"},{"Symbol":"TWTR","Date":"2014-05-20","Open":"32.00","High":"32.389999","Low":"31.52","Close":"31.77","Volume":"16580500","Adj_Close":"31.77"},{"Symbol":"TWTR","Date":"2014-05-19","Open":"32.049999","High":"32.439999","Low":"31.639999","Close":"32.07","Volume":"15952800","Adj_Close":"32.07"},{"Symbol":"TWTR","Date":"2014-05-16","Open":"32.950001","High":"33.209999","Low":"32.02","Close":"32.259998","Volume":"21391400","Adj_Close":"32.259998"},{"Symbol":"TWTR","Date":"2014-05-15","Open":"33.02","High":"33.290001","Low":"32.16","Close":"32.77","Volume":"22030500","Adj_Close":"32.77"},{"Symbol":"TWTR","Date":"2014-05-14","Open":"33.349998","High":"33.830002","Low":"32.619999","Close":"32.849998","Volume":"20029400","Adj_Close":"32.849998"},{"Symbol":"TWTR","Date":"2014-05-13","Open":"33.84","High":"34.060001","Low":"32.889999","Close":"33.389999","Volume":"24676800","Adj_Close":"33.389999"},{"Symbol":"TWTR","Date":"2014-05-12","Open":"33.080002","High":"34.099998","Low":"32.400002","Close":"33.939999","Volume":"34712700","Adj_Close":"33.939999"},{"Symbol":"TWTR","Date":"2014-05-09","Open":"32.23","High":"33.110001","Low":"31.75","Close":"32.049999","Volume":"31888800","Adj_Close":"32.049999"},{"Symbol":"TWTR","Date":"2014-05-08","Open":"31.48","High":"32.98","Low":"31.129999","Close":"31.959999","Volume":"51282800","Adj_Close":"31.959999"},{"Symbol":"TWTR","Date":"2014-05-07","Open":"31.969999","High":"32.00","Low":"29.51","Close":"30.66","Volume":"68876300","Adj_Close":"30.66"},{"Symbol":"TWTR","Date":"2014-05-06","Open":"35.610001","High":"36.099998","Low":"31.719999","Close":"31.85","Volume":"134710000","Adj_Close":"31.85"},{"Symbol":"TWTR","Date":"2014-05-05","Open":"38.52","High":"39.599998","Low":"38.049999","Close":"38.75","Volume":"10405200","Adj_Close":"38.75"},{"Symbol":"TWTR","Date":"2014-05-02","Open":"39.200001","High":"39.860001","Low":"38.700001","Close":"39.02","Volume":"12729500","Adj_Close":"39.02"},{"Symbol":"TWTR","Date":"2014-05-01","Open":"39.009998","High":"40.77","Low":"38.970001","Close":"39.09","Volume":"15759800","Adj_Close":"39.09"},{"Symbol":"TWTR","Date":"2014-04-30","Open":"37.66","High":"38.98","Low":"37.240002","Close":"38.970001","Volume":"38397900","Adj_Close":"38.970001"},{"Symbol":"TWTR","Date":"2014-04-29","Open":"40.529999","High":"43.970001","Low":"40.169998","Close":"42.619999","Volume":"28127700","Adj_Close":"42.619999"},{"Symbol":"TWTR","Date":"2014-04-28","Open":"41.759998","High":"42.349998","Low":"39.299999","Close":"40.73","Volume":"14358900","Adj_Close":"40.73"},{"Symbol":"TWTR","Date":"2014-04-25","Open":"44.290001","High":"44.439999","Low":"41.310001","Close":"41.610001","Volume":"13712400","Adj_Close":"41.610001"},{"Symbol":"TWTR","Date":"2014-04-24","Open":"46.709999","High":"46.790001","Low":"43.630001","Close":"44.82","Volume":"11011700","Adj_Close":"44.82"},{"Symbol":"TWTR","Date":"2014-04-23","Open":"45.880001","High":"46.169998","Low":"44.869999","Close":"45.950001","Volume":"7340200","Adj_Close":"45.950001"},{"Symbol":"TWTR","Date":"2014-04-22","Open":"46.23","High":"47.09","Low":"45.799999","Close":"46.02","Volume":"6996900","Adj_Close":"46.02"},{"Symbol":"TWTR","Date":"2014-04-21","Open":"44.959999","High":"46.299999","Low":"44.639999","Close":"46.130001","Volume":"6921200","Adj_Close":"46.130001"},{"Symbol":"TWTR","Date":"2014-04-17","Open":"44.66","High":"46.549999","Low":"43.91","Close":"45.009998","Volume":"12304400","Adj_Close":"45.009998"},{"Symbol":"TWTR","Date":"2014-04-16","Open":"45.419998","High":"45.560001","Low":"43.540001","Close":"44.419998","Volume":"13919600","Adj_Close":"44.419998"},{"Symbol":"TWTR","Date":"2014-04-15","Open":"41.279999","High":"45.549999","Low":"40.759998","Close":"45.52","Volume":"24285100","Adj_Close":"45.52"},{"Symbol":"TWTR","Date":"2014-04-14","Open":"41.400002","High":"41.950001","Low":"40.119999","Close":"40.869999","Volume":"10414200","Adj_Close":"40.869999"},{"Symbol":"TWTR","Date":"2014-04-11","Open":"40.790001","High":"41.099998","Low":"39.68","Close":"40.049999","Volume":"9999700","Adj_Close":"40.049999"},{"Symbol":"TWTR","Date":"2014-04-10","Open":"42.849998","High":"43.25","Low":"40.93","Close":"41.34","Volume":"10720900","Adj_Close":"41.34"},{"Symbol":"TWTR","Date":"2014-04-09","Open":"42.23","High":"43.060001","Low":"41.77","Close":"42.490002","Volume":"14330700","Adj_Close":"42.490002"},{"Symbol":"TWTR","Date":"2014-04-08","Open":"43.419998","High":"43.419998","Low":"41.549999","Close":"41.779999","Volume":"14514500","Adj_Close":"41.779999"},{"Symbol":"TWTR","Date":"2014-04-07","Open":"42.869999","High":"44.599998","Low":"42.259998","Close":"42.450001","Volume":"12053000","Adj_Close":"42.450001"},{"Symbol":"TWTR","Date":"2014-04-04","Open":"44.200001","High":"44.869999","Low":"42.369999","Close":"43.139999","Volume":"13824400","Adj_Close":"43.139999"},{"Symbol":"TWTR","Date":"2014-04-03","Open":"45.48","High":"45.610001","Low":"43.380001","Close":"44.049999","Volume":"11175800","Adj_Close":"44.049999"},{"Symbol":"TWTR","Date":"2014-04-02","Open":"47.400002","High":"47.439999","Low":"45.509998","Close":"45.73","Volume":"7911300","Adj_Close":"45.73"},{"Symbol":"TWTR","Date":"2014-04-01","Open":"46.709999","High":"47.59","Low":"46.18","Close":"46.98","Volume":"6916100","Adj_Close":"46.98"},{"Symbol":"TWTR","Date":"2014-03-31","Open":"47.549999","High":"47.75","Low":"46.43","Close":"46.669998","Volume":"5794500","Adj_Close":"46.669998"},{"Symbol":"TWTR","Date":"2014-03-28","Open":"46.650002","High":"47.34","Low":"45.700001","Close":"47.299999","Volume":"9610500","Adj_Close":"47.299999"},{"Symbol":"TWTR","Date":"2014-03-27","Open":"45.09","High":"46.400002","Low":"43.310001","Close":"46.32","Volume":"15507600","Adj_Close":"46.32"},{"Symbol":"TWTR","Date":"2014-03-26","Open":"48.060001","High":"48.299999","Low":"44.25","Close":"44.43","Volume":"16079700","Adj_Close":"44.43"},{"Symbol":"TWTR","Date":"2014-03-25","Open":"49.349998","High":"49.700001","Low":"47.580002","Close":"47.880001","Volume":"8225600","Adj_Close":"47.880001"},{"Symbol":"TWTR","Date":"2014-03-24","Open":"50.689999","High":"50.939999","Low":"47.77","Close":"48.77","Volume":"12325700","Adj_Close":"48.77"},{"Symbol":"TWTR","Date":"2014-03-21","Open":"50.240002","High":"50.919998","Low":"49.509998","Close":"50.919998","Volume":"11801400","Adj_Close":"50.919998"},{"Symbol":"TWTR","Date":"2014-03-20","Open":"51.00","High":"51.66","Low":"49.639999","Close":"50.119999","Volume":"10086200","Adj_Close":"50.119999"},{"Symbol":"TWTR","Date":"2014-03-19","Open":"50.799999","High":"51.98","Low":"50.709999","Close":"51.240002","Volume":"7624200","Adj_Close":"51.240002"},{"Symbol":"TWTR","Date":"2014-03-18","Open":"52.029999","High":"52.209999","Low":"50.290001","Close":"51.130001","Volume":"12228900","Adj_Close":"51.130001"},{"Symbol":"TWTR","Date":"2014-03-17","Open":"52.080002","High":"52.490002","Low":"51.349998","Close":"52.049999","Volume":"6600900","Adj_Close":"52.049999"},{"Symbol":"TWTR","Date":"2014-03-14","Open":"53.400002","High":"53.91","Low":"51.799999","Close":"51.919998","Volume":"9570400","Adj_Close":"51.919998"},{"Symbol":"TWTR","Date":"2014-03-13","Open":"54.900002","High":"55.450001","Low":"53.200001","Close":"53.57","Volume":"7671500","Adj_Close":"53.57"},{"Symbol":"TWTR","Date":"2014-03-12","Open":"54.25","High":"55.299999","Low":"53.880001","Close":"54.50","Volume":"5818400","Adj_Close":"54.50"},{"Symbol":"TWTR","Date":"2014-03-11","Open":"54.16","High":"55.84","Low":"53.799999","Close":"54.02","Volume":"11762600","Adj_Close":"54.02"},{"Symbol":"TWTR","Date":"2014-03-10","Open":"54.09","High":"54.59","Low":"53.380001","Close":"53.880001","Volume":"5759600","Adj_Close":"53.880001"},{"Symbol":"TWTR","Date":"2014-03-07","Open":"55.18","High":"55.200001","Low":"53.310001","Close":"53.529999","Volume":"7311500","Adj_Close":"53.529999"},{"Symbol":"TWTR","Date":"2014-03-06","Open":"54.91","High":"56.09","Low":"54.700001","Close":"54.830002","Volume":"9005700","Adj_Close":"54.830002"},{"Symbol":"TWTR","Date":"2014-03-05","Open":"54.529999","High":"55.029999","Low":"53.75","Close":"54.380001","Volume":"5672000","Adj_Close":"54.380001"},{"Symbol":"TWTR","Date":"2014-03-04","Open":"54.25","High":"55.279999","Low":"54.119999","Close":"54.279999","Volume":"6706300","Adj_Close":"54.279999"},{"Symbol":"TWTR","Date":"2014-03-03","Open":"53.889999","High":"54.400002","Low":"52.900002","Close":"53.709999","Volume":"9602300","Adj_Close":"53.709999"},{"Symbol":"TWTR","Date":"2014-02-28","Open":"55.93","High":"56.00","Low":"54.130001","Close":"54.91","Volume":"8137200","Adj_Close":"54.91"},{"Symbol":"TWTR","Date":"2014-02-27","Open":"56.34","High":"56.689999","Low":"55.400002","Close":"55.77","Volume":"6537700","Adj_Close":"55.77"},{"Symbol":"TWTR","Date":"2014-02-26","Open":"55.00","High":"56.990002","Low":"54.900002","Close":"55.869999","Volume":"12116000","Adj_Close":"55.869999"},{"Symbol":"TWTR","Date":"2014-02-25","Open":"55.889999","High":"55.950001","Low":"54.50","Close":"54.959999","Volume":"9288500","Adj_Close":"54.959999"},{"Symbol":"TWTR","Date":"2014-02-24","Open":"56.029999","High":"56.490002","Low":"55.299999","Close":"55.779999","Volume":"8451200","Adj_Close":"55.779999"},{"Symbol":"TWTR","Date":"2014-02-21","Open":"57.099998","High":"57.200001","Low":"55.700001","Close":"55.919998","Volume":"7714300","Adj_Close":"55.919998"},{"Symbol":"TWTR","Date":"2014-02-20","Open":"55.82","High":"57.080002","Low":"54.650002","Close":"56.630001","Volume":"12097500","Adj_Close":"56.630001"},{"Symbol":"TWTR","Date":"2014-02-19","Open":"58.470001","High":"58.950001","Low":"54.619999","Close":"55.50","Volume":"25772100","Adj_Close":"55.50"},{"Symbol":"TWTR","Date":"2014-02-18","Open":"57.880001","High":"58.639999","Low":"56.77","Close":"58.18","Volume":"10719500","Adj_Close":"58.18"},{"Symbol":"TWTR","Date":"2014-02-14","Open":"57.02","High":"57.860001","Low":"56.700001","Close":"57.439999","Volume":"12512400","Adj_Close":"57.439999"},{"Symbol":"TWTR","Date":"2014-02-13","Open":"56.07","High":"58.98","Low":"55.459999","Close":"56.470001","Volume":"26009500","Adj_Close":"56.470001"},{"Symbol":"TWTR","Date":"2014-02-12","Open":"55.049999","High":"57.00","Low":"54.759998","Close":"56.849998","Volume":"20040400","Adj_Close":"56.849998"},{"Symbol":"TWTR","Date":"2014-02-11","Open":"53.200001","High":"54.400002","Low":"53.099998","Close":"54.00","Volume":"13162900","Adj_Close":"54.00"},{"Symbol":"TWTR","Date":"2014-02-10","Open":"54.50","High":"54.59","Low":"52.34","Close":"52.919998","Volume":"15857400","Adj_Close":"52.919998"},{"Symbol":"TWTR","Date":"2014-02-07","Open":"51.23","High":"54.919998","Low":"50.75","Close":"54.349998","Volume":"32204400","Adj_Close":"54.349998"},{"Symbol":"TWTR","Date":"2014-02-06","Open":"50.610001","High":"53.900002","Low":"49.990002","Close":"50.029999","Volume":"64856500","Adj_Close":"50.029999"},{"Symbol":"TWTR","Date":"2014-02-05","Open":"67.160004","High":"67.239998","Low":"64.800003","Close":"65.970001","Volume":"31504900","Adj_Close":"65.970001"},{"Symbol":"TWTR","Date":"2014-02-04","Open":"66.25","High":"66.370003","Low":"64.50","Close":"66.32","Volume":"13017400","Adj_Close":"66.32"},{"Symbol":"TWTR","Date":"2014-02-03","Open":"65.919998","High":"66.480003","Low":"64.209999","Close":"65.25","Volume":"17890300","Adj_Close":"65.25"},{"Symbol":"TWTR","Date":"2014-01-31","Open":"63.389999","High":"65.370003","Low":"62.650002","Close":"64.50","Volume":"15498800","Adj_Close":"64.50"},{"Symbol":"TWTR","Date":"2014-01-30","Open":"63.98","High":"65.239998","Low":"62.799999","Close":"63.470001","Volume":"17424300","Adj_Close":"63.470001"},{"Symbol":"TWTR","Date":"2014-01-29","Open":"59.619999","High":"60.950001","Low":"58.599998","Close":"59.450001","Volume":"9140000","Adj_Close":"59.450001"},{"Symbol":"TWTR","Date":"2014-01-28","Open":"57.439999","High":"60.849998","Low":"57.349998","Close":"60.439999","Volume":"9346800","Adj_Close":"60.439999"},{"Symbol":"TWTR","Date":"2014-01-27","Open":"61.77","High":"61.77","Low":"56.099998","Close":"57.91","Volume":"18982700","Adj_Close":"57.91"},{"Symbol":"TWTR","Date":"2014-01-24","Open":"62.169998","High":"63.619999","Low":"61.299999","Close":"61.740002","Volume":"12942200","Adj_Close":"61.740002"},{"Symbol":"TWTR","Date":"2014-01-23","Open":"61.450001","High":"62.810001","Low":"60.880001","Close":"62.799999","Volume":"10183700","Adj_Close":"62.799999"},{"Symbol":"TWTR","Date":"2014-01-22","Open":"63.110001","High":"63.799999","Low":"61.759998","Close":"62.439999","Volume":"12039000","Adj_Close":"62.439999"},{"Symbol":"TWTR","Date":"2014-01-21","Open":"63.330002","High":"63.439999","Low":"61.50","Close":"62.529999","Volume":"13733200","Adj_Close":"62.529999"},{"Symbol":"TWTR","Date":"2014-01-17","Open":"63.599998","High":"64.690002","Low":"61.59","Close":"62.200001","Volume":"28391100","Adj_Close":"62.200001"},{"Symbol":"TWTR","Date":"2014-01-16","Open":"61.450001","High":"62.400002","Low":"60.459999","Close":"60.57","Volume":"16589400","Adj_Close":"60.57"},{"Symbol":"TWTR","Date":"2014-01-15","Open":"59.110001","High":"61.75","Low":"58.32","Close":"61.57","Volume":"21537300","Adj_Close":"61.57"},{"Symbol":"TWTR","Date":"2014-01-14","Open":"58.880001","High":"59.02","Low":"57.360001","Close":"58.209999","Volume":"14778000","Adj_Close":"58.209999"},{"Symbol":"TWTR","Date":"2014-01-13","Open":"59.98","High":"60.380001","Low":"57.290001","Close":"57.82","Volume":"20978100","Adj_Close":"57.82"},{"Symbol":"TWTR","Date":"2014-01-10","Open":"57.50","High":"58.759998","Low":"55.869999","Close":"57.00","Volume":"22375900","Adj_Close":"57.00"},{"Symbol":"TWTR","Date":"2014-01-09","Open":"59.540001","High":"60.810001","Low":"55.59","Close":"57.049999","Volume":"31092100","Adj_Close":"57.049999"},{"Symbol":"TWTR","Date":"2014-01-08","Open":"58.709999","High":"61.259998","Low":"57.919998","Close":"59.290001","Volume":"27263200","Adj_Close":"59.290001"},{"Symbol":"TWTR","Date":"2014-01-07","Open":"67.669998","High":"67.730003","Low":"61.389999","Close":"61.459999","Volume":"31748400","Adj_Close":"61.459999"},{"Symbol":"TWTR","Date":"2014-01-06","Open":"64.830002","High":"66.870003","Low":"63.50","Close":"66.290001","Volume":"27243700","Adj_Close":"66.290001"},{"Symbol":"TWTR","Date":"2014-01-03","Open":"69.00","High":"70.43","Low":"68.43","Close":"69.00","Volume":"33207200","Adj_Close":"69.00"},{"Symbol":"TWTR","Date":"2014-01-02","Open":"65.00","High":"67.50","Low":"64.400002","Close":"67.50","Volume":"29246400","Adj_Close":"67.50"}]}}},
{"query":{"count":252,"created":"2016-03-30T22:03:31Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"1","execution-stop-time":"2","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"7","execution-stop-time":"9","execution-time":"2","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=FB"},{"execution-start-time":"14","execution-stop-time":"15","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=FB"}],"publiclyCallable":"true","cache":[{"execution-start-time":"6","execution-stop-time":"6","execution-time":"0","method":"GET","type":"MEMCACHED","content":"36340af9a52c1962ac48d46459e35ad9"},{"execution-start-time":"12","execution-stop-time":"13","execution-time":"1","method":"GET","type":"MEMCACHED","content":"83052f45a693e95d67395d6b07a320c4"}],"query":[{"execution-start-time":"6","execution-stop-time":"12","execution-time":"6","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=FB]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"13","execution-stop-time":"18","execution-time":"5","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=FB]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"4","execution-stop-time":"880","execution-time":"876","instructions-used":"24190668","table-name":"yahoo.finance.historicaldata"},"user-time":"886","service-time":"5","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"FB","Date":"2014-12-31","Open":"79.540001","High":"79.800003","Low":"77.860001","Close":"78.019997","Volume":"20040400","Adj_Close":"78.019997"},{"Symbol":"FB","Date":"2014-12-30","Open":"79.849998","High":"80.589996","Low":"79.099998","Close":"79.220001","Volume":"14370800","Adj_Close":"79.220001"},{"Symbol":"FB","Date":"2014-12-29","Open":"80.489998","High":"80.959999","Low":"79.709999","Close":"80.019997","Volume":"14134700","Adj_Close":"80.019997"},{"Symbol":"FB","Date":"2014-12-26","Open":"81.019997","High":"81.279999","Low":"80.510002","Close":"80.779999","Volume":"10647400","Adj_Close":"80.779999"},{"Symbol":"FB","Date":"2014-12-24","Open":"81.029999","High":"81.43","Low":"80.75","Close":"80.769997","Volume":"7685500","Adj_Close":"80.769997"},{"Symbol":"FB","Date":"2014-12-23","Open":"82.019997","High":"82.169998","Low":"80.400002","Close":"80.610001","Volume":"19865800","Adj_Close":"80.610001"},{"Symbol":"FB","Date":"2014-12-22","Open":"80.080002","High":"81.889999","Low":"80.00","Close":"81.449997","Volume":"31395800","Adj_Close":"81.449997"},{"Symbol":"FB","Date":"2014-12-19","Open":"78.75","High":"80.00","Low":"78.330002","Close":"79.879997","Volume":"43335000","Adj_Close":"79.879997"},{"Symbol":"FB","Date":"2014-12-18","Open":"76.889999","High":"78.400002","Low":"76.510002","Close":"78.400002","Volume":"34222100","Adj_Close":"78.400002"},{"Symbol":"FB","Date":"2014-12-17","Open":"75.010002","High":"76.410004","Low":"74.900002","Close":"76.110001","Volume":"29203900","Adj_Close":"76.110001"},{"Symbol":"FB","Date":"2014-12-16","Open":"76.190002","High":"77.389999","Low":"74.589996","Close":"74.690002","Volume":"31554600","Adj_Close":"74.690002"},{"Symbol":"FB","Date":"2014-12-15","Open":"78.459999","High":"78.580002","Low":"76.559998","Close":"76.989998","Volume":"29396500","Adj_Close":"76.989998"},{"Symbol":"FB","Date":"2014-12-12","Open":"77.160004","High":"78.879997","Low":"77.019997","Close":"77.830002","Volume":"28091600","Adj_Close":"77.830002"},{"Symbol":"FB","Date":"2014-12-11","Open":"76.519997","High":"78.519997","Low":"76.480003","Close":"77.730003","Volume":"33462100","Adj_Close":"77.730003"},{"Symbol":"FB","Date":"2014-12-10","Open":"76.650002","High":"77.550003","Low":"76.07","Close":"76.18","Volume":"32210500","Adj_Close":"76.18"},{"Symbol":"FB","Date":"2014-12-09","Open":"75.199997","High":"76.93","Low":"74.779999","Close":"76.839996","Volume":"25358600","Adj_Close":"76.839996"},{"Symbol":"FB","Date":"2014-12-08","Open":"76.18","High":"77.25","Low":"75.400002","Close":"76.519997","Volume":"25733900","Adj_Close":"76.519997"},{"Symbol":"FB","Date":"2014-12-05","Open":"75.800003","High":"76.760002","Low":"75.360001","Close":"76.360001","Volume":"24306400","Adj_Close":"76.360001"},{"Symbol":"FB","Date":"2014-12-04","Open":"74.830002","High":"75.550003","Low":"74.660004","Close":"75.239998","Volume":"14362800","Adj_Close":"75.239998"},{"Symbol":"FB","Date":"2014-12-03","Open":"75.379997","High":"75.730003","Low":"74.400002","Close":"74.879997","Volume":"16689900","Adj_Close":"74.879997"},{"Symbol":"FB","Date":"2014-12-02","Open":"75.330002","High":"75.910004","Low":"75.040001","Close":"75.459999","Volume":"16724600","Adj_Close":"75.459999"},{"Symbol":"FB","Date":"2014-12-01","Open":"77.260002","High":"77.309998","Low":"74.800003","Close":"75.099998","Volume":"31789900","Adj_Close":"75.099998"},{"Symbol":"FB","Date":"2014-11-28","Open":"77.669998","High":"78.269997","Low":"77.230003","Close":"77.699997","Volume":"15992000","Adj_Close":"77.699997"},{"Symbol":"FB","Date":"2014-11-26","Open":"75.529999","High":"77.779999","Low":"75.510002","Close":"77.620003","Volume":"32695300","Adj_Close":"77.620003"},{"Symbol":"FB","Date":"2014-11-25","Open":"74.209999","High":"75.739998","Low":"74.129997","Close":"75.629997","Volume":"32250200","Adj_Close":"75.629997"},{"Symbol":"FB","Date":"2014-11-24","Open":"73.540001","High":"74.349998","Low":"73.349998","Close":"74.010002","Volume":"22103800","Adj_Close":"74.010002"},{"Symbol":"FB","Date":"2014-11-21","Open":"74.50","High":"74.50","Low":"73.50","Close":"73.75","Volume":"23055400","Adj_Close":"73.75"},{"Symbol":"FB","Date":"2014-11-20","Open":"72.800003","High":"73.989998","Low":"72.510002","Close":"73.599998","Volume":"19154900","Adj_Close":"73.599998"},{"Symbol":"FB","Date":"2014-11-19","Open":"74.010002","High":"74.540001","Low":"73.110001","Close":"73.330002","Volume":"25441200","Adj_Close":"73.330002"},{"Symbol":"FB","Date":"2014-11-18","Open":"74.449997","High":"74.800003","Low":"73.900002","Close":"74.339996","Volume":"20690500","Adj_Close":"74.339996"},{"Symbol":"FB","Date":"2014-11-17","Open":"74.879997","High":"75.660004","Low":"73.879997","Close":"74.239998","Volume":"28701200","Adj_Close":"74.239998"},{"Symbol":"FB","Date":"2014-11-14","Open":"74.269997","High":"74.93","Low":"74.040001","Close":"74.879997","Volume":"19476900","Adj_Close":"74.879997"},{"Symbol":"FB","Date":"2014-11-13","Open":"74.739998","High":"75.239998","Low":"73.639999","Close":"74.25","Volume":"26448500","Adj_Close":"74.25"},{"Symbol":"FB","Date":"2014-11-12","Open":"74.279999","High":"75.139999","Low":"73.540001","Close":"74.720001","Volume":"26536600","Adj_Close":"74.720001"},{"Symbol":"FB","Date":"2014-11-11","Open":"74.949997","High":"74.980003","Low":"74.029999","Close":"74.610001","Volume":"18715700","Adj_Close":"74.610001"},{"Symbol":"FB","Date":"2014-11-10","Open":"75.360001","High":"75.480003","Low":"74.610001","Close":"75.00","Volume":"21575100","Adj_Close":"75.00"},{"Symbol":"FB","Date":"2014-11-07","Open":"75.389999","High":"75.860001","Low":"75.019997","Close":"75.599998","Volume":"20774000","Adj_Close":"75.599998"},{"Symbol":"FB","Date":"2014-11-06","Open":"74.889999","High":"75.599998","Low":"74.309998","Close":"75.260002","Volume":"21383000","Adj_Close":"75.260002"},{"Symbol":"FB","Date":"2014-11-05","Open":"76.510002","High":"76.800003","Low":"74.419998","Close":"74.830002","Volume":"35913000","Adj_Close":"74.830002"},{"Symbol":"FB","Date":"2014-11-04","Open":"74.230003","High":"75.769997","Low":"73.650002","Close":"75.760002","Volume":"39326000","Adj_Close":"75.760002"},{"Symbol":"FB","Date":"2014-11-03","Open":"75.470001","High":"75.519997","Low":"73.699997","Close":"73.879997","Volume":"40727000","Adj_Close":"73.879997"},{"Symbol":"FB","Date":"2014-10-31","Open":"74.93","High":"75.699997","Low":"74.449997","Close":"74.989998","Volume":"44544000","Adj_Close":"74.989998"},{"Symbol":"FB","Date":"2014-10-30","Open":"75.050003","High":"75.349998","Low":"72.900002","Close":"74.110001","Volume":"83270000","Adj_Close":"74.110001"},{"Symbol":"FB","Date":"2014-10-29","Open":"75.449997","High":"76.879997","Low":"74.779999","Close":"75.860001","Volume":"106120000","Adj_Close":"75.860001"},{"Symbol":"FB","Date":"2014-10-28","Open":"80.18","High":"81.160004","Low":"79.57","Close":"80.769997","Volume":"71343100","Adj_Close":"80.769997"},{"Symbol":"FB","Date":"2014-10-27","Open":"80.739998","High":"80.800003","Low":"79.760002","Close":"80.279999","Volume":"30169000","Adj_Close":"80.279999"},{"Symbol":"FB","Date":"2014-10-24","Open":"80.199997","High":"80.82","Low":"79.32","Close":"80.669998","Volume":"32248000","Adj_Close":"80.669998"},{"Symbol":"FB","Date":"2014-10-23","Open":"79.379997","High":"80.629997","Low":"79.010002","Close":"80.040001","Volume":"35056000","Adj_Close":"80.040001"},{"Symbol":"FB","Date":"2014-10-22","Open":"78.82","High":"79.849998","Low":"78.010002","Close":"78.370003","Volume":"41808900","Adj_Close":"78.370003"},{"Symbol":"FB","Date":"2014-10-21","Open":"77.559998","High":"78.739998","Low":"77.150002","Close":"78.690002","Volume":"32252000","Adj_Close":"78.690002"},{"Symbol":"FB","Date":"2014-10-20","Open":"75.599998","High":"77.089996","Low":"75.379997","Close":"76.949997","Volume":"34701000","Adj_Close":"76.949997"},{"Symbol":"FB","Date":"2014-10-17","Open":"74.230003","High":"76.00","Low":"73.75","Close":"75.949997","Volume":"76342000","Adj_Close":"75.949997"},{"Symbol":"FB","Date":"2014-10-16","Open":"70.790001","High":"73.349998","Low":"70.580002","Close":"72.629997","Volume":"53529000","Adj_Close":"72.629997"},{"Symbol":"FB","Date":"2014-10-15","Open":"71.690002","High":"73.800003","Low":"70.32","Close":"73.209999","Volume":"61528000","Adj_Close":"73.209999"},{"Symbol":"FB","Date":"2014-10-14","Open":"74.00","High":"74.18","Low":"72.050003","Close":"73.589996","Volume":"50299000","Adj_Close":"73.589996"},{"Symbol":"FB","Date":"2014-10-13","Open":"73.230003","High":"74.779999","Low":"72.519997","Close":"72.989998","Volume":"43938000","Adj_Close":"72.989998"},{"Symbol":"FB","Date":"2014-10-10","Open":"75.589996","High":"76.50","Low":"72.760002","Close":"72.910004","Volume":"52146000","Adj_Close":"72.910004"},{"Symbol":"FB","Date":"2014-10-09","Open":"77.279999","High":"77.760002","Low":"75.849998","Close":"75.910004","Volume":"32487000","Adj_Close":"75.910004"},{"Symbol":"FB","Date":"2014-10-08","Open":"76.18","High":"77.709999","Low":"75.099998","Close":"77.519997","Volume":"32976000","Adj_Close":"77.519997"},{"Symbol":"FB","Date":"2014-10-07","Open":"77.050003","High":"77.949997","Low":"76.239998","Close":"76.290001","Volume":"25317000","Adj_Close":"76.290001"},{"Symbol":"FB","Date":"2014-10-06","Open":"77.190002","High":"77.889999","Low":"76.849998","Close":"77.559998","Volume":"25729000","Adj_Close":"77.559998"},{"Symbol":"FB","Date":"2014-10-03","Open":"77.760002","High":"78.059998","Low":"77.260002","Close":"77.440002","Volume":"23340000","Adj_Close":"77.440002"},{"Symbol":"FB","Date":"2014-10-02","Open":"76.57","High":"77.480003","Low":"75.639999","Close":"77.080002","Volume":"36488000","Adj_Close":"77.080002"},{"Symbol":"FB","Date":"2014-10-01","Open":"78.779999","High":"78.82","Low":"75.900002","Close":"76.550003","Volume":"55090000","Adj_Close":"76.550003"},{"Symbol":"FB","Date":"2014-09-30","Open":"79.349998","High":"79.709999","Low":"78.599998","Close":"79.040001","Volume":"35899000","Adj_Close":"79.040001"},{"Symbol":"FB","Date":"2014-09-29","Open":"78.120003","High":"79.199997","Low":"77.910004","Close":"79.00","Volume":"34031000","Adj_Close":"79.00"},{"Symbol":"FB","Date":"2014-09-26","Open":"77.589996","High":"78.839996","Low":"77.330002","Close":"78.790001","Volume":"28872000","Adj_Close":"78.790001"},{"Symbol":"FB","Date":"2014-09-25","Open":"78.599998","High":"78.940002","Low":"77.129997","Close":"77.220001","Volume":"37533000","Adj_Close":"77.220001"},{"Symbol":"FB","Date":"2014-09-24","Open":"78.099998","High":"78.620003","Low":"77.510002","Close":"78.540001","Volume":"30680000","Adj_Close":"78.540001"},{"Symbol":"FB","Date":"2014-09-23","Open":"76.330002","High":"78.629997","Low":"76.040001","Close":"78.290001","Volume":"36814000","Adj_Close":"78.290001"},{"Symbol":"FB","Date":"2014-09-22","Open":"77.00","High":"77.529999","Low":"75.949997","Close":"76.800003","Volume":"31961000","Adj_Close":"76.800003"},{"Symbol":"FB","Date":"2014-09-19","Open":"77.400002","High":"78.300003","Low":"76.440002","Close":"77.910004","Volume":"76671000","Adj_Close":"77.910004"},{"Symbol":"FB","Date":"2014-09-18","Open":"76.769997","High":"77.330002","Low":"76.519997","Close":"77.00","Volume":"23031000","Adj_Close":"77.00"},{"Symbol":"FB","Date":"2014-09-17","Open":"75.959999","High":"77.25","Low":"75.57","Close":"76.43","Volume":"28693000","Adj_Close":"76.43"},{"Symbol":"FB","Date":"2014-09-16","Open":"73.519997","High":"76.230003","Low":"73.07","Close":"76.080002","Volume":"37742000","Adj_Close":"76.080002"},{"Symbol":"FB","Date":"2014-09-15","Open":"77.150002","High":"77.25","Low":"73.43","Close":"74.580002","Volume":"49679000","Adj_Close":"74.580002"},{"Symbol":"FB","Date":"2014-09-12","Open":"78.019997","High":"78.300003","Low":"77.099998","Close":"77.480003","Volume":"26744000","Adj_Close":"77.480003"},{"Symbol":"FB","Date":"2014-09-11","Open":"77.129997","High":"78.360001","Low":"77.050003","Close":"77.919998","Volume":"32219000","Adj_Close":"77.919998"},{"Symbol":"FB","Date":"2014-09-10","Open":"76.519997","High":"77.949997","Low":"76.510002","Close":"77.43","Volume":"29909000","Adj_Close":"77.43"},{"Symbol":"FB","Date":"2014-09-09","Open":"77.589996","High":"78.169998","Low":"76.199997","Close":"76.669998","Volume":"28882000","Adj_Close":"76.669998"},{"Symbol":"FB","Date":"2014-09-08","Open":"77.260002","High":"78.169998","Low":"77.010002","Close":"77.889999","Volume":"28183000","Adj_Close":"77.889999"},{"Symbol":"FB","Date":"2014-09-05","Open":"76.099998","High":"77.379997","Low":"75.599998","Close":"77.260002","Volume":"29476000","Adj_Close":"77.260002"},{"Symbol":"FB","Date":"2014-09-04","Open":"75.889999","High":"76.93","Low":"75.529999","Close":"75.949997","Volume":"26676000","Adj_Close":"75.949997"},{"Symbol":"FB","Date":"2014-09-03","Open":"77.139999","High":"77.480003","Low":"75.599998","Close":"75.830002","Volume":"32389000","Adj_Close":"75.830002"},{"Symbol":"FB","Date":"2014-09-02","Open":"75.010002","High":"76.699997","Low":"74.82","Close":"76.68","Volume":"34979000","Adj_Close":"76.68"},{"Symbol":"FB","Date":"2014-08-29","Open":"74.300003","High":"74.82","Low":"74.010002","Close":"74.82","Volume":"26241000","Adj_Close":"74.82"},{"Symbol":"FB","Date":"2014-08-28","Open":"74.00","High":"74.43","Low":"73.730003","Close":"73.860001","Volume":"21947000","Adj_Close":"73.860001"},{"Symbol":"FB","Date":"2014-08-27","Open":"75.269997","High":"75.489998","Low":"74.459999","Close":"74.629997","Volume":"36323000","Adj_Close":"74.629997"},{"Symbol":"FB","Date":"2014-08-26","Open":"75.00","High":"75.989998","Low":"74.730003","Close":"75.959999","Volume":"23993000","Adj_Close":"75.959999"},{"Symbol":"FB","Date":"2014-08-25","Open":"74.940002","High":"75.279999","Low":"74.790001","Close":"75.019997","Volume":"19734000","Adj_Close":"75.019997"},{"Symbol":"FB","Date":"2014-08-22","Open":"74.339996","High":"74.730003","Low":"73.57","Close":"74.57","Volume":"20897000","Adj_Close":"74.57"},{"Symbol":"FB","Date":"2014-08-21","Open":"74.919998","High":"75.190002","Low":"74.410004","Close":"74.57","Volume":"20102000","Adj_Close":"74.57"},{"Symbol":"FB","Date":"2014-08-20","Open":"74.970001","High":"75.18","Low":"74.620003","Close":"74.809998","Volume":"22917000","Adj_Close":"74.809998"},{"Symbol":"FB","Date":"2014-08-19","Open":"74.809998","High":"75.580002","Low":"74.510002","Close":"75.290001","Volume":"26679000","Adj_Close":"75.290001"},{"Symbol":"FB","Date":"2014-08-18","Open":"74.00","High":"74.720001","Low":"73.959999","Close":"74.589996","Volume":"23974000","Adj_Close":"74.589996"},{"Symbol":"FB","Date":"2014-08-15","Open":"74.32","High":"74.650002","Low":"73.00","Close":"73.629997","Volume":"38846600","Adj_Close":"73.629997"},{"Symbol":"FB","Date":"2014-08-14","Open":"73.970001","High":"74.379997","Low":"73.690002","Close":"74.300003","Volume":"22207000","Adj_Close":"74.300003"},{"Symbol":"FB","Date":"2014-08-13","Open":"73.120003","High":"74.25","Low":"73.050003","Close":"73.769997","Volume":"29266000","Adj_Close":"73.769997"},{"Symbol":"FB","Date":"2014-08-12","Open":"73.089996","High":"73.330002","Low":"72.220001","Close":"72.830002","Volume":"27419000","Adj_Close":"72.830002"},{"Symbol":"FB","Date":"2014-08-11","Open":"73.459999","High":"73.910004","Low":"73.059998","Close":"73.440002","Volume":"24591000","Adj_Close":"73.440002"},{"Symbol":"FB","Date":"2014-08-08","Open":"73.400002","High":"73.43","Low":"72.559998","Close":"73.059998","Volume":"27202000","Adj_Close":"73.059998"},{"Symbol":"FB","Date":"2014-08-07","Open":"73.00","High":"74.00","Low":"72.699997","Close":"73.169998","Volume":"38141000","Adj_Close":"73.169998"},{"Symbol":"FB","Date":"2014-08-06","Open":"72.019997","High":"73.720001","Low":"71.790001","Close":"72.470001","Volume":"30986000","Adj_Close":"72.470001"},{"Symbol":"FB","Date":"2014-08-05","Open":"73.199997","High":"73.589996","Low":"72.18","Close":"72.690002","Volume":"34986000","Adj_Close":"72.690002"},{"Symbol":"FB","Date":"2014-08-04","Open":"72.360001","High":"73.879997","Low":"72.360001","Close":"73.510002","Volume":"30777000","Adj_Close":"73.510002"},{"Symbol":"FB","Date":"2014-08-01","Open":"72.220001","High":"73.220001","Low":"71.550003","Close":"72.360001","Volume":"43535000","Adj_Close":"72.360001"},{"Symbol":"FB","Date":"2014-07-31","Open":"74.00","High":"74.169998","Low":"72.440002","Close":"72.650002","Volume":"43992000","Adj_Close":"72.650002"},{"Symbol":"FB","Date":"2014-07-30","Open":"74.209999","High":"75.190002","Low":"74.129997","Close":"74.68","Volume":"36853000","Adj_Close":"74.68"},{"Symbol":"FB","Date":"2014-07-29","Open":"74.720001","High":"74.919998","Low":"73.419998","Close":"73.709999","Volume":"41324000","Adj_Close":"73.709999"},{"Symbol":"FB","Date":"2014-07-28","Open":"75.169998","High":"75.50","Low":"73.849998","Close":"74.919998","Volume":"41725000","Adj_Close":"74.919998"},{"Symbol":"FB","Date":"2014-07-25","Open":"74.989998","High":"75.669998","Low":"74.660004","Close":"75.190002","Volume":"45917000","Adj_Close":"75.190002"},{"Symbol":"FB","Date":"2014-07-24","Open":"75.959999","High":"76.739998","Low":"74.510002","Close":"74.980003","Volume":"124168000","Adj_Close":"74.980003"},{"Symbol":"FB","Date":"2014-07-23","Open":"69.739998","High":"71.330002","Low":"69.610001","Close":"71.290001","Volume":"78435000","Adj_Close":"71.290001"},{"Symbol":"FB","Date":"2014-07-22","Open":"69.760002","High":"69.769997","Low":"68.610001","Close":"69.269997","Volume":"40398000","Adj_Close":"69.269997"},{"Symbol":"FB","Date":"2014-07-21","Open":"68.809998","High":"69.959999","Low":"68.50","Close":"69.400002","Volume":"49539000","Adj_Close":"69.400002"},{"Symbol":"FB","Date":"2014-07-18","Open":"66.800003","High":"68.459999","Low":"66.160004","Close":"68.419998","Volume":"42456000","Adj_Close":"68.419998"},{"Symbol":"FB","Date":"2014-07-17","Open":"67.029999","High":"67.849998","Low":"66.040001","Close":"66.410004","Volume":"38188000","Adj_Close":"66.410004"},{"Symbol":"FB","Date":"2014-07-16","Open":"67.540001","High":"67.940002","Low":"67.07","Close":"67.660004","Volume":"29594000","Adj_Close":"67.660004"},{"Symbol":"FB","Date":"2014-07-15","Open":"67.959999","High":"68.089996","Low":"66.260002","Close":"67.169998","Volume":"44213200","Adj_Close":"67.169998"},{"Symbol":"FB","Date":"2014-07-14","Open":"67.129997","High":"68.169998","Low":"66.900002","Close":"67.900002","Volume":"38537000","Adj_Close":"67.900002"},{"Symbol":"FB","Date":"2014-07-11","Open":"65.279999","High":"66.589996","Low":"64.790001","Close":"66.339996","Volume":"39212000","Adj_Close":"66.339996"},{"Symbol":"FB","Date":"2014-07-10","Open":"63.310001","High":"65.339996","Low":"63.049999","Close":"64.870003","Volume":"44422000","Adj_Close":"64.870003"},{"Symbol":"FB","Date":"2014-07-09","Open":"63.41","High":"65.120003","Low":"63.150002","Close":"64.970001","Volume":"51432000","Adj_Close":"64.970001"},{"Symbol":"FB","Date":"2014-07-08","Open":"65.059998","High":"65.559998","Low":"62.209999","Close":"62.759998","Volume":"68926000","Adj_Close":"62.759998"},{"Symbol":"FB","Date":"2014-07-07","Open":"66.300003","High":"66.57","Low":"65.120003","Close":"65.290001","Volume":"28745000","Adj_Close":"65.290001"},{"Symbol":"FB","Date":"2014-07-03","Open":"66.860001","High":"67.00","Low":"65.760002","Close":"66.290001","Volume":"25203200","Adj_Close":"66.290001"},{"Symbol":"FB","Date":"2014-07-02","Open":"68.040001","High":"68.300003","Low":"65.790001","Close":"66.449997","Volume":"41895000","Adj_Close":"66.449997"},{"Symbol":"FB","Date":"2014-07-01","Open":"67.580002","High":"68.440002","Low":"67.389999","Close":"68.059998","Volume":"33243000","Adj_Close":"68.059998"},{"Symbol":"FB","Date":"2014-06-30","Open":"67.459999","High":"67.919998","Low":"67.129997","Close":"67.290001","Volume":"27202000","Adj_Close":"67.290001"},{"Symbol":"FB","Date":"2014-06-27","Open":"67.309998","High":"67.699997","Low":"66.839996","Close":"67.599998","Volume":"46461000","Adj_Close":"67.599998"},{"Symbol":"FB","Date":"2014-06-26","Open":"68.00","High":"68.00","Low":"66.900002","Close":"67.129997","Volume":"47714000","Adj_Close":"67.129997"},{"Symbol":"FB","Date":"2014-06-25","Open":"65.580002","High":"67.480003","Low":"65.57","Close":"67.440002","Volume":"44308000","Adj_Close":"67.440002"},{"Symbol":"FB","Date":"2014-06-24","Open":"65.360001","High":"67.169998","Low":"65.269997","Close":"65.720001","Volume":"57335000","Adj_Close":"65.720001"},{"Symbol":"FB","Date":"2014-06-23","Open":"64.32","High":"65.660004","Low":"64.220001","Close":"65.370003","Volume":"34560000","Adj_Close":"65.370003"},{"Symbol":"FB","Date":"2014-06-20","Open":"64.459999","High":"64.809998","Low":"63.349998","Close":"64.50","Volume":"46466000","Adj_Close":"64.50"},{"Symbol":"FB","Date":"2014-06-19","Open":"65.459999","High":"65.580002","Low":"64.209999","Close":"64.339996","Volume":"34245000","Adj_Close":"64.339996"},{"Symbol":"FB","Date":"2014-06-18","Open":"64.489998","High":"65.75","Low":"64.050003","Close":"65.599998","Volume":"35570000","Adj_Close":"65.599998"},{"Symbol":"FB","Date":"2014-06-17","Open":"64.099998","High":"64.879997","Low":"63.93","Close":"64.400002","Volume":"27715000","Adj_Close":"64.400002"},{"Symbol":"FB","Date":"2014-06-16","Open":"64.160004","High":"64.879997","Low":"63.75","Close":"64.190002","Volume":"31046000","Adj_Close":"64.190002"},{"Symbol":"FB","Date":"2014-06-13","Open":"64.699997","High":"64.970001","Low":"63.830002","Close":"64.50","Volume":"29419000","Adj_Close":"64.50"},{"Symbol":"FB","Date":"2014-06-12","Open":"65.849998","High":"66.470001","Low":"64.059998","Close":"64.290001","Volume":"55730000","Adj_Close":"64.290001"},{"Symbol":"FB","Date":"2014-06-11","Open":"65.32","High":"65.800003","Low":"64.900002","Close":"65.779999","Volume":"44242000","Adj_Close":"65.779999"},{"Symbol":"FB","Date":"2014-06-10","Open":"63.529999","High":"65.82","Low":"63.50","Close":"65.769997","Volume":"69206900","Adj_Close":"65.769997"},{"Symbol":"FB","Date":"2014-06-09","Open":"62.400002","High":"63.34","Low":"61.790001","Close":"62.880001","Volume":"37617000","Adj_Close":"62.880001"},{"Symbol":"FB","Date":"2014-06-06","Open":"63.369999","High":"63.48","Low":"62.150002","Close":"62.50","Volume":"42442000","Adj_Close":"62.50"},{"Symbol":"FB","Date":"2014-06-05","Open":"63.66","High":"64.360001","Low":"62.82","Close":"63.189999","Volume":"47352000","Adj_Close":"63.189999"},{"Symbol":"FB","Date":"2014-06-04","Open":"62.450001","High":"63.59","Low":"62.07","Close":"63.34","Volume":"36514000","Adj_Close":"63.34"},{"Symbol":"FB","Date":"2014-06-03","Open":"62.619999","High":"63.419998","Low":"62.32","Close":"62.869999","Volume":"32217000","Adj_Close":"62.869999"},{"Symbol":"FB","Date":"2014-06-02","Open":"63.23","High":"63.59","Low":"62.049999","Close":"63.080002","Volume":"35947400","Adj_Close":"63.080002"},{"Symbol":"FB","Date":"2014-05-30","Open":"63.950001","High":"64.169998","Low":"62.560001","Close":"63.299999","Volume":"45253500","Adj_Close":"63.299999"},{"Symbol":"FB","Date":"2014-05-29","Open":"63.84","High":"64.300003","Low":"63.509998","Close":"63.830002","Volume":"42700000","Adj_Close":"63.830002"},{"Symbol":"FB","Date":"2014-05-28","Open":"63.389999","High":"64.139999","Low":"62.619999","Close":"63.509998","Volume":"47795000","Adj_Close":"63.509998"},{"Symbol":"FB","Date":"2014-05-27","Open":"61.619999","High":"63.509998","Low":"61.57","Close":"63.48","Volume":"55682000","Adj_Close":"63.48"},{"Symbol":"FB","Date":"2014-05-23","Open":"60.41","High":"61.450001","Low":"60.150002","Close":"61.349998","Volume":"38294000","Adj_Close":"61.349998"},{"Symbol":"FB","Date":"2014-05-22","Open":"60.939999","High":"61.48","Low":"60.400002","Close":"60.52","Volume":"54200000","Adj_Close":"60.52"},{"Symbol":"FB","Date":"2014-05-21","Open":"58.560001","High":"60.50","Low":"58.25","Close":"60.490002","Volume":"58992000","Adj_Close":"60.490002"},{"Symbol":"FB","Date":"2014-05-20","Open":"59.50","High":"60.189999","Low":"58.18","Close":"58.560001","Volume":"53931000","Adj_Close":"58.560001"},{"Symbol":"FB","Date":"2014-05-19","Open":"57.889999","High":"59.560001","Low":"57.57","Close":"59.209999","Volume":"43034000","Adj_Close":"59.209999"},{"Symbol":"FB","Date":"2014-05-16","Open":"58.310001","High":"58.450001","Low":"57.310001","Close":"58.02","Volume":"47933000","Adj_Close":"58.02"},{"Symbol":"FB","Date":"2014-05-15","Open":"59.259998","High":"59.380001","Low":"57.52","Close":"57.919998","Volume":"56814000","Adj_Close":"57.919998"},{"Symbol":"FB","Date":"2014-05-14","Open":"59.529999","High":"60.450001","Low":"58.950001","Close":"59.23","Volume":"47429000","Adj_Close":"59.23"},{"Symbol":"FB","Date":"2014-05-13","Open":"59.66","High":"60.889999","Low":"59.509998","Close":"59.830002","Volume":"48525000","Adj_Close":"59.830002"},{"Symbol":"FB","Date":"2014-05-12","Open":"57.98","High":"59.900002","Low":"57.98","Close":"59.830002","Volume":"48575000","Adj_Close":"59.830002"},{"Symbol":"FB","Date":"2014-05-09","Open":"56.849998","High":"57.650002","Low":"56.380001","Close":"57.240002","Volume":"52584000","Adj_Close":"57.240002"},{"Symbol":"FB","Date":"2014-05-08","Open":"57.23","High":"58.82","Low":"56.50","Close":"56.759998","Volume":"61251000","Adj_Close":"56.759998"},{"Symbol":"FB","Date":"2014-05-07","Open":"58.77","High":"59.299999","Low":"56.259998","Close":"57.389999","Volume":"78587000","Adj_Close":"57.389999"},{"Symbol":"FB","Date":"2014-05-06","Open":"60.98","High":"61.150002","Low":"58.490002","Close":"58.529999","Volume":"55901000","Adj_Close":"58.529999"},{"Symbol":"FB","Date":"2014-05-05","Open":"59.669998","High":"61.349998","Low":"59.18","Close":"61.220001","Volume":"46057000","Adj_Close":"61.220001"},{"Symbol":"FB","Date":"2014-05-02","Open":"61.299999","High":"61.889999","Low":"60.18","Close":"60.459999","Volume":"54189000","Adj_Close":"60.459999"},{"Symbol":"FB","Date":"2014-05-01","Open":"60.43","High":"62.279999","Low":"60.209999","Close":"61.150002","Volume":"82429000","Adj_Close":"61.150002"},{"Symbol":"FB","Date":"2014-04-30","Open":"57.580002","High":"59.849998","Low":"57.16","Close":"59.779999","Volume":"76093000","Adj_Close":"59.779999"},{"Symbol":"FB","Date":"2014-04-29","Open":"56.09","High":"58.279999","Low":"55.84","Close":"58.150002","Volume":"75557000","Adj_Close":"58.150002"},{"Symbol":"FB","Date":"2014-04-28","Open":"58.049999","High":"58.310001","Low":"54.66","Close":"56.139999","Volume":"107758000","Adj_Close":"56.139999"},{"Symbol":"FB","Date":"2014-04-25","Open":"59.970001","High":"60.009998","Low":"57.57","Close":"57.709999","Volume":"92502000","Adj_Close":"57.709999"},{"Symbol":"FB","Date":"2014-04-24","Open":"63.599998","High":"63.650002","Low":"59.77","Close":"60.869999","Volume":"138769000","Adj_Close":"60.869999"},{"Symbol":"FB","Date":"2014-04-23","Open":"63.450001","High":"63.48","Low":"61.259998","Close":"61.360001","Volume":"96565000","Adj_Close":"61.360001"},{"Symbol":"FB","Date":"2014-04-22","Open":"62.650002","High":"63.439999","Low":"62.220001","Close":"63.029999","Volume":"60631000","Adj_Close":"63.029999"},{"Symbol":"FB","Date":"2014-04-21","Open":"59.459999","High":"61.240002","Low":"59.150002","Close":"61.240002","Volume":"60364000","Adj_Close":"61.240002"},{"Symbol":"FB","Date":"2014-04-17","Open":"59.299999","High":"60.580002","Low":"58.720001","Close":"58.939999","Volume":"88040000","Adj_Close":"58.939999"},{"Symbol":"FB","Date":"2014-04-16","Open":"59.790001","High":"60.189999","Low":"57.740002","Close":"59.720001","Volume":"78774000","Adj_Close":"59.720001"},{"Symbol":"FB","Date":"2014-04-15","Open":"59.290001","High":"59.68","Low":"55.880001","Close":"59.09","Volume":"108623000","Adj_Close":"59.09"},{"Symbol":"FB","Date":"2014-04-14","Open":"60.09","High":"60.450001","Low":"57.779999","Close":"58.889999","Volume":"72325000","Adj_Close":"58.889999"},{"Symbol":"FB","Date":"2014-04-11","Open":"57.599998","High":"60.310001","Low":"57.310001","Close":"58.529999","Volume":"91452000","Adj_Close":"58.529999"},{"Symbol":"FB","Date":"2014-04-10","Open":"63.080002","High":"63.18","Low":"58.68","Close":"59.16","Volume":"114988000","Adj_Close":"59.16"},{"Symbol":"FB","Date":"2014-04-09","Open":"59.630001","High":"62.459999","Low":"59.189999","Close":"62.41","Volume":"100215000","Adj_Close":"62.41"},{"Symbol":"FB","Date":"2014-04-08","Open":"57.68","High":"58.709999","Low":"57.169998","Close":"58.189999","Volume":"78836000","Adj_Close":"58.189999"},{"Symbol":"FB","Date":"2014-04-07","Open":"55.900002","High":"58.00","Low":"55.439999","Close":"56.950001","Volume":"108488000","Adj_Close":"56.950001"},{"Symbol":"FB","Date":"2014-04-04","Open":"59.939999","High":"60.200001","Low":"56.32","Close":"56.75","Volume":"125214400","Adj_Close":"56.75"},{"Symbol":"FB","Date":"2014-04-03","Open":"62.549999","High":"63.169998","Low":"59.130001","Close":"59.490002","Volume":"83859000","Adj_Close":"59.490002"},{"Symbol":"FB","Date":"2014-04-02","Open":"63.209999","High":"63.91","Low":"62.209999","Close":"62.720001","Volume":"66277000","Adj_Close":"62.720001"},{"Symbol":"FB","Date":"2014-04-01","Open":"60.459999","High":"62.66","Low":"60.240002","Close":"62.619999","Volume":"59291000","Adj_Close":"62.619999"},{"Symbol":"FB","Date":"2014-03-31","Open":"60.779999","High":"61.52","Low":"59.869999","Close":"60.240002","Volume":"53011000","Adj_Close":"60.240002"},{"Symbol":"FB","Date":"2014-03-28","Open":"61.34","High":"61.950001","Low":"59.34","Close":"60.009998","Volume":"67052000","Adj_Close":"60.009998"},{"Symbol":"FB","Date":"2014-03-27","Open":"60.509998","High":"61.900002","Low":"57.98","Close":"60.970001","Volume":"112650000","Adj_Close":"60.970001"},{"Symbol":"FB","Date":"2014-03-26","Open":"64.739998","High":"64.949997","Low":"60.369999","Close":"60.389999","Volume":"97503900","Adj_Close":"60.389999"},{"Symbol":"FB","Date":"2014-03-25","Open":"64.889999","High":"66.190002","Low":"63.779999","Close":"64.889999","Volume":"68786000","Adj_Close":"64.889999"},{"Symbol":"FB","Date":"2014-03-24","Open":"67.190002","High":"67.360001","Low":"63.360001","Close":"64.099998","Volume":"85696000","Adj_Close":"64.099998"},{"Symbol":"FB","Date":"2014-03-21","Open":"67.529999","High":"67.919998","Low":"66.18","Close":"67.239998","Volume":"59999900","Adj_Close":"67.239998"},{"Symbol":"FB","Date":"2014-03-20","Open":"68.010002","High":"68.230003","Low":"66.82","Close":"66.970001","Volume":"44439000","Adj_Close":"66.970001"},{"Symbol":"FB","Date":"2014-03-19","Open":"69.169998","High":"69.290001","Low":"67.470001","Close":"68.239998","Volume":"43981000","Adj_Close":"68.239998"},{"Symbol":"FB","Date":"2014-03-18","Open":"68.760002","High":"69.599998","Low":"68.300003","Close":"69.190002","Volume":"40827000","Adj_Close":"69.190002"},{"Symbol":"FB","Date":"2014-03-17","Open":"68.18","High":"68.949997","Low":"66.620003","Close":"68.739998","Volume":"52197000","Adj_Close":"68.739998"},{"Symbol":"FB","Date":"2014-03-14","Open":"68.489998","High":"69.43","Low":"67.459999","Close":"67.720001","Volume":"48227000","Adj_Close":"67.720001"},{"Symbol":"FB","Date":"2014-03-13","Open":"71.290001","High":"71.349998","Low":"68.150002","Close":"68.830002","Volume":"57091000","Adj_Close":"68.830002"},{"Symbol":"FB","Date":"2014-03-12","Open":"69.860001","High":"71.349998","Low":"69.00","Close":"70.879997","Volume":"46340500","Adj_Close":"70.879997"},{"Symbol":"FB","Date":"2014-03-11","Open":"72.50","High":"72.589996","Low":"69.959999","Close":"70.099998","Volume":"59408300","Adj_Close":"70.099998"},{"Symbol":"FB","Date":"2014-03-10","Open":"70.769997","High":"72.150002","Low":"70.510002","Close":"72.029999","Volume":"59871600","Adj_Close":"72.029999"},{"Symbol":"FB","Date":"2014-03-07","Open":"71.080002","High":"71.18","Low":"69.470001","Close":"69.800003","Volume":"38927000","Adj_Close":"69.800003"},{"Symbol":"FB","Date":"2014-03-06","Open":"71.879997","High":"71.889999","Low":"70.25","Close":"70.839996","Volume":"46026500","Adj_Close":"70.839996"},{"Symbol":"FB","Date":"2014-03-05","Open":"69.690002","High":"71.970001","Low":"69.620003","Close":"71.57","Volume":"74567700","Adj_Close":"71.57"},{"Symbol":"FB","Date":"2014-03-04","Open":"68.660004","High":"68.900002","Low":"67.620003","Close":"68.800003","Volume":"42013500","Adj_Close":"68.800003"},{"Symbol":"FB","Date":"2014-03-03","Open":"66.959999","High":"68.050003","Low":"66.510002","Close":"67.410004","Volume":"56824100","Adj_Close":"67.410004"},{"Symbol":"FB","Date":"2014-02-28","Open":"69.470001","High":"69.879997","Low":"67.379997","Close":"68.459999","Volume":"66783700","Adj_Close":"68.459999"},{"Symbol":"FB","Date":"2014-02-27","Open":"69.339996","High":"70.010002","Low":"68.870003","Close":"68.940002","Volume":"41653700","Adj_Close":"68.940002"},{"Symbol":"FB","Date":"2014-02-26","Open":"70.190002","High":"71.220001","Low":"68.849998","Close":"69.260002","Volume":"55322700","Adj_Close":"69.260002"},{"Symbol":"FB","Date":"2014-02-25","Open":"70.949997","High":"71.00","Low":"69.449997","Close":"69.849998","Volume":"52077000","Adj_Close":"69.849998"},{"Symbol":"FB","Date":"2014-02-24","Open":"68.739998","High":"71.440002","Low":"68.540001","Close":"70.779999","Volume":"76620300","Adj_Close":"70.779999"},{"Symbol":"FB","Date":"2014-02-21","Open":"69.690002","High":"69.959999","Low":"68.449997","Close":"68.589996","Volume":"70932400","Adj_Close":"68.589996"},{"Symbol":"FB","Date":"2014-02-20","Open":"67.730003","High":"70.110001","Low":"65.730003","Close":"69.629997","Volume":"130928900","Adj_Close":"69.629997"},{"Symbol":"FB","Date":"2014-02-19","Open":"67.050003","High":"69.080002","Low":"67.00","Close":"68.059998","Volume":"62087100","Adj_Close":"68.059998"},{"Symbol":"FB","Date":"2014-02-18","Open":"66.940002","High":"67.540001","Low":"66.07","Close":"67.300003","Volume":"43809900","Adj_Close":"67.300003"},{"Symbol":"FB","Date":"2014-02-14","Open":"67.50","High":"67.580002","Low":"66.720001","Close":"67.089996","Volume":"36694900","Adj_Close":"67.089996"},{"Symbol":"FB","Date":"2014-02-13","Open":"64.18","High":"67.330002","Low":"64.050003","Close":"67.330002","Volume":"61911700","Adj_Close":"67.330002"},{"Symbol":"FB","Date":"2014-02-12","Open":"64.919998","High":"65.059998","Low":"64.050003","Close":"64.449997","Volume":"47282100","Adj_Close":"64.449997"},{"Symbol":"FB","Date":"2014-02-11","Open":"63.75","High":"65.00","Low":"63.349998","Close":"64.849998","Volume":"45675600","Adj_Close":"64.849998"},{"Symbol":"FB","Date":"2014-02-10","Open":"64.300003","High":"64.489998","Low":"63.470001","Close":"63.549999","Volume":"43666100","Adj_Close":"63.549999"},{"Symbol":"FB","Date":"2014-02-07","Open":"62.27","High":"64.57","Low":"62.220001","Close":"64.32","Volume":"60704300","Adj_Close":"64.32"},{"Symbol":"FB","Date":"2014-02-06","Open":"61.459999","High":"62.779999","Low":"61.459999","Close":"62.16","Volume":"42086500","Adj_Close":"62.16"},{"Symbol":"FB","Date":"2014-02-05","Open":"62.740002","High":"63.16","Low":"61.27","Close":"62.189999","Volume":"51685100","Adj_Close":"62.189999"},{"Symbol":"FB","Date":"2014-02-04","Open":"62.049999","High":"63.139999","Low":"61.82","Close":"62.75","Volume":"45985500","Adj_Close":"62.75"},{"Symbol":"FB","Date":"2014-02-03","Open":"63.029999","High":"63.77","Low":"60.700001","Close":"61.48","Volume":"74866600","Adj_Close":"61.48"},{"Symbol":"FB","Date":"2014-01-31","Open":"60.470001","High":"63.369999","Low":"60.169998","Close":"62.57","Volume":"87794600","Adj_Close":"62.57"},{"Symbol":"FB","Date":"2014-01-30","Open":"62.119999","High":"62.50","Low":"60.459999","Close":"61.080002","Volume":"150178900","Adj_Close":"61.080002"},{"Symbol":"FB","Date":"2014-01-29","Open":"54.610001","High":"54.950001","Low":"53.189999","Close":"53.529999","Volume":"92995600","Adj_Close":"53.529999"},{"Symbol":"FB","Date":"2014-01-28","Open":"54.02","High":"55.279999","Low":"54.00","Close":"55.139999","Volume":"48191200","Adj_Close":"55.139999"},{"Symbol":"FB","Date":"2014-01-27","Open":"54.73","High":"54.939999","Low":"51.849998","Close":"53.549999","Volume":"73924100","Adj_Close":"53.549999"},{"Symbol":"FB","Date":"2014-01-24","Open":"56.150002","High":"56.419998","Low":"54.400002","Close":"54.450001","Volume":"55200700","Adj_Close":"54.450001"},{"Symbol":"FB","Date":"2014-01-23","Open":"56.369999","High":"56.68","Low":"55.689999","Close":"56.630001","Volume":"47951800","Adj_Close":"56.630001"},{"Symbol":"FB","Date":"2014-01-22","Open":"58.849998","High":"59.310001","Low":"57.099998","Close":"57.509998","Volume":"61352900","Adj_Close":"57.509998"},{"Symbol":"FB","Date":"2014-01-21","Open":"56.599998","High":"58.580002","Low":"56.50","Close":"58.509998","Volume":"48669200","Adj_Close":"58.509998"},{"Symbol":"FB","Date":"2014-01-17","Open":"57.299999","High":"57.82","Low":"56.07","Close":"56.299999","Volume":"40849200","Adj_Close":"56.299999"},{"Symbol":"FB","Date":"2014-01-16","Open":"57.259998","High":"58.02","Low":"56.830002","Close":"57.189999","Volume":"34541800","Adj_Close":"57.189999"},{"Symbol":"FB","Date":"2014-01-15","Open":"57.98","High":"58.57","Low":"57.27","Close":"57.599998","Volume":"33663400","Adj_Close":"57.599998"},{"Symbol":"FB","Date":"2014-01-14","Open":"56.459999","High":"57.779999","Low":"56.099998","Close":"57.740002","Volume":"37503600","Adj_Close":"57.740002"},{"Symbol":"FB","Date":"2014-01-13","Open":"57.91","High":"58.25","Low":"55.380001","Close":"55.91","Volume":"63010900","Adj_Close":"55.91"},{"Symbol":"FB","Date":"2014-01-10","Open":"57.130001","High":"58.299999","Low":"57.060001","Close":"57.939999","Volume":"42449500","Adj_Close":"57.939999"},{"Symbol":"FB","Date":"2014-01-09","Open":"58.650002","High":"58.959999","Low":"56.650002","Close":"57.220001","Volume":"92253300","Adj_Close":"57.220001"},{"Symbol":"FB","Date":"2014-01-08","Open":"57.599998","High":"58.41","Low":"57.23","Close":"58.23","Volume":"56682400","Adj_Close":"58.23"},{"Symbol":"FB","Date":"2014-01-07","Open":"57.700001","High":"58.549999","Low":"57.220001","Close":"57.919998","Volume":"77207400","Adj_Close":"57.919998"},{"Symbol":"FB","Date":"2014-01-06","Open":"54.419998","High":"57.259998","Low":"54.049999","Close":"57.200001","Volume":"68852600","Adj_Close":"57.200001"},{"Symbol":"FB","Date":"2014-01-03","Open":"55.02","High":"55.650002","Low":"54.529999","Close":"54.560001","Volume":"38246200","Adj_Close":"54.560001"},{"Symbol":"FB","Date":"2014-01-02","Open":"54.830002","High":"55.220001","Low":"54.189999","Close":"54.709999","Volume":"43195500","Adj_Close":"54.709999"}]}}},
{"query":{"count":252,"created":"2016-03-30T22:05:51Z","lang":"en-US","diagnostics":{"url":[{"execution-start-time":"0","execution-stop-time":"1","execution-time":"1","proxy":"DEFAULT","content":"http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"},{"execution-start-time":"5","execution-stop-time":"19","execution-time":"14","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=LNKD"},{"execution-start-time":"24","execution-stop-time":"25","execution-time":"1","proxy":"DEFAULT","content":"http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=LNKD"}],"publiclyCallable":"true","cache":[{"execution-start-time":"4","execution-stop-time":"4","execution-time":"0","method":"GET","type":"MEMCACHED","content":"980f7b71fa9724f5490cc7bcf062da48"},{"execution-start-time":"22","execution-stop-time":"23","execution-time":"1","method":"GET","type":"MEMCACHED","content":"9a6f2d1ca549e3c5f4c64da95400dbdf"}],"query":[{"execution-start-time":"5","execution-stop-time":"22","execution-time":"17","params":"{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=LNKD]}","content":"select * from csv(0,1) where url=@url"},{"execution-start-time":"23","execution-stop-time":"27","execution-time":"4","params":"{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=1&e=31&g=d&c=2014&d=11&f=2014&s=LNKD]}","content":"select * from csv(2,0) where url=@url and columns=@columnsNames"}],"javascript":{"execution-start-time":"3","execution-stop-time":"961","execution-time":"958","instructions-used":"24196296","table-name":"yahoo.finance.historicaldata"},"user-time":"966","service-time":"17","build-version":"0.2.426"},"results":{"quote":[{"Symbol":"LNKD","Date":"2014-12-31","Open":"233.089996","High":"233.699997","Low":"229.110001","Close":"229.710007","Volume":"599800","Adj_Close":"229.710007"},{"Symbol":"LNKD","Date":"2014-12-30","Open":"232.369995","High":"234.160004","Low":"230.259995","Close":"232.669998","Volume":"533900","Adj_Close":"232.669998"},{"Symbol":"LNKD","Date":"2014-12-29","Open":"235.300003","High":"237.190002","Low":"232.410004","Close":"233.339996","Volume":"714800","Adj_Close":"233.339996"},{"Symbol":"LNKD","Date":"2014-12-26","Open":"232.270004","High":"237.039993","Low":"231.529999","Close":"235.25","Volume":"790900","Adj_Close":"235.25"},{"Symbol":"LNKD","Date":"2014-12-24","Open":"231.240005","High":"234.729996","Low":"230.210007","Close":"231.830002","Volume":"478400","Adj_Close":"231.830002"},{"Symbol":"LNKD","Date":"2014-12-23","Open":"235.190002","High":"238.190002","Low":"230.880005","Close":"231.490005","Volume":"1278300","Adj_Close":"231.490005"},{"Symbol":"LNKD","Date":"2014-12-22","Open":"234.710007","High":"235.25","Low":"231.009995","Close":"233.00","Volume":"1398700","Adj_Close":"233.00"},{"Symbol":"LNKD","Date":"2014-12-19","Open":"232.809998","High":"243.25","Low":"231.320007","Close":"234.610001","Volume":"3310200","Adj_Close":"234.610001"},{"Symbol":"LNKD","Date":"2014-12-18","Open":"224.050003","High":"232.300003","Low":"223.559998","Close":"231.839996","Volume":"2370400","Adj_Close":"231.839996"},{"Symbol":"LNKD","Date":"2014-12-17","Open":"216.529999","High":"220.600006","Low":"215.100006","Close":"219.779999","Volume":"1143700","Adj_Close":"219.779999"},{"Symbol":"LNKD","Date":"2014-12-16","Open":"215.830002","High":"221.630005","Low":"214.940002","Close":"215.570007","Volume":"1423700","Adj_Close":"215.570007"},{"Symbol":"LNKD","Date":"2014-12-15","Open":"221.710007","High":"223.169998","Low":"217.869995","Close":"218.020004","Volume":"1072400","Adj_Close":"218.020004"},{"Symbol":"LNKD","Date":"2014-12-12","Open":"214.970001","High":"221.860001","Low":"214.270004","Close":"219.899994","Volume":"1278100","Adj_Close":"219.899994"},{"Symbol":"LNKD","Date":"2014-12-11","Open":"215.190002","High":"220.75","Low":"214.199997","Close":"217.360001","Volume":"1154800","Adj_Close":"217.360001"},{"Symbol":"LNKD","Date":"2014-12-10","Open":"215.380005","High":"218.410004","Low":"214.029999","Close":"215.070007","Volume":"1297900","Adj_Close":"215.070007"},{"Symbol":"LNKD","Date":"2014-12-09","Open":"207.039993","High":"215.679993","Low":"205.00","Close":"215.470001","Volume":"1172400","Adj_Close":"215.470001"},{"Symbol":"LNKD","Date":"2014-12-08","Open":"216.899994","High":"218.429993","Low":"209.50","Close":"211.940002","Volume":"1908400","Adj_Close":"211.940002"},{"Symbol":"LNKD","Date":"2014-12-05","Open":"218.259995","High":"219.029999","Low":"216.020004","Close":"218.080002","Volume":"1185700","Adj_Close":"218.080002"},{"Symbol":"LNKD","Date":"2014-12-04","Open":"216.229996","High":"219.990005","Low":"216.080002","Close":"218.830002","Volume":"774500","Adj_Close":"218.830002"},{"Symbol":"LNKD","Date":"2014-12-03","Open":"216.869995","High":"218.800003","Low":"213.25","Close":"217.740005","Volume":"1197900","Adj_Close":"217.740005"},{"Symbol":"LNKD","Date":"2014-12-02","Open":"217.880005","High":"218.50","Low":"213.710007","Close":"215.020004","Volume":"1295900","Adj_Close":"215.020004"},{"Symbol":"LNKD","Date":"2014-12-01","Open":"225.809998","High":"225.880005","Low":"216.070007","Close":"216.809998","Volume":"1577200","Adj_Close":"216.809998"},{"Symbol":"LNKD","Date":"2014-11-28","Open":"225.720001","High":"227.899994","Low":"224.00","Close":"226.270004","Volume":"493200","Adj_Close":"226.270004"},{"Symbol":"LNKD","Date":"2014-11-26","Open":"223.759995","High":"226.740005","Low":"222.589996","Close":"226.339996","Volume":"969600","Adj_Close":"226.339996"},{"Symbol":"LNKD","Date":"2014-11-25","Open":"221.559998","High":"224.860001","Low":"221.169998","Close":"224.350006","Volume":"1015600","Adj_Close":"224.350006"},{"Symbol":"LNKD","Date":"2014-11-24","Open":"219.199997","High":"222.00","Low":"215.520004","Close":"221.759995","Volume":"1159500","Adj_Close":"221.759995"},{"Symbol":"LNKD","Date":"2014-11-21","Open":"222.899994","High":"224.50","Low":"218.00","Close":"219.089996","Volume":"1050200","Adj_Close":"219.089996"},{"Symbol":"LNKD","Date":"2014-11-20","Open":"218.50","High":"222.259995","Low":"217.110001","Close":"220.300003","Volume":"798400","Adj_Close":"220.300003"},{"Symbol":"LNKD","Date":"2014-11-19","Open":"220.100006","High":"222.100006","Low":"216.380005","Close":"219.610001","Volume":"1288500","Adj_Close":"219.610001"},{"Symbol":"LNKD","Date":"2014-11-18","Open":"219.279999","High":"225.50","Low":"219.00","Close":"221.070007","Volume":"1973100","Adj_Close":"221.070007"},{"Symbol":"LNKD","Date":"2014-11-17","Open":"229.440002","High":"230.690002","Low":"219.440002","Close":"223.279999","Volume":"2756000","Adj_Close":"223.279999"},{"Symbol":"LNKD","Date":"2014-11-14","Open":"230.059998","High":"234.830002","Low":"229.720001","Close":"233.889999","Volume":"1395500","Adj_Close":"233.889999"},{"Symbol":"LNKD","Date":"2014-11-13","Open":"231.899994","High":"234.789993","Low":"228.509995","Close":"229.770004","Volume":"1366500","Adj_Close":"229.770004"},{"Symbol":"LNKD","Date":"2014-11-12","Open":"230.880005","High":"231.440002","Low":"228.199997","Close":"231.130005","Volume":"1022900","Adj_Close":"231.130005"},{"Symbol":"LNKD","Date":"2014-11-11","Open":"229.210007","High":"231.460007","Low":"226.119995","Close":"231.00","Volume":"1050700","Adj_Close":"231.00"},{"Symbol":"LNKD","Date":"2014-11-10","Open":"221.75","High":"230.279999","Low":"221.660004","Close":"229.25","Volume":"1482400","Adj_Close":"229.25"},{"Symbol":"LNKD","Date":"2014-11-07","Open":"224.649994","High":"226.419998","Low":"222.179993","Close":"223.039993","Volume":"1363400","Adj_Close":"223.039993"},{"Symbol":"LNKD","Date":"2014-11-06","Open":"221.839996","High":"226.979996","Low":"221.25","Close":"224.649994","Volume":"3299600","Adj_Close":"224.649994"},{"Symbol":"LNKD","Date":"2014-11-05","Open":"235.960007","High":"236.679993","Low":"218.179993","Close":"218.179993","Volume":"3769500","Adj_Close":"218.179993"},{"Symbol":"LNKD","Date":"2014-11-04","Open":"232.490005","High":"238.770004","Low":"231.869995","Close":"238.429993","Volume":"2463300","Adj_Close":"238.429993"},{"Symbol":"LNKD","Date":"2014-11-03","Open":"228.210007","High":"236.149994","Low":"226.440002","Close":"233.080002","Volume":"2936200","Adj_Close":"233.080002"},{"Symbol":"LNKD","Date":"2014-10-31","Open":"224.240005","High":"232.229996","Low":"222.729996","Close":"228.960007","Volume":"6947100","Adj_Close":"228.960007"},{"Symbol":"LNKD","Date":"2014-10-30","Open":"198.460007","High":"203.740005","Low":"195.50","Close":"202.899994","Volume":"4365400","Adj_Close":"202.899994"},{"Symbol":"LNKD","Date":"2014-10-29","Open":"202.990005","High":"202.990005","Low":"197.119995","Close":"199.509995","Volume":"1742500","Adj_Close":"199.509995"},{"Symbol":"LNKD","Date":"2014-10-28","Open":"199.119995","High":"205.800003","Low":"198.630005","Close":"205.350006","Volume":"1293600","Adj_Close":"205.350006"},{"Symbol":"LNKD","Date":"2014-10-27","Open":"202.309998","High":"202.309998","Low":"198.50","Close":"199.990005","Volume":"956900","Adj_Close":"199.990005"},{"Symbol":"LNKD","Date":"2014-10-24","Open":"201.50","High":"203.490005","Low":"199.199997","Close":"202.100006","Volume":"873100","Adj_Close":"202.100006"},{"Symbol":"LNKD","Date":"2014-10-23","Open":"202.979996","High":"204.779999","Low":"199.550003","Close":"202.619995","Volume":"1062400","Adj_Close":"202.619995"},{"Symbol":"LNKD","Date":"2014-10-22","Open":"206.399994","High":"206.399994","Low":"198.279999","Close":"198.520004","Volume":"1442200","Adj_Close":"198.520004"},{"Symbol":"LNKD","Date":"2014-10-21","Open":"201.00","High":"206.889999","Low":"200.00","Close":"205.380005","Volume":"1524500","Adj_Close":"205.380005"},{"Symbol":"LNKD","Date":"2014-10-20","Open":"195.699997","High":"199.50","Low":"193.220001","Close":"198.440002","Volume":"1033300","Adj_Close":"198.440002"},{"Symbol":"LNKD","Date":"2014-10-17","Open":"201.660004","High":"201.660004","Low":"195.50","Close":"195.960007","Volume":"1415400","Adj_Close":"195.960007"},{"Symbol":"LNKD","Date":"2014-10-16","Open":"188.690002","High":"202.479996","Low":"187.610001","Close":"198.389999","Volume":"2032500","Adj_Close":"198.389999"},{"Symbol":"LNKD","Date":"2014-10-15","Open":"192.00","High":"200.850006","Low":"191.449997","Close":"199.619995","Volume":"1538000","Adj_Close":"199.619995"},{"Symbol":"LNKD","Date":"2014-10-14","Open":"195.009995","High":"199.639999","Low":"193.210007","Close":"196.020004","Volume":"1034300","Adj_Close":"196.020004"},{"Symbol":"LNKD","Date":"2014-10-13","Open":"195.059998","High":"199.240005","Low":"189.199997","Close":"193.130005","Volume":"1843200","Adj_Close":"193.130005"},{"Symbol":"LNKD","Date":"2014-10-10","Open":"200.669998","High":"205.220001","Low":"194.130005","Close":"194.229996","Volume":"2397800","Adj_Close":"194.229996"},{"Symbol":"LNKD","Date":"2014-10-09","Open":"206.839996","High":"206.979996","Low":"200.649994","Close":"201.990005","Volume":"1682900","Adj_Close":"201.990005"},{"Symbol":"LNKD","Date":"2014-10-08","Open":"204.350006","High":"207.080002","Low":"192.190002","Close":"207.070007","Volume":"2065100","Adj_Close":"207.070007"},{"Symbol":"LNKD","Date":"2014-10-07","Open":"207.839996","High":"208.770004","Low":"204.029999","Close":"204.389999","Volume":"1199100","Adj_Close":"204.389999"},{"Symbol":"LNKD","Date":"2014-10-06","Open":"211.889999","High":"213.630005","Low":"207.720001","Close":"208.220001","Volume":"1190600","Adj_Close":"208.220001"},{"Symbol":"LNKD","Date":"2014-10-03","Open":"210.089996","High":"213.399994","Low":"207.740005","Close":"210.869995","Volume":"1455700","Adj_Close":"210.869995"},{"Symbol":"LNKD","Date":"2014-10-02","Open":"203.399994","High":"208.389999","Low":"200.800003","Close":"207.00","Volume":"1524700","Adj_Close":"207.00"},{"Symbol":"LNKD","Date":"2014-10-01","Open":"207.419998","High":"208.199997","Low":"201.00","Close":"203.080002","Volume":"1872200","Adj_Close":"203.080002"},{"Symbol":"LNKD","Date":"2014-09-30","Open":"210.259995","High":"211.960007","Low":"205.550003","Close":"207.789993","Volume":"1268900","Adj_Close":"207.789993"},{"Symbol":"LNKD","Date":"2014-09-29","Open":"211.029999","High":"213.490005","Low":"209.110001","Close":"210.380005","Volume":"980900","Adj_Close":"210.380005"},{"Symbol":"LNKD","Date":"2014-09-26","Open":"210.100006","High":"215.149994","Low":"209.009995","Close":"212.720001","Volume":"1957800","Adj_Close":"212.720001"},{"Symbol":"LNKD","Date":"2014-09-25","Open":"210.809998","High":"211.419998","Low":"205.759995","Close":"206.039993","Volume":"1554100","Adj_Close":"206.039993"},{"Symbol":"LNKD","Date":"2014-09-24","Open":"207.039993","High":"212.889999","Low":"206.020004","Close":"211.630005","Volume":"1580900","Adj_Close":"211.630005"},{"Symbol":"LNKD","Date":"2014-09-23","Open":"205.399994","High":"209.990005","Low":"205.279999","Close":"206.210007","Volume":"1628500","Adj_Close":"206.210007"},{"Symbol":"LNKD","Date":"2014-09-22","Open":"210.679993","High":"210.820007","Low":"204.289993","Close":"206.889999","Volume":"1545900","Adj_Close":"206.889999"},{"Symbol":"LNKD","Date":"2014-09-19","Open":"211.00","High":"211.970001","Low":"207.179993","Close":"211.169998","Volume":"1643200","Adj_Close":"211.169998"},{"Symbol":"LNKD","Date":"2014-09-18","Open":"210.399994","High":"211.479996","Low":"209.029999","Close":"210.50","Volume":"1020600","Adj_Close":"210.50"},{"Symbol":"LNKD","Date":"2014-09-17","Open":"212.990005","High":"215.470001","Low":"208.759995","Close":"210.039993","Volume":"1656800","Adj_Close":"210.039993"},{"Symbol":"LNKD","Date":"2014-09-16","Open":"206.110001","High":"213.75","Low":"204.220001","Close":"212.380005","Volume":"2971500","Adj_Close":"212.380005"},{"Symbol":"LNKD","Date":"2014-09-15","Open":"224.50","High":"224.50","Low":"206.690002","Close":"207.710007","Volume":"3929500","Adj_Close":"207.710007"},{"Symbol":"LNKD","Date":"2014-09-12","Open":"226.330002","High":"226.520004","Low":"223.279999","Close":"224.830002","Volume":"1391700","Adj_Close":"224.830002"},{"Symbol":"LNKD","Date":"2014-09-11","Open":"229.539993","High":"230.470001","Low":"224.119995","Close":"226.610001","Volume":"1894700","Adj_Close":"226.610001"},{"Symbol":"LNKD","Date":"2014-09-10","Open":"229.490005","High":"231.289993","Low":"226.729996","Close":"231.00","Volume":"851800","Adj_Close":"231.00"},{"Symbol":"LNKD","Date":"2014-09-09","Open":"230.660004","High":"232.279999","Low":"227.380005","Close":"228.740005","Volume":"1270900","Adj_Close":"228.740005"},{"Symbol":"LNKD","Date":"2014-09-08","Open":"229.320007","High":"231.649994","Low":"228.759995","Close":"230.600006","Volume":"985900","Adj_Close":"230.600006"},{"Symbol":"LNKD","Date":"2014-09-05","Open":"227.100006","High":"230.570007","Low":"225.729996","Close":"229.630005","Volume":"1556000","Adj_Close":"229.630005"},{"Symbol":"LNKD","Date":"2014-09-04","Open":"225.339996","High":"230.740005","Low":"225.210007","Close":"227.550003","Volume":"1717300","Adj_Close":"227.550003"},{"Symbol":"LNKD","Date":"2014-09-03","Open":"227.539993","High":"227.979996","Low":"223.399994","Close":"225.050003","Volume":"1593100","Adj_Close":"225.050003"},{"Symbol":"LNKD","Date":"2014-09-02","Open":"225.910004","High":"228.699997","Low":"224.139999","Close":"225.00","Volume":"1602600","Adj_Close":"225.00"},{"Symbol":"LNKD","Date":"2014-08-29","Open":"223.910004","High":"226.720001","Low":"223.350006","Close":"225.75","Volume":"1029500","Adj_Close":"225.75"},{"Symbol":"LNKD","Date":"2014-08-28","Open":"222.759995","High":"224.199997","Low":"221.919998","Close":"223.259995","Volume":"1011700","Adj_Close":"223.259995"},{"Symbol":"LNKD","Date":"2014-08-27","Open":"225.100006","High":"225.520004","Low":"222.649994","Close":"224.199997","Volume":"930300","Adj_Close":"224.199997"},{"Symbol":"LNKD","Date":"2014-08-26","Open":"223.25","High":"226.589996","Low":"221.520004","Close":"225.360001","Volume":"1173700","Adj_Close":"225.360001"},{"Symbol":"LNKD","Date":"2014-08-25","Open":"227.600006","High":"227.800003","Low":"221.720001","Close":"222.479996","Volume":"1899200","Adj_Close":"222.479996"},{"Symbol":"LNKD","Date":"2014-08-22","Open":"218.399994","High":"227.419998","Low":"217.369995","Close":"226.399994","Volume":"2687300","Adj_Close":"226.399994"},{"Symbol":"LNKD","Date":"2014-08-21","Open":"218.00","High":"219.479996","Low":"216.639999","Close":"219.199997","Volume":"1068800","Adj_Close":"219.199997"},{"Symbol":"LNKD","Date":"2014-08-20","Open":"215.529999","High":"218.860001","Low":"214.800003","Close":"217.919998","Volume":"1101700","Adj_Close":"217.919998"},{"Symbol":"LNKD","Date":"2014-08-19","Open":"218.759995","High":"221.940002","Low":"216.399994","Close":"216.710007","Volume":"2043700","Adj_Close":"216.710007"},{"Symbol":"LNKD","Date":"2014-08-18","Open":"216.509995","High":"220.550003","Low":"216.330002","Close":"218.660004","Volume":"2280900","Adj_Close":"218.660004"},{"Symbol":"LNKD","Date":"2014-08-15","Open":"218.869995","High":"220.009995","Low":"214.229996","Close":"219.860001","Volume":"2439200","Adj_Close":"219.860001"},{"Symbol":"LNKD","Date":"2014-08-14","Open":"216.160004","High":"219.009995","Low":"215.00","Close":"218.360001","Volume":"1552100","Adj_Close":"218.360001"},{"Symbol":"LNKD","Date":"2014-08-13","Open":"214.100006","High":"216.330002","Low":"213.50","Close":"215.139999","Volume":"1411400","Adj_Close":"215.139999"},{"Symbol":"LNKD","Date":"2014-08-12","Open":"212.070007","High":"213.839996","Low":"210.070007","Close":"213.380005","Volume":"1179200","Adj_Close":"213.380005"},{"Symbol":"LNKD","Date":"2014-08-11","Open":"209.089996","High":"214.070007","Low":"209.089996","Close":"212.899994","Volume":"2113800","Adj_Close":"212.899994"},{"Symbol":"LNKD","Date":"2014-08-08","Open":"207.00","High":"208.259995","Low":"204.00","Close":"208.119995","Volume":"1649400","Adj_Close":"208.119995"},{"Symbol":"LNKD","Date":"2014-08-07","Open":"204.089996","High":"208.75","Low":"203.25","Close":"206.759995","Volume":"2060700","Adj_Close":"206.759995"},{"Symbol":"LNKD","Date":"2014-08-06","Open":"202.300003","High":"205.690002","Low":"202.00","Close":"203.570007","Volume":"1701800","Adj_Close":"203.570007"},{"Symbol":"LNKD","Date":"2014-08-05","Open":"200.300003","High":"205.720001","Low":"200.300003","Close":"204.649994","Volume":"2573700","Adj_Close":"204.649994"},{"Symbol":"LNKD","Date":"2014-08-04","Open":"200.050003","High":"204.059998","Low":"198.619995","Close":"202.50","Volume":"3053200","Adj_Close":"202.50"},{"Symbol":"LNKD","Date":"2014-08-01","Open":"196.210007","High":"201.779999","Low":"192.559998","Close":"201.779999","Volume":"10507500","Adj_Close":"201.779999"},{"Symbol":"LNKD","Date":"2014-07-31","Open":"186.740005","High":"186.949997","Low":"178.759995","Close":"180.639999","Volume":"5383600","Adj_Close":"180.639999"},{"Symbol":"LNKD","Date":"2014-07-30","Open":"182.100006","High":"187.399994","Low":"181.119995","Close":"187.289993","Volume":"3158100","Adj_Close":"187.289993"},{"Symbol":"LNKD","Date":"2014-07-29","Open":"178.050003","High":"179.919998","Low":"176.830002","Close":"179.740005","Volume":"1635100","Adj_Close":"179.740005"},{"Symbol":"LNKD","Date":"2014-07-28","Open":"177.229996","High":"178.940002","Low":"174.720001","Close":"178.00","Volume":"1515600","Adj_Close":"178.00"},{"Symbol":"LNKD","Date":"2014-07-25","Open":"177.00","High":"178.820007","Low":"176.009995","Close":"177.440002","Volume":"1457700","Adj_Close":"177.440002"},{"Symbol":"LNKD","Date":"2014-07-24","Open":"173.699997","High":"178.550003","Low":"172.300003","Close":"178.050003","Volume":"3194300","Adj_Close":"178.050003"},{"Symbol":"LNKD","Date":"2014-07-23","Open":"166.610001","High":"172.389999","Low":"166.070007","Close":"171.779999","Volume":"2677000","Adj_Close":"171.779999"},{"Symbol":"LNKD","Date":"2014-07-22","Open":"162.770004","High":"165.610001","Low":"162.309998","Close":"165.50","Volume":"1963800","Adj_Close":"165.50"},{"Symbol":"LNKD","Date":"2014-07-21","Open":"159.580002","High":"163.130005","Low":"159.029999","Close":"161.960007","Volume":"1314500","Adj_Close":"161.960007"},{"Symbol":"LNKD","Date":"2014-07-18","Open":"158.300003","High":"160.860001","Low":"157.779999","Close":"159.990005","Volume":"1250300","Adj_Close":"159.990005"},{"Symbol":"LNKD","Date":"2014-07-17","Open":"157.960007","High":"159.50","Low":"156.300003","Close":"157.210007","Volume":"1458400","Adj_Close":"157.210007"},{"Symbol":"LNKD","Date":"2014-07-16","Open":"159.860001","High":"160.00","Low":"157.330002","Close":"157.669998","Volume":"958900","Adj_Close":"157.669998"},{"Symbol":"LNKD","Date":"2014-07-15","Open":"159.990005","High":"161.00","Low":"156.979996","Close":"158.509995","Volume":"1750100","Adj_Close":"158.509995"},{"Symbol":"LNKD","Date":"2014-07-14","Open":"157.899994","High":"162.75","Low":"156.720001","Close":"159.699997","Volume":"1580900","Adj_Close":"159.699997"},{"Symbol":"LNKD","Date":"2014-07-11","Open":"157.479996","High":"158.800003","Low":"155.130005","Close":"156.580002","Volume":"1332700","Adj_Close":"156.580002"},{"Symbol":"LNKD","Date":"2014-07-10","Open":"155.899994","High":"158.759995","Low":"153.309998","Close":"156.309998","Volume":"2363800","Adj_Close":"156.309998"},{"Symbol":"LNKD","Date":"2014-07-09","Open":"158.520004","High":"160.880005","Low":"154.00","Close":"159.559998","Volume":"2440800","Adj_Close":"159.559998"},{"Symbol":"LNKD","Date":"2014-07-08","Open":"168.970001","High":"169.100006","Low":"155.990005","Close":"158.669998","Volume":"3513100","Adj_Close":"158.669998"},{"Symbol":"LNKD","Date":"2014-07-07","Open":"173.279999","High":"173.520004","Low":"169.080002","Close":"169.25","Volume":"1164900","Adj_Close":"169.25"},{"Symbol":"LNKD","Date":"2014-07-03","Open":"173.270004","High":"175.110001","Low":"171.869995","Close":"173.710007","Volume":"1076500","Adj_Close":"173.710007"},{"Symbol":"LNKD","Date":"2014-07-02","Open":"172.149994","High":"174.740005","Low":"172.029999","Close":"172.419998","Volume":"1487500","Adj_Close":"172.419998"},{"Symbol":"LNKD","Date":"2014-07-01","Open":"173.119995","High":"174.740005","Low":"171.240005","Close":"171.75","Volume":"1764300","Adj_Close":"171.75"},{"Symbol":"LNKD","Date":"2014-06-30","Open":"167.089996","High":"172.279999","Low":"167.00","Close":"171.470001","Volume":"1787900","Adj_Close":"171.470001"},{"Symbol":"LNKD","Date":"2014-06-27","Open":"167.369995","High":"168.169998","Low":"165.800003","Close":"166.759995","Volume":"1531400","Adj_Close":"166.759995"},{"Symbol":"LNKD","Date":"2014-06-26","Open":"169.910004","High":"169.910004","Low":"165.160004","Close":"166.770004","Volume":"1646400","Adj_Close":"166.770004"},{"Symbol":"LNKD","Date":"2014-06-25","Open":"165.690002","High":"170.070007","Low":"165.00","Close":"170.00","Volume":"1362900","Adj_Close":"170.00"},{"Symbol":"LNKD","Date":"2014-06-24","Open":"168.449997","High":"171.919998","Low":"165.399994","Close":"166.190002","Volume":"1852600","Adj_Close":"166.190002"},{"Symbol":"LNKD","Date":"2014-06-23","Open":"166.25","High":"169.100006","Low":"164.75","Close":"168.399994","Volume":"1091600","Adj_Close":"168.399994"},{"Symbol":"LNKD","Date":"2014-06-20","Open":"167.330002","High":"167.330002","Low":"162.860001","Close":"165.800003","Volume":"1423500","Adj_Close":"165.800003"},{"Symbol":"LNKD","Date":"2014-06-19","Open":"170.289993","High":"170.660004","Low":"165.600006","Close":"166.990005","Volume":"1283700","Adj_Close":"166.990005"},{"Symbol":"LNKD","Date":"2014-06-18","Open":"166.210007","High":"170.639999","Low":"164.979996","Close":"169.25","Volume":"2170100","Adj_Close":"169.25"},{"Symbol":"LNKD","Date":"2014-06-17","Open":"166.00","High":"166.50","Low":"163.210007","Close":"165.470001","Volume":"1822000","Adj_Close":"165.470001"},{"Symbol":"LNKD","Date":"2014-06-16","Open":"169.300003","High":"169.570007","Low":"166.460007","Close":"167.539993","Volume":"1773500","Adj_Close":"167.539993"},{"Symbol":"LNKD","Date":"2014-06-13","Open":"165.789993","High":"169.800003","Low":"164.039993","Close":"169.300003","Volume":"3081000","Adj_Close":"169.300003"},{"Symbol":"LNKD","Date":"2014-06-12","Open":"164.00","High":"167.25","Low":"162.50","Close":"164.539993","Volume":"2411800","Adj_Close":"164.539993"},{"Symbol":"LNKD","Date":"2014-06-11","Open":"162.800003","High":"165.610001","Low":"161.639999","Close":"163.639999","Volume":"1689500","Adj_Close":"163.639999"},{"Symbol":"LNKD","Date":"2014-06-10","Open":"156.25","High":"163.979996","Low":"156.00","Close":"163.679993","Volume":"2680700","Adj_Close":"163.679993"},{"Symbol":"LNKD","Date":"2014-06-09","Open":"156.399994","High":"158.820007","Low":"155.350006","Close":"156.389999","Volume":"966100","Adj_Close":"156.389999"},{"Symbol":"LNKD","Date":"2014-06-06","Open":"155.509995","High":"157.669998","Low":"154.490005","Close":"156.800003","Volume":"921800","Adj_Close":"156.800003"},{"Symbol":"LNKD","Date":"2014-06-05","Open":"157.029999","High":"157.410004","Low":"152.179993","Close":"155.240005","Volume":"1568000","Adj_Close":"155.240005"},{"Symbol":"LNKD","Date":"2014-06-04","Open":"155.110001","High":"158.00","Low":"153.00","Close":"156.399994","Volume":"1105400","Adj_Close":"156.399994"},{"Symbol":"LNKD","Date":"2014-06-03","Open":"154.300003","High":"157.539993","Low":"153.669998","Close":"155.809998","Volume":"1355700","Adj_Close":"155.809998"},{"Symbol":"LNKD","Date":"2014-06-02","Open":"160.009995","High":"160.630005","Low":"153.00","Close":"155.440002","Volume":"2020600","Adj_Close":"155.440002"},{"Symbol":"LNKD","Date":"2014-05-30","Open":"163.289993","High":"163.600006","Low":"159.029999","Close":"160.089996","Volume":"2177000","Adj_Close":"160.089996"},{"Symbol":"LNKD","Date":"2014-05-29","Open":"161.300003","High":"164.369995","Low":"159.869995","Close":"163.690002","Volume":"2532000","Adj_Close":"163.690002"},{"Symbol":"LNKD","Date":"2014-05-28","Open":"160.449997","High":"163.00","Low":"159.00","Close":"160.440002","Volume":"1999400","Adj_Close":"160.440002"},{"Symbol":"LNKD","Date":"2014-05-27","Open":"157.00","High":"162.979996","Low":"157.00","Close":"160.539993","Volume":"2414200","Adj_Close":"160.539993"},{"Symbol":"LNKD","Date":"2014-05-23","Open":"155.759995","High":"156.639999","Low":"154.059998","Close":"155.910004","Volume":"1207700","Adj_Close":"155.910004"},{"Symbol":"LNKD","Date":"2014-05-22","Open":"152.899994","High":"157.00","Low":"151.759995","Close":"155.860001","Volume":"2087800","Adj_Close":"155.860001"},{"Symbol":"LNKD","Date":"2014-05-21","Open":"150.869995","High":"153.270004","Low":"148.679993","Close":"152.720001","Volume":"1765100","Adj_Close":"152.720001"},{"Symbol":"LNKD","Date":"2014-05-20","Open":"151.00","High":"152.50","Low":"148.100006","Close":"149.860001","Volume":"2072000","Adj_Close":"149.860001"},{"Symbol":"LNKD","Date":"2014-05-19","Open":"145.800003","High":"151.949997","Low":"145.550003","Close":"151.440002","Volume":"2219500","Adj_Close":"151.440002"},{"Symbol":"LNKD","Date":"2014-05-16","Open":"145.199997","High":"147.320007","Low":"143.110001","Close":"147.020004","Volume":"2444900","Adj_Close":"147.020004"},{"Symbol":"LNKD","Date":"2014-05-15","Open":"146.00","High":"149.460007","Low":"143.449997","Close":"147.860001","Volume":"2893200","Adj_Close":"147.860001"},{"Symbol":"LNKD","Date":"2014-05-14","Open":"147.059998","High":"148.809998","Low":"145.149994","Close":"145.559998","Volume":"2396500","Adj_Close":"145.559998"},{"Symbol":"LNKD","Date":"2014-05-13","Open":"152.699997","High":"153.220001","Low":"146.380005","Close":"147.669998","Volume":"2477000","Adj_Close":"147.669998"},{"Symbol":"LNKD","Date":"2014-05-12","Open":"151.279999","High":"153.339996","Low":"147.869995","Close":"152.300003","Volume":"2882400","Adj_Close":"152.300003"},{"Symbol":"LNKD","Date":"2014-05-09","Open":"145.00","High":"149.50","Low":"144.580002","Close":"148.690002","Volume":"2833800","Adj_Close":"148.690002"},{"Symbol":"LNKD","Date":"2014-05-08","Open":"142.880005","High":"151.610001","Low":"141.179993","Close":"145.070007","Volume":"4659700","Adj_Close":"145.070007"},{"Symbol":"LNKD","Date":"2014-05-07","Open":"143.050003","High":"143.759995","Low":"136.020004","Close":"143.369995","Volume":"5753100","Adj_Close":"143.369995"},{"Symbol":"LNKD","Date":"2014-05-06","Open":"150.479996","High":"151.259995","Low":"141.270004","Close":"142.330002","Volume":"5371800","Adj_Close":"142.330002"},{"Symbol":"LNKD","Date":"2014-05-05","Open":"144.399994","High":"152.880005","Low":"144.380005","Close":"150.910004","Volume":"4677500","Adj_Close":"150.910004"},{"Symbol":"LNKD","Date":"2014-05-02","Open":"160.639999","High":"161.639999","Low":"147.520004","Close":"147.729996","Volume":"10262100","Adj_Close":"147.729996"},{"Symbol":"LNKD","Date":"2014-05-01","Open":"157.380005","High":"164.160004","Low":"157.240005","Close":"161.220001","Volume":"6546800","Adj_Close":"161.220001"},{"Symbol":"LNKD","Date":"2014-04-30","Open":"150.210007","High":"153.869995","Low":"148.009995","Close":"153.470001","Volume":"2329200","Adj_Close":"153.470001"},{"Symbol":"LNKD","Date":"2014-04-29","Open":"144.020004","High":"154.649994","Low":"144.020004","Close":"153.229996","Volume":"4353800","Adj_Close":"153.229996"},{"Symbol":"LNKD","Date":"2014-04-28","Open":"157.789993","High":"158.50","Low":"143.259995","Close":"148.059998","Volume":"7405100","Adj_Close":"148.059998"},{"Symbol":"LNKD","Date":"2014-04-25","Open":"165.75","High":"167.00","Low":"157.949997","Close":"158.169998","Volume":"4191700","Adj_Close":"158.169998"},{"Symbol":"LNKD","Date":"2014-04-24","Open":"179.360001","High":"179.360001","Low":"166.699997","Close":"171.589996","Volume":"3046800","Adj_Close":"171.589996"},{"Symbol":"LNKD","Date":"2014-04-23","Open":"176.050003","High":"177.199997","Low":"171.619995","Close":"175.710007","Volume":"2086900","Adj_Close":"175.710007"},{"Symbol":"LNKD","Date":"2014-04-22","Open":"176.899994","High":"180.960007","Low":"176.029999","Close":"176.309998","Volume":"2068700","Adj_Close":"176.309998"},{"Symbol":"LNKD","Date":"2014-04-21","Open":"177.449997","High":"179.380005","Low":"174.429993","Close":"176.899994","Volume":"1995000","Adj_Close":"176.899994"},{"Symbol":"LNKD","Date":"2014-04-17","Open":"171.399994","High":"176.610001","Low":"168.690002","Close":"175.419998","Volume":"3170000","Adj_Close":"175.419998"},{"Symbol":"LNKD","Date":"2014-04-16","Open":"172.110001","High":"173.690002","Low":"166.380005","Close":"171.820007","Volume":"2138000","Adj_Close":"171.820007"},{"Symbol":"LNKD","Date":"2014-04-15","Open":"167.339996","High":"171.559998","Low":"160.919998","Close":"170.899994","Volume":"2990300","Adj_Close":"170.899994"},{"Symbol":"LNKD","Date":"2014-04-14","Open":"169.639999","High":"170.190002","Low":"163.869995","Close":"165.779999","Volume":"1972700","Adj_Close":"165.779999"},{"Symbol":"LNKD","Date":"2014-04-11","Open":"166.850006","High":"171.869995","Low":"163.460007","Close":"165.779999","Volume":"3208000","Adj_Close":"165.779999"},{"Symbol":"LNKD","Date":"2014-04-10","Open":"175.449997","High":"176.539993","Low":"166.610001","Close":"169.990005","Volume":"3895500","Adj_Close":"169.990005"},{"Symbol":"LNKD","Date":"2014-04-09","Open":"174.050003","High":"177.220001","Low":"172.419998","Close":"176.179993","Volume":"4500800","Adj_Close":"176.179993"},{"Symbol":"LNKD","Date":"2014-04-08","Open":"160.919998","High":"170.360001","Low":"160.199997","Close":"169.100006","Volume":"4750900","Adj_Close":"169.100006"},{"Symbol":"LNKD","Date":"2014-04-07","Open":"163.690002","High":"169.339996","Low":"158.059998","Close":"159.649994","Volume":"6075000","Adj_Close":"159.649994"},{"Symbol":"LNKD","Date":"2014-04-04","Open":"177.070007","High":"177.889999","Low":"165.600006","Close":"165.830002","Volume":"5848500","Adj_Close":"165.830002"},{"Symbol":"LNKD","Date":"2014-04-03","Open":"182.039993","High":"183.330002","Low":"175.410004","Close":"176.970001","Volume":"3504800","Adj_Close":"176.970001"},{"Symbol":"LNKD","Date":"2014-04-02","Open":"189.990005","High":"190.00","Low":"182.619995","Close":"183.380005","Volume":"2511400","Adj_Close":"183.380005"},{"Symbol":"LNKD","Date":"2014-04-01","Open":"185.00","High":"188.00","Low":"183.360001","Close":"187.960007","Volume":"3286100","Adj_Close":"187.960007"},{"Symbol":"LNKD","Date":"2014-03-31","Open":"192.289993","High":"193.729996","Low":"184.300003","Close":"184.940002","Volume":"2367000","Adj_Close":"184.940002"},{"Symbol":"LNKD","Date":"2014-03-28","Open":"189.25","High":"193.830002","Low":"187.259995","Close":"190.589996","Volume":"2978600","Adj_Close":"190.589996"},{"Symbol":"LNKD","Date":"2014-03-27","Open":"184.649994","High":"189.289993","Low":"178.25","Close":"188.539993","Volume":"3263400","Adj_Close":"188.539993"},{"Symbol":"LNKD","Date":"2014-03-26","Open":"186.369995","High":"189.669998","Low":"185.029999","Close":"185.929993","Volume":"3571100","Adj_Close":"185.929993"},{"Symbol":"LNKD","Date":"2014-03-25","Open":"189.649994","High":"189.869995","Low":"181.770004","Close":"184.330002","Volume":"3500800","Adj_Close":"184.330002"},{"Symbol":"LNKD","Date":"2014-03-24","Open":"196.559998","High":"197.880005","Low":"183.75","Close":"188.139999","Volume":"4617500","Adj_Close":"188.139999"},{"Symbol":"LNKD","Date":"2014-03-21","Open":"204.630005","High":"205.449997","Low":"196.169998","Close":"196.720001","Volume":"2756700","Adj_Close":"196.720001"},{"Symbol":"LNKD","Date":"2014-03-20","Open":"201.490005","High":"206.429993","Low":"200.009995","Close":"204.419998","Volume":"2144200","Adj_Close":"204.419998"},{"Symbol":"LNKD","Date":"2014-03-19","Open":"201.160004","High":"205.190002","Low":"199.610001","Close":"201.949997","Volume":"2373000","Adj_Close":"201.949997"},{"Symbol":"LNKD","Date":"2014-03-18","Open":"191.990005","High":"197.979996","Low":"191.919998","Close":"197.850006","Volume":"1643800","Adj_Close":"197.850006"},{"Symbol":"LNKD","Date":"2014-03-17","Open":"197.910004","High":"197.910004","Low":"190.820007","Close":"191.809998","Volume":"2849200","Adj_Close":"191.809998"},{"Symbol":"LNKD","Date":"2014-03-14","Open":"197.809998","High":"200.529999","Low":"194.339996","Close":"196.779999","Volume":"1925800","Adj_Close":"196.779999"},{"Symbol":"LNKD","Date":"2014-03-13","Open":"203.880005","High":"206.630005","Low":"197.009995","Close":"197.839996","Volume":"2196800","Adj_Close":"197.839996"},{"Symbol":"LNKD","Date":"2014-03-12","Open":"200.580002","High":"205.619995","Low":"198.190002","Close":"203.080002","Volume":"1832900","Adj_Close":"203.080002"},{"Symbol":"LNKD","Date":"2014-03-11","Open":"202.529999","High":"207.039993","Low":"200.919998","Close":"201.50","Volume":"1770300","Adj_Close":"201.50"},{"Symbol":"LNKD","Date":"2014-03-10","Open":"205.800003","High":"206.050003","Low":"201.070007","Close":"202.429993","Volume":"1887000","Adj_Close":"202.429993"},{"Symbol":"LNKD","Date":"2014-03-07","Open":"210.199997","High":"210.199997","Low":"205.00","Close":"206.789993","Volume":"2275900","Adj_Close":"206.789993"},{"Symbol":"LNKD","Date":"2014-03-06","Open":"208.399994","High":"211.940002","Low":"205.649994","Close":"208.809998","Volume":"2291000","Adj_Close":"208.809998"},{"Symbol":"LNKD","Date":"2014-03-05","Open":"203.00","High":"207.990005","Low":"202.699997","Close":"207.740005","Volume":"1955900","Adj_Close":"207.740005"},{"Symbol":"LNKD","Date":"2014-03-04","Open":"206.50","High":"206.880005","Low":"202.460007","Close":"203.00","Volume":"2702300","Adj_Close":"203.00"},{"Symbol":"LNKD","Date":"2014-03-03","Open":"201.600006","High":"205.339996","Low":"198.300003","Close":"201.449997","Volume":"2626300","Adj_Close":"201.449997"},{"Symbol":"LNKD","Date":"2014-02-28","Open":"213.320007","High":"214.160004","Low":"200.00","Close":"204.039993","Volume":"4271000","Adj_Close":"204.039993"},{"Symbol":"LNKD","Date":"2014-02-27","Open":"212.050003","High":"214.990005","Low":"210.25","Close":"213.770004","Volume":"2458600","Adj_Close":"213.770004"},{"Symbol":"LNKD","Date":"2014-02-26","Open":"216.690002","High":"217.490005","Low":"211.020004","Close":"212.800003","Volume":"4220800","Adj_Close":"212.800003"},{"Symbol":"LNKD","Date":"2014-02-25","Open":"206.119995","High":"211.550003","Low":"203.089996","Close":"209.839996","Volume":"5867600","Adj_Close":"209.839996"},{"Symbol":"LNKD","Date":"2014-02-24","Open":"191.720001","High":"199.880005","Low":"191.509995","Close":"199.589996","Volume":"2720200","Adj_Close":"199.589996"},{"Symbol":"LNKD","Date":"2014-02-21","Open":"194.720001","High":"196.470001","Low":"192.229996","Close":"192.619995","Volume":"2460600","Adj_Close":"192.619995"},{"Symbol":"LNKD","Date":"2014-02-20","Open":"195.899994","High":"198.160004","Low":"192.039993","Close":"193.389999","Volume":"2886300","Adj_Close":"193.389999"},{"Symbol":"LNKD","Date":"2014-02-19","Open":"190.00","High":"198.690002","Low":"189.75","Close":"196.320007","Volume":"5337000","Adj_Close":"196.320007"},{"Symbol":"LNKD","Date":"2014-02-18","Open":"186.210007","High":"191.990005","Low":"185.039993","Close":"191.919998","Volume":"4219400","Adj_Close":"191.919998"},{"Symbol":"LNKD","Date":"2014-02-14","Open":"192.130005","High":"192.460007","Low":"185.729996","Close":"186.130005","Volume":"4344300","Adj_Close":"186.130005"},{"Symbol":"LNKD","Date":"2014-02-13","Open":"190.300003","High":"195.00","Low":"189.869995","Close":"191.669998","Volume":"4337800","Adj_Close":"191.669998"},{"Symbol":"LNKD","Date":"2014-02-12","Open":"202.410004","High":"204.399994","Low":"192.240005","Close":"192.339996","Volume":"7159400","Adj_Close":"192.339996"},{"Symbol":"LNKD","Date":"2014-02-11","Open":"207.899994","High":"209.00","Low":"200.190002","Close":"202.800003","Volume":"5055300","Adj_Close":"202.800003"},{"Symbol":"LNKD","Date":"2014-02-10","Open":"209.00","High":"213.00","Low":"206.809998","Close":"207.330002","Volume":"3786500","Adj_Close":"207.330002"},{"Symbol":"LNKD","Date":"2014-02-07","Open":"210.190002","High":"211.779999","Low":"201.979996","Close":"209.589996","Volume":"11190000","Adj_Close":"209.589996"},{"Symbol":"LNKD","Date":"2014-02-06","Open":"214.559998","High":"225.00","Low":"212.679993","Close":"223.449997","Volume":"7094500","Adj_Close":"223.449997"},{"Symbol":"LNKD","Date":"2014-02-05","Open":"212.589996","High":"215.949997","Low":"207.690002","Close":"214.360001","Volume":"2149200","Adj_Close":"214.360001"},{"Symbol":"LNKD","Date":"2014-02-04","Open":"213.550003","High":"214.50","Low":"209.679993","Close":"212.330002","Volume":"2365800","Adj_Close":"212.330002"},{"Symbol":"LNKD","Date":"2014-02-03","Open":"217.240005","High":"220.899994","Low":"210.550003","Close":"215.399994","Volume":"2789000","Adj_Close":"215.399994"},{"Symbol":"LNKD","Date":"2014-01-31","Open":"208.160004","High":"218.949997","Low":"208.160004","Close":"215.210007","Volume":"2089100","Adj_Close":"215.210007"},{"Symbol":"LNKD","Date":"2014-01-30","Open":"211.830002","High":"215.770004","Low":"208.630005","Close":"212.399994","Volume":"2190900","Adj_Close":"212.399994"},{"Symbol":"LNKD","Date":"2014-01-29","Open":"209.740005","High":"212.399994","Low":"201.860001","Close":"204.130005","Volume":"2278800","Adj_Close":"204.130005"},{"Symbol":"LNKD","Date":"2014-01-28","Open":"207.039993","High":"213.00","Low":"207.039993","Close":"212.690002","Volume":"1993600","Adj_Close":"212.690002"},{"Symbol":"LNKD","Date":"2014-01-27","Open":"217.50","High":"217.50","Low":"204.970001","Close":"205.220001","Volume":"2996500","Adj_Close":"205.220001"},{"Symbol":"LNKD","Date":"2014-01-24","Open":"215.25","High":"221.50","Low":"213.809998","Close":"217.389999","Volume":"2125500","Adj_Close":"217.389999"},{"Symbol":"LNKD","Date":"2014-01-23","Open":"218.520004","High":"220.300003","Low":"214.520004","Close":"216.740005","Volume":"1265100","Adj_Close":"216.740005"},{"Symbol":"LNKD","Date":"2014-01-22","Open":"221.550003","High":"223.740005","Low":"218.50","Close":"220.479996","Volume":"1317500","Adj_Close":"220.479996"},{"Symbol":"LNKD","Date":"2014-01-21","Open":"222.160004","High":"223.839996","Low":"218.100006","Close":"220.979996","Volume":"1372000","Adj_Close":"220.979996"},{"Symbol":"LNKD","Date":"2014-01-17","Open":"229.800003","High":"229.960007","Low":"219.199997","Close":"219.929993","Volume":"2863900","Adj_Close":"219.929993"},{"Symbol":"LNKD","Date":"2014-01-16","Open":"217.529999","High":"234.479996","Low":"217.320007","Close":"230.559998","Volume":"3945100","Adj_Close":"230.559998"},{"Symbol":"LNKD","Date":"2014-01-15","Open":"217.029999","High":"220.00","Low":"214.699997","Close":"216.00","Volume":"1988900","Adj_Close":"216.00"},{"Symbol":"LNKD","Date":"2014-01-14","Open":"214.899994","High":"216.979996","Low":"212.559998","Close":"216.220001","Volume":"1363100","Adj_Close":"216.220001"},{"Symbol":"LNKD","Date":"2014-01-13","Open":"219.169998","High":"220.339996","Low":"211.029999","Close":"213.539993","Volume":"2471300","Adj_Close":"213.539993"},{"Symbol":"LNKD","Date":"2014-01-10","Open":"216.199997","High":"218.789993","Low":"215.589996","Close":"218.75","Volume":"2241000","Adj_Close":"218.75"},{"Symbol":"LNKD","Date":"2014-01-09","Open":"209.009995","High":"215.279999","Low":"209.009995","Close":"215.25","Volume":"2380100","Adj_Close":"215.25"},{"Symbol":"LNKD","Date":"2014-01-08","Open":"211.899994","High":"212.580002","Low":"207.550003","Close":"209.059998","Volume":"2247300","Adj_Close":"209.059998"},{"Symbol":"LNKD","Date":"2014-01-07","Open":"199.630005","High":"210.00","Low":"198.600006","Close":"209.639999","Volume":"3766800","Adj_Close":"209.639999"},{"Symbol":"LNKD","Date":"2014-01-06","Open":"207.729996","High":"208.139999","Low":"202.550003","Close":"203.919998","Volume":"2079300","Adj_Close":"203.919998"},{"Symbol":"LNKD","Date":"2014-01-03","Open":"208.410004","High":"209.580002","Low":"205.550003","Close":"207.419998","Volume":"1989300","Adj_Close":"207.419998"},{"Symbol":"LNKD","Date":"2014-01-02","Open":"213.979996","High":"214.00","Low":"206.279999","Close":"207.639999","Volume":"3574800","Adj_Close":"207.639999"}]}}}
]
