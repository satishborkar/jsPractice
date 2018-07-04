var Flights = (function(data) {

    var searchedData;
    var constant = {
        single: 'single',
        round: 'round',
        currency: '₹',
        bookNow: 'Book Now'
    };
    var oneWayTripDetails;

    var routes = data.routes;
    var flights = [...routes];

    var _appElem = document.getElementById("app");

    var bookNow = function(uid) {
        let wrapper = document.getElementById('wrapper'),
            markup = '',
            blockUi = document.getElementById('uiBlocker'),
            modal = document.getElementById('modal'),
            closeLink = document.querySelector('*[data-type="close-modal"]'),
            flightDetails = document.getElementById('flightDetails');

        wrapper.classList.add('blur');
        blockUi.style.display = 'block';
        modal.style.display = 'block';

        var closePopup = function() {
            wrapper.classList.remove('blur');
            blockUi.style.display = 'none';
            modal.style.display = 'none';
        };

        closeLink.addEventListener('click', closePopup);

        flights.filter(function(route) {
            if (parseFloat(route.uid) === uid) {
                //console.log(route);
                //console.log(oneWayTripDetails);

                markup += `<div class="row">
                <h2 class="head">Booking Details</h2>
            </div>
            <div class="row">
                <div class="logo">
                    <img src="${route.logo}" alt="${route.name}">
                </div>
                <div class="fData">
                    <table class="tbl">
                        <tr>
                            <td>From</td>
                            <td>${oneWayTripDetails.fromDestination}</td>
                            <td>To</td>
                            <td>${oneWayTripDetails.toDestination}</td>
                        </tr>
                        <tr>
                                <td>Date of Journey</td>
                                <td>${oneWayTripDetails.date}</td>
                                <td>Travel Type</td>
                                <td>${oneWayTripDetails.travelType}</td>
                            </tr>
                            <tr>
                                <td>Travellers</td>
                                <td>
                                    <span>Adults : </span>
                                    <span>${oneWayTripDetails.travellers.adult} </span>
                                    <span>Childs : </span>
                                    <span>${oneWayTripDetails.travellers.child} </span>
                                    <span>Infants : </span>
                                    <span>${oneWayTripDetails.travellers.infant} </span>
                                </td>
                                <td>Airline Name &amp; Time </td>
                                <td>${route.name} [${route.time}]</td>
                            </tr>
                    </table>
                </div>
                <div class="row" style="text-align:center"> <a href="#nogo" class="book-now" id="confirmBtn" style="display:inline-block">Confirm</a> </div>
            </div>`;
            }
        });


        document.addEventListener('click', function(e) {
            if (e.target && e.target.id == 'confirmBtn') {
                closePopup();
            }
        });

        flightDetails.innerHTML = markup;
    }

    var renderFlights = function(data, travelDate) {
        var markup;
        if (data.length > 0) {
            markup = `<ul class='list-row'>`;
            data.forEach(function(flight) {

                let time = flight.time.length > 2 ? flight.time : Number(flight.time).toFixed(2);
                travelDate = travelDate == undefined || travelDate == '' ? ' Mon-Sat ' : travelDate;

                markup += `<li>
                <div class="logo"> <img src="${flight.logo}" title="${flight.name}" alt="${flight.name}" /> </div>
                <div class="fData">
                    <div class="fInfo">
                        <h2>${flight.source}</h2>
                        To
                        <h2>${flight.destination}</h2>
                    </div>
                    <div class="price">
                        <h1> ${constant.currency} ${flight.price}</h1>
                    </div>
                    <div class="row">
                    <div>${travelDate} : ${time}</div>
                    <div>${flight.name}</div>
                    <div> <a href="#nogo" class="book-now" onclick="Flights.BookNow(${flight.uid})">${constant.bookNow}</a> </div>
                    </div>
                </div>
                </li>`;
            });
            markup += `</ul>`;
        } else {
            markup = `<div class="no-data"> Sorry!, no data found!! </div>`;
        }

        _appElem.innerHTML = markup;
    };

    var getAirLines = function(data) {
        const list = [];

        data.forEach(function(item) {
            if (item.name && !list.includes(item.name)) {
                list.push(item.name)
            }
        });

        return list;
    };

    var setAirlineName = function() {

        const list = getAirLines(routes);

        let airlineName = document.getElementById('airlineName');
        let binderString = `<option value="0">-- Select -- </option> <option value="1"> All </option>`;

        if (list.constructor.toString().indexOf("Array") > 1) {
            for (i = 0; i < list.length; i++) {
                binderString += `<option value="${list[i]}">${list[i]} </option>`;
            }
        }
        airlineName.innerHTML = binderString;
    };

    var getAirportsNames = function(data, elem) {

        var airportNameSet = new Set(),
            elemId = document.getElementById(elem),
            markup = '';


        data.filter(function(airport) {
            if (airport.source) {
                airportNameSet.add(airport.source);
                airportNameSet.add(airport.destination);
            }
        });

        airportNameSet.forEach(function(aname) {
            markup += `<option value="${aname}">`;
        });

        elemId.innerHTML = markup;
    };

    var searchFlights = function(data) {

        //get form details
        let frm = document.forms[0];
        oneWayTripDetails = {
            fromDestination: frm.fromDestination.value.toLowerCase().trim(),
            toDestination: frm.toDestination.value.toLowerCase().trim(),
            tripType: frm.tripType.value.toLowerCase().trim(),
            date: frm.outboundDate.value.trim(),
            travellers: {
                adult: frm.adults.value.trim(),
                child: frm.child.value.trim(),
                infant: frm.infant.value.trim()
            },
            travelType: frm.travelType.value.trim()
        };

        // fromDestination = frm.fromDestination.value.trim(),
        // tripType = frm.tripType.value.trim(),
        // toDestination = frm.toDestination.value.trim(),
        // date = frm.outboundDate.value.trim(),
        // travellers = {
        //     adult: frm.adults.value.trim(),
        //     child: frm.child.value.trim(),
        //     infant: frm.infant.value.trim()
        // },
        // travelType = frm.travelType.value.trim();



        //console.log(travellers, travelType);
        //if (tripType == constant.single) {}

        function filterFlights(route) {
            //let isAirLineDefied = airlineName == '1' || airlineName == '0' ? true : airlineName !== '' && airlineName.length > 0 && airlineName === route.name.toLowerCase();

            return (
                oneWayTripDetails.fromDestination !== '' && oneWayTripDetails.fromDestination.length > 0 && oneWayTripDetails.fromDestination === route.source.toLowerCase() &&
                oneWayTripDetails.toDestination !== '' && oneWayTripDetails.toDestination.length > 0 && oneWayTripDetails.toDestination === route.destination.toLowerCase()
                //&& isAirLineDefied
            )
        };

        searchedData = routes.filter(filterFlights);

        renderFlights(searchedData, oneWayTripDetails.date);
    }

    var setTravellers = function(actionType, elm) {

        let travellerType = document.getElementById(elm);

        if (travellerType.value >= 0) {
            if (actionType == 'add' && travellerType.value >= 0) {
                travellerType.value = Number(travellerType.value) + 1
                return
            }

            if (travellerType.value > 0) {
                travellerType.value = Number(travellerType.value) - 1
            }

        }

    };

    setPriceToSlider = function() {
        var showPrice = document.getElementById('showPrice');
        showPrice.innerHTML = document.getElementById('price').value;
    };

    var filterBy = function(field) {

        let frm = document.forms[0];
        let date = frm.outboundDate.value.trim();
        let dataForFilter;
        if (searchedData) {
            dataForFilter = searchedData.length > 0 ? searchedData : flights
        } else {
            dataForFilter = flights
        }

        let item = field.value;
        const filteredRoutes = [];

        date = date.length > 0 ? date : null


        if (item == '0' || item == '1') {
            renderFlights(dataForFilter, date);
            return
        }

        dataForFilter.filter(function(route) {
            if (route.name === item) {
                filteredRoutes.push(route)
            }
            return filteredRoutes;
        });

        renderFlights(filteredRoutes, date);
    };

    var fliterByPrice = function(price) {
        // set filter by airline to all to avoid confusion
        let dataToBeFiltered;
        const priceFiltered = [];
        let frm = document.forms[0];
        let date = frm.outboundDate.value.trim();
        date = date.length > 0 ? date : null

        if (searchedData) {
            dataToBeFiltered = searchedData.length > 0 ? searchedData : flights
        } else {
            dataToBeFiltered = flights
        }

        dataToBeFiltered.filter(function(flight) {
            if (flight.price <= price.value) {
                priceFiltered.push(flight);
            }
            return priceFiltered;
        });
        //console.log(priceFiltered);
        renderFlights(priceFiltered, date)
    }

    //iterate all flights
    //renderFlights(flights);

    //get airlines name
    getAirLines(flights);
    getAirportsNames(flights, "airportNames");

    //bind airlines names with select control
    setAirlineName(flights);
    setPriceToSlider();

    return {
        SearchFlights: searchFlights,
        SetAirlineName: setAirlineName,
        GetAirLines: getAirLines,
        RenderFlights: renderFlights,
        BookNow: bookNow,
        SetTravellers: setTravellers,
        FilterBy: filterBy,
        SetPriceToSlider: setPriceToSlider,
        FliterByPrice: fliterByPrice
    }
})(data);