var Flights = (function(data, global) {

    var searchedData;
    var isRoudTrip = false;

    var constant = {
        single: 'single',
        round: 'round',
        currency: '₹',
        bookNow: 'Book Now'
    };

    var frmTripDetails;
    var routes = data.routes;
    var flights = [...routes];
    var dynaBars = document.querySelectorAll(".dyna-bar");
    var _appElem = document.getElementById("app");


    var formContainer = document.forms[0];
    var rdoList = formContainer.tripType;
    var inboudContainer = document.querySelector('.in-bound-date');

    rdoList.forEach(function(rdoBtn) {
        rdoBtn.addEventListener('click', function() {

            if (this.value == 'round') {
                inboudContainer.style.display = 'block';
                isRoudTrip = true;
            } else {
                inboudContainer.style.display = 'none';
                isRoudTrip = false;
            }
        });
    });

    var bookNow = function(uid) {
        let wrapper = document.querySelector('.booked-flight'),
            markup = '';

        flights.filter(function(route) {
            if (parseFloat(route.uid) === uid) {
                markup += `
            <div class="row">
                <div class="col-2 pull-left">
                    <img src="${route.logo}" alt="${route.name}">
                </div>
            
                <div class="col-8 pull-left">
                    <div class="col-5 pull-left">
                        <fieldset class="fieldset">
                        <legend>Flight Details</legend>
                            <div class="row">
                                <div class="col-33 pull-left">From</div>
                                <div class="col-66 pull-left">
                                ${frmTripDetails.fromDestination.toUpperCase()} - (${route.sourcecode})
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-33 pull-left">To</div>
                                <div class="col-66 pull-left">
                                ${frmTripDetails.toDestination.toUpperCase()} - (${route.destinationcode})
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-33 pull-left">Travel Date</div>
                                <div class="col-66 pull-left">
                                    ${frmTripDetails.date}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-33 pull-left"> Travel Time :</div>
                                <div class="col-66 pull-left">
                                    Depart : ${route.depart}, Arrive : ${route.arrive}
                                </div>
                            </div>
                            
                        </fieldset>
                    </div>
                    <div class="col-5 pull-left">
                        <fieldset class="fieldset">
                        <legend>Journey Details</legend>
                            
                        <div class="row">
                            <div class="col-33 pull-left">Fare </div>
                            <div class="col-66 pull-left">
                                ${constant.currency} ${route.price}
                            </div>
                        </div>

                            <div class="row">
                                <div class="col-33 pull-left"> Trip Type :</div>
                                <div class="col-66 pull-left">
                                    ${frmTripDetails.tripType} | ${frmTripDetails.travelType}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-33 pull-left"> Travellers :</div>
                                <div class="col-66 pull-left">
                                    <span>Adults : </span>
                                    <span>${frmTripDetails.travellers.adult} </span>
                                    <span>Childs : </span>
                                    <span>${frmTripDetails.travellers.child} </span>
                                    <span>Infants : </span>
                                    <span>${frmTripDetails.travellers.infant} </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-33 pull-left">AirBus Type</div>
                                <div class="col-66 pull-left">
                                    ${route.name} [Boeing AirBus 707 ]
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="row span-top-05"> <a href="#nogo" class="book-now" id="confirmBtn" style="float:left"> <span>Confirm</span> </a> </div>`;
            }
        });

        wrapper.innerHTML = markup;
    }

    var renderFlights = function(data, travelDate) {
        var isRoundedTrip = typeof travelDate == 'object' ? true : false,
            markup,
            roundTripMarkup,
            fromCity = document.getElementById('fromCity'),
            toCity = document.getElementById('toCity'),
            returnToCity = document.getElementById('returnToCity'),
            oneWayHeaders = document.querySelectorAll('.fromCity'),
            departDate = document.querySelector('.depart-date'),
            returnDate = document.querySelector('.return-date'),
            drpdate = document.getElementById('dptDate'),
            arvDate = document.getElementById('arvDate');

        departDate.style.display = "block";

        if (isRoundedTrip) {
            returnDate.style.display = "block";
        }
        oneWayHeaders.forEach(function(cityName) {
            cityName.style.display = "inline-block";
        })

        if (data.length > 0) {

            fromCity.innerHTML = data[0].source;
            toCity.innerHTML = data[0].destination;
            drpdate.innerHTML = isRoundedTrip ? travelDate.date : travelDate;
            arvDate.innerHTML = isRoundedTrip ? travelDate.returnDate : '';

            if (!isRoudTrip) {
                markup = `<ul class="list-row">`;
                data.forEach(function(flight) {
                    markup += `<li class="list-tr">                
                    <div class="col-4 pull-left">
                        <h1> ${constant.currency}${flight.price}</h1>
                        <div class="flight-number">${flight.name}</div>
                        <div class="flight-to-from">${flight.sourcecode} > ${flight.destinationcode} </div>
                        <div class="row flight-timing">
                            <div> Deaprt <span>&#9992;</span> : ${flight.depart}</div>
                            <div> Arrive <span class="arrive-icon">&#9992;</span> : ${flight.arrive}</div>                        
                        </div>
                    </div>
                    <div class="col-2 pull-right"> 
                        <div class="airline-logo"> <img src="${flight.logo}" title="${flight.name}" alt="${flight.name}" /> </div>
                        <div> 
                            <a href="#nogo" class="book-now" onclick="Flights.BookNow(${flight.uid})">
                                <span> ${constant.bookNow} </span>
                            </a> 
                        </div>
                    </div>
                    </li>`;
                });
                markup += `</ul>`;
            } else if (isRoudTrip) {
                console.log("Round trip Markup")
                markup = `<ul class="list-row">`;

                for (let i = 0; i < data.length; i = i + 2) {
                    markup += `<li class="list-tr">                
                    <div class="col-4 pull-left">
                        <h1> ${constant.currency}${data[i].price}</h1>
                        <div class="flight-number">${data[i].name}</div>
                        <div class="flight-to-from">${data[i].sourcecode} > ${data[i].destinationcode} </div>
                        <div class="row flight-timing">
                            <div> Deaprt <span>&#9992;</span> : ${data[i].depart}</div>
                            <div> Arrive <span class="arrive-icon">&#9992;</span> : ${data[i].arrive}</div>                        
                        </div>
                    </div>
                    <div class="col-4 pull-left">
                        <h1> ${constant.currency}${data[i+1].price}</h1>
                        <div class="flight-number">${data[i+1].name}</div>
                        <div class="flight-to-from">${data[i+1].sourcecode} > ${data[i+1].destinationcode} </div>
                        <div class="row flight-timing">
                            <div> Deaprt <span>&#9992;</span> : ${data[i+1].depart}</div>
                            <div> Arrive <span class="arrive-icon">&#9992;</span> : ${data[i+1].arrive}</div>                        
                        </div>
                    </div>
                    <div class="col-2 pull-right"> 
                        <div class="airline-logo"> <img src="${data[i].logo}" title="${data[i].name}" alt="${data[i].name}" /> </div>
                        <div> 
                            <a href="#nogo" class="book-now" onclick="Flights.BookNow(${data[i].uid})">
                                <span> ${constant.bookNow} </span>
                            </a> 
                        </div>
                    </div>
                    </li>`;
                }

                markup += `</ul>`;
            } else {
                markup = `<div class="no-data"> Sorry !, Something went wrong!! </div>`;
            }

            _appElem.innerHTML = markup;

        };
    };


    var getAirportsNames = function(data, elem) {

        var airportNameSet = new Set(),
            elemId = document.getElementById(elem),
            markup = '';


        data.filter(function(airport) {
            if (airport.source) {
                airportNameSet.add(airport.source);
            }
        });

        airportNameSet.forEach(function(aname) {
            markup += `<option value="${aname}">`;
        });

        elemId.innerHTML = markup;
    };

    var searchFlights = function(data, roundTripObject) {

        //get form details
        let frm = document.forms[0];

        frmTripDetails = {
            fromDestination: frm.fromDestination.value.toLowerCase().trim(),
            toDestination: frm.toDestination.value.toLowerCase().trim(),
            tripType: frm.tripType.value.toLowerCase().trim(),
            date: frm.outbounddate.value.trim(),
            returnDate: '',
            travellers: {
                adult: frm.adults.value.trim(),
                child: frm.child.value.trim(),
                infant: frm.infant.value.trim()
            },
            travelType: frm.travelType.value.trim()
        };

        if (frmTripDetails.tripType == constant.single) {
            function filterFlights(route) {
                return (
                    frmTripDetails.fromDestination !== '' && frmTripDetails.fromDestination.length > 0 && frmTripDetails.fromDestination === route.source.toLowerCase() &&
                    frmTripDetails.toDestination !== '' && frmTripDetails.toDestination.length > 0 && frmTripDetails.toDestination === route.destination.toLowerCase()
                )
            };

            searchedData = routes.filter(filterFlights);

            renderFlights(searchedData, frmTripDetails.date);

        } else if (frmTripDetails.tripType == constant.round) {
            frmTripDetails.returnDate = roundTripObject.returnDate;
            var counter = 1;

            function fliterRoundTripFlights(route) {
                if (frmTripDetails.fromDestination !== '' && frmTripDetails.fromDestination.length > 0 && frmTripDetails.fromDestination === route.source.toLowerCase() &&
                    frmTripDetails.toDestination !== '' && frmTripDetails.toDestination.length > 0 && frmTripDetails.toDestination === route.destination.toLowerCase()) {
                    route.matchId = counter++;
                    return route
                } else if (frmTripDetails.fromDestination !== '' && frmTripDetails.fromDestination.length > 0 && frmTripDetails.fromDestination === route.destination.toLowerCase() &&
                    frmTripDetails.toDestination !== '' && frmTripDetails.toDestination.length > 0 && frmTripDetails.toDestination === route.source.toLowerCase()) {
                    route.matchId = counter++;
                    return route
                }
            }

            searchedData = routes.filter(fliterRoundTripFlights);
            renderFlights(searchedData, frmTripDetails);
        }


        dynaBars.forEach(function(item) {
            if (searchedData && searchedData.length > 0) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };


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
        let date = frm.outbounddate.value.trim();
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
        console.log(price.value);
        // let dataToBeFiltered;
        const priceFiltered = [];
        let frm = document.forms[0];
        let date = frm.outbounddate.value.trim();

        date = date.length > 0 ? date : null

        searchedData.filter(function(flight) {
            if (flight.price < price.value) {
                priceFiltered.push(flight);
            }
            return priceFiltered;
        });
        renderFlights(priceFiltered, date)

    }

    //get airlines name
    getAirportsNames(flights, "airportNames");
    setPriceToSlider();

    return {
        SearchFlights: searchFlights,
        RenderFlights: renderFlights,
        BookNow: bookNow,
        SetTravellers: setTravellers,
        FilterBy: filterBy,
        SetPriceToSlider: setPriceToSlider,
        FliterByPrice: fliterByPrice
    }
})(data, window);