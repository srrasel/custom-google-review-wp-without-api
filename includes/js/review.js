var m8_data = {
    reviewsPath: "//burgersandgrill69.fr/review.json",
    cssPath: "//burgersandgrill69.fr/wp-content/plugins/greview/includes/css/widget.css",
    trackerId: " Street",
    cookieRoot: ".hhhh.fr",
    reviewsInterval: 2500,
    reviewsOptions: { toaster: { isActive: true, slideInterval: 2500, limit: "10" }, mosaic: { isActive: true, limit: "9" } },
    squaremode: false,
    franchise: true,
    openings: { mobile: 0, desktop: 0 },
    i18n: {
        fr: {
            monthList: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
            dayList: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],

            dateFormat: "le {{day}}{{daysuffix}} {{month}} {{year}}",
            daySuffix: ["", "er", "", ""],
            dateAgo:
                "il y a {{interval}} {{#if minute}}minute{{#sup minute 1}}s{{/sup}}{{/if}}{{#if second}}seconde{{#sup second 1}}s{{/sup}}{{/if}}{{#if week}}semaine{{#sup week 1}}s{{/sup}}{{/if}}{{#if day}}jour{{#sup day 1}}s{{/sup}}{{/if}}{{#if hour}}heure{{#sup hour 1}}s{{/sup}}{{/if}}",

            all_infos: "Toutes les infos ici :",
            searching: "Recherche en cours",
            geoloc_failed: "Echec Geolocalisation",
            geoloc_refused: "GÃ©olocalisation refusÃ©e",
            geoloc_unavailable: "GÃ©olocalisation indisponible",
            geoloc_timeout: "GÃ©olocalisation difficile",
            reviews_count: "avis",
            search_intro: "Rechercher les Chicken Street pr\u00e8s de :",
            search_placeholder: "Saisissez une adresse, un lieu",
            modal_title: "Demande d'ItinÃ©raire",
            modal_intro: "Afin de vous proposer un itinÃ©raire, nous avons besoin de votre adresse de dÃ©part :",
            modal_placeholder: "Merci de la renseigner ici",
            modal_valid: "Valider",
            modal_cancel: "Annuler",
            modal_close: "Fermer",
            modal_open_directions: "Ouvrir l'ItinÃ©raire",
            modal_directions_tip: "SÃ©lectionnez l'application souhaitÃ©e pour ouvrir l'itinÃ©raire",
            modal_directions_open: "Ouvrir",
            modal_directions_open_link: "Ouvrir Lien",
            modal_directions_open_with: "dans",
            onspot_nearyou: "Voir les Chicken Street pr\u00e8s de vous",
            onspot_or: "ou",
            onspot_input: "Recherchez votre restaurant",
            onspot_address: "Votre adresse est",
            onspot_with_results: "Voici les restaurants Ã  proximitÃ© :",
            onspot_no_results: "Aucun restaurant n'est Ã  proximitÃ© de cette adresse.",
            onspot_directions: "Calculez l'itin\u00e9raire en 1 clic",
            onspot_gowebsite: "Voir le site du restaurant",
            onspot_booking_label: "RÃ©servation :",
            onspot_address_label: "Adresse",
            takeaway_nearyou: "Trouver prÃ¨s de vous",
            takeaway_or: "ou",
            takeaway_soonavailable: "BientÃ´t disponible",
            takeaway_mailsaved: "Mail enregistrÃ©",
            takeaway_input: "Recherchez votre restaurant",
            takeaway_address: "Votre adresse est",
            takeaway_with_results: "Voici les restaurants Ã  proximitÃ© :",
            takeaway_no_results: "Aucun restaurant n'est Ã  proximitÃ© de cette adresse.",
            takeaway_intro1: "Faire une commande Ã  emporter depuis le site internet sera bientÃ´t disponible pour ce restaurant.",
            takeaway_intro2: "Pour Ãªtre averti du lancement de ce service, merci de renseigner votre adresse mail.",
            takeaway_placeholder_mail: "Votre adresse mail",
            takeaway_getnotified: "Ãªtre averti",
            takeaway_contact: "En attendant, vous pouvez venir au restaurant et commander sur place et prendre Ã  emporter.",
            takeaway_directions: "Calculez l'itin\u00e9raire en 1 clic",
            takeaway_order: "Commander maintenant",
            takeaway_address_label: "Adresse",
            takeaway_order_label: "Commande Ã  emporter :",
            takeaway_order_onspot_label: "Commandez directement sur place :",
            takeaway_order_phone_label: "Commandez par tÃ©lÃ©phone et venez chercher :",
            takeaway_order_phone_call_action: "Appeler",
            takeaway_order_clickco_label: "Click&Collect, Commandez en ligne et venez chercher :",
            takeaway_order_phone_seenumber_action: "Voir le numÃ©ro",
            delivery_input: "Renseignez votre adresse de livraison",
            delivery_address: "Votre adresse est",
            delivery_with_results: "Choisissez lâ€™un de nos partenaires de livraison :",
            delivery_with_one_result: "Faites-vous livrer :",
            delivery_now: "Super ! Votre adresse est livrable maintenant par :",
            delivery_internal_result: "Le restaurant conseille la livraison par le lien suivant :",
            delivery_now_else: "Vous pouvez Ã©galement vous faire livrer par :",
            delivery_no_results: "Aucun restaurant n'est en mesure de vous livrer Ã  cette heure Ã  cette adresse",
            delivery_lackprecision: "Cette adresse n'est pas assez prÃ©cise. Vous pouvez par exemple saisir le numÃ©ro de la rue, le nom de votre hotel ou de votre entreprise oÃ¹ vous souhaitez vous faire livrer.",
            delivery_tip: "ex: votre adresse prÃ©cise, le nom de votre hÃ´tel ou de votre bureau",
            preview_get_intro: "Un Ã©tablissement va bientÃ´t ouvrir prÃ¨s de chez vous.",
            preview_get_notified: "ÃŠtre averti de lâ€™ouverture",
            preview_opensoon: "Ouverture prochainement",
            read_more: "Lire la suite",
            booking_not_required: "Pas besoin de r\u00e9server",
            see_website: "Voir le site internet",
            click_direction_icons: "ItinÃ©raire : ",
            click_direction_tip_: "Cliquez pour ouvrir dans GoogleMaps, Waze ou Plan :",
            click_direction_tip_ios: "Cliquez pour ouvrir dans GoogleMaps, Waze ou Plans :",
            click_direction_tip_android: "Cliquez pour ouvrir dans GoogleMaps ou Waze :",
            route_direction: "ItinÃ©raire en ",
            spot_closed: "FermÃ©",
            spot_closed_temp: "FermÃ© temporairement",
            usually: "Habituellement",
            hour_label: "Horaires :",
            next_hour_action: { open: "Ouvre Ã ", closed: "Ferme Ã ", closesoon: "Ferme bientÃ´t Ã ", opensoon: "Ouvre bientÃ´t Ã " },
            hour_status: { open: "Ouvert", closed: "FermÃ©" },
            next_day: " prochain",
        },
    },
    ctas: [],
    spots: [],
    maps: { gmapsApiKey: "AIzaSyCW-4To0I06SJz5uz18wthkNWqY78FsqQ4", searchCountries: ["fr"] },
};

var m8_google = {
    loadGoogleGeometry: function () {
        //console.log('LOADING Google Geometry');

        google.maps.__gjsload__("geometry", function (_) {
            var Aka = function (a, b) {
                    return Math.abs(_.qg(b - a, -180, 180));
                },
                Bka = function (a, b, c, d, e) {
                    if (!d) {
                        c = Aka(a.lng(), c) / Aka(a.lng(), b.lng());
                        if (!e) return (e = Math.sin(_.Ud(a.lat()))), (e = Math.log((1 + e) / (1 - e)) / 2), (b = Math.sin(_.Ud(b.lat()))), _.Vd(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                        a = e.fromLatLngToPoint(a);
                        b = e.fromLatLngToPoint(b);
                        return e.fromPointToLatLng(new _.O(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat();
                    }
                    e = _.Ud(a.lat());
                    a = _.Ud(a.lng());
                    d = _.Ud(b.lat());
                    b = _.Ud(b.lng());
                    c = _.Ud(c);
                    return _.qg(_.Vd(Math.atan2(Math.sin(e) * Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90);
                },
                Cka = function (a, b) {
                    a = new _.Tg(a, !1);
                    b = new _.Tg(b, !1);
                    return a.equals(b);
                },
                Vu = {
                    containsLocation: function (a, b) {
                        a = _.Xg(a);
                        const c = _.qg(a.lng(), -180, 180),
                            d = !!b.get("geodesic"),
                            e = b.get("latLngs");
                        var f = b.get("map");
                        f = !d && f ? f.getProjection() : null;
                        let g = !1;
                        for (let k = 0, l = e.getLength(); k < l; ++k) {
                            const m = e.getAt(k);
                            for (let n = 0, p = m.getLength(); n < p; ++n) {
                                const q = m.getAt(n),
                                    r = m.getAt((n + 1) % p);
                                var h = _.qg(q.lng(), -180, 180);
                                const t = _.qg(r.lng(), -180, 180),
                                    u = Math.max(h, t);
                                h = Math.min(h, t);
                                (180 < u - h ? c >= u || c < h : c < u && c >= h) && Bka(q, r, c, d, f) < a.lat() && (g = !g);
                            }
                        }
                        return g || Vu.isLocationOnEdge(a, b);
                    },
                };
            _.na("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", Vu.containsLocation);
            Vu.isLocationOnEdge = function (a, b, c) {
                a = _.Xg(a);
                c = c || 1e-9;
                const d = _.qg(a.lng(), -180, 180),
                    e = b instanceof _.dk,
                    f = !!b.get("geodesic"),
                    g = b.get("latLngs");
                b = b.get("map");
                b = !f && b ? b.getProjection() : null;
                for (let n = 0, p = g.getLength(); n < p; ++n) {
                    const q = g.getAt(n),
                        r = q.getLength(),
                        t = e ? r : r - 1;
                    for (let u = 0; u < t; ++u) {
                        var h = q.getAt(u);
                        const v = q.getAt((u + 1) % r);
                        if (Cka(h, a) || Cka(v, a)) return !0;
                        var k = _.qg(h.lng(), -180, 180),
                            l = _.qg(v.lng(), -180, 180);
                        const A = Math.max(k, l),
                            D = Math.min(k, l);
                        if ((k = 1e-9 >= Math.abs(_.qg(k - l, -180, 180)) && (Math.abs(_.qg(k - d, -180, 180)) <= c || Math.abs(_.qg(l - d, -180, 180)) <= c))) {
                            k = a.lat();
                            l = Math.min(h.lat(), v.lat()) - c;
                            var m = Math.max(h.lat(), v.lat()) + c;
                            k = k >= l && k <= m;
                        }
                        if (k) return !0;
                        if (180 < A - D ? d + c >= A || d - c <= D : d + c >= D && d - c <= A) if (((h = Bka(h, v, d, f, b)), Math.abs(h - a.lat()) < c)) return !0;
                    }
                }
                return !1;
            };
            _.na("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", Vu.isLocationOnEdge);
            var Wu = {
                decodePath: function (a) {
                    const b = _.mg(a),
                        c = Array(Math.floor(a.length / 2));
                    let d = 0,
                        e = 0,
                        f = 0,
                        g;
                    for (g = 0; d < b; ++g) {
                        let h = 1,
                            k = 0,
                            l;
                        do (l = a.charCodeAt(d++) - 63 - 1), (h += l << k), (k += 5);
                        while (31 <= l);
                        e += h & 1 ? ~(h >> 1) : h >> 1;
                        h = 1;
                        k = 0;
                        do (l = a.charCodeAt(d++) - 63 - 1), (h += l << k), (k += 5);
                        while (31 <= l);
                        f += h & 1 ? ~(h >> 1) : h >> 1;
                        c[g] = new _.Tg(1e-5 * e, 1e-5 * f, !0);
                    }
                    c.length = g;
                    return c;
                },
            };
            _.na("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", Wu.decodePath);
            Wu.encodePath = function (a) {
                a instanceof _.Oi && (a = a.getArray());
                a = (0, _.Fh)(a);
                return Wu.Hw(a, function (b) {
                    return [Math.round(1e5 * b.lat()), Math.round(1e5 * b.lng())];
                });
            };
            _.na("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", Wu.encodePath);
            Wu.Hw = function (a, b) {
                const c = [];
                let d = [0, 0],
                    e;
                for (let f = 0, g = _.mg(a); f < g; ++f) (e = b ? b(a[f]) : a[f]), Wu.lr(e[0] - d[0], c), Wu.lr(e[1] - d[1], c), (d = e);
                return c.join("");
            };
            Wu.lr = function (a, b) {
                Wu.Iw(0 > a ? ~(a << 1) : a << 1, b);
            };
            Wu.Iw = function (a, b) {
                for (; 32 <= a; ) b.push(String.fromCharCode((32 | (a & 31)) + 63)), (a >>= 5);
                b.push(String.fromCharCode(a + 63));
            };
            var Dka = { encoding: Wu, spherical: _.Al, poly: Vu };
            _.x.google.maps.geometry = Dka;
            _.fh("geometry", Dka);
        });
    },
    loadGooglePlaces: function () {
        google.maps.__gjsload__("places", function (_) {
            var $u = function (a) {
                    return null == a ? null : a;
                },
                av = function (a) {
                    a = _.Lg((b) => {
                        b = (0, _.gl)(b);
                        if (b.includes("/")) throw _.Gg('Field with "/" specified: ' + b);
                        b = b.replace(/\./g, "/");
                        "utc_offset_minutes" === b ? (b = "utc_offset") : "utc_offset" === b && _.Ag("utc_offset is deprecated as of November 2019. Use utc_offset_minutes instead. See https://goo.gle/js-open-now");
                        "opening_hours/open_now" === b && _.Ag("opening_hours.open_now is deprecated as of November 2019. Use the isOpen() method from a PlacesService.getDetails() result instead. See https://goo.gle/js-open-now.");
                        "permanently_closed" === b && _.Ag("permanently_closed is deprecated as of May 2020 and will beturned off in May 2021. Use business_status instead.");
                        return b;
                    })(a);
                    if (!a.length) throw _.Gg("At least one field must be specified.");
                    return a;
                },
                bv = function (a, b) {
                    try {
                        _.Jg(HTMLInputElement, "HTMLInputElement")(a);
                    } catch (c) {
                        if ((_.Hg(c), !a)) return;
                    }
                    _.N(window, "Pawa");
                    _.M(window, 154340);
                    _.eh("places_impl").then((c) => {
                        b = b || {};
                        this.setValues(b);
                        c.Et(this, a);
                        _.ji(a);
                    });
                },
                cv = function () {
                    this.g = null;
                    _.eh("places_impl").then((a) => {
                        this.g = a.St();
                    });
                },
                dv = function (a) {
                    this.g = null;
                    _.eh("places_impl").then((b) => {
                        this.g = b.Ft(a);
                    });
                },
                ev = function (a, b) {
                    _.N(window, "Sbwa");
                    _.M(window, 154341);
                    _.eh("places_impl").then((c) => {
                        c.Gt(this, a);
                        b = b || {};
                        this.setValues(b);
                    });
                },
                Lka = function (a) {
                    a = a.map((b) => fv.get(b) || b);
                    [...new Set(a)];
                },
                Nka = function (a, { requestedLanguage: b, requestedRegion: c } = {}) {
                    b = new gv({ id: (0, _.ll)(a.id), requestedLanguage: b, requestedRegion: c });
                    Mka(b, a);
                    return b;
                },
                Mka = function (a, b) {
                    for (const [c, d] of Object.entries(b))
                        if (Oka.has(c))
                            switch ((a.j.add(c), c)) {
                                case "addressComponents":
                                    a.C = d.map((e) => new hv(e));
                                    break;
                                case "attributions":
                                    a.D = d.map((e) => new iv(e));
                                    break;
                                case "id":
                                    Pka(a, d);
                                    break;
                                case "location":
                                    a.F = d ? new _.Tg(d) : null;
                                    break;
                                case "openingHours":
                                    try {
                                        a.h = d ? new jv(d) : null;
                                    } catch (e) {
                                        _.Ag(`Place ${a.id} returned invalid opening hours.`, e), _.N(window, "Pive", `-opening-hours-${a.id}`), _.M(window, 148228), (a.h = null);
                                    }
                                    break;
                                case "photos":
                                    a.G = d
                                        .map((e) => {
                                            try {
                                                return new kv(e);
                                            } catch (f) {
                                                _.Ag(`Place ${a.id} returned an invalid photo.`, f), _.N(window, "Pive", `-photo-${a.id}`), _.M(window, 148229);
                                            }
                                        })
                                        .filter(Boolean);
                                    break;
                                case "plusCode":
                                    a.H = d ? new lv(d) : null;
                                    break;
                                case "reviews":
                                    a.J = d.map((e) => new mv(e));
                                    break;
                                case "types":
                                    a.o = d || [];
                                    break;
                                case "viewport":
                                    a.M = d ? new _.Uh(d) : d;
                            }
                    a.g = { ...a.g, ...b };
                },
                Qka = function (a) {
                    _.N(window, "pvtjac");
                    _.M(window, 176079);
                    const b = {
                            addressComponents: a.addressComponents ? a.addressComponents.map((d) => d.toJSON()) : [],
                            adrFormatAddress: a.adrFormatAddress,
                            attributions: a.attributions ? a.attributions.map((d) => d.toJSON()) : [],
                            businessStatus: a.businessStatus,
                            id: a.id,
                            hasCurbsidePickup: a.hasCurbsidePickup,
                            hasDelivery: a.hasDelivery,
                            hasDineIn: a.hasDineIn,
                            isReservable: a.isReservable,
                            servesBreakfast: a.servesBreakfast,
                            servesLunch: a.servesLunch,
                            servesDinner: a.servesDinner,
                            servesBeer: a.servesBeer,
                            servesWine: a.servesWine,
                            servesBrunch: a.servesBrunch,
                            servesVegetarianFood: a.servesVegetarianFood,
                            hasWheelchairAccessibleEntrance: a.hasWheelchairAccessibleEntrance,
                            displayName: a.displayName,
                            formattedAddress: a.formattedAddress,
                            googleMapsURI: a.googleMapsURI,
                            iconBackgroundColor: a.iconBackgroundColor,
                            svgIconMaskURI: a.g.svgIconMaskURI,
                            internationalPhoneNumber: a.internationalPhoneNumber,
                            location: a.location ? a.location.toJSON() : null,
                            nationalPhoneNumber: a.nationalPhoneNumber,
                            openingHours: a.openingHours ? a.openingHours.toJSON() : null,
                            photos: a.photos ? a.photos.map((d) => d.toJSON()) : [],
                            plusCode: a.plusCode ? a.plusCode.toJSON() : null,
                            priceLevel: a.priceLevel,
                            rating: a.rating,
                            reviews: a.reviews ? a.reviews.map((d) => d.toJSON()) : [],
                            hasTakeout: a.hasTakeout,
                            types: a.types ? a.types.slice(0) : [],
                            userRatingCount: a.userRatingCount,
                            utcOffsetMinutes: a.utcOffsetMinutes,
                            viewport: a.viewport ? a.viewport.toJSON() : null,
                            websiteURI: a.websiteURI,
                        },
                        c = {};
                    for (const [d, e] of Object.entries(b)) a.j.has(d) && (c[d] = e);
                    return c;
                },
                Pka = function (a, b) {
                    a.id !== b && (console.warn(`Please note that the 'id' property of this place has changed: ${a.id} -> ${b}`), Object.defineProperty(a, "id", { enumerable: !0, writable: !1, value: b }));
                };
            _.y(bv, _.L);
            bv.prototype.setTypes = _.Xh("types", _.Lg(_.gl));
            bv.prototype.setTypes = bv.prototype.setTypes;
            bv.prototype.setComponentRestrictions = _.Xh("componentRestrictions", _.Pg(_.Ig({ country: _.Ng([_.gl, _.Lg(_.gl)]) }, !0)));
            bv.prototype.setComponentRestrictions = bv.prototype.setComponentRestrictions;
            _.Yh(bv.prototype, { place: null, bounds: _.Pg(_.Th), fields: _.Pg(av) });
            cv.prototype.getPlacePredictions = function (a, b) {
                _.N(window, "Gppa");
                _.M(window, 154333);
                a = Rka(a);
                const c = _.eh("places_impl").then(() => this.g.getPlacePredictions(a, b));
                b && c.catch(() => {});
                return c;
            };
            cv.prototype.getPlacePredictions = cv.prototype.getPlacePredictions;
            cv.prototype.getPredictions = cv.prototype.getPlacePredictions;
            cv.prototype.getQueryPredictions = function (a, b) {
                _.N(window, "Gqpa");
                _.M(window, 154334);
                _.eh("places_impl").then(() => {
                    this.g.getQueryPredictions(a, b);
                });
            };
            cv.prototype.getQueryPredictions = cv.prototype.getQueryPredictions;
            var Rka = _.Ig({ language: _.jl, region: _.jl, sessionToken: _.Pg(_.Jg(_.Ol, "AutocompleteSessionToken")), origin: _.Pg(_.Yg) }, !0);
            dv.prototype.getDetails = function (a, b) {
                _.N(window, "Psgd");
                _.M(window, 154337);
                a = Ska(a);
                _.eh("places_impl").then(() => {
                    this.g.getDetails(a, b);
                });
            };
            dv.prototype.getDetails = dv.prototype.getDetails;
            dv.prototype.nearbySearch = function (a, b) {
                _.N(window, "Psns");
                _.M(window, 154338);
                a = Tka(a);
                _.eh("places_impl").then(() => {
                    this.g.nearbySearch(a, b);
                });
            };
            dv.prototype.nearbySearch = dv.prototype.nearbySearch;
            dv.prototype.search = dv.prototype.nearbySearch;
            dv.prototype.textSearch = function (a, b) {
                _.N(window, "Psts");
                _.M(window, 154339);
                a = Uka(a);
                _.eh("places_impl").then(() => {
                    this.g.textSearch(a, b);
                });
            };
            dv.prototype.textSearch = dv.prototype.textSearch;
            dv.prototype.radarSearch = function () {
                _.Ag("Radar Search was deprecated on June 30, 2017 and turned off on July 30, 2018.");
            };
            dv.prototype.findPlaceFromQuery = function (a, b) {
                _.N(window, "Fpqa");
                _.M(window, 154336);
                a = Vka(a);
                _.eh("places_impl").then(() => {
                    this.g.findPlaceFromQuery(a, b);
                });
            };
            dv.prototype.findPlaceFromQuery = dv.prototype.findPlaceFromQuery;
            dv.prototype.findPlaceFromPhoneNumber = function (a, b) {
                _.N(window, "FpPn");
                _.M(window, 154335);
                a = Wka(a);
                _.eh("places_impl").then(() => {
                    this.g.findPlaceFromPhoneNumber(a, b);
                });
            };
            dv.prototype.findPlaceFromPhoneNumber = dv.prototype.findPlaceFromPhoneNumber;
            var Ska = _.Ig({ fields: _.Pg(av), language: _.jl, region: _.jl, sessionToken: _.Pg(_.Jg(_.Ol, "AutocompleteSessionToken")) }, !0),
                Vka = _.Ig({ fields: av, query: _.gl, language: _.jl, locationBias: _.Pg(_.vk) }),
                Wka = _.Ig({ fields: av, phoneNumber: (a) => (0, _.gl)(a), language: _.jl, locationBias: _.Pg(_.vk) }),
                Tka = _.Ig({ language: _.jl }, !0),
                Uka = _.Ig({ language: _.jl, region: _.jl }, !0);
            _.y(ev, _.L);
            _.Yh(ev.prototype, { places: null, bounds: _.Pg(_.Th) });
            var hv = class {
                constructor(a) {
                    this.h = $u(a.longText);
                    this.j = $u(a.shortText);
                    this.g = a.types || [];
                }
                get longText() {
                    return this.h;
                }
                get shortText() {
                    return this.j;
                }
                get types() {
                    return this.g;
                }
                toJSON() {
                    return { longText: this.longText, shortText: this.shortText, types: this.types.slice(0) };
                }
            };
            hv.prototype.toJSON = hv.prototype.toJSON;
            var iv = class {
                constructor(a) {
                    this.h = $u(a.provider);
                    this.g = $u(a.providerURI);
                }
                get provider() {
                    return this.h;
                }
                get providerURI() {
                    return this.g;
                }
                toJSON() {
                    return { provider: this.provider, providerURI: this.providerURI };
                }
            };
            iv.prototype.toJSON = iv.prototype.toJSON;
            var nv = class {
                constructor(a) {
                    this.g = (0, _.gl)(a.displayName);
                    this.h = $u(a.photoURI);
                    this.j = $u(a.uri);
                }
                get displayName() {
                    return this.g;
                }
                get uri() {
                    return this.j;
                }
                get photoURI() {
                    return this.h;
                }
                toJSON() {
                    return { displayName: this.displayName, uri: this.uri, photoURI: this.photoURI };
                }
            };
            nv.prototype.toJSON = nv.prototype.toJSON;
            var ov = class {
                constructor(a) {
                    this.g = (0, _.Mh)(a.day);
                    this.h = (0, _.Mh)(a.hour);
                    this.j = (0, _.Mh)(a.minute);
                }
                get day() {
                    return this.g;
                }
                get hour() {
                    return this.h;
                }
                get minute() {
                    return this.j;
                }
                toJSON() {
                    return { day: this.day, hour: this.hour, minute: this.minute };
                }
            };
            ov.prototype.toJSON = ov.prototype.toJSON;
            var pv = class {
                constructor(a) {
                    this.g = a.close ? new ov(a.close) : null;
                    this.h = _.Qg("open")(a) && new ov(a.open);
                }
                get close() {
                    return this.g;
                }
                get open() {
                    return this.h;
                }
                toJSON() {
                    const a = { open: this.open.toJSON() };
                    this.close && (a.close = this.close.toJSON());
                    return a;
                }
            };
            pv.prototype.toJSON = pv.prototype.toJSON;
            var jv = class {
                constructor(a) {
                    this.g = a.periods ? a.periods.map((b) => new pv(b)) : [];
                    this.h = a.weekdayDescriptions || [];
                }
                get periods() {
                    return this.g;
                }
                get weekdayDescriptions() {
                    return this.h;
                }
                toJSON() {
                    return { periods: this.periods.map((a) => a.toJSON()), weekdayDescriptions: this.weekdayDescriptions.slice(0) };
                }
            };
            jv.prototype.toJSON = jv.prototype.toJSON;
            var kv = class {
                constructor(a) {
                    this.h = a.authorAttributions ? a.authorAttributions.map((b) => new nv(b)) : [];
                    this.o = (0, _.Mh)(a.heightPx);
                    this.j = a.getUrl && (0, _.pea)(a.getUrl);
                    this.C = (0, _.Mh)(a.widthPx);
                    this.g = (0, _.jl)(a.name);
                }
                get authorAttributions() {
                    return this.h;
                }
                get heightPx() {
                    return this.o;
                }
                get widthPx() {
                    return this.C;
                }
                getURI(a = {}) {
                    let b = a.maxWidth,
                        c = a.maxHeight;
                    b || c || (b = this.widthPx);
                    b && (b = Math.max(b, 0));
                    c && (c = Math.max(c, 0));
                    if (this.g) {
                        var d = this.g.split("/");
                        a = d[1];
                        const e = d[3];
                        d = _.gg.h();
                        a = new URL(`https://places.googleapis.com/v1/places/${a}/photos/${e}/media?`);
                        b && a.searchParams.append("maxWidthPx", b.toString());
                        c && a.searchParams.append("maxHeightPx", c.toString());
                        a.searchParams.append("key", encodeURIComponent(d));
                        return a.toString();
                    }
                    return this.j(a);
                }
                toJSON() {
                    return { authorAttributions: this.authorAttributions.map((a) => a.toJSON()), heightPx: this.heightPx, widthPx: this.widthPx };
                }
            };
            kv.prototype.toJSON = kv.prototype.toJSON;
            kv.prototype.getURI = kv.prototype.getURI;
            var fv = new Map([
                    ["addressComponents", "address_components"],
                    ["adrFormatAddress", "adr_address"],
                    ["attributions", "html_attributions"],
                    ["businessStatus", "business_status"],
                    ["displayName", "name"],
                    ["formattedAddress", "formatted_address"],
                    ["googleMapsURI", "url"],
                    ["hasCurbsidePickup", "curbside_pickup"],
                    ["hasDelivery", "delivery"],
                    ["hasDineIn", "dine_in"],
                    ["hasTakeout", "takeout"],
                    ["isReservable", "reservable"],
                    ["servesBreakfast", "serves_breakfast"],
                    ["servesLunch", "serves_lunch"],
                    ["servesDinner", "serves_dinner"],
                    ["servesBeer", "serves_beer"],
                    ["servesWine", "serves_wine"],
                    ["servesBrunch", "serves_brunch"],
                    ["servesVegetarianFood", "serves_vegetarian_food"],
                    ["hasWheelchairAccessibleEntrance", "wheelchair_accessible_entrance"],
                    ["iconBackgroundColor", "icon_background_color"],
                    ["svgIconMaskURI", "icon_mask_base_uri"],
                    ["id", "place_id"],
                    ["internationalPhoneNumber", "international_phone_number"],
                    ["location", "geometry"],
                    ["nationalPhoneNumber", "formatted_phone_number"],
                    ["openingHours", "opening_hours"],
                    ["photos", "photos"],
                    ["plusCode", "plus_code"],
                    ["priceLevel", "price_level"],
                    ["rating", "rating"],
                    ["reviews", "reviews"],
                    ["types", "types"],
                    ["userRatingCount", "user_ratings_total"],
                    ["utcOffsetMinutes", "utc_offset"],
                    ["viewport", "geometry"],
                    ["websiteURI", "website"],
                ]),
                Xka = Object.freeze(Array.from(fv.keys())),
                Yka = Object.freeze("attributions businessStatus displayName formattedAddress iconBackgroundColor id photos plusCode priceLevel rating svgIconMaskURI types userRatingCount viewport location".split(" "));
            Object.freeze("hasCurbsidePickup hasDelivery hasDineIn hasTakeout isReservable servesBreakfast servesLunch servesDinner servesBeer servesWine servesBrunch servesVegetarianFood hasWheelchairAccessibleEntrance".split(" "));
            Lka([...Xka]);
            var Zka = new Map();
            for (const [a, b] of fv.entries()) "geometry" != b && Zka.set(b, a);
            var lv = class {
                constructor(a) {
                    this.g = $u(a.compoundCode);
                    this.h = $u(a.globalCode);
                }
                get compoundCode() {
                    return this.g;
                }
                get globalCode() {
                    return this.h;
                }
                toJSON() {
                    return { compoundCode: this.compoundCode, globalCode: this.globalCode };
                }
            };
            lv.prototype.toJSON = lv.prototype.toJSON;
            var mv = class {
                constructor(a) {
                    this.h = a.authorAttribution ? new nv(a.authorAttribution) : null;
                    this.F = $u(a.textLanguageCode);
                    this.o = a.publishTime ? new Date(a.publishTime) : null;
                    this.j = $u(a.publishTime);
                    this.D = $u(a.relativePublishTimeDescription);
                    var b = a.rating;
                    this.C = null == b ? null : b;
                    this.g = $u(a.text);
                }
                get authorAttribution() {
                    return this.h;
                }
                get textLanguageCode() {
                    return this.F;
                }
                get publishTime() {
                    return this.o;
                }
                get relativePublishTimeDescription() {
                    return this.D;
                }
                get rating() {
                    return this.C;
                }
                get text() {
                    return this.g;
                }
                toJSON() {
                    return {
                        authorAttribution: this.authorAttribution && this.authorAttribution.toJSON(),
                        publishTime: this.j,
                        relativePublishTimeDescription: this.relativePublishTimeDescription,
                        rating: this.rating,
                        text: this.text,
                        textLanguageCode: this.textLanguageCode,
                    };
                }
            };
            mv.prototype.toJSON = mv.prototype.toJSON;
            var $ka = class {
                constructor() {
                    this.id = "";
                    this.requestedRegion = this.requestedLanguage = null;
                    this.g = {};
                    this.M = this.o = this.J = this.H = this.G = this.h = this.F = this.D = this.C = void 0;
                }
                get addressComponents() {
                    return this.C;
                }
                get adrFormatAddress() {
                    return this.g.adrFormatAddress;
                }
                get attributions() {
                    return this.D;
                }
                get businessStatus() {
                    return this.g.businessStatus;
                }
                get displayName() {
                    return this.g.displayName;
                }
                get formattedAddress() {
                    return this.g.formattedAddress;
                }
                get googleMapsURI() {
                    return this.g.googleMapsURI;
                }
                get internationalPhoneNumber() {
                    return this.g.internationalPhoneNumber;
                }
                get location() {
                    return this.F;
                }
                get nationalPhoneNumber() {
                    return this.g.nationalPhoneNumber;
                }
                get openingHours() {
                    return this.h;
                }
                get photos() {
                    return this.G;
                }
                get plusCode() {
                    return this.H;
                }
                get priceLevel() {
                    return this.g.priceLevel;
                }
                get rating() {
                    return this.g.rating;
                }
                get reviews() {
                    return this.J;
                }
                get types() {
                    return this.o;
                }
                get userRatingCount() {
                    return this.g.userRatingCount;
                }
                get utcOffsetMinutes() {
                    return this.g.utcOffsetMinutes;
                }
                get viewport() {
                    return this.M;
                }
                get websiteURI() {
                    return this.g.websiteURI;
                }
                get iconBackgroundColor() {
                    return this.g.iconBackgroundColor;
                }
                get svgIconMaskURI() {
                    return this.g.svgIconMaskURI;
                }
                get hasTakeout() {
                    return this.g.hasTakeout;
                }
                get hasDelivery() {
                    return this.g.hasDelivery;
                }
                get hasDineIn() {
                    return this.g.hasDineIn;
                }
                get hasCurbsidePickup() {
                    return this.g.hasCurbsidePickup;
                }
                get isReservable() {
                    return this.g.isReservable;
                }
                get servesBreakfast() {
                    return this.g.servesBreakfast;
                }
                get servesLunch() {
                    return this.g.servesLunch;
                }
                get servesDinner() {
                    return this.g.servesDinner;
                }
                get servesBeer() {
                    return this.g.servesBeer;
                }
                get servesWine() {
                    return this.g.servesWine;
                }
                get servesBrunch() {
                    return this.g.servesBrunch;
                }
                get servesVegetarianFood() {
                    return this.g.servesVegetarianFood;
                }
                get hasWheelchairAccessibleEntrance() {
                    return this.g.hasWheelchairAccessibleEntrance;
                }
            };
            var gv = class extends $ka {
                constructor(a) {
                    super();
                    this.id = _.Rg("Place", "id", () => (0, _.ll)(a.id));
                    this.requestedLanguage = _.Rg("Place", "requestedLanguage", () => (0, _.jl)(a.requestedLanguage));
                    this.requestedRegion = _.Rg("Place", "requestedRegion", () => (0, _.jl)(a.requestedRegion));
                    Object.defineProperties(this, { id: { enumerable: !0, writable: !1 }, requestedLanguage: { enumerable: !0, writable: !1 }, requestedRegion: { enumerable: !0, writable: !1 } });
                    this.g = { id: this.id };
                    this.j = new Set();
                    this.j.add("id");
                    this.sessionToken = void 0;
                }
                async isOpen() {
                    throw Error(
                        "Place.prototype.isOpen() is not available in this version of the Google Maps JavaScript API. Please switch to the beta channel to use this feature. https://developers.google.com/maps/documentation/javascript/versions#beta-channel"
                    );
                }
                async getNextOpeningTime() {
                    throw Error(
                        "Place.prototype.getNextOpeningTime() is not available in this version of the Google Maps JavaScript API. Please switch to the beta channel to use this feature. https://developers.google.com/maps/documentation/javascript/versions#beta-channel"
                    );
                }
                async fetchFields() {
                    throw Error(
                        "Place.prototype.fetchFields() is not available in this version of the Google Maps JavaScript API. Please switch to the beta channel to use this feature. https://developers.google.com/maps/documentation/javascript/versions#beta-channel"
                    );
                }
                toJSON() {
                    return Qka(this);
                }
            };
            gv.prototype.toJSON = gv.prototype.toJSON;
            gv.prototype.fetchFields = gv.prototype.fetchFields;
            gv.prototype.getNextOpeningTime = gv.prototype.getNextOpeningTime;
            gv.prototype.isOpen = gv.prototype.isOpen;
            gv.searchByText = async function () {
                throw Error("Place.searchByText() is not available in this channel");
            };
            gv.findPlaceFromQuery = async function () {
                throw Error(
                    "google.maps.places.Place.findPlaceFromQuery() is not available in this version of the Google Maps JavaScript API. Please switch to the beta channel to use this feature. https://developers.google.com/maps/documentation/javascript/versions#beta-channel"
                );
            };
            gv.findPlaceFromPhoneNumber = async function () {
                throw Error(
                    "google.maps.places.Place.findPlaceFromPhoneNumber() is not available in this version of the Google Maps JavaScript API. Please switch to the beta channel to use this feature. https://developers.google.com/maps/documentation/javascript/versions#beta-channel"
                );
            };
            gv.__gmpdn = async function (a, b, c, d) {
                const e = await _.eh("places_impl");
                return new Promise((f, g) => {
                    e.Ev(a, b, c, d)
                        .then((h) => {
                            f(Nka({ id: a, displayName: h }, { requestedLanguage: b, requestedRegion: c }));
                        })
                        .catch((h) => {
                            g(h);
                        });
                });
            };
            gv.prototype.constructor = gv.prototype.constructor;
            var Oka = new Set(Xka);
            [...Yka];
            _.uk("api-3/images/autocomplete-icons", !0, !1);
            var qv = {
                PlacesService: dv,
                PlacesServiceStatus: {
                    OK: "OK",
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
                    REQUEST_DENIED: "REQUEST_DENIED",
                    INVALID_REQUEST: "INVALID_REQUEST",
                    ZERO_RESULTS: "ZERO_RESULTS",
                    NOT_FOUND: "NOT_FOUND",
                },
                AutocompleteService: cv,
                AutocompleteSessionToken: _.Ol,
                Autocomplete: bv,
                BusinessStatus: { OPERATIONAL: "OPERATIONAL", CLOSED_TEMPORARILY: "CLOSED_TEMPORARILY", CLOSED_PERMANENTLY: "CLOSED_PERMANENTLY" },
                SearchBox: ev,
                RankBy: { PROMINENCE: 0, DISTANCE: 1 },
                Place: gv,
                AddressComponent: hv,
                Attribution: iv,
                OpeningHours: jv,
                OpeningHoursPeriod: pv,
                OpeningHoursPoint: ov,
                Photo: kv,
                AuthorAttribution: nv,
                PlusCode: lv,
                Review: mv,
                PriceLevel: { FREE: "FREE", INEXPENSIVE: "INEXPENSIVE", MODERATE: "MODERATE", EXPENSIVE: "EXPENSIVE", VERY_EXPENSIVE: "VERY_EXPENSIVE" },
                SearchByTextRankBy: void 0,
            };
            _.Bg(qv);
            _.x.google.maps.places = { ...qv, RatingLevel: { GOOD: 0, VERY_GOOD: 1, EXCELLENT: 2, EXTRAORDINARY: 3 } };
            _.fh("places", qv);
        });
    },
};

!(function (e, t) {
    "use strict";
    var n = "model",
        i = "name",
        a = "type",
        r = "vendor",
        s = "version",
        o = "mobile",
        l = "tablet",
        c = {
            extend: function (e, t) {
                var n = {};
                for (var i in e) t[i] && t[i].length % 2 == 0 ? (n[i] = t[i].concat(e[i])) : (n[i] = e[i]);
                return n;
            },
            has: function (e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
            },
            lowerize: function (e) {
                return e.toLowerCase();
            },
            major: function (e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
            },
            trim: function (e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
        },
        p = {
            rgx: function (e, t) {
                for (var n, i, a, r, s, o, l = 0; l < t.length && !s; ) {
                    var c = t[l],
                        p = t[l + 1];
                    for (n = i = 0; n < c.length && !s; )
                        if ((s = c[n++].exec(e)))
                            for (a = 0; a < p.length; a++)
                                (o = s[++i]),
                                    "object" == typeof (r = p[a]) && r.length > 0
                                        ? 2 == r.length
                                            ? "function" == typeof r[1]
                                                ? (this[r[0]] = r[1].call(this, o))
                                                : (this[r[0]] = r[1])
                                            : 3 == r.length
                                            ? "function" != typeof r[1] || (r[1].exec && r[1].test)
                                                ? (this[r[0]] = o ? o.replace(r[1], r[2]) : void 0)
                                                : (this[r[0]] = o ? r[1].call(this, o, r[2]) : void 0)
                                            : 4 == r.length && (this[r[0]] = o ? r[3].call(this, o.replace(r[1], r[2])) : void 0)
                                        : (this[r] = o || void 0);
                    l += 2;
                }
            },
            str: function (e, t) {
                for (var n in t)
                    if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var i = 0; i < t[n].length; i++) if (c.has(t[n][i], e)) return "?" === n ? void 0 : n;
                    } else if (c.has(t[n], e)) return "?" === n ? void 0 : n;
                return e;
            },
        },
        d = {
            browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } },
            device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } },
            os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } },
        },
        u = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [i, s],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [[i, "Opera Mini"], s],
                [/\s(opr)\/([\w\.]+)/i],
                [[i, "Opera"], s],
                [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    /(rekonq)\/([\w\.]*)/i,
                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                ],
                [i, s],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [[i, "IE"], s],
                [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                [[i, "Edge"], s],
                [/(yabrowser)\/([\w\.]+)/i],
                [[i, "Yandex"], s],
                [/(puffin)\/([\w\.]+)/i],
                [[i, "Puffin"], s],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [[i, "UCBrowser"], s],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[i, /_/g, " "], s],
                [/(micromessenger)\/([\w\.]+)/i],
                [[i, "WeChat"], s],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [i, s],
                [/(QQ)\/([\d\.]+)/i],
                [i, s],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [i, s],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                [i, s],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [i, s],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [i],
                [/(LBBROWSER)/i],
                [i],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [s, [i, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [s, [i, "Facebook"]],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [s, [i, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [[i, /(.+)/, "$1 WebView"], s],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [[i, /(.+(?:g|us))(.+)/, "$1 $2"], s],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [s, [i, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [i, s],
                [/(dolfin)\/([\w\.]+)/i],
                [[i, "Dolphin"], s],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [[i, "Chrome"], s],
                [/(coast)\/([\w\.]+)/i],
                [[i, "Opera Coast"], s],
                [/fxios\/([\w\.-]+)/i],
                [s, [i, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [s, [i, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [s, i],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [[i, "GSA"], s],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [i, [s, p.str, d.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [i, s],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [[i, "Netscape"], s],
                [
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    /(links)\s\(([\w\.]+)/i,
                    /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i,
                    /(mosaic)[\/\s]([\w\.]+)/i,
                ],
                [i, s],
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [["architecture", "amd64"]],
                [/(ia32(?=;))/i],
                [["architecture", c.lowerize]],
                [/((?:i[346]|x)86)[;\)]/i],
                [["architecture", "ia32"]],
                [/windows\s(ce|mobile);\sppc;/i],
                [["architecture", "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [["architecture", /ower/, "", c.lowerize]],
                [/(sun4\w)[;\)]/i],
                [["architecture", "sparc"]],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [["architecture", c.lowerize]],
            ],
            device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [n, r, [a, l]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [n, [r, "Apple"], [a, l]],
                [/(apple\s{0,1}tv)/i],
                [
                    [n, "Apple TV"],
                    [r, "Apple"],
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [r, n, [a, l]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [n, [r, "Amazon"], [a, l]],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    [n, p.str, d.device.amazon.model],
                    [r, "Amazon"],
                    [a, o],
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [n, r, [a, o]],
                [/\((ip[honed|\s\w*]+);/i],
                [n, [r, "Apple"], [a, o]],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [r, n, [a, o]],
                [/\(bb10;\s(\w+)/i],
                [n, [r, "BlackBerry"], [a, o]],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                [n, [r, "Asus"], [a, l]],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [r, "Sony"],
                    [n, "Xperia Tablet"],
                    [a, l],
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [n, [r, "Sony"], [a, o]],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [r, n, [a, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [n, [r, "Nvidia"], [a, "console"]],
                [/(playstation\s[34portablevi]+)/i],
                [n, [r, "Sony"], [a, "console"]],
                [/(sprint\s(\w+))/i],
                [
                    [r, p.str, d.device.sprint.vendor],
                    [n, p.str, d.device.sprint.model],
                    [a, o],
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [r, n, [a, l]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [r, [n, /_/g, " "], [a, o]],
                [/(nexus\s9)/i],
                [n, [r, "HTC"], [a, l]],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [n, [r, "Huawei"], [a, o]],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [r, n, [a, o]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [n, [r, "Microsoft"], [a, "console"]],
                [/(kin\.[onetw]{3})/i],
                [
                    [n, /\./g, " "],
                    [r, "Microsoft"],
                    [a, o],
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [n, [r, "Motorola"], [a, o]],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [n, [r, "Motorola"], [a, l]],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    [r, c.trim],
                    [n, c.trim],
                    [a, "smarttv"],
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [n, /^/, "SmartTV"],
                    [r, "Samsung"],
                    [a, "smarttv"],
                ],
                [/\(dtv[\);].+(aquos)/i],
                [n, [r, "Sharp"], [a, "smarttv"]],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [[r, "Samsung"], n, [a, l]],
                [/smart-tv.+(samsung)/i],
                [r, [a, "smarttv"], n],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [[r, "Samsung"], n, [a, o]],
                [/sie-(\w*)/i],
                [n, [r, "Siemens"], [a, o]],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [[r, "Nokia"], n, [a, o]],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [n, [r, "Acer"], [a, l]],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [n, [r, "LG"], [a, l]],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [[r, "LG"], n, [a, l]],
                [/(lg) netcast\.tv/i],
                [r, n, [a, "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [n, [r, "LG"], [a, o]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [n, [r, "Lenovo"], [a, l]],
                [/linux;.+((jolla));/i],
                [r, n, [a, o]],
                [/((pebble))app\/[\d\.]+\s/i],
                [r, n, [a, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [r, n, [a, o]],
                [/crkey/i],
                [
                    [n, "Chromecast"],
                    [r, "Google"],
                ],
                [/android.+;\s(glass)\s\d/i],
                [n, [r, "Google"], [a, "wearable"]],
                [/android.+;\s(pixel c)\s/i],
                [n, [r, "Google"], [a, l]],
                [/android.+;\s(pixel xl|pixel)\s/i],
                [n, [r, "Google"], [a, o]],
                [
                    /android.+;\s(\w+)\s+build\/hm\1/i,
                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                    /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                ],
                [
                    [n, /_/g, " "],
                    [r, "Xiaomi"],
                    [a, o],
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [n, /_/g, " "],
                    [r, "Xiaomi"],
                    [a, l],
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [n, [r, "Meizu"], [a, l]],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                [n, [r, "OnePlus"], [a, o]],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [n, [r, "RCA"], [a, l]],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [n, [r, "Dell"], [a, l]],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [n, [r, "Verizon"], [a, l]],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [[r, "Barnes & Noble"], n, [a, l]],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [n, [r, "NuVision"], [a, l]],
                [/android.+;\s(k88)\sbuild/i],
                [n, [r, "ZTE"], [a, l]],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [n, [r, "Swiss"], [a, o]],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [n, [r, "Swiss"], [a, l]],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [n, [r, "Zeki"], [a, l]],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [[r, "Dragon Touch"], n, [a, l]],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [n, [r, "Insignia"], [a, l]],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [n, [r, "NextBook"], [a, l]],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [[r, "Voice"], n, [a, o]],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [[r, "LvTel"], n, [a, o]],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [n, [r, "Envizen"], [a, l]],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [r, n, [a, l]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [n, [r, "MachSpeed"], [a, l]],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [r, n, [a, l]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [n, [r, "Rotor"], [a, l]],
                [/android.+(KS(.+))\s+build/i],
                [n, [r, "Amazon"], [a, l]],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [r, n, [a, l]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [[a, c.lowerize], r, n],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [n, [r, "Generic"]],
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [s, [i, "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [i, s],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [s, i],
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [i, s],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [i, [s, p.str, d.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [i, "Windows"],
                    [s, p.str, d.os.windows.version],
                ],
                [/\((bb)(10);/i],
                [[i, "BlackBerry"], s],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                [i, s],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [[i, "Symbian"], s],
                [/\((series40);/i],
                [i],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [[i, "Firefox OS"], s],
                [
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    /(mint)[\/\s\(]?(\w*)/i,
                    /(mageia|vectorlinux)[;\s]/i,
                    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i,
                    /(gnu)\s?([\w\.]*)/i,
                ],
                [i, s],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [[i, "Chromium OS"], s],
                [/(sunos)\s?([\w\.\d]*)/i],
                [[i, "Solaris"], s],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [i, s],
                [/(haiku)\s(\w+)/i],
                [i, s],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    [s, /_/g, "."],
                    [i, "iOS"],
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [i, "Mac OS"],
                    [s, /_/g, "."],
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                [i, s],
            ],
        },
        h = function (t, n) {
            if (("object" == typeof t && ((n = t), (t = void 0)), !(this instanceof h))) return new h(t, n).getResult();
            var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                a = n ? c.extend(u, n) : u;
            return (
                (this.getBrowser = function () {
                    var e = { name: void 0, version: void 0 };
                    return p.rgx.call(e, i, a.browser), (e.major = c.major(e.version)), e;
                }),
                (this.getCPU = function () {
                    var e = { architecture: void 0 };
                    return p.rgx.call(e, i, a.cpu), e;
                }),
                (this.getDevice = function () {
                    var e = { vendor: void 0, model: void 0, type: void 0 };
                    return p.rgx.call(e, i, a.device), e;
                }),
                (this.getEngine = function () {
                    var e = { name: void 0, version: void 0 };
                    return p.rgx.call(e, i, a.engine), e;
                }),
                (this.getOS = function () {
                    var e = { name: void 0, version: void 0 };
                    return p.rgx.call(e, i, a.os), e;
                }),
                (this.getResult = function () {
                    return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                }),
                (this.getUA = function () {
                    return i;
                }),
                (this.setUA = function (e) {
                    return (i = e), this;
                }),
                this
            );
        };
    (h.VERSION = "0.7.18"),
        (h.BROWSER = { NAME: i, MAJOR: "major", VERSION: s }),
        (h.CPU = { ARCHITECTURE: "architecture" }),
        (h.DEVICE = { MODEL: n, VENDOR: r, TYPE: a, CONSOLE: "console", MOBILE: o, SMARTTV: "smarttv", TABLET: l, WEARABLE: "wearable", EMBEDDED: "embedded" }),
        (h.ENGINE = { NAME: i, VERSION: s }),
        (h.OS = { NAME: i, VERSION: s }),
        "undefined" != typeof exports
            ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), (exports.UAParser = h))
            : "functionoff" == typeof define && define.amd
            ? define(function () {
                  return h;
              })
            : e && (e.UAParser = h);
    var m = e && (e.jQuery || e.Zepto);
    if (void 0 !== m) {
        var f = new h();
        (m.ua = f.getResult()),
            (m.ua.get = function () {
                return f.getUA();
            }),
            (m.ua.set = function (e) {
                f.setUA(e);
                var t = f.getResult();
                for (var n in t) m.ua[n] = t[n];
            });
    }
})("object" == typeof window ? window : this),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "functionoff" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.Handlebars = t()) : (e.Handlebars = t());
    })(this, function () {
        return (function (e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var a = (n[i] = { exports: {}, id: i, loaded: !1 });
                return e[i].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports;
            }
            var n = {};
            return (t.m = e), (t.c = n), (t.p = ""), t(0);
        })([
            function (e, t, n) {
                "use strict";
                function i() {
                    var e = u();
                    return (
                        (e.compile = function (t, n) {
                            return l.compile(t, n, e);
                        }),
                        (e.precompile = function (t, n) {
                            return l.precompile(t, n, e);
                        }),
                        (e.AST = s.default),
                        (e.Compiler = l.Compiler),
                        (e.JavaScriptCompiler = c.default),
                        (e.Parser = o.parser),
                        (e.parse = o.parse),
                        e
                    );
                }
                var a = n(1).default;
                t.__esModule = !0;
                var r = a(n(2)),
                    s = a(n(35)),
                    o = n(36),
                    l = n(41),
                    c = a(n(42)),
                    p = a(n(39)),
                    d = a(n(34)),
                    u = r.default.create,
                    h = i();
                (h.create = i), d.default(h), (h.Visitor = p.default), (h.default = h), (t.default = h), (e.exports = t.default);
            },
            function (e, t) {
                "use strict";
                (t.default = function (e) {
                    return e && e.__esModule ? e : { default: e };
                }),
                    (t.__esModule = !0);
            },
            function (e, t, n) {
                "use strict";
                function i() {
                    var e = new s.HandlebarsEnvironment();
                    return (
                        c.extend(e, s),
                        (e.SafeString = o.default),
                        (e.Exception = l.default),
                        (e.Utils = c),
                        (e.escapeExpression = c.escapeExpression),
                        (e.VM = p),
                        (e.template = function (t) {
                            return p.template(t, e);
                        }),
                        e
                    );
                }
                var a = n(3).default,
                    r = n(1).default;
                t.__esModule = !0;
                var s = a(n(4)),
                    o = r(n(21)),
                    l = r(n(6)),
                    c = a(n(5)),
                    p = a(n(22)),
                    d = r(n(34)),
                    u = i();
                (u.create = i), d.default(u), (u.default = u), (t.default = u), (e.exports = t.default);
            },
            function (e, t) {
                "use strict";
                (t.default = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                }),
                    (t.__esModule = !0);
            },
            function (e, t, n) {
                "use strict";
                function i(e, t, n) {
                    (this.helpers = e || {}), (this.partials = t || {}), (this.decorators = n || {}), o.registerDefaultHelpers(this), l.registerDefaultDecorators(this);
                }
                var a = n(1).default;
                (t.__esModule = !0), (t.HandlebarsEnvironment = i);
                var r = n(5),
                    s = a(n(6)),
                    o = n(10),
                    l = n(18),
                    c = a(n(20));
                t.VERSION = "4.0.11";
                t.COMPILER_REVISION = 7;
                t.REVISION_CHANGES = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0" };
                var p = "[object Object]";
                i.prototype = {
                    constructor: i,
                    logger: c.default,
                    log: c.default.log,
                    registerHelper: function (e, t) {
                        if (r.toString.call(e) === p) {
                            if (t) throw new s.default("Arg not supported with multiple helpers");
                            r.extend(this.helpers, e);
                        } else this.helpers[e] = t;
                    },
                    unregisterHelper: function (e) {
                        delete this.helpers[e];
                    },
                    registerPartial: function (e, t) {
                        if (r.toString.call(e) === p) r.extend(this.partials, e);
                        else {
                            if (void 0 === t) throw new s.default('Attempting to register a partial called "' + e + '" as undefined');
                            this.partials[e] = t;
                        }
                    },
                    unregisterPartial: function (e) {
                        delete this.partials[e];
                    },
                    registerDecorator: function (e, t) {
                        if (r.toString.call(e) === p) {
                            if (t) throw new s.default("Arg not supported with multiple decorators");
                            r.extend(this.decorators, e);
                        } else this.decorators[e] = t;
                    },
                    unregisterDecorator: function (e) {
                        delete this.decorators[e];
                    },
                };
                var d = c.default.log;
                (t.log = d), (t.createFrame = r.createFrame), (t.logger = c.default);
            },
            function (e, t) {
                "use strict";
                function n(e) {
                    return a[e];
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                    return e;
                }
                (t.__esModule = !0),
                    (t.extend = i),
                    (t.indexOf = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1;
                    }),
                    (t.escapeExpression = function (e) {
                        if ("string" != typeof e) {
                            if (e && e.toHTML) return e.toHTML();
                            if (null == e) return "";
                            if (!e) return e + "";
                            e = "" + e;
                        }
                        return s.test(e) ? e.replace(r, n) : e;
                    }),
                    (t.isEmpty = function (e) {
                        return (!e && 0 !== e) || !(!c(e) || 0 !== e.length);
                    }),
                    (t.createFrame = function (e) {
                        var t = i({}, e);
                        return (t._parent = e), t;
                    }),
                    (t.blockParams = function (e, t) {
                        return (e.path = t), e;
                    }),
                    (t.appendContextPath = function (e, t) {
                        return (e ? e + "." : "") + t;
                    });
                var a = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" },
                    r = /[&<>"'`=]/g,
                    s = /[&<>"'`=]/,
                    o = Object.prototype.toString;
                t.toString = o;
                var l = function (e) {
                    return "function" == typeof e;
                };
                l(/x/) &&
                    (t.isFunction = l = function (e) {
                        return "function" == typeof e && "[object Function]" === o.call(e);
                    }),
                    (t.isFunction = l);
                var c =
                    Array.isArray ||
                    function (e) {
                        return !(!e || "object" != typeof e) && "[object Array]" === o.call(e);
                    };
                t.isArray = c;
            },
            function (e, t, n) {
                "use strict";
                function i(e, t) {
                    var n = t && t.loc,
                        s = void 0,
                        o = void 0;
                    n && (e += " - " + (s = n.start.line) + ":" + (o = n.start.column));
                    for (var l = Error.prototype.constructor.call(this, e), c = 0; c < r.length; c++) this[r[c]] = l[r[c]];
                    Error.captureStackTrace && Error.captureStackTrace(this, i);
                    try {
                        n && ((this.lineNumber = s), a ? Object.defineProperty(this, "column", { value: o, enumerable: !0 }) : (this.column = o));
                    } catch (e) {}
                }
                var a = n(7).default;
                t.__esModule = !0;
                var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                (i.prototype = new Error()), (t.default = i), (e.exports = t.default);
            },
            function (e, t, n) {
                e.exports = { default: n(8), __esModule: !0 };
            },
            function (e, t, n) {
                var i = n(9);
                e.exports = function (e, t, n) {
                    return i.setDesc(e, t, n);
                };
            },
            function (e, t) {
                var n = Object;
                e.exports = {
                    create: n.create,
                    getProto: n.getPrototypeOf,
                    isEnum: {}.propertyIsEnumerable,
                    getDesc: n.getOwnPropertyDescriptor,
                    setDesc: n.defineProperty,
                    setDescs: n.defineProperties,
                    getKeys: n.keys,
                    getNames: n.getOwnPropertyNames,
                    getSymbols: n.getOwnPropertySymbols,
                    each: [].forEach,
                };
            },
            function (e, t, n) {
                "use strict";
                var i = n(1).default;
                (t.__esModule = !0),
                    (t.registerDefaultHelpers = function (e) {
                        a.default(e), r.default(e), s.default(e), o.default(e), l.default(e), c.default(e), p.default(e);
                    });
                var a = i(n(11)),
                    r = i(n(12)),
                    s = i(n(13)),
                    o = i(n(14)),
                    l = i(n(15)),
                    c = i(n(16)),
                    p = i(n(17));
            },
            function (e, t, n) {
                "use strict";
                t.__esModule = !0;
                var i = n(5);
                (t.default = function (e) {
                    e.registerHelper("blockHelperMissing", function (t, n) {
                        var a = n.inverse,
                            r = n.fn;
                        if (!0 === t) return r(this);
                        if (!1 === t || null == t) return a(this);
                        if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : a(this);
                        if (n.data && n.ids) {
                            var s = i.createFrame(n.data);
                            (s.contextPath = i.appendContextPath(n.data.contextPath, n.name)), (n = { data: s });
                        }
                        return r(t, n);
                    });
                }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                var i = n(1).default;
                t.__esModule = !0;
                var a = n(5),
                    r = i(n(6));
                (t.default = function (e) {
                    e.registerHelper("each", function (e, t) {
                        function n(t, n, r) {
                            c && ((c.key = t), (c.index = n), (c.first = 0 === n), (c.last = !!r), p && (c.contextPath = p + t)), (l += i(e[t], { data: c, blockParams: a.blockParams([e[t], t], [p + t, null]) }));
                        }
                        if (!t) throw new r.default("Must pass iterator to #each");
                        var i = t.fn,
                            s = t.inverse,
                            o = 0,
                            l = "",
                            c = void 0,
                            p = void 0;
                        if ((t.data && t.ids && (p = a.appendContextPath(t.data.contextPath, t.ids[0]) + "."), a.isFunction(e) && (e = e.call(this)), t.data && (c = a.createFrame(t.data)), e && "object" == typeof e))
                            if (a.isArray(e)) for (var d = e.length; o < d; o++) o in e && n(o, o, o === e.length - 1);
                            else {
                                var u = void 0;
                                for (var h in e) e.hasOwnProperty(h) && (void 0 !== u && n(u, o - 1), (u = h), o++);
                                void 0 !== u && n(u, o - 1, !0);
                            }
                        return 0 === o && (l = s(this)), l;
                    });
                }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                var i = n(1).default;
                t.__esModule = !0;
                var a = i(n(6));
                (t.default = function (e) {
                    e.registerHelper("helperMissing", function () {
                        if (1 !== arguments.length) throw new a.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                    });
                }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                t.__esModule = !0;
                var i = n(5);
                (t.default = function (e) {
                    e.registerHelper("if", function (e, t) {
                        return i.isFunction(e) && (e = e.call(this)), (!t.hash.includeZero && !e) || i.isEmpty(e) ? t.inverse(this) : t.fn(this);
                    }),
                        e.registerHelper("unless", function (t, n) {
                            return e.helpers.if.call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash });
                        });
                }),
                    (e.exports = t.default);
            },
            function (e, t) {
                "use strict";
                (t.__esModule = !0),
                    (t.default = function (e) {
                        e.registerHelper("log", function () {
                            for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
                            var a = 1;
                            null != n.hash.level ? (a = n.hash.level) : n.data && null != n.data.level && (a = n.data.level), (t[0] = a), e.log.apply(e, t);
                        });
                    }),
                    (e.exports = t.default);
            },
            function (e, t) {
                "use strict";
                (t.__esModule = !0),
                    (t.default = function (e) {
                        e.registerHelper("lookup", function (e, t) {
                            return e && e[t];
                        });
                    }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                t.__esModule = !0;
                var i = n(5);
                (t.default = function (e) {
                    e.registerHelper("with", function (e, t) {
                        i.isFunction(e) && (e = e.call(this));
                        var n = t.fn;
                        if (i.isEmpty(e)) return t.inverse(this);
                        var a = t.data;
                        return t.data && t.ids && ((a = i.createFrame(t.data)).contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, { data: a, blockParams: i.blockParams([e], [a && a.contextPath]) });
                    });
                }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                var i = n(1).default;
                (t.__esModule = !0),
                    (t.registerDefaultDecorators = function (e) {
                        a.default(e);
                    });
                var a = i(n(19));
            },
            function (e, t, n) {
                "use strict";
                t.__esModule = !0;
                var i = n(5);
                (t.default = function (e) {
                    e.registerDecorator("inline", function (e, t, n, a) {
                        var r = e;
                        return (
                            t.partials ||
                                ((t.partials = {}),
                                (r = function (a, r) {
                                    var s = n.partials;
                                    n.partials = i.extend({}, s, t.partials);
                                    var o = e(a, r);
                                    return (n.partials = s), o;
                                })),
                            (t.partials[a.args[0]] = a.fn),
                            r
                        );
                    });
                }),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                t.__esModule = !0;
                var i = n(5),
                    a = {
                        methodMap: ["debug", "info", "warn", "error"],
                        level: "info",
                        lookupLevel: function (e) {
                            if ("string" == typeof e) {
                                var t = i.indexOf(a.methodMap, e.toLowerCase());
                                e = t >= 0 ? t : parseInt(e, 10);
                            }
                            return e;
                        },
                        log: function (e) {
                            if (((e = a.lookupLevel(e)), "undefined" != typeof console && a.lookupLevel(a.level) <= e)) {
                                var t = a.methodMap[e];
                                console[t] || (t = "log");
                                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                console[t].apply(console, i);
                            }
                        },
                    };
                (t.default = a), (e.exports = t.default);
            },
            function (e, t) {
                "use strict";
                function n(e) {
                    this.string = e;
                }
                (t.__esModule = !0),
                    (n.prototype.toString = n.prototype.toHTML = function () {
                        return "" + this.string;
                    }),
                    (t.default = n),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                function i(e, t, n, i, a, s, o) {
                    function l(t) {
                        var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            r = o;
                        return !o || t == o[0] || (t === e.nullContext && null === o[0]) || (r = [t].concat(o)), n(e, t, e.helpers, e.partials, a.data || i, s && [a.blockParams].concat(s), r);
                    }
                    return ((l = r(n, l, e, o, i, s)).program = t), (l.depth = o ? o.length : 0), (l.blockParams = a || 0), l;
                }
                function a() {
                    return "";
                }
                function r(e, t, n, i, a, r) {
                    if (e.decorator) {
                        var s = {};
                        (t = e.decorator(t, s, n, i && i[0], a, r, i)), c.extend(t, s);
                    }
                    return t;
                }
                var s = n(23).default,
                    o = n(3).default,
                    l = n(1).default;
                (t.__esModule = !0),
                    (t.checkRevision = function (e) {
                        var t = (e && e[0]) || 1,
                            n = d.COMPILER_REVISION;
                        if (t !== n) {
                            if (t < n) {
                                var i = d.REVISION_CHANGES[n],
                                    a = d.REVISION_CHANGES[t];
                                throw new p.default(
                                    "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                                        i +
                                        ") or downgrade your runtime to an older version (" +
                                        a +
                                        ")."
                                );
                            }
                            throw new p.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
                        }
                    }),
                    (t.template = function (e, t) {
                        function n(t) {
                            function i(t) {
                                return "" + e.main(a, t, a.helpers, a.partials, o, c, l);
                            }
                            var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                o = s.data;
                            n._setup(s),
                                !s.partial &&
                                    e.useData &&
                                    (o = (function (e, t) {
                                        return (t && "root" in t) || ((t = t ? d.createFrame(t) : {}).root = e), t;
                                    })(t, o));
                            var l = void 0,
                                c = e.useBlockParams ? [] : void 0;
                            return e.useDepths && (l = s.depths ? (t != s.depths[0] ? [t].concat(s.depths) : s.depths) : [t]), (i = r(e.main, i, a, s.depths || [], o, c))(t, s);
                        }
                        if (!t) throw new p.default("No environment passed to template");
                        if (!e || !e.main) throw new p.default("Unknown template object: " + typeof e);
                        (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
                        var a = {
                            strict: function (e, t) {
                                if (!(t in e)) throw new p.default('"' + t + '" not defined in ' + e);
                                return e[t];
                            },
                            lookup: function (e, t) {
                                for (var n = e.length, i = 0; i < n; i++) if (e[i] && null != e[i][t]) return e[i][t];
                            },
                            lambda: function (e, t) {
                                return "function" == typeof e ? e.call(t) : e;
                            },
                            escapeExpression: c.escapeExpression,
                            invokePartial: function (n, i, a) {
                                a.hash && ((i = c.extend({}, i, a.hash)), a.ids && (a.ids[0] = !0)), (n = t.VM.resolvePartial.call(this, n, i, a));
                                var r = t.VM.invokePartial.call(this, n, i, a);
                                if ((null == r && t.compile && ((a.partials[a.name] = t.compile(n, e.compilerOptions, t)), (r = a.partials[a.name](i, a))), null != r)) {
                                    if (a.indent) {
                                        for (var s = r.split("\n"), o = 0, l = s.length; o < l && (s[o] || o + 1 !== l); o++) s[o] = a.indent + s[o];
                                        r = s.join("\n");
                                    }
                                    return r;
                                }
                                throw new p.default("The partial " + a.name + " could not be compiled when running in runtime-only mode");
                            },
                            fn: function (t) {
                                var n = e[t];
                                return (n.decorator = e[t + "_d"]), n;
                            },
                            programs: [],
                            program: function (e, t, n, a, r) {
                                var s = this.programs[e],
                                    o = this.fn(e);
                                return t || r || a || n ? (s = i(this, e, o, t, n, a, r)) : s || (s = this.programs[e] = i(this, e, o)), s;
                            },
                            data: function (e, t) {
                                for (; e && t--; ) e = e._parent;
                                return e;
                            },
                            merge: function (e, t) {
                                var n = e || t;
                                return e && t && e !== t && (n = c.extend({}, t, e)), n;
                            },
                            nullContext: s({}),
                            noop: t.VM.noop,
                            compilerInfo: e.compiler,
                        };
                        return (
                            (n.isTop = !0),
                            (n._setup = function (n) {
                                n.partial
                                    ? ((a.helpers = n.helpers), (a.partials = n.partials), (a.decorators = n.decorators))
                                    : ((a.helpers = a.merge(n.helpers, t.helpers)), e.usePartial && (a.partials = a.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (a.decorators = a.merge(n.decorators, t.decorators)));
                            }),
                            (n._child = function (t, n, r, s) {
                                if (e.useBlockParams && !r) throw new p.default("must pass block params");
                                if (e.useDepths && !s) throw new p.default("must pass parent depths");
                                return i(a, t, e[t], n, 0, r, s);
                            }),
                            n
                        );
                    }),
                    (t.wrapProgram = i),
                    (t.resolvePartial = function (e, t, n) {
                        return e ? e.call || n.name || ((n.name = e), (e = n.partials[e])) : (e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name]), e;
                    }),
                    (t.invokePartial = function (e, t, n) {
                        var i = n.data && n.data["partial-block"];
                        (n.partial = !0), n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
                        var r = void 0;
                        if (
                            (n.fn &&
                                n.fn !== a &&
                                (function () {
                                    n.data = d.createFrame(n.data);
                                    var e = n.fn;
                                    (r = n.data["partial-block"] = function (t) {
                                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                        return (n.data = d.createFrame(n.data)), (n.data["partial-block"] = i), e(t, n);
                                    }),
                                        e.partials && (n.partials = c.extend({}, n.partials, e.partials));
                                })(),
                            void 0 === e && r && (e = r),
                            void 0 === e)
                        )
                            throw new p.default("The partial " + n.name + " could not be found");
                        if (e instanceof Function) return e(t, n);
                    }),
                    (t.noop = a);
                var c = o(n(5)),
                    p = l(n(6)),
                    d = n(4);
            },
            function (e, t, n) {
                e.exports = { default: n(24), __esModule: !0 };
            },
            function (e, t, n) {
                n(25), (e.exports = n(30).Object.seal);
            },
            function (e, t, n) {
                var i = n(26);
                n(27)("seal", function (e) {
                    return function (t) {
                        return e && i(t) ? e(t) : t;
                    };
                });
            },
            function (e, t) {
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e;
                };
            },
            function (e, t, n) {
                var i = n(28),
                    a = n(30),
                    r = n(33);
                e.exports = function (e, t) {
                    var n = (a.Object || {})[e] || Object[e],
                        s = {};
                    (s[e] = t(n)),
                        i(
                            i.S +
                                i.F *
                                    r(function () {
                                        n(1);
                                    }),
                            "Object",
                            s
                        );
                };
            },
            function (e, t, n) {
                var i = n(29),
                    a = n(30),
                    r = n(31),
                    s = "prototype",
                    o = function (e, t, n) {
                        var l,
                            c,
                            p,
                            d = e & o.F,
                            u = e & o.G,
                            h = e & o.S,
                            m = e & o.P,
                            f = e & o.B,
                            g = e & o.W,
                            v = u ? a : a[t] || (a[t] = {}),
                            y = u ? i : h ? i[t] : (i[t] || {})[s];
                        for (l in (u && (n = t), n))
                            ((c = !d && y && l in y) && l in v) ||
                                ((p = c ? y[l] : n[l]),
                                (v[l] =
                                    u && "function" != typeof y[l]
                                        ? n[l]
                                        : f && c
                                        ? r(p, i)
                                        : g && y[l] == p
                                        ? (function (e) {
                                              var t = function (t) {
                                                  return this instanceof e ? new e(t) : e(t);
                                              };
                                              return (t[s] = e[s]), t;
                                          })(p)
                                        : m && "function" == typeof p
                                        ? r(Function.call, p)
                                        : p),
                                m && ((v[s] || (v[s] = {}))[l] = p));
                    };
                (o.F = 1), (o.G = 2), (o.S = 4), (o.P = 8), (o.B = 16), (o.W = 32), (e.exports = o);
            },
            function (e, t) {
                var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
                "number" == typeof __g && (__g = n);
            },
            function (e, t) {
                var n = (e.exports = { version: "1.2.6" });
                "number" == typeof __e && (__e = n);
            },
            function (e, t, n) {
                var i = n(32);
                e.exports = function (e, t, n) {
                    if ((i(e), void 0 === t)) return e;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return e.call(t, n);
                            };
                        case 2:
                            return function (n, i) {
                                return e.call(t, n, i);
                            };
                        case 3:
                            return function (n, i, a) {
                                return e.call(t, n, i, a);
                            };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            function (e, t) {
                (function (n) {
                    "use strict";
                    (t.__esModule = !0),
                        (t.default = function (e) {
                            var t = void 0 !== n ? n : window,
                                i = t.Handlebars;
                            e.noConflict = function () {
                                return t.Handlebars === e && (t.Handlebars = i), e;
                            };
                        }),
                        (e.exports = t.default);
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (e, t) {
                "use strict";
                t.__esModule = !0;
                var n = {
                    helpers: {
                        helperExpression: function (e) {
                            return "SubExpression" === e.type || (("MustacheStatement" === e.type || "BlockStatement" === e.type) && !!((e.params && e.params.length) || e.hash));
                        },
                        scopedId: function (e) {
                            return /^\.|this\b/.test(e.original);
                        },
                        simpleId: function (e) {
                            return 1 === e.parts.length && !n.helpers.scopedId(e) && !e.depth;
                        },
                    },
                };
                (t.default = n), (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                var i = n(1).default,
                    a = n(3).default;
                (t.__esModule = !0),
                    (t.parse = function (e, t) {
                        return "Program" === e.type
                            ? e
                            : ((r.default.yy = c),
                              (c.locInfo = function (e) {
                                  return new c.SourceLocation(t && t.srcName, e);
                              }),
                              new s.default(t).accept(r.default.parse(e)));
                    });
                var r = i(n(37)),
                    s = i(n(38)),
                    o = a(n(40)),
                    l = n(5);
                t.parser = r.default;
                var c = {};
                l.extend(c, o);
            },
            function (e, t) {
                "use strict";
                t.__esModule = !0;
                var n = (function () {
                    function e() {
                        this.yy = {};
                    }
                    var t = {
                            trace: function () {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                partialBlock: 12,
                                content: 13,
                                COMMENT: 14,
                                CONTENT: 15,
                                openRawBlock: 16,
                                rawBlock_repetition_plus0: 17,
                                END_RAW_BLOCK: 18,
                                OPEN_RAW_BLOCK: 19,
                                helperName: 20,
                                openRawBlock_repetition0: 21,
                                openRawBlock_option0: 22,
                                CLOSE_RAW_BLOCK: 23,
                                openBlock: 24,
                                block_option0: 25,
                                closeBlock: 26,
                                openInverse: 27,
                                block_option1: 28,
                                OPEN_BLOCK: 29,
                                openBlock_repetition0: 30,
                                openBlock_option0: 31,
                                openBlock_option1: 32,
                                CLOSE: 33,
                                OPEN_INVERSE: 34,
                                openInverse_repetition0: 35,
                                openInverse_option0: 36,
                                openInverse_option1: 37,
                                openInverseChain: 38,
                                OPEN_INVERSE_CHAIN: 39,
                                openInverseChain_repetition0: 40,
                                openInverseChain_option0: 41,
                                openInverseChain_option1: 42,
                                inverseAndProgram: 43,
                                INVERSE: 44,
                                inverseChain: 45,
                                inverseChain_option0: 46,
                                OPEN_ENDBLOCK: 47,
                                OPEN: 48,
                                mustache_repetition0: 49,
                                mustache_option0: 50,
                                OPEN_UNESCAPED: 51,
                                mustache_repetition1: 52,
                                mustache_option1: 53,
                                CLOSE_UNESCAPED: 54,
                                OPEN_PARTIAL: 55,
                                partialName: 56,
                                partial_repetition0: 57,
                                partial_option0: 58,
                                openPartialBlock: 59,
                                OPEN_PARTIAL_BLOCK: 60,
                                openPartialBlock_repetition0: 61,
                                openPartialBlock_option0: 62,
                                param: 63,
                                sexpr: 64,
                                OPEN_SEXPR: 65,
                                sexpr_repetition0: 66,
                                sexpr_option0: 67,
                                CLOSE_SEXPR: 68,
                                hash: 69,
                                hash_repetition_plus0: 70,
                                hashSegment: 71,
                                ID: 72,
                                EQUALS: 73,
                                blockParams: 74,
                                OPEN_BLOCK_PARAMS: 75,
                                blockParams_repetition_plus0: 76,
                                CLOSE_BLOCK_PARAMS: 77,
                                path: 78,
                                dataName: 79,
                                STRING: 80,
                                NUMBER: 81,
                                BOOLEAN: 82,
                                UNDEFINED: 83,
                                NULL: 84,
                                DATA: 85,
                                pathSegments: 86,
                                SEP: 87,
                                $accept: 0,
                                $end: 1,
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                14: "COMMENT",
                                15: "CONTENT",
                                18: "END_RAW_BLOCK",
                                19: "OPEN_RAW_BLOCK",
                                23: "CLOSE_RAW_BLOCK",
                                29: "OPEN_BLOCK",
                                33: "CLOSE",
                                34: "OPEN_INVERSE",
                                39: "OPEN_INVERSE_CHAIN",
                                44: "INVERSE",
                                47: "OPEN_ENDBLOCK",
                                48: "OPEN",
                                51: "OPEN_UNESCAPED",
                                54: "CLOSE_UNESCAPED",
                                55: "OPEN_PARTIAL",
                                60: "OPEN_PARTIAL_BLOCK",
                                65: "OPEN_SEXPR",
                                68: "CLOSE_SEXPR",
                                72: "ID",
                                73: "EQUALS",
                                75: "OPEN_BLOCK_PARAMS",
                                77: "CLOSE_BLOCK_PARAMS",
                                80: "STRING",
                                81: "NUMBER",
                                82: "BOOLEAN",
                                83: "UNDEFINED",
                                84: "NULL",
                                85: "DATA",
                                87: "SEP",
                            },
                            productions_: [
                                0,
                                [3, 2],
                                [4, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [13, 1],
                                [10, 3],
                                [16, 5],
                                [9, 4],
                                [9, 4],
                                [24, 6],
                                [27, 6],
                                [38, 6],
                                [43, 2],
                                [45, 3],
                                [45, 1],
                                [26, 3],
                                [8, 5],
                                [8, 5],
                                [11, 5],
                                [12, 3],
                                [59, 5],
                                [63, 1],
                                [63, 1],
                                [64, 5],
                                [69, 1],
                                [71, 3],
                                [74, 3],
                                [20, 1],
                                [20, 1],
                                [20, 1],
                                [20, 1],
                                [20, 1],
                                [20, 1],
                                [20, 1],
                                [56, 1],
                                [56, 1],
                                [79, 2],
                                [78, 1],
                                [86, 3],
                                [86, 1],
                                [6, 0],
                                [6, 2],
                                [17, 1],
                                [17, 2],
                                [21, 0],
                                [21, 2],
                                [22, 0],
                                [22, 1],
                                [25, 0],
                                [25, 1],
                                [28, 0],
                                [28, 1],
                                [30, 0],
                                [30, 2],
                                [31, 0],
                                [31, 1],
                                [32, 0],
                                [32, 1],
                                [35, 0],
                                [35, 2],
                                [36, 0],
                                [36, 1],
                                [37, 0],
                                [37, 1],
                                [40, 0],
                                [40, 2],
                                [41, 0],
                                [41, 1],
                                [42, 0],
                                [42, 1],
                                [46, 0],
                                [46, 1],
                                [49, 0],
                                [49, 2],
                                [50, 0],
                                [50, 1],
                                [52, 0],
                                [52, 2],
                                [53, 0],
                                [53, 1],
                                [57, 0],
                                [57, 2],
                                [58, 0],
                                [58, 1],
                                [61, 0],
                                [61, 2],
                                [62, 0],
                                [62, 1],
                                [66, 0],
                                [66, 2],
                                [67, 0],
                                [67, 1],
                                [70, 1],
                                [70, 2],
                                [76, 1],
                                [76, 2],
                            ],
                            performAction: function (e, t, n, i, a, r, s) {
                                var o = r.length - 1;
                                switch (a) {
                                    case 1:
                                        return r[o - 1];
                                    case 2:
                                        this.$ = i.prepareProgram(r[o]);
                                        break;
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                    case 8:
                                        this.$ = r[o];
                                        break;
                                    case 9:
                                        this.$ = { type: "CommentStatement", value: i.stripComment(r[o]), strip: i.stripFlags(r[o], r[o]), loc: i.locInfo(this._$) };
                                        break;
                                    case 10:
                                        this.$ = { type: "ContentStatement", original: r[o], value: r[o], loc: i.locInfo(this._$) };
                                        break;
                                    case 11:
                                        this.$ = i.prepareRawBlock(r[o - 2], r[o - 1], r[o], this._$);
                                        break;
                                    case 12:
                                        this.$ = { path: r[o - 3], params: r[o - 2], hash: r[o - 1] };
                                        break;
                                    case 13:
                                        this.$ = i.prepareBlock(r[o - 3], r[o - 2], r[o - 1], r[o], !1, this._$);
                                        break;
                                    case 14:
                                        this.$ = i.prepareBlock(r[o - 3], r[o - 2], r[o - 1], r[o], !0, this._$);
                                        break;
                                    case 15:
                                        this.$ = { open: r[o - 5], path: r[o - 4], params: r[o - 3], hash: r[o - 2], blockParams: r[o - 1], strip: i.stripFlags(r[o - 5], r[o]) };
                                        break;
                                    case 16:
                                    case 17:
                                        this.$ = { path: r[o - 4], params: r[o - 3], hash: r[o - 2], blockParams: r[o - 1], strip: i.stripFlags(r[o - 5], r[o]) };
                                        break;
                                    case 18:
                                        this.$ = { strip: i.stripFlags(r[o - 1], r[o - 1]), program: r[o] };
                                        break;
                                    case 19:
                                        var l = i.prepareBlock(r[o - 2], r[o - 1], r[o], r[o], !1, this._$),
                                            c = i.prepareProgram([l], r[o - 1].loc);
                                        (c.chained = !0), (this.$ = { strip: r[o - 2].strip, program: c, chain: !0 });
                                        break;
                                    case 20:
                                        this.$ = r[o];
                                        break;
                                    case 21:
                                        this.$ = { path: r[o - 1], strip: i.stripFlags(r[o - 2], r[o]) };
                                        break;
                                    case 22:
                                    case 23:
                                        this.$ = i.prepareMustache(r[o - 3], r[o - 2], r[o - 1], r[o - 4], i.stripFlags(r[o - 4], r[o]), this._$);
                                        break;
                                    case 24:
                                        this.$ = { type: "PartialStatement", name: r[o - 3], params: r[o - 2], hash: r[o - 1], indent: "", strip: i.stripFlags(r[o - 4], r[o]), loc: i.locInfo(this._$) };
                                        break;
                                    case 25:
                                        this.$ = i.preparePartialBlock(r[o - 2], r[o - 1], r[o], this._$);
                                        break;
                                    case 26:
                                        this.$ = { path: r[o - 3], params: r[o - 2], hash: r[o - 1], strip: i.stripFlags(r[o - 4], r[o]) };
                                        break;
                                    case 27:
                                    case 28:
                                        this.$ = r[o];
                                        break;
                                    case 29:
                                        this.$ = { type: "SubExpression", path: r[o - 3], params: r[o - 2], hash: r[o - 1], loc: i.locInfo(this._$) };
                                        break;
                                    case 30:
                                        this.$ = { type: "Hash", pairs: r[o], loc: i.locInfo(this._$) };
                                        break;
                                    case 31:
                                        this.$ = { type: "HashPair", key: i.id(r[o - 2]), value: r[o], loc: i.locInfo(this._$) };
                                        break;
                                    case 32:
                                        this.$ = i.id(r[o - 1]);
                                        break;
                                    case 33:
                                    case 34:
                                        this.$ = r[o];
                                        break;
                                    case 35:
                                        this.$ = { type: "StringLiteral", value: r[o], original: r[o], loc: i.locInfo(this._$) };
                                        break;
                                    case 36:
                                        this.$ = { type: "NumberLiteral", value: Number(r[o]), original: Number(r[o]), loc: i.locInfo(this._$) };
                                        break;
                                    case 37:
                                        this.$ = { type: "BooleanLiteral", value: "true" === r[o], original: "true" === r[o], loc: i.locInfo(this._$) };
                                        break;
                                    case 38:
                                        this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: i.locInfo(this._$) };
                                        break;
                                    case 39:
                                        this.$ = { type: "NullLiteral", original: null, value: null, loc: i.locInfo(this._$) };
                                        break;
                                    case 40:
                                    case 41:
                                        this.$ = r[o];
                                        break;
                                    case 42:
                                        this.$ = i.preparePath(!0, r[o], this._$);
                                        break;
                                    case 43:
                                        this.$ = i.preparePath(!1, r[o], this._$);
                                        break;
                                    case 44:
                                        r[o - 2].push({ part: i.id(r[o]), original: r[o], separator: r[o - 1] }), (this.$ = r[o - 2]);
                                        break;
                                    case 45:
                                        this.$ = [{ part: i.id(r[o]), original: r[o] }];
                                        break;
                                    case 46:
                                        this.$ = [];
                                        break;
                                    case 47:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 48:
                                        this.$ = [r[o]];
                                        break;
                                    case 49:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 50:
                                        this.$ = [];
                                        break;
                                    case 51:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 58:
                                        this.$ = [];
                                        break;
                                    case 59:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 64:
                                        this.$ = [];
                                        break;
                                    case 65:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 70:
                                        this.$ = [];
                                        break;
                                    case 71:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 78:
                                        this.$ = [];
                                        break;
                                    case 79:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 82:
                                        this.$ = [];
                                        break;
                                    case 83:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 86:
                                        this.$ = [];
                                        break;
                                    case 87:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 90:
                                        this.$ = [];
                                        break;
                                    case 91:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 94:
                                        this.$ = [];
                                        break;
                                    case 95:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 98:
                                        this.$ = [r[o]];
                                        break;
                                    case 99:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 100:
                                        this.$ = [r[o]];
                                        break;
                                    case 101:
                                        r[o - 1].push(r[o]);
                                }
                            },
                            table: [
                                { 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 1: [3] },
                                { 5: [1, 4] },
                                {
                                    5: [2, 2],
                                    7: 5,
                                    8: 6,
                                    9: 7,
                                    10: 8,
                                    11: 9,
                                    12: 10,
                                    13: 11,
                                    14: [1, 12],
                                    15: [1, 20],
                                    16: 17,
                                    19: [1, 23],
                                    24: 15,
                                    27: 16,
                                    29: [1, 21],
                                    34: [1, 22],
                                    39: [2, 2],
                                    44: [2, 2],
                                    47: [2, 2],
                                    48: [1, 13],
                                    51: [1, 14],
                                    55: [1, 18],
                                    59: 19,
                                    60: [1, 24],
                                },
                                { 1: [2, 1] },
                                { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] },
                                { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] },
                                { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] },
                                { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] },
                                { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] },
                                { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] },
                                { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] },
                                { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] },
                                { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 13: 40, 15: [1, 20], 17: 39 },
                                { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] },
                                { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] },
                                { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] },
                                { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] },
                                { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] },
                                { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] },
                                { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] },
                                { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] },
                                { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] },
                                { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] },
                                { 72: [1, 35], 86: 52 },
                                { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] },
                                { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] },
                                { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] },
                                { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] },
                                { 13: 63, 15: [1, 20], 18: [1, 62] },
                                { 15: [2, 48], 18: [2, 48] },
                                { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] },
                                { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] },
                                { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] },
                                { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 26: 66, 47: [1, 67] },
                                { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] },
                                { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] },
                                { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] },
                                { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] },
                                { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 72: [1, 80] },
                                { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] },
                                { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 26: 84, 47: [1, 67] },
                                { 47: [2, 55] },
                                { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 47: [2, 20] },
                                { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] },
                                { 26: 88, 47: [1, 67] },
                                { 47: [2, 57] },
                                { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] },
                                { 15: [2, 49], 18: [2, 49] },
                                { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] },
                                { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] },
                                { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                {
                                    20: 75,
                                    31: 94,
                                    33: [2, 60],
                                    63: 95,
                                    64: 76,
                                    65: [1, 44],
                                    69: 96,
                                    70: 77,
                                    71: 78,
                                    72: [1, 79],
                                    75: [2, 60],
                                    78: 26,
                                    79: 27,
                                    80: [1, 28],
                                    81: [1, 29],
                                    82: [1, 30],
                                    83: [1, 31],
                                    84: [1, 32],
                                    85: [1, 34],
                                    86: 33,
                                },
                                {
                                    20: 75,
                                    33: [2, 66],
                                    36: 97,
                                    63: 98,
                                    64: 76,
                                    65: [1, 44],
                                    69: 99,
                                    70: 77,
                                    71: 78,
                                    72: [1, 79],
                                    75: [2, 66],
                                    78: 26,
                                    79: 27,
                                    80: [1, 28],
                                    81: [1, 29],
                                    82: [1, 30],
                                    83: [1, 31],
                                    84: [1, 32],
                                    85: [1, 34],
                                    86: 33,
                                },
                                { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 33: [1, 106] },
                                { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] },
                                { 33: [2, 81] },
                                { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] },
                                { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] },
                                { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] },
                                { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] },
                                { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] },
                                { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] },
                                { 54: [1, 110] },
                                { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] },
                                { 54: [2, 85] },
                                { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] },
                                { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] },
                                { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] },
                                { 47: [2, 18] },
                                { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] },
                                { 33: [1, 114] },
                                { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] },
                                { 33: [2, 89] },
                                { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 33: [1, 118] },
                                { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] },
                                { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] },
                                { 33: [2, 61], 75: [2, 61] },
                                { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] },
                                { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] },
                                { 33: [2, 67], 75: [2, 67] },
                                { 23: [1, 124] },
                                { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] },
                                { 23: [2, 53] },
                                { 33: [1, 125] },
                                { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] },
                                { 33: [2, 93] },
                                { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] },
                                { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] },
                                { 73: [1, 109] },
                                { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
                                { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] },
                                { 47: [2, 19] },
                                { 47: [2, 77] },
                                {
                                    20: 75,
                                    33: [2, 72],
                                    41: 127,
                                    63: 128,
                                    64: 76,
                                    65: [1, 44],
                                    69: 129,
                                    70: 77,
                                    71: 78,
                                    72: [1, 79],
                                    75: [2, 72],
                                    78: 26,
                                    79: 27,
                                    80: [1, 28],
                                    81: [1, 29],
                                    82: [1, 30],
                                    83: [1, 31],
                                    84: [1, 32],
                                    85: [1, 34],
                                    86: 33,
                                },
                                { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] },
                                { 68: [1, 130] },
                                { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] },
                                { 68: [2, 97] },
                                { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] },
                                { 33: [1, 131] },
                                { 33: [2, 63] },
                                { 72: [1, 133], 76: 132 },
                                { 33: [1, 134] },
                                { 33: [2, 69] },
                                { 15: [2, 12] },
                                { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] },
                                { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] },
                                { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] },
                                { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] },
                                { 33: [2, 73], 75: [2, 73] },
                                { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] },
                                { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] },
                                { 72: [1, 138], 77: [1, 137] },
                                { 72: [2, 100], 77: [2, 100] },
                                { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] },
                                { 33: [1, 139] },
                                { 33: [2, 75] },
                                { 33: [2, 32] },
                                { 72: [2, 101], 77: [2, 101] },
                                { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] },
                            ],
                            defaultActions: {
                                4: [2, 1],
                                55: [2, 55],
                                57: [2, 20],
                                61: [2, 57],
                                74: [2, 81],
                                83: [2, 85],
                                87: [2, 18],
                                91: [2, 89],
                                102: [2, 53],
                                105: [2, 93],
                                111: [2, 19],
                                112: [2, 77],
                                117: [2, 97],
                                120: [2, 63],
                                123: [2, 69],
                                124: [2, 12],
                                136: [2, 75],
                                137: [2, 32],
                            },
                            parseError: function (e, t) {
                                throw new Error(e);
                            },
                            parse: function (e) {
                                function t() {
                                    var e;
                                    return "number" != typeof (e = n.lexer.lex() || 1) && (e = n.symbols_[e] || e), e;
                                }
                                var n = this,
                                    i = [0],
                                    a = [null],
                                    r = [],
                                    s = this.table,
                                    o = "",
                                    l = 0,
                                    c = 0,
                                    p = 0;
                                this.lexer.setInput(e), (this.lexer.yy = this.yy), (this.yy.lexer = this.lexer), (this.yy.parser = this), void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                                var d = this.lexer.yylloc;
                                r.push(d);
                                var u = this.lexer.options && this.lexer.options.ranges;
                                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                for (var h, m, f, g, v, y, w, b, k, _ = {}; ; ) {
                                    if (((f = i[i.length - 1]), this.defaultActions[f] ? (g = this.defaultActions[f]) : ((null !== h && void 0 !== h) || (h = t()), (g = s[f] && s[f][h])), void 0 === g || !g.length || !g[0])) {
                                        var S = "";
                                        if (!p) {
                                            for (y in ((k = []), s[f])) this.terminals_[y] && y > 2 && k.push("'" + this.terminals_[y] + "'");
                                            (S = this.lexer.showPosition
                                                ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[h] || h) + "'"
                                                : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'")),
                                                this.parseError(S, { text: this.lexer.match, token: this.terminals_[h] || h, line: this.lexer.yylineno, loc: d, expected: k });
                                        }
                                    }
                                    if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + f + ", token: " + h);
                                    switch (g[0]) {
                                        case 1:
                                            i.push(h),
                                                a.push(this.lexer.yytext),
                                                r.push(this.lexer.yylloc),
                                                i.push(g[1]),
                                                (h = null),
                                                m ? ((h = m), (m = null)) : ((c = this.lexer.yyleng), (o = this.lexer.yytext), (l = this.lexer.yylineno), (d = this.lexer.yylloc), p > 0 && p--);
                                            break;
                                        case 2:
                                            if (
                                                ((w = this.productions_[g[1]][1]),
                                                (_.$ = a[a.length - w]),
                                                (_._$ = { first_line: r[r.length - (w || 1)].first_line, last_line: r[r.length - 1].last_line, first_column: r[r.length - (w || 1)].first_column, last_column: r[r.length - 1].last_column }),
                                                u && (_._$.range = [r[r.length - (w || 1)].range[0], r[r.length - 1].range[1]]),
                                                void 0 !== (v = this.performAction.call(_, o, c, l, this.yy, g[1], a, r)))
                                            )
                                                return v;
                                            w && ((i = i.slice(0, -1 * w * 2)), (a = a.slice(0, -1 * w)), (r = r.slice(0, -1 * w))),
                                                i.push(this.productions_[g[1]][0]),
                                                a.push(_.$),
                                                r.push(_._$),
                                                (b = s[i[i.length - 2]][i[i.length - 1]]),
                                                i.push(b);
                                            break;
                                        case 3:
                                            return !0;
                                    }
                                }
                                return !0;
                            },
                        },
                        n = (function () {
                            var e = {
                                EOF: 1,
                                parseError: function (e, t) {
                                    if (!this.yy.parser) throw new Error(e);
                                    this.yy.parser.parseError(e, t);
                                },
                                setInput: function (e) {
                                    return (
                                        (this._input = e),
                                        (this._more = this._less = this.done = !1),
                                        (this.yylineno = this.yyleng = 0),
                                        (this.yytext = this.matched = this.match = ""),
                                        (this.conditionStack = ["INITIAL"]),
                                        (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
                                        this.options.ranges && (this.yylloc.range = [0, 0]),
                                        (this.offset = 0),
                                        this
                                    );
                                },
                                input: function () {
                                    var e = this._input[0];
                                    return (
                                        (this.yytext += e),
                                        this.yyleng++,
                                        this.offset++,
                                        (this.match += e),
                                        (this.matched += e),
                                        e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
                                        this.options.ranges && this.yylloc.range[1]++,
                                        (this._input = this._input.slice(1)),
                                        e
                                    );
                                },
                                unput: function (e) {
                                    var t = e.length,
                                        n = e.split(/(?:\r\n?|\n)/g);
                                    (this._input = e + this._input), (this.yytext = this.yytext.substr(0, this.yytext.length - t - 1)), (this.offset -= t);
                                    var i = this.match.split(/(?:\r\n?|\n)/g);
                                    (this.match = this.match.substr(0, this.match.length - 1)), (this.matched = this.matched.substr(0, this.matched.length - 1)), n.length - 1 && (this.yylineno -= n.length - 1);
                                    var a = this.yylloc.range;
                                    return (
                                        (this.yylloc = {
                                            first_line: this.yylloc.first_line,
                                            last_line: this.yylineno + 1,
                                            first_column: this.yylloc.first_column,
                                            last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - t,
                                        }),
                                        this.options.ranges && (this.yylloc.range = [a[0], a[0] + this.yyleng - t]),
                                        this
                                    );
                                },
                                more: function () {
                                    return (this._more = !0), this;
                                },
                                less: function (e) {
                                    this.unput(this.match.slice(e));
                                },
                                pastInput: function () {
                                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
                                },
                                upcomingInput: function () {
                                    var e = this.match;
                                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
                                },
                                showPosition: function () {
                                    var e = this.pastInput(),
                                        t = new Array(e.length + 1).join("-");
                                    return e + this.upcomingInput() + "\n" + t + "^";
                                },
                                next: function () {
                                    if (this.done) return this.EOF;
                                    var e, t, n, i, a;
                                    this._input || (this.done = !0), this._more || ((this.yytext = ""), (this.match = ""));
                                    for (var r = this._currentRules(), s = 0; s < r.length && (!(n = this._input.match(this.rules[r[s]])) || (t && !(n[0].length > t[0].length)) || ((t = n), (i = s), this.options.flex)); s++);
                                    return t
                                        ? ((a = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += a.length),
                                          (this.yylloc = {
                                              first_line: this.yylloc.last_line,
                                              last_line: this.yylineno + 1,
                                              first_column: this.yylloc.last_column,
                                              last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
                                          }),
                                          (this.yytext += t[0]),
                                          (this.match += t[0]),
                                          (this.matches = t),
                                          (this.yyleng = this.yytext.length),
                                          this.options.ranges && (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
                                          (this._more = !1),
                                          (this._input = this._input.slice(t[0].length)),
                                          (this.matched += t[0]),
                                          (e = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1])),
                                          this.done && this._input && (this.done = !1),
                                          e || void 0)
                                        : "" === this._input
                                        ? this.EOF
                                        : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
                                },
                                lex: function () {
                                    var e = this.next();
                                    return void 0 !== e ? e : this.lex();
                                },
                                begin: function (e) {
                                    this.conditionStack.push(e);
                                },
                                popState: function () {
                                    return this.conditionStack.pop();
                                },
                                _currentRules: function () {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                                },
                                topState: function () {
                                    return this.conditionStack[this.conditionStack.length - 2];
                                },
                                pushState: function (e) {
                                    this.begin(e);
                                },
                                options: {},
                                performAction: function (e, t, n, i) {
                                    function a(e, n) {
                                        return (t.yytext = t.yytext.substr(e, t.yyleng - n));
                                    }
                                    switch (n) {
                                        case 0:
                                            if (("\\\\" === t.yytext.slice(-2) ? (a(0, 1), this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (a(0, 1), this.begin("emu")) : this.begin("mu"), t.yytext)) return 15;
                                            break;
                                        case 1:
                                            return 15;
                                        case 2:
                                            return this.popState(), 15;
                                        case 3:
                                            return this.begin("raw"), 15;
                                        case 4:
                                            return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : ((t.yytext = t.yytext.substr(5, t.yyleng - 9)), "END_RAW_BLOCK");
                                        case 5:
                                            return 15;
                                        case 6:
                                            return this.popState(), 14;
                                        case 7:
                                            return 65;
                                        case 8:
                                            return 68;
                                        case 9:
                                            return 19;
                                        case 10:
                                            return this.popState(), this.begin("raw"), 23;
                                        case 11:
                                            return 55;
                                        case 12:
                                            return 60;
                                        case 13:
                                            return 29;
                                        case 14:
                                            return 47;
                                        case 15:
                                        case 16:
                                            return this.popState(), 44;
                                        case 17:
                                            return 34;
                                        case 18:
                                            return 39;
                                        case 19:
                                            return 51;
                                        case 20:
                                            return 48;
                                        case 21:
                                            this.unput(t.yytext), this.popState(), this.begin("com");
                                            break;
                                        case 22:
                                            return this.popState(), 14;
                                        case 23:
                                            return 48;
                                        case 24:
                                            return 73;
                                        case 25:
                                        case 26:
                                            return 72;
                                        case 27:
                                            return 87;
                                        case 28:
                                            break;
                                        case 29:
                                            return this.popState(), 54;
                                        case 30:
                                            return this.popState(), 33;
                                        case 31:
                                            return (t.yytext = a(1, 2).replace(/\\"/g, '"')), 80;
                                        case 32:
                                            return (t.yytext = a(1, 2).replace(/\\'/g, "'")), 80;
                                        case 33:
                                            return 85;
                                        case 34:
                                        case 35:
                                            return 82;
                                        case 36:
                                            return 83;
                                        case 37:
                                            return 84;
                                        case 38:
                                            return 81;
                                        case 39:
                                            return 75;
                                        case 40:
                                            return 77;
                                        case 41:
                                            return 72;
                                        case 42:
                                            return (t.yytext = t.yytext.replace(/\\([\\\]])/g, "$1")), 72;
                                        case 43:
                                            return "INVALID";
                                        case 44:
                                            return 5;
                                    }
                                },
                                rules: [
                                    /^(?:[^\x00]*?(?=(\{\{)))/,
                                    /^(?:[^\x00]+)/,
                                    /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                                    /^(?:\{\{\{\{(?=[^\/]))/,
                                    /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                                    /^(?:[^\x00]*?(?=(\{\{\{\{)))/,
                                    /^(?:[\s\S]*?--(~)?\}\})/,
                                    /^(?:\()/,
                                    /^(?:\))/,
                                    /^(?:\{\{\{\{)/,
                                    /^(?:\}\}\}\})/,
                                    /^(?:\{\{(~)?>)/,
                                    /^(?:\{\{(~)?#>)/,
                                    /^(?:\{\{(~)?#\*?)/,
                                    /^(?:\{\{(~)?\/)/,
                                    /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                                    /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                                    /^(?:\{\{(~)?\^)/,
                                    /^(?:\{\{(~)?\s*else\b)/,
                                    /^(?:\{\{(~)?\{)/,
                                    /^(?:\{\{(~)?&)/,
                                    /^(?:\{\{(~)?!--)/,
                                    /^(?:\{\{(~)?![\s\S]*?\}\})/,
                                    /^(?:\{\{(~)?\*?)/,
                                    /^(?:=)/,
                                    /^(?:\.\.)/,
                                    /^(?:\.(?=([=~}\s\/.)|])))/,
                                    /^(?:[\/.])/,
                                    /^(?:\s+)/,
                                    /^(?:\}(~)?\}\})/,
                                    /^(?:(~)?\}\})/,
                                    /^(?:"(\\["]|[^"])*")/,
                                    /^(?:'(\\[']|[^'])*')/,
                                    /^(?:@)/,
                                    /^(?:true(?=([~}\s)])))/,
                                    /^(?:false(?=([~}\s)])))/,
                                    /^(?:undefined(?=([~}\s)])))/,
                                    /^(?:null(?=([~}\s)])))/,
                                    /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                                    /^(?:as\s+\|)/,
                                    /^(?:\|)/,
                                    /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                                    /^(?:\[(\\\]|[^\]])*\])/,
                                    /^(?:.)/,
                                    /^(?:$)/,
                                ],
                                conditions: {
                                    mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 },
                                    emu: { rules: [2], inclusive: !1 },
                                    com: { rules: [6], inclusive: !1 },
                                    raw: { rules: [3, 4, 5], inclusive: !1 },
                                    INITIAL: { rules: [0, 1, 44], inclusive: !0 },
                                },
                            };
                            return e;
                        })();
                    return (t.lexer = n), (e.prototype = t), (t.Parser = e), new e();
                })();
                (t.default = n), (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                function i() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.options = e;
                }
                function a(e, t, n) {
                    void 0 === t && (t = e.length);
                    var i = e[t - 1],
                        a = e[t - 2];
                    return i ? ("ContentStatement" === i.type ? (a || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0) : n;
                }
                function r(e, t, n) {
                    void 0 === t && (t = -1);
                    var i = e[t + 1],
                        a = e[t + 2];
                    return i ? ("ContentStatement" === i.type ? (a || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0) : n;
                }
                function s(e, t, n) {
                    var i = e[null == t ? 0 : t + 1];
                    if (i && "ContentStatement" === i.type && (n || !i.rightStripped)) {
                        var a = i.value;
                        (i.value = i.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, "")), (i.rightStripped = i.value !== a);
                    }
                }
                function o(e, t, n) {
                    var i = e[null == t ? e.length - 1 : t - 1];
                    if (i && "ContentStatement" === i.type && (n || !i.leftStripped)) {
                        var a = i.value;
                        return (i.value = i.value.replace(n ? /\s+$/ : /[ \t]+$/, "")), (i.leftStripped = i.value !== a), i.leftStripped;
                    }
                }
                var l = n(1).default;
                t.__esModule = !0;
                var c = l(n(39));
                (i.prototype = new c.default()),
                    (i.prototype.Program = function (e) {
                        var t = !this.options.ignoreStandalone,
                            n = !this.isRootSeen;
                        this.isRootSeen = !0;
                        for (var i = e.body, l = 0, c = i.length; l < c; l++) {
                            var p = i[l],
                                d = this.accept(p);
                            if (d) {
                                var u = a(i, l, n),
                                    h = r(i, l, n),
                                    m = d.openStandalone && u,
                                    f = d.closeStandalone && h,
                                    g = d.inlineStandalone && u && h;
                                d.close && s(i, l, !0),
                                    d.open && o(i, l, !0),
                                    t && g && (s(i, l), o(i, l) && "PartialStatement" === p.type && (p.indent = /([ \t]+$)/.exec(i[l - 1].original)[1])),
                                    t && m && (s((p.program || p.inverse).body), o(i, l)),
                                    t && f && (s(i, l), o((p.inverse || p.program).body));
                            }
                        }
                        return e;
                    }),
                    (i.prototype.BlockStatement = i.prototype.DecoratorBlock = i.prototype.PartialBlockStatement = function (e) {
                        this.accept(e.program), this.accept(e.inverse);
                        var t = e.program || e.inverse,
                            n = e.program && e.inverse,
                            i = n,
                            l = n;
                        if (n && n.chained) for (i = n.body[0].program; l.chained; ) l = l.body[l.body.length - 1].program;
                        var c = { open: e.openStrip.open, close: e.closeStrip.close, openStandalone: r(t.body), closeStandalone: a((i || t).body) };
                        if ((e.openStrip.close && s(t.body, null, !0), n)) {
                            var p = e.inverseStrip;
                            p.open && o(t.body, null, !0), p.close && s(i.body, null, !0), e.closeStrip.open && o(l.body, null, !0), !this.options.ignoreStandalone && a(t.body) && r(i.body) && (o(t.body), s(i.body));
                        } else e.closeStrip.open && o(t.body, null, !0);
                        return c;
                    }),
                    (i.prototype.Decorator = i.prototype.MustacheStatement = function (e) {
                        return e.strip;
                    }),
                    (i.prototype.PartialStatement = i.prototype.CommentStatement = function (e) {
                        var t = e.strip || {};
                        return { inlineStandalone: !0, open: t.open, close: t.close };
                    }),
                    (t.default = i),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                function i() {
                    this.parents = [];
                }
                function a(e) {
                    this.acceptRequired(e, "path"), this.acceptArray(e.params), this.acceptKey(e, "hash");
                }
                function r(e) {
                    a.call(this, e), this.acceptKey(e, "program"), this.acceptKey(e, "inverse");
                }
                function s(e) {
                    this.acceptRequired(e, "name"), this.acceptArray(e.params), this.acceptKey(e, "hash");
                }
                var o = n(1).default;
                t.__esModule = !0;
                var l = o(n(6));
                (i.prototype = {
                    constructor: i,
                    mutating: !1,
                    acceptKey: function (e, t) {
                        var n = this.accept(e[t]);
                        if (this.mutating) {
                            if (n && !i.prototype[n.type]) throw new l.default('Unexpected node type "' + n.type + '" found when accepting ' + t + " on " + e.type);
                            e[t] = n;
                        }
                    },
                    acceptRequired: function (e, t) {
                        if ((this.acceptKey(e, t), !e[t])) throw new l.default(e.type + " requires " + t);
                    },
                    acceptArray: function (e) {
                        for (var t = 0, n = e.length; t < n; t++) this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, n--);
                    },
                    accept: function (e) {
                        if (e) {
                            if (!this[e.type]) throw new l.default("Unknown type: " + e.type, e);
                            this.current && this.parents.unshift(this.current), (this.current = e);
                            var t = this[e.type](e);
                            return (this.current = this.parents.shift()), !this.mutating || t ? t : !1 !== t ? e : void 0;
                        }
                    },
                    Program: function (e) {
                        this.acceptArray(e.body);
                    },
                    MustacheStatement: a,
                    Decorator: a,
                    BlockStatement: r,
                    DecoratorBlock: r,
                    PartialStatement: s,
                    PartialBlockStatement: function (e) {
                        s.call(this, e), this.acceptKey(e, "program");
                    },
                    ContentStatement: function () {},
                    CommentStatement: function () {},
                    SubExpression: a,
                    PathExpression: function () {},
                    StringLiteral: function () {},
                    NumberLiteral: function () {},
                    BooleanLiteral: function () {},
                    UndefinedLiteral: function () {},
                    NullLiteral: function () {},
                    Hash: function (e) {
                        this.acceptArray(e.pairs);
                    },
                    HashPair: function (e) {
                        this.acceptRequired(e, "value");
                    },
                }),
                    (t.default = i),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                function i(e, t) {
                    if (((t = t.path ? t.path.original : t), e.path.original !== t)) {
                        var n = { loc: e.path.loc };
                        throw new r.default(e.path.original + " doesn't match " + t, n);
                    }
                }
                var a = n(1).default;
                (t.__esModule = !0),
                    (t.SourceLocation = function (e, t) {
                        (this.source = e), (this.start = { line: t.first_line, column: t.first_column }), (this.end = { line: t.last_line, column: t.last_column });
                    }),
                    (t.id = function (e) {
                        return /^\[.*\]$/.test(e) ? e.substr(1, e.length - 2) : e;
                    }),
                    (t.stripFlags = function (e, t) {
                        return { open: "~" === e.charAt(2), close: "~" === t.charAt(t.length - 3) };
                    }),
                    (t.stripComment = function (e) {
                        return e.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
                    }),
                    (t.preparePath = function (e, t, n) {
                        n = this.locInfo(n);
                        for (var i = e ? "@" : "", a = [], s = 0, o = 0, l = t.length; o < l; o++) {
                            var c = t[o].part,
                                p = t[o].original !== c;
                            if (((i += (t[o].separator || "") + c), p || (".." !== c && "." !== c && "this" !== c))) a.push(c);
                            else {
                                if (a.length > 0) throw new r.default("Invalid path: " + i, { loc: n });
                                ".." === c && s++;
                            }
                        }
                        return { type: "PathExpression", data: e, depth: s, parts: a, original: i, loc: n };
                    }),
                    (t.prepareMustache = function (e, t, n, i, a, r) {
                        var s = i.charAt(3) || i.charAt(2),
                            o = "{" !== s && "&" !== s;
                        return { type: /\*/.test(i) ? "Decorator" : "MustacheStatement", path: e, params: t, hash: n, escaped: o, strip: a, loc: this.locInfo(r) };
                    }),
                    (t.prepareRawBlock = function (e, t, n, a) {
                        i(e, n);
                        var r = { type: "Program", body: t, strip: {}, loc: (a = this.locInfo(a)) };
                        return { type: "BlockStatement", path: e.path, params: e.params, hash: e.hash, program: r, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: a };
                    }),
                    (t.prepareBlock = function (e, t, n, a, s, o) {
                        a && a.path && i(e, a);
                        var l = /\*/.test(e.open);
                        t.blockParams = e.blockParams;
                        var c = void 0,
                            p = void 0;
                        if (n) {
                            if (l) throw new r.default("Unexpected inverse block on decorator", n);
                            n.chain && (n.program.body[0].closeStrip = a.strip), (p = n.strip), (c = n.program);
                        }
                        return (
                            s && ((s = c), (c = t), (t = s)),
                            { type: l ? "DecoratorBlock" : "BlockStatement", path: e.path, params: e.params, hash: e.hash, program: t, inverse: c, openStrip: e.strip, inverseStrip: p, closeStrip: a && a.strip, loc: this.locInfo(o) }
                        );
                    }),
                    (t.prepareProgram = function (e, t) {
                        if (!t && e.length) {
                            var n = e[0].loc,
                                i = e[e.length - 1].loc;
                            n && i && (t = { source: n.source, start: { line: n.start.line, column: n.start.column }, end: { line: i.end.line, column: i.end.column } });
                        }
                        return { type: "Program", body: e, strip: {}, loc: t };
                    }),
                    (t.preparePartialBlock = function (e, t, n, a) {
                        return i(e, n), { type: "PartialBlockStatement", name: e.path, params: e.params, hash: e.hash, program: t, openStrip: e.strip, closeStrip: n && n.strip, loc: this.locInfo(a) };
                    });
                var r = a(n(6));
            },
            function (e, t, n) {
                "use strict";
                function i() {}
                function a(e, t) {
                    if (e === t) return !0;
                    if (l.isArray(e) && l.isArray(t) && e.length === t.length) {
                        for (var n = 0; n < e.length; n++) if (!a(e[n], t[n])) return !1;
                        return !0;
                    }
                }
                function r(e) {
                    if (!e.path.parts) {
                        var t = e.path;
                        e.path = { type: "PathExpression", data: !1, depth: 0, parts: [t.original + ""], original: t.original + "", loc: t.loc };
                    }
                }
                var s = n(1).default;
                (t.__esModule = !0),
                    (t.Compiler = i),
                    (t.precompile = function (e, t, n) {
                        if (null == e || ("string" != typeof e && "Program" !== e.type)) throw new o.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
                        "data" in (t = t || {}) || (t.data = !0), t.compat && (t.useDepths = !0);
                        var i = n.parse(e, t),
                            a = new n.Compiler().compile(i, t);
                        return new n.JavaScriptCompiler().compile(a, t);
                    }),
                    (t.compile = function (e, t, n) {
                        function i() {
                            var i = n.parse(e, t),
                                a = new n.Compiler().compile(i, t),
                                r = new n.JavaScriptCompiler().compile(a, t, void 0, !0);
                            return n.template(r);
                        }
                        function a(e, t) {
                            return r || (r = i()), r.call(this, e, t);
                        }
                        if ((void 0 === t && (t = {}), null == e || ("string" != typeof e && "Program" !== e.type))) throw new o.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
                        "data" in (t = l.extend({}, t)) || (t.data = !0), t.compat && (t.useDepths = !0);
                        var r = void 0;
                        return (
                            (a._setup = function (e) {
                                return r || (r = i()), r._setup(e);
                            }),
                            (a._child = function (e, t, n, a) {
                                return r || (r = i()), r._child(e, t, n, a);
                            }),
                            a
                        );
                    });
                var o = s(n(6)),
                    l = n(5),
                    c = s(n(35)),
                    p = [].slice;
                i.prototype = {
                    compiler: i,
                    equals: function (e) {
                        var t = this.opcodes.length;
                        if (e.opcodes.length !== t) return !1;
                        for (var n = 0; n < t; n++) {
                            var i = this.opcodes[n],
                                r = e.opcodes[n];
                            if (i.opcode !== r.opcode || !a(i.args, r.args)) return !1;
                        }
                        t = this.children.length;
                        for (n = 0; n < t; n++) if (!this.children[n].equals(e.children[n])) return !1;
                        return !0;
                    },
                    guid: 0,
                    compile: function (e, t) {
                        (this.sourceNode = []), (this.opcodes = []), (this.children = []), (this.options = t), (this.stringParams = t.stringParams), (this.trackIds = t.trackIds), (t.blockParams = t.blockParams || []);
                        var n = t.knownHelpers;
                        if (((t.knownHelpers = { helperMissing: !0, blockHelperMissing: !0, each: !0, if: !0, unless: !0, with: !0, log: !0, lookup: !0 }), n)) for (var i in n) i in n && (this.options.knownHelpers[i] = n[i]);
                        return this.accept(e);
                    },
                    compileProgram: function (e) {
                        var t = new this.compiler().compile(e, this.options),
                            n = this.guid++;
                        return (this.usePartial = this.usePartial || t.usePartial), (this.children[n] = t), (this.useDepths = this.useDepths || t.useDepths), n;
                    },
                    accept: function (e) {
                        if (!this[e.type]) throw new o.default("Unknown type: " + e.type, e);
                        this.sourceNode.unshift(e);
                        var t = this[e.type](e);
                        return this.sourceNode.shift(), t;
                    },
                    Program: function (e) {
                        this.options.blockParams.unshift(e.blockParams);
                        for (var t = e.body, n = t.length, i = 0; i < n; i++) this.accept(t[i]);
                        return this.options.blockParams.shift(), (this.isSimple = 1 === n), (this.blockParams = e.blockParams ? e.blockParams.length : 0), this;
                    },
                    BlockStatement: function (e) {
                        r(e);
                        var t = e.program,
                            n = e.inverse;
                        (t = t && this.compileProgram(t)), (n = n && this.compileProgram(n));
                        var i = this.classifySexpr(e);
                        "helper" === i
                            ? this.helperSexpr(e, t, n)
                            : "simple" === i
                            ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original))
                            : (this.ambiguousSexpr(e, t, n), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")),
                            this.opcode("append");
                    },
                    DecoratorBlock: function (e) {
                        var t = e.program && this.compileProgram(e.program),
                            n = this.setupFullMustacheParams(e, t, void 0),
                            i = e.path;
                        (this.useDecorators = !0), this.opcode("registerDecorator", n.length, i.original);
                    },
                    PartialStatement: function (e) {
                        this.usePartial = !0;
                        var t = e.program;
                        t && (t = this.compileProgram(e.program));
                        var n = e.params;
                        if (n.length > 1) throw new o.default("Unsupported number of partial arguments: " + n.length, e);
                        n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({ type: "PathExpression", parts: [], depth: 0 }));
                        var i = e.name.original,
                            a = "SubExpression" === e.name.type;
                        a && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, !0);
                        var r = e.indent || "";
                        this.options.preventIndent && r && (this.opcode("appendContent", r), (r = "")), this.opcode("invokePartial", a, i, r), this.opcode("append");
                    },
                    PartialBlockStatement: function (e) {
                        this.PartialStatement(e);
                    },
                    MustacheStatement: function (e) {
                        this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
                    },
                    Decorator: function (e) {
                        this.DecoratorBlock(e);
                    },
                    ContentStatement: function (e) {
                        e.value && this.opcode("appendContent", e.value);
                    },
                    CommentStatement: function () {},
                    SubExpression: function (e) {
                        r(e);
                        var t = this.classifySexpr(e);
                        "simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e);
                    },
                    ambiguousSexpr: function (e, t, n) {
                        var i = e.path,
                            a = i.parts[0],
                            r = null != t || null != n;
                        this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), (i.strict = !0), this.accept(i), this.opcode("invokeAmbiguous", a, r);
                    },
                    simpleSexpr: function (e) {
                        var t = e.path;
                        (t.strict = !0), this.accept(t), this.opcode("resolvePossibleLambda");
                    },
                    helperSexpr: function (e, t, n) {
                        var i = this.setupFullMustacheParams(e, t, n),
                            a = e.path,
                            r = a.parts[0];
                        if (this.options.knownHelpers[r]) this.opcode("invokeKnownHelper", i.length, r);
                        else {
                            if (this.options.knownHelpersOnly) throw new o.default("You specified knownHelpersOnly, but used the unknown helper " + r, e);
                            (a.strict = !0), (a.falsy = !0), this.accept(a), this.opcode("invokeHelper", i.length, a.original, c.default.helpers.simpleId(a));
                        }
                    },
                    PathExpression: function (e) {
                        this.addDepth(e.depth), this.opcode("getContext", e.depth);
                        var t = e.parts[0],
                            n = c.default.helpers.scopedId(e),
                            i = !e.depth && !n && this.blockParamIndex(t);
                        i
                            ? this.opcode("lookupBlockParam", i, e.parts)
                            : t
                            ? e.data
                                ? ((this.options.data = !0), this.opcode("lookupData", e.depth, e.parts, e.strict))
                                : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, n)
                            : this.opcode("pushContext");
                    },
                    StringLiteral: function (e) {
                        this.opcode("pushString", e.value);
                    },
                    NumberLiteral: function (e) {
                        this.opcode("pushLiteral", e.value);
                    },
                    BooleanLiteral: function (e) {
                        this.opcode("pushLiteral", e.value);
                    },
                    UndefinedLiteral: function () {
                        this.opcode("pushLiteral", "undefined");
                    },
                    NullLiteral: function () {
                        this.opcode("pushLiteral", "null");
                    },
                    Hash: function (e) {
                        var t = e.pairs,
                            n = 0,
                            i = t.length;
                        for (this.opcode("pushHash"); n < i; n++) this.pushParam(t[n].value);
                        for (; n--; ) this.opcode("assignToHash", t[n].key);
                        this.opcode("popHash");
                    },
                    opcode: function (e) {
                        this.opcodes.push({ opcode: e, args: p.call(arguments, 1), loc: this.sourceNode[0].loc });
                    },
                    addDepth: function (e) {
                        e && (this.useDepths = !0);
                    },
                    classifySexpr: function (e) {
                        var t = c.default.helpers.simpleId(e.path),
                            n = t && !!this.blockParamIndex(e.path.parts[0]),
                            i = !n && c.default.helpers.helperExpression(e),
                            a = !n && (i || t);
                        if (a && !i) {
                            var r = e.path.parts[0],
                                s = this.options;
                            s.knownHelpers[r] ? (i = !0) : s.knownHelpersOnly && (a = !1);
                        }
                        return i ? "helper" : a ? "ambiguous" : "simple";
                    },
                    pushParams: function (e) {
                        for (var t = 0, n = e.length; t < n; t++) this.pushParam(e[t]);
                    },
                    pushParam: function (e) {
                        var t = null != e.value ? e.value : e.original || "";
                        if (this.stringParams)
                            t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                                e.depth && this.addDepth(e.depth),
                                this.opcode("getContext", e.depth || 0),
                                this.opcode("pushStringParam", t, e.type),
                                "SubExpression" === e.type && this.accept(e);
                        else {
                            if (this.trackIds) {
                                var n = void 0;
                                if ((!e.parts || c.default.helpers.scopedId(e) || e.depth || (n = this.blockParamIndex(e.parts[0])), n)) {
                                    var i = e.parts.slice(1).join(".");
                                    this.opcode("pushId", "BlockParam", n, i);
                                } else
                                    (t = e.original || t).replace &&
                                        (t = t
                                            .replace(/^this(?:\.|$)/, "")
                                            .replace(/^\.\//, "")
                                            .replace(/^\.$/, "")),
                                        this.opcode("pushId", e.type, t);
                            }
                            this.accept(e);
                        }
                    },
                    setupFullMustacheParams: function (e, t, n, i) {
                        var a = e.params;
                        return this.pushParams(a), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", i), a;
                    },
                    blockParamIndex: function (e) {
                        for (var t = 0, n = this.options.blockParams.length; t < n; t++) {
                            var i = this.options.blockParams[t],
                                a = i && l.indexOf(i, e);
                            if (i && a >= 0) return [t, a];
                        }
                    },
                };
            },
            function (e, t, n) {
                "use strict";
                function i(e) {
                    this.value = e;
                }
                function a() {}
                var r = n(1).default;
                t.__esModule = !0;
                var s = n(4),
                    o = r(n(6)),
                    l = n(5),
                    c = r(n(43));
                (a.prototype = {
                    nameLookup: function (e, t) {
                        return a.isValidJavaScriptVariableName(t) ? [e, ".", t] : [e, "[", JSON.stringify(t), "]"];
                    },
                    depthedLookup: function (e) {
                        return [this.aliasable("container.lookup"), '(depths, "', e, '")'];
                    },
                    compilerInfo: function () {
                        var e = s.COMPILER_REVISION;
                        return [e, s.REVISION_CHANGES[e]];
                    },
                    appendToBuffer: function (e, t, n) {
                        return l.isArray(e) || (e = [e]), (e = this.source.wrap(e, t)), this.environment.isSimple ? ["return ", e, ";"] : n ? ["buffer += ", e, ";"] : ((e.appendToBuffer = !0), e);
                    },
                    initializeBuffer: function () {
                        return this.quotedString("");
                    },
                    compile: function (e, t, n, i) {
                        (this.environment = e),
                            (this.options = t),
                            (this.stringParams = this.options.stringParams),
                            (this.trackIds = this.options.trackIds),
                            (this.precompile = !i),
                            (this.name = this.environment.name),
                            (this.isChild = !!n),
                            (this.context = n || { decorators: [], programs: [], environments: [] }),
                            this.preamble(),
                            (this.stackSlot = 0),
                            (this.stackVars = []),
                            (this.aliases = {}),
                            (this.registers = { list: [] }),
                            (this.hashes = []),
                            (this.compileStack = []),
                            (this.inlineStack = []),
                            (this.blockParams = []),
                            this.compileChildren(e, t),
                            (this.useDepths = this.useDepths || e.useDepths || e.useDecorators || this.options.compat),
                            (this.useBlockParams = this.useBlockParams || e.useBlockParams);
                        var a = e.opcodes,
                            r = void 0,
                            s = void 0,
                            l = void 0,
                            c = void 0;
                        for (l = 0, c = a.length; l < c; l++) (r = a[l]), (this.source.currentLocation = r.loc), (s = s || r.loc), this[r.opcode].apply(this, r.args);
                        if (((this.source.currentLocation = s), this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)) throw new o.default("Compile completed with content left on stack");
                        this.decorators.isEmpty()
                            ? (this.decorators = void 0)
                            : ((this.useDecorators = !0),
                              this.decorators.prepend("var decorators = container.decorators;\n"),
                              this.decorators.push("return fn;"),
                              i
                                  ? (this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]))
                                  : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), (this.decorators = this.decorators.merge())));
                        var p = this.createFunctionContext(i);
                        if (this.isChild) return p;
                        var d = { compiler: this.compilerInfo(), main: p };
                        this.decorators && ((d.main_d = this.decorators), (d.useDecorators = !0));
                        var u = this.context,
                            h = u.programs,
                            m = u.decorators;
                        for (l = 0, c = h.length; l < c; l++) h[l] && ((d[l] = h[l]), m[l] && ((d[l + "_d"] = m[l]), (d.useDecorators = !0)));
                        return (
                            this.environment.usePartial && (d.usePartial = !0),
                            this.options.data && (d.useData = !0),
                            this.useDepths && (d.useDepths = !0),
                            this.useBlockParams && (d.useBlockParams = !0),
                            this.options.compat && (d.compat = !0),
                            i
                                ? (d.compilerOptions = this.options)
                                : ((d.compiler = JSON.stringify(d.compiler)),
                                  (this.source.currentLocation = { start: { line: 1, column: 0 } }),
                                  (d = this.objectLiteral(d)),
                                  t.srcName ? ((d = d.toStringWithSourceMap({ file: t.destName })).map = d.map && d.map.toString()) : (d = d.toString())),
                            d
                        );
                    },
                    preamble: function () {
                        (this.lastContext = 0), (this.source = new c.default(this.options.srcName)), (this.decorators = new c.default(this.options.srcName));
                    },
                    createFunctionContext: function (e) {
                        var t = "",
                            n = this.stackVars.concat(this.registers.list);
                        n.length > 0 && (t += ", " + n.join(", "));
                        var i = 0;
                        for (var a in this.aliases) {
                            var r = this.aliases[a];
                            this.aliases.hasOwnProperty(a) && r.children && r.referenceCount > 1 && ((t += ", alias" + ++i + "=" + a), (r.children[0] = "alias" + i));
                        }
                        var s = ["container", "depth0", "helpers", "partials", "data"];
                        (this.useBlockParams || this.useDepths) && s.push("blockParams"), this.useDepths && s.push("depths");
                        var o = this.mergeSource(t);
                        return e ? (s.push(o), Function.apply(this, s)) : this.source.wrap(["function(", s.join(","), ") {\n  ", o, "}"]);
                    },
                    mergeSource: function (e) {
                        var t = this.environment.isSimple,
                            n = !this.forceBuffer,
                            i = void 0,
                            a = void 0,
                            r = void 0,
                            s = void 0;
                        return (
                            this.source.each(function (e) {
                                e.appendToBuffer ? (r ? e.prepend("  + ") : (r = e), (s = e)) : (r && (a ? r.prepend("buffer += ") : (i = !0), s.add(";"), (r = s = void 0)), (a = !0), t || (n = !1));
                            }),
                            n
                                ? r
                                    ? (r.prepend("return "), s.add(";"))
                                    : a || this.source.push('return "";')
                                : ((e += ", buffer = " + (i ? "" : this.initializeBuffer())), r ? (r.prepend("return buffer + "), s.add(";")) : this.source.push("return buffer;")),
                            e && this.source.prepend("var " + e.substring(2) + (i ? "" : ";\n")),
                            this.source.merge()
                        );
                    },
                    blockValue: function (e) {
                        var t = this.aliasable("helpers.blockHelperMissing"),
                            n = [this.contextName(0)];
                        this.setupHelperArgs(e, 0, n);
                        var i = this.popStack();
                        n.splice(1, 0, i), this.push(this.source.functionCall(t, "call", n));
                    },
                    ambiguousBlockValue: function () {
                        var e = this.aliasable("helpers.blockHelperMissing"),
                            t = [this.contextName(0)];
                        this.setupHelperArgs("", 0, t, !0), this.flushInline();
                        var n = this.topStack();
                        t.splice(1, 0, n), this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(e, "call", t), "}"]);
                    },
                    appendContent: function (e) {
                        this.pendingContent ? (e = this.pendingContent + e) : (this.pendingLocation = this.source.currentLocation), (this.pendingContent = e);
                    },
                    append: function () {
                        if (this.isInline())
                            this.replaceStack(function (e) {
                                return [" != null ? ", e, ' : ""'];
                            }),
                                this.pushSource(this.appendToBuffer(this.popStack()));
                        else {
                            var e = this.popStack();
                            this.pushSource(["if (", e, " != null) { ", this.appendToBuffer(e, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
                        }
                    },
                    appendEscaped: function () {
                        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
                    },
                    getContext: function (e) {
                        this.lastContext = e;
                    },
                    pushContext: function () {
                        this.pushStackLiteral(this.contextName(this.lastContext));
                    },
                    lookupOnContext: function (e, t, n, i) {
                        var a = 0;
                        i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[a++])), this.resolvePath("context", e, a, t, n);
                    },
                    lookupBlockParam: function (e, t) {
                        (this.useBlockParams = !0), this.push(["blockParams[", e[0], "][", e[1], "]"]), this.resolvePath("context", t, 1);
                    },
                    lookupData: function (e, t, n) {
                        e ? this.pushStackLiteral("container.data(data, " + e + ")") : this.pushStackLiteral("data"), this.resolvePath("data", t, 0, !0, n);
                    },
                    resolvePath: function (e, t, n, i, a) {
                        var r = this;
                        if (this.options.strict || this.options.assumeObjects)
                            this.push(
                                (function (e, t, n, i) {
                                    var a = t.popStack(),
                                        r = 0,
                                        s = n.length;
                                    for (e && s--; r < s; r++) a = t.nameLookup(a, n[r], i);
                                    return e ? [t.aliasable("container.strict"), "(", a, ", ", t.quotedString(n[r]), ")"] : a;
                                })(this.options.strict && a, this, t, e)
                            );
                        else
                            for (var s = t.length; n < s; n++)
                                this.replaceStack(function (a) {
                                    var s = r.nameLookup(a, t[n], e);
                                    return i ? [" && ", s] : [" != null ? ", s, " : ", a];
                                });
                    },
                    resolvePossibleLambda: function () {
                        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
                    },
                    pushStringParam: function (e, t) {
                        this.pushContext(), this.pushString(t), "SubExpression" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e));
                    },
                    emptyHash: function (e) {
                        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(e ? "undefined" : "{}");
                    },
                    pushHash: function () {
                        this.hash && this.hashes.push(this.hash), (this.hash = { values: [], types: [], contexts: [], ids: [] });
                    },
                    popHash: function () {
                        var e = this.hash;
                        (this.hash = this.hashes.pop()),
                            this.trackIds && this.push(this.objectLiteral(e.ids)),
                            this.stringParams && (this.push(this.objectLiteral(e.contexts)), this.push(this.objectLiteral(e.types))),
                            this.push(this.objectLiteral(e.values));
                    },
                    pushString: function (e) {
                        this.pushStackLiteral(this.quotedString(e));
                    },
                    pushLiteral: function (e) {
                        this.pushStackLiteral(e);
                    },
                    pushProgram: function (e) {
                        null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null);
                    },
                    registerDecorator: function (e, t) {
                        var n = this.nameLookup("decorators", t, "decorator"),
                            i = this.setupHelperArgs(t, e);
                        this.decorators.push(["fn = ", this.decorators.functionCall(n, "", ["fn", "props", "container", i]), " || fn;"]);
                    },
                    invokeHelper: function (e, t, n) {
                        var i = this.popStack(),
                            a = this.setupHelper(e, t),
                            r = n ? [a.name, " || "] : "",
                            s = ["("].concat(r, i);
                        this.options.strict || s.push(" || ", this.aliasable("helpers.helperMissing")), s.push(")"), this.push(this.source.functionCall(s, "call", a.callParams));
                    },
                    invokeKnownHelper: function (e, t) {
                        var n = this.setupHelper(e, t);
                        this.push(this.source.functionCall(n.name, "call", n.callParams));
                    },
                    invokeAmbiguous: function (e, t) {
                        this.useRegister("helper");
                        var n = this.popStack();
                        this.emptyHash();
                        var i = this.setupHelper(0, e, t),
                            a = ["(", "(helper = ", (this.lastHelper = this.nameLookup("helpers", e, "helper")), " || ", n, ")"];
                        this.options.strict || ((a[0] = "(helper = "), a.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))),
                            this.push(["(", a, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"]);
                    },
                    invokePartial: function (e, t, n) {
                        var i = [],
                            a = this.setupParams(t, 1, i);
                        e && ((t = this.popStack()), delete a.name),
                            n && (a.indent = JSON.stringify(n)),
                            (a.helpers = "helpers"),
                            (a.partials = "partials"),
                            (a.decorators = "container.decorators"),
                            e ? i.unshift(t) : i.unshift(this.nameLookup("partials", t, "partial")),
                            this.options.compat && (a.depths = "depths"),
                            (a = this.objectLiteral(a)),
                            i.push(a),
                            this.push(this.source.functionCall("container.invokePartial", "", i));
                    },
                    assignToHash: function (e) {
                        var t = this.popStack(),
                            n = void 0,
                            i = void 0,
                            a = void 0;
                        this.trackIds && (a = this.popStack()), this.stringParams && ((i = this.popStack()), (n = this.popStack()));
                        var r = this.hash;
                        n && (r.contexts[e] = n), i && (r.types[e] = i), a && (r.ids[e] = a), (r.values[e] = t);
                    },
                    pushId: function (e, t, n) {
                        "BlockParam" === e
                            ? this.pushStackLiteral("blockParams[" + t[0] + "].path[" + t[1] + "]" + (n ? " + " + JSON.stringify("." + n) : ""))
                            : "PathExpression" === e
                            ? this.pushString(t)
                            : "SubExpression" === e
                            ? this.pushStackLiteral("true")
                            : this.pushStackLiteral("null");
                    },
                    compiler: a,
                    compileChildren: function (e, t) {
                        for (var n = e.children, i = void 0, a = void 0, r = 0, s = n.length; r < s; r++) {
                            (i = n[r]), (a = new this.compiler());
                            var o = this.matchExistingProgram(i);
                            if (null == o) {
                                this.context.programs.push("");
                                var l = this.context.programs.length;
                                (i.index = l),
                                    (i.name = "program" + l),
                                    (this.context.programs[l] = a.compile(i, t, this.context, !this.precompile)),
                                    (this.context.decorators[l] = a.decorators),
                                    (this.context.environments[l] = i),
                                    (this.useDepths = this.useDepths || a.useDepths),
                                    (this.useBlockParams = this.useBlockParams || a.useBlockParams),
                                    (i.useDepths = this.useDepths),
                                    (i.useBlockParams = this.useBlockParams);
                            } else (i.index = o.index), (i.name = "program" + o.index), (this.useDepths = this.useDepths || o.useDepths), (this.useBlockParams = this.useBlockParams || o.useBlockParams);
                        }
                    },
                    matchExistingProgram: function (e) {
                        for (var t = 0, n = this.context.environments.length; t < n; t++) {
                            var i = this.context.environments[t];
                            if (i && i.equals(e)) return i;
                        }
                    },
                    programExpression: function (e) {
                        var t = this.environment.children[e],
                            n = [t.index, "data", t.blockParams];
                        return (this.useBlockParams || this.useDepths) && n.push("blockParams"), this.useDepths && n.push("depths"), "container.program(" + n.join(", ") + ")";
                    },
                    useRegister: function (e) {
                        this.registers[e] || ((this.registers[e] = !0), this.registers.list.push(e));
                    },
                    push: function (e) {
                        return e instanceof i || (e = this.source.wrap(e)), this.inlineStack.push(e), e;
                    },
                    pushStackLiteral: function (e) {
                        this.push(new i(e));
                    },
                    pushSource: function (e) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), (this.pendingContent = void 0)), e && this.source.push(e);
                    },
                    replaceStack: function (e) {
                        var t = ["("],
                            n = void 0,
                            a = void 0,
                            r = void 0;
                        if (!this.isInline()) throw new o.default("replaceStack on non-inline");
                        var s = this.popStack(!0);
                        if (s instanceof i) (t = ["(", (n = [s.value])]), (r = !0);
                        else {
                            a = !0;
                            var l = this.incrStack();
                            (t = ["((", this.push(l), " = ", s, ")"]), (n = this.topStack());
                        }
                        var c = e.call(this, n);
                        r || this.popStack(), a && this.stackSlot--, this.push(t.concat(c, ")"));
                    },
                    incrStack: function () {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
                    },
                    topStackName: function () {
                        return "stack" + this.stackSlot;
                    },
                    flushInline: function () {
                        var e = this.inlineStack;
                        this.inlineStack = [];
                        for (var t = 0, n = e.length; t < n; t++) {
                            var a = e[t];
                            if (a instanceof i) this.compileStack.push(a);
                            else {
                                var r = this.incrStack();
                                this.pushSource([r, " = ", a, ";"]), this.compileStack.push(r);
                            }
                        }
                    },
                    isInline: function () {
                        return this.inlineStack.length;
                    },
                    popStack: function (e) {
                        var t = this.isInline(),
                            n = (t ? this.inlineStack : this.compileStack).pop();
                        if (!e && n instanceof i) return n.value;
                        if (!t) {
                            if (!this.stackSlot) throw new o.default("Invalid stack pop");
                            this.stackSlot--;
                        }
                        return n;
                    },
                    topStack: function () {
                        var e = this.isInline() ? this.inlineStack : this.compileStack,
                            t = e[e.length - 1];
                        return t instanceof i ? t.value : t;
                    },
                    contextName: function (e) {
                        return this.useDepths && e ? "depths[" + e + "]" : "depth" + e;
                    },
                    quotedString: function (e) {
                        return this.source.quotedString(e);
                    },
                    objectLiteral: function (e) {
                        return this.source.objectLiteral(e);
                    },
                    aliasable: function (e) {
                        var t = this.aliases[e];
                        return t ? (t.referenceCount++, t) : (((t = this.aliases[e] = this.source.wrap(e)).aliasable = !0), (t.referenceCount = 1), t);
                    },
                    setupHelper: function (e, t, n) {
                        var i = [];
                        return {
                            params: i,
                            paramsInit: this.setupHelperArgs(t, e, i, n),
                            name: this.nameLookup("helpers", t, "helper"),
                            callParams: [this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})")].concat(i),
                        };
                    },
                    setupParams: function (e, t, n) {
                        var i = {},
                            a = [],
                            r = [],
                            s = [],
                            o = !n,
                            l = void 0;
                        o && (n = []), (i.name = this.quotedString(e)), (i.hash = this.popStack()), this.trackIds && (i.hashIds = this.popStack()), this.stringParams && ((i.hashTypes = this.popStack()), (i.hashContexts = this.popStack()));
                        var c = this.popStack(),
                            p = this.popStack();
                        (p || c) && ((i.fn = p || "container.noop"), (i.inverse = c || "container.noop"));
                        for (var d = t; d--; ) (l = this.popStack()), (n[d] = l), this.trackIds && (s[d] = this.popStack()), this.stringParams && ((r[d] = this.popStack()), (a[d] = this.popStack()));
                        return (
                            o && (i.args = this.source.generateArray(n)),
                            this.trackIds && (i.ids = this.source.generateArray(s)),
                            this.stringParams && ((i.types = this.source.generateArray(r)), (i.contexts = this.source.generateArray(a))),
                            this.options.data && (i.data = "data"),
                            this.useBlockParams && (i.blockParams = "blockParams"),
                            i
                        );
                    },
                    setupHelperArgs: function (e, t, n, i) {
                        var a = this.setupParams(e, t, n);
                        return (a = this.objectLiteral(a)), i ? (this.useRegister("options"), n.push("options"), ["options=", a]) : n ? (n.push(a), "") : a;
                    },
                }),
                    (function () {
                        for (
                            var e = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
                                    " "
                                ),
                                t = (a.RESERVED_WORDS = {}),
                                n = 0,
                                i = e.length;
                            n < i;
                            n++
                        )
                            t[e[n]] = !0;
                    })(),
                    (a.isValidJavaScriptVariableName = function (e) {
                        return !a.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e);
                    }),
                    (t.default = a),
                    (e.exports = t.default);
            },
            function (e, t, n) {
                "use strict";
                function i(e, t, n) {
                    if (r.isArray(e)) {
                        for (var i = [], a = 0, s = e.length; a < s; a++) i.push(t.wrap(e[a], n));
                        return i;
                    }
                    return "boolean" == typeof e || "number" == typeof e ? e + "" : e;
                }
                function a(e) {
                    (this.srcFile = e), (this.source = []);
                }
                t.__esModule = !0;
                var r = n(5),
                    s = void 0;
                s ||
                    ((s = function (e, t, n, i) {
                        (this.src = ""), i && this.add(i);
                    }).prototype = {
                        add: function (e) {
                            r.isArray(e) && (e = e.join("")), (this.src += e);
                        },
                        prepend: function (e) {
                            r.isArray(e) && (e = e.join("")), (this.src = e + this.src);
                        },
                        toStringWithSourceMap: function () {
                            return { code: this.toString() };
                        },
                        toString: function () {
                            return this.src;
                        },
                    }),
                    (a.prototype = {
                        isEmpty: function () {
                            return !this.source.length;
                        },
                        prepend: function (e, t) {
                            this.source.unshift(this.wrap(e, t));
                        },
                        push: function (e, t) {
                            this.source.push(this.wrap(e, t));
                        },
                        merge: function () {
                            var e = this.empty();
                            return (
                                this.each(function (t) {
                                    e.add(["  ", t, "\n"]);
                                }),
                                e
                            );
                        },
                        each: function (e) {
                            for (var t = 0, n = this.source.length; t < n; t++) e(this.source[t]);
                        },
                        empty: function () {
                            var e = this.currentLocation || { start: {} };
                            return new s(e.start.line, e.start.column, this.srcFile);
                        },
                        wrap: function (e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || { start: {} } : arguments[1];
                            return e instanceof s ? e : ((e = i(e, this, t)), new s(t.start.line, t.start.column, this.srcFile, e));
                        },
                        functionCall: function (e, t, n) {
                            return (n = this.generateList(n)), this.wrap([e, t ? "." + t + "(" : "(", n, ")"]);
                        },
                        quotedString: function (e) {
                            return (
                                '"' +
                                (e + "")
                                    .replace(/\\/g, "\\\\")
                                    .replace(/"/g, '\\"')
                                    .replace(/\n/g, "\\n")
                                    .replace(/\r/g, "\\r")
                                    .replace(/\u2028/g, "\\u2028")
                                    .replace(/\u2029/g, "\\u2029") +
                                '"'
                            );
                        },
                        objectLiteral: function (e) {
                            var t = [];
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var a = i(e[n], this);
                                    "undefined" !== a && t.push([this.quotedString(n), ":", a]);
                                }
                            var r = this.generateList(t);
                            return r.prepend("{"), r.add("}"), r;
                        },
                        generateList: function (e) {
                            for (var t = this.empty(), n = 0, a = e.length; n < a; n++) n && t.add(","), t.add(i(e[n], this));
                            return t;
                        },
                        generateArray: function (e) {
                            var t = this.generateList(e);
                            return t.prepend("["), t.add("]"), t;
                        },
                    }),
                    (t.default = a),
                    (e.exports = t.default);
            },
        ]);
    });
    const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) { 
var m8widgetTemplates = {
    "ctas.tpl.html":
        '<div id="m8-ctas" class="{{#if squaremode}}square{{/if}}">\n    <div>\n        {{#each ctas}}\n        <a href="#" class="{{type}} {{#if desktop}}{{else}}m8-desk-hide{{/if}}" onClick="m8engine.togglePane(event, this, \'{{type}}\')">\n            <div><span class="m8-icon"><i></i></span></div>\n            {{#if title_locale}}\n            <span class="short_title">{{title_locale}}</span>\n            {{/if}}\n            {{#if full_title_locale}}\n            <span class="full_title">{{full_title_locale}}</span></a>\n            {{/if}}\n        {{/each}}\n    </div>\n</div>',
    "ctas_container.tpl.html":
        '<div id="m8-ctas-container" onmousedown="m8engine.shouldExit(event.target)">\n    <div>\n       <div id="m8-onspot"><div class="loader m0"></div></div>\n       <div id="m8-takeaway"><div class="loader m0"></div></div>\n       <div id="m8-delivery"><div class="loader m0"></div></div>\n    </div>\n</div>\n',
    "delivery.tpl.html":
        '{{#if primarySpot}}\n<div class="m8-spots m8-primary-spot">\n    <ul id="m8-delivery-primary">\n        <li>\n            <div>\n                &#8226; {{primarySpot.name}}\n            </div>\n            {{#if primarySpot.openingsDelivComp}}\n            <div>\n                {{> hourModule lang=lang closed_temp=primarySpot.closed_temp currentOpenings=primarySpot.openingsDelivComp}}\n            </div>\n            {{/if}}\n            {{#unless primarySpot.closed_temp}}\n\n                <div class="m8-address-intro2">\n                {{#equal primarySpot.partners.0.name \'instore\' }}\n                    {{#sup primarySpot.partners.length 1 }}\n                        {{lang.delivery_internal_result}}\n                    {{/sup}}\n                {{else}}\n\n                    {{#sup primarySpot.partners.length 1 }}\n                        {{lang.delivery_with_results}}\n                    {{else}}\n                        {{#sup primarySpot.partners.length 0 }}\n                            {{lang.delivery_with_one_result}}\n                        {{/sup}}\n                    {{/sup}}\n\n                {{/equal}}\n                </div>\n\n                {{#each primarySpot.partners}}\n                    <a data-store="{{store}}" onclick="m8tracker.goPlatform(this, event)" data-href="{{url}}" class="m8platform {{name}} {{class}}" alt="{{name}}" target="_blank" rel="nofollow" >\n                        <i class="fa fa-angle-right"></i>\n                    </a>\n\n                    {{#sup ../primarySpot.partners.length 1 }}\n                        {{#equal name \'instore\' }}\n                            <div class="m8-address-intro3">{{../lang.delivery_now_else}}</div>\n                        {{/equal}}\n                    {{/sup}}\n                {{/each}}\n            {{/unless}}\n        </li>\n    </ul>\n</div>\n{{/if}}\n<div class="m8-search-input">\n\n    <input class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{lang.delivery_input}}"/>\n    \x3c!--button type="button" class="submit"><i class="fa fa-search"></i></button--\x3e\n    <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n    <div class="m8-address-tip">{{lang.delivery_tip}}</div>\n</div>\n<div id="m8-deliveryLoading"></div>\n<div id="m8-deliveryResults" class="m8-results"></div>\n',
    "delivery_results.tpl.html":
        '{{#if formattedAddress}}\n    <div class="m8-address-intro">{{lang.delivery_address}}</div>\n    <div class="m8-address">{{formattedAddress}}</div>\n\n    {{#if spots.length}}\n        {{#lookup spots 0 \'preview\'}}\n            {{lang.preview_get_intro}}\n        {{else}}\n            {{#equal spots.0.partners.0.name \'restoin\' }}\n                <div class="m8-address-intro2">{{lang.delivery_now}}</div>\n                <a data-store="{{spots.0.partners.0.store}}"\n                   onclick="m8tracker.goPlatform(this, event)"\n                   data-href="{{spots.0.partners.0.url}}"\n                   class="m8platform {{spots.0.partners.0.name}} {{spots.0.partners.0.class}}"\n                   alt="{{spots.0.partners.0.name}}"\n                   target="_blank"\n                   rel="nofollow" >\n                    <i class="fa fa-angle-right"></i>\n                </a>\n                {{#sup spots.0.partners.length 1 }}\n                    <div class="m8-address-intro3">{{lang.delivery_now_else}}</div>\n                {{/sup}}\n            {{/equal}}\n        {{/lookup}}\n    {{else}}\n        <div class="m8-address-intro2">{{lang.delivery_no_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n        <li>\n\n            <div>\n                {{#sup ../spots.length 1 }}\n                &#8226; {{name}}\n                {{/sup}}\n            </div>\n\n            {{#if openingsDelivComp}}\n            <div>\n               {{> hourModule lang=../lang currentOpenings=openingsDelivComp}}\n            </div>\n            {{/if}}\n\n            {{#if preview}}\n                {{lang.preview_get_intro}}\n\n                <div>\n                    <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n                       onClick="m8tracker.goWebsite(this, event)" rel="nofollow">\n                        <div><div>\n                            {{../lang.preview_get_notified}}\n                        </div></div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                </div>\n            {{else}}\n\n                {{#equal partners.0.name \'restoin\' }}\n                    {{#sup partners.length 1 }}\n                        <div class="m8-address-intro2">{{../lang.delivery_with_results}}</div>\n                    {{/sup}}\n                {{else}}\n                    {{#equal partners.0.name \'instore\' }}\n                        {{#sup partners.length 1 }}\n                            <div class="m8-address-intro2">{{../lang.delivery_internal_result}}</div>\n                        {{/sup}}\n                    {{else}}\n                        <div class="m8-address-intro2">\n                            {{#sup partners.length 1 }}\n                                {{../lang.delivery_with_results}}\n                            {{else}}\n                                {{#sup partners.length 0 }}\n                                    {{../lang.delivery_with_one_result}}\n                                {{/sup}}\n                            {{/sup}}\n                        </div>\n                    {{/equal}}\n                {{/equal}}\n\n            {{/if}}\n\n            {{#each partners}}\n                {{#equal name \'restoin\' }}\n                {{else}}\n                    <a data-store="{{store}}" onclick="m8tracker.goPlatform(this, event)" data-href="{{url}}" class="m8platform {{name}} {{class}}" alt="{{name}}" target="_blank" rel="nofollow" >\n                        <i class="fa fa-angle-right"></i>\n                    </a>\n                {{/equal}}\n                {{#sup ../partners.length 1 }}\n                    {{#equal name \'instore\' }}\n                        <div class="m8-address-intro3">{{../../lang.delivery_now_else}}</div>\n                    {{/equal}}\n                {{/sup}}\n            {{/each}}\n        </li>\n        {{/each}}\n    </ul>\n</div>\n',
    "driving_times.tpl.html":
        '{{#if driving}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'driving\')" data-href="{{driving.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-driving"></span> {{driving.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}\n{{#if transit}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'transit\')" data-href="{{transit.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-transit"></span> {{transit.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}\n{{#if walking}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'walking\')" data-href="{{walking.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-walking"></span> {{walking.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}',
    "hour_module.tpl.html":
        '{{#if closed_temp}}\n<div data-store="{{name}}">\n    <span class="m8-icon-clock m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.hour_label}} </span>\n    <b class="m8-hour-closed" >{{lang.spot_closed_temp}}</b>\n</div>\n{{else}}\n{{#if currentOpenings }}\n<div onClick="m8engine.hourExpand(this)" data-store="{{name}}" style="cursor:pointer">\n    {{> hourStatus lang=lang}}\n    <i class="fa fa-angle-down"></i>\n</div>\n<div onClick="m8engine.hourCollapse(this)" data-store="{{name}}" class="m8-hide" style="cursor:pointer">\n    {{> hourStatus lang=lang}}\n    <i class="fa fa-angle-up"></i>\n\n    <ul class="m8-hours">\n        {{#each currentOpenings.hours}}\n        <li>\n            <span>{{day}}</span>\n            {{#each hours}}{{#sup @index 0 }},{{/sup}} {{from}}-{{to}}{{else}}\n                {{../lang.spot_closed}}\n            {{/each}}\n        </li>\n        {{#if (isdefined original)}}\n        <li style="font-style:italic;color: #8f8f8f">\n            <span>{{../lang.usually}}</span>\n            ({{#each original}}{{#sup @index 0 }}, {{/sup}}{{from}}-{{to}}{{else}}{{../lang.spot_closed}}{{/each}})\n        </li>\n        {{/if}}\n        {{/each}}\n    </ul>\n</div>\n{{/if}}\n{{/if}}\n',
    "hour_status.tpl.html":
        '<span class="m8-icon-clock m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.hour_label}} </span>\n<b class="m8-hour-{{currentOpenings.currentStatus}}" >{{array lang.hour_status currentOpenings.currentStatus }}</b>\n{{#if currentOpenings.nextStatus}}\n     -\n    {{array lang.next_hour_action currentOpenings.nextStatus.status }} {{currentOpenings.nextStatus.at}}\n    {{#if currentOpenings.nextStatus.day}}\n        ({{#if currentOpenings.nextStatus.next}}{{sprint lang.next_day currentOpenings.nextStatus.day}}{{else}}{{currentOpenings.nextStatus.day}}{{/if}})\n    {{/if}}\n{{/if}}\n',
    "modal-directions.tpl.html":
        '<div id="m8-modal-directions" class="m8-open" onClick="m8modal.shouldExit(event.target)">\n    <div>\n        <div>\n            <div class="m8-close" onclick="m8modal.closeModalDirections()"></div>\n            <div>\n\n                <h3>{{lang.modal_open_directions}}</h3>\n\n                <p>{{lang.modal_directions_tip}}</p>\n\n                {{#each apps}}\n                    {{#if url}}\n                    <a class="m8-apps" href="{{url}}" target="_blank" data-name="{{name}}" data-step="{{step}}" data-mode="{{mode}}" onClick="m8tracker.goApp(this, event)">\n                        <div>\n                            <img src="https://app.myli.io/img/app/final/app_{{cname}}.png"/>\n                            <div>\n                                <div>{{../lang.modal_directions_open_link}}</div>\n                                <div>{{../lang.modal_directions_open_with}} {{name}}</div>\n                            </div>\n                        </div>\n                        <div class="m8-apps-action">{{../lang.modal_directions_open}}</div>\n                    </a>\n                    {{else}}\n                        <br/>\n                    {{/if}}\n                {{/each}}\n\n\n                \x3c!--a class="m8-button m8-secondary" href="#" onclick="m8modal.closeModalDirections()">\n                    {{lang.modal_close}}\n                </a--\x3e\n            </div>\n        </div>\n    </div>\n</div>',
    "modal-mosaic.tpl.html":
        '<div id="m8-modal-mosaic" class="m8-open" onClick="m8modal.shouldExit(event.target)">\n\n    <div>\n        <div>\n            <div class="m8-close" onclick="m8modal.closeModalMosaic()"></div>\n            <div class="m8-single-review {{platform}}" >\n                {{> review }}\n            </div>\n\n        </div>\n    </div>\n</div>',
    "modal.tpl.html":
        '<div id="m8-modal">\n    <div>\n        <div>\n            <h3>{{lang.modal_title}}</h3>\n            <p>{{lang.modal_intro}}</p>\n            <input id="m8emergency" class="m8-autocomplete" type="text" placeholder="{{lang.modal_placeholder}}"/>\n            <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n            \x3c!--p>{{lang.delivery_tip}}</p--\x3e\n            <a class="m8-button" href="#" onclick="m8tracker.completeDirections()">\n                {{lang.modal_valid}}\n            </a>\n            <a class="m8-button m8-secondary" href="#" onclick="m8modal.closeModal()">\n                {{lang.modal_cancel}}\n            </a>\n        </div>\n    </div>\n</div>',
    "mosaic.tpl.html": '{{#each reviews}}\n<div class="m8-single-review {{platform}}"  onclick="m8modal.openModalMosaic( {{@index}})">\n    {{> review lang=../lang }}\n</div>\n{{/each}}',
    "onspot.tpl.html":
        '{{#if primarySpot}}\n    <div class="m8-spots m8-primary-spot">\n        <ul id="m8-onspot-primary">\n            {{> onspotSpot primarySpot lang=lang}}\n        </ul>\n    </div>\n\n{{else}}\n    <div>\n        <button type="button" onClick="m8engine.geolocateAgain(\'onspot\')" class="m8-geosubmit">\n            <span>{{lang.onspot_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n\n        <div class="m8-geoerror"></div>\n\n        <div class="m8-alternative">{{lang.onspot_or}}</div>\n        <div class="m8-search-input">\n            <input class="m8-autocomplete {{currentBrowser}}" data-type="geocode" type="text" placeholder="{{lang.onspot_input}}"/>\n            \x3c!--button type="button" class="submit"><i class="fa fa-search"></i></button--\x3e\n        </div>\n    </div>\n{{/if}}\n\n\n<div id="m8-onspotResults" class="m8-results">\n    <div class="loader"></div>\n</div>\n\n',
    "onspot_results.tpl.html":
        '{{#if primarySpot}}\n    {{#unless fromGeoloc}}\n        <div style="position:relative">\n            <button type="button" onClick="m8engine.geolocateAgain(\'onspot\')" class="m8-geosubmit m8-geosmall">\n                <span>{{lang.onspot_nearyou}} </span>\n                <i class="fa fa-angle-right"></i>\n            </button>\n            <div class="m8-geoerror"></div>\n        </div>\n\n        <div id="m8-onspotSearch" class="{{#unless fromSearch}}m8-hide{{/unless}}">\n            <div class="m8-backupsearch">\n                <div>{{lang.search_intro}}</div>\n                <input data-type="geocode" class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{#if curAddress}}{{curAddress}}{{else}}{{lang.search_placeholder}}{{/if}}"/>\n                <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n            </div>\n        </div>\n    {{/unless}}\n{{else}}\n    {{#if formattedAddress}}\n        <div class="m8-address-intro">{{lang.onspot_address}}</div>\n        <div class="m8-address">{{formattedAddress}}</div>\n    {{/if}}\n\n    {{#if spots.length}}\n    <div class="m8-address-intro2">{{lang.onspot_with_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n            {{> onspotSpot lang=../lang}}\n        {{else}}\n            {{#if fromSearch}}\n            <div class="m8-address-intro2">{{lang.takeaway_no_results}}</div>\n            {{/if}}\n        {{/each}}\n    </ul>\n</div>',
    "onspot_spot.tpl.html":
        '<li>\n    <div>\n        &#8226; {{name}}{{#if preview}} [{{lang.preview_opensoon}}]{{/if}}\n        {{#unless isPrimary}}\n            - <a href="#" data-href="{{url}}" data-store="{{name}}"\n               onClick="m8tracker.goWebsite(this, event)" rel="nofollow" class="m8-hot">\n                {{lang.see_website}}\n            </a>\n        {{/unless}}\n    </div>\n    <div>\n        {{> hourModule lang=lang currentOpenings=openingsComp}}\n    </div>\n    <div class="m8-spot-mention">\n        <span class="m8-icon-calendar m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.onspot_booking_label}} </span>{{lang.booking_not_required}}\n    </div>\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" data-href="{{#if mapslink}}{{mapslink}}{{else}}{{directions}}{{/if}}" onClick="m8engine.goDirection(this, \'onspot\', event)" rel="nofollow">\n        <span class="m8-icon-map-marker m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.onspot_address_label}} </span>{{address}}\n    </a>\n    {{#if preview}}\n    <div>\n        <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n           onClick="m8tracker.goWebsite(this, event)" rel="nofollow">\n            <div><div>\n            {{lang.preview_get_notified}}\n            </div></div>\n            <div><i class="fa fa-angle-right"></i></div>\n        </a>\n    </div>\n    {{else}}\n\n        {{#if hasTravel}}\n        <div>\n            <span class="m8-icon-directions m8-mobile-only"></span>\n            <span class="m8-infotitle m8-desktop-only">{{lang.click_direction_icons}}</span>\n            <span class="m8-infotip m8-mobile-only">{{lang.click_direction_tip}}</span>\n        </div>\n        {{/if}}\n\n        <div class="m8-takeways">\n            <div style="display: flex;flex-wrap:wrap;">\n                {{#if hasTravel}}\n                    {{> drivingTimes lang=lang step=\'onspot\'}}\n                {{/if}}\n            </div>\n\n            {{#unless hasTravel}}\n                <a class="m8-button-advanced" href="#" data-href="{{directions}}" data-storeid="{{_index}}" data-store="{{name}}"\n                   onClick="m8engine.goDirection(this, \'onspot\', event)" target="_blank" rel="nofollow">\n                    <div>\n                        <div>{{lang.onspot_directions}}\n                            <div>\n                                <img src="https://cdn-app.myli.io/img/app/final/app_googlemaps.png" />\n                                <img src="https://cdn-app.myli.io/img/app/final/app_plans.png" />\n                                <img src="https://cdn-app.myli.io/img/app/final/app_waze.png" />\n                            </div>\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n            {{/unless}}\n        </div>\n\n\n    {{/if}}\n</li>\n',
    "openings.tpl.html":
        '<div {{#if mainHour}}id="m8-main-hours" class="{{mainHour}}"{{/if}}>\n{{#if closed_temp}}\n    {{lang.spot_closed_temp}}\n{{else}}\n    {{> hourStatus lang=lang currentOpenings=openingsComp}} - {{lang.all_infos}}\n{{/if}}\n</div>\n',
    "primary_takeaway_spot.tpl.html":
        '<div class="m8-results">\n    <div class="m8-spots">\n        <ul>\n            {{> takeawaySpot primarySpot lang=lang }}\n        </ul>\n    </div>\n    \x3c!--div>\n        <button type="button" onClick="m8engine.geolocate(\'takeaway\')" class="m8-geosubmit">\n            {{lang.takeaway_nearyou}} <i class="fa fa-angle-right"></i>\n        </button>\n    </div--\x3e\n    <div id="m8-takeawayResults">\n        <div class="loader"></div>\n    </div>\n</div>',
    "review.tpl.html":
        '<div>\n    <div class="m8-lfbody">\n        <div class="m8-pf"></div>\n        <div class="m8-date">{{dateAgo publishedAt}}</div>\n        <div class="m8-preview">\n            <span class="m8-score" data-score="{{score}}"><span></span>{{score}}</span><span>/10</span>\n            <span class="m8-excerpt {{#if title}}m8-title{{/if}}">\n                {{#if title}}\n                    {{title}}\n                {{else}}\n                    {{encodeMyString content}}\n                {{/if}}\n            </span>\n        </div>\n    </div>\n    <div class="m8-rtbody">\n        {{#if avatar}}\n        <div class="m8-avatar"><img src="{{avatar}}" width="34"/></div>\n        {{/if}}\n        <div class="m8-author">\n            <div class="m8-author-name">{{authorName}}</div>\n            <div class="m8-author-level">{{authorLevel}}</div>\n            {{#if authorCount}}\n            <div class="m8-author-count">{{authorCount}} {{lang.reviews_count}}</div>\n            {{/if}}\n        </div>\n    </div>\n</div>\n\n<div class="m8-content">\n    {{encodeMyString content}}\n</div>\n\n{{#if excerpt}}\n    <div class="m8-content-short">\n        {{encodeMyString excerpt}}\n        {{{excerptMore}}}\n    </div>\n{{/if}}\n',
    "reviews.tpl.html":
        '<div id="m8-widgetTiles" >\n    <div class="m8-close" onclick="m8engine.closeReviewsTiles()"></div>\n    <div class="m8-reviews">\n    {{#each reviews}}\n    <div class="m8-single-review {{platform}}" onclick="m8engine.toggleReviewsTiles()" onmouseover="m8engine.toggleAutoslide(false)" onmouseout="m8engine.toggleAutoslide(true)">\n        {{> review lang=../lang}}\n    </div>\n    {{/each}}\n    </div>\n\n    <div class="m8-myli" onclick="m8engine.restoreReviewsTiles()"></div>\n</div>\n',
    "takeaway.tpl.html":
        '{{#if primarySpot}}\n    <div class="m8-spots m8-primary-spot">\n        <ul id="m8-takeaway-primary">\n            {{> takeawaySpot primarySpot lang=lang}}\n        </ul>\n    </div>\n\n{{else}}\n    <div>\n        <button type="button" onClick="m8engine.geolocateAgain(\'takeaway\')" class="m8-geosubmit">\n            <span>{{lang.takeaway_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n\n        <div class="m8-geoerror"></div>\n\n        <div class="m8-alternative">{{lang.takeaway_or}}</div>\n        <div class="m8-search-input">\n            <input class="m8-autocomplete {{currentBrowser}}" data-type="geocode" type="text" placeholder="{{lang.takeaway_input}}"/>\n            \x3c!--button type="button" class="submit"><i class="fa fa-search" aria-hidden="true"></i></button--\x3e\n        </div>\n    </div>\n{{/if}}\n\n\n<div id="m8-takeawayResults" class="m8-results">\n    <div class="loader"></div>\n</div>\n\n\n\n\n',
    "takeaway_results.tpl.html":
        '{{#if primarySpot}}\n    {{#unless fromGeoloc}}\n    <div style="position:relative">\n        <button type="button" onClick="m8engine.geolocateAgain(\'takeaway\')" class="m8-geosubmit m8-geosmall">\n            <span>{{lang.onspot_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n        <div class="m8-geoerror"></div>\n    </div>\n\n    <div id="m8-takeawaySearch" class="{{#unless fromSearch}}m8-hide{{/unless}}">\n        <div class="m8-backupsearch">\n            <div>{{lang.search_intro}}</div>\n            <input data-type="geocode" class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{#if curAddress}}   {{curAddress}}{{else}}{{lang.search_placeholder}}{{/if}}"/>\n            <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n        </div>\n    </div>\n    {{/unless}}\n{{else}}\n    {{#if formattedAddress}}\n        <div class="m8-address-intro">{{lang.takeaway_address}}</div>\n        <div class="m8-address">{{formattedAddress}}</div>\n    {{/if}}\n\n    {{#if spots.length}}\n    <div class="m8-address-intro2">{{lang.takeaway_with_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n            {{> takeawaySpot lang=../lang}}\n        {{else}}\n            {{#if fromSearch}}\n            <div class="m8-address-intro2">{{lang.takeaway_no_results}}</div>\n            {{/if}}\n        {{/each}}\n    </ul>\n</div>',
    "takeaway_spot.tpl.html":
        '<li>\n    <div>&#8226; {{name}}{{#if preview}} [{{lang.preview_opensoon}}]{{/if}}</div>\n    <div>\n        {{> hourModule lang=lang currentOpenings=openingsAwayComp}}\n    </div>\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" data-href="{{#if mapslink}}{{mapslink}}{{else}}{{directions}}{{/if}}" onClick="m8engine.goDirection(this, \'takeaway\', event)" rel="nofollow">\n        <span class="m8-icon-map-marker m8-mobile-only"></span>\n        <span class="m8-infotitle m8-desktop-only">{{lang.takeaway_address_label}}</span>\n        {{address}}\n    </a>\n    {{#if preview}}\n    <div>\n        <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n           onClick="m8tracker.goWebsite(this, event)" rel="nofollow" class="m8-primary">\n            <div>\n                <div>\n                    {{lang.preview_get_notified}}\n                </div>\n            </div>\n            <div><i class="fa fa-angle-right"></i></div>\n        </a>\n    </div>\n    {{else}}\n\n        {{#unless closed_temp}}\n            <div>\n                <span class="m8-icon-shopping m8-mobile-only"></span>\n                <span class="m8-infotitle m8-desktop-only">{{lang.takeaway_order_label}}</span>\n                <span class="m8-mobile-only">{{lang.takeaway_order_label}}</span>\n            </div>\n\n            <div class="m8-takeways">\n                {{#if orderurl}}\n                {{#equal \'closed\' orderurl }}\n                <div>- {{lang.takeaway_order_clickco_label}}</div>\n                <a class="m8-subscribe m8-button-advanced" href="#" data-store="{{name}}" onclick="m8engine.showSubscribe(this)">\n                    <div>\n                        <div>\n                            {{lang.takeaway_order}}\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n                <div style="display: none">\n                    {{lang.takeaway_intro1}}<br/>\n                    {{lang.takeaway_intro2}}<br/>\n                    <b>{{lang.takeaway_contact}}</b>\n                    <div class="m8-email-input">\n                        <input type="email" required placeholder="{{lang.takeaway_placeholder_mail}}">\n                        <button type="button" data-store="{{name}}" class="submit" onclick="m8engine.getready(this)">{{lang.takeaway_getnotified}}</button>\n                    </div>\n\n                </div>\n                {{else}}\n\n                <div>- {{lang.takeaway_order_clickco_label}}</div>\n                <a class="m8-button-advanced" href="#" data-href="{{orderurl}}" data-store="{{name}}"\n                   onClick="m8tracker.goOrder(this, event)">\n                    <div>\n                        <div>\n                            {{lang.takeaway_order}}\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n\n                {{/equal}}\n                {{/if}}\n            </div>\n\n            {{#if fromthere}}\n            <div class="m8-takeways">\n\n                <div>- {{lang.takeaway_order_onspot_label}}</div>\n                <div style="display: flex;flex-wrap:wrap;">\n                {{#if hasTravel}}\n                    {{> drivingTimes lang=lang step=\'takeaway\'}}\n                {{/if}}\n                </div>\n\n                {{#unless hasTravel}}\n                <a class="m8-button-advanced" href="#" data-href="{{directions}}" data-storeid="{{_index}}" data-store="{{name}}"\n                   onClick="m8engine.goDirection(this, \'onspot\', event)" target="_blank" rel="nofollow">\n                    <div>\n                        <div>{{lang.onspot_directions}}\n                        <div>\n                            <img src="https://cdn-app.myli.io/img/app/final/app_googlemaps.png" />\n                            <img src="https://cdn-app.myli.io/img/app/final/app_plans.png" />\n                            <img src="https://cdn-app.myli.io/img/app/final/app_waze.png" />\n                        </div>\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n                {{/unless}}\n            </div>\n            {{/if}}\n\n            {{#if orderphone}}\n            <div class="m8-takeways">\n\n                <div>- {{lang.takeaway_order_phone_label}}</div>\n                {{#equal \'tracked\' orderphonetype}}\n                    <a class="m8-button-advanced" href="tel:{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{orderphone}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                {{else}}\n                    <a class="m8-button-advanced m8-mobile-only" href="tel:{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{lang.takeaway_order_phone_call_action}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                    <a class="m8-button-advanced m8-desktop-only" href="#" data-href="{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{lang.takeaway_order_phone_seenumber_action}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                {{/equal}}\n\n            </div>\n            {{/if}}\n        {{/unless}}\n\n    {{/if}}\n</li>\n',
};
}else{
    var m8widgetTemplates = {
    "ctas.tpl.html":
        '<div id="m8-ctas" class="{{#if squaremode}}square{{/if}}">\n    <div>\n        {{#each ctas}}\n        <a href="#" class="{{type}} {{#if desktop}}{{else}}m8-desk-hide{{/if}}" onClick="m8engine.togglePane(event, this, \'{{type}}\')">\n            <div><span class="m8-icon"><i></i></span></div>\n            {{#if title_locale}}\n            <span class="short_title">{{title_locale}}</span>\n            {{/if}}\n            {{#if full_title_locale}}\n            <span class="full_title">{{full_title_locale}}</span></a>\n            {{/if}}\n        {{/each}}\n    </div>\n</div>',
    "ctas_container.tpl.html":
        '<div id="m8-ctas-container" onmousedown="m8engine.shouldExit(event.target)">\n    <div>\n       <div id="m8-onspot"><div class="loader m0"></div></div>\n       <div id="m8-takeaway"><div class="loader m0"></div></div>\n       <div id="m8-delivery"><div class="loader m0"></div></div>\n    </div>\n</div>\n',
    "delivery.tpl.html":
        '{{#if primarySpot}}\n<div class="m8-spots m8-primary-spot">\n    <ul id="m8-delivery-primary">\n        <li>\n            <div>\n                &#8226; {{primarySpot.name}}\n            </div>\n            {{#if primarySpot.openingsDelivComp}}\n            <div>\n                {{> hourModule lang=lang closed_temp=primarySpot.closed_temp currentOpenings=primarySpot.openingsDelivComp}}\n            </div>\n            {{/if}}\n            {{#unless primarySpot.closed_temp}}\n\n                <div class="m8-address-intro2">\n                {{#equal primarySpot.partners.0.name \'instore\' }}\n                    {{#sup primarySpot.partners.length 1 }}\n                        {{lang.delivery_internal_result}}\n                    {{/sup}}\n                {{else}}\n\n                    {{#sup primarySpot.partners.length 1 }}\n                        {{lang.delivery_with_results}}\n                    {{else}}\n                        {{#sup primarySpot.partners.length 0 }}\n                            {{lang.delivery_with_one_result}}\n                        {{/sup}}\n                    {{/sup}}\n\n                {{/equal}}\n                </div>\n\n                {{#each primarySpot.partners}}\n                    <a data-store="{{store}}" onclick="m8tracker.goPlatform(this, event)" data-href="{{url}}" class="m8platform {{name}} {{class}}" alt="{{name}}" target="_blank" rel="nofollow" >\n                        <i class="fa fa-angle-right"></i>\n                    </a>\n\n                    {{#sup ../primarySpot.partners.length 1 }}\n                        {{#equal name \'instore\' }}\n                            <div class="m8-address-intro3">{{../lang.delivery_now_else}}</div>\n                        {{/equal}}\n                    {{/sup}}\n                {{/each}}\n            {{/unless}}\n        </li>\n    </ul>\n</div>\n{{/if}}\n<div class="m8-search-input">\n\n    <input class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{lang.delivery_input}}"/>\n    \x3c!--button type="button" class="submit"><i class="fa fa-search"></i></button--\x3e\n    <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n    <div class="m8-address-tip">{{lang.delivery_tip}}</div>\n</div>\n<div id="m8-deliveryLoading"></div>\n<div id="m8-deliveryResults" class="m8-results"></div>\n',
    "delivery_results.tpl.html":
        '{{#if formattedAddress}}\n    <div class="m8-address-intro">{{lang.delivery_address}}</div>\n    <div class="m8-address">{{formattedAddress}}</div>\n\n    {{#if spots.length}}\n        {{#lookup spots 0 \'preview\'}}\n            {{lang.preview_get_intro}}\n        {{else}}\n            {{#equal spots.0.partners.0.name \'restoin\' }}\n                <div class="m8-address-intro2">{{lang.delivery_now}}</div>\n                <a data-store="{{spots.0.partners.0.store}}"\n                   onclick="m8tracker.goPlatform(this, event)"\n                   data-href="{{spots.0.partners.0.url}}"\n                   class="m8platform {{spots.0.partners.0.name}} {{spots.0.partners.0.class}}"\n                   alt="{{spots.0.partners.0.name}}"\n                   target="_blank"\n                   rel="nofollow" >\n                    <i class="fa fa-angle-right"></i>\n                </a>\n                {{#sup spots.0.partners.length 1 }}\n                    <div class="m8-address-intro3">{{lang.delivery_now_else}}</div>\n                {{/sup}}\n            {{/equal}}\n        {{/lookup}}\n    {{else}}\n        <div class="m8-address-intro2">{{lang.delivery_no_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n        <li>\n\n            <div>\n                {{#sup ../spots.length 1 }}\n                &#8226; {{name}}\n                {{/sup}}\n            </div>\n\n            {{#if openingsDelivComp}}\n            <div>\n               {{> hourModule lang=../lang currentOpenings=openingsDelivComp}}\n            </div>\n            {{/if}}\n\n            {{#if preview}}\n                {{lang.preview_get_intro}}\n\n                <div>\n                    <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n                       onClick="m8tracker.goWebsite(this, event)" rel="nofollow">\n                        <div><div>\n                            {{../lang.preview_get_notified}}\n                        </div></div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                </div>\n            {{else}}\n\n                {{#equal partners.0.name \'restoin\' }}\n                    {{#sup partners.length 1 }}\n                        <div class="m8-address-intro2">{{../lang.delivery_with_results}}</div>\n                    {{/sup}}\n                {{else}}\n                    {{#equal partners.0.name \'instore\' }}\n                        {{#sup partners.length 1 }}\n                            <div class="m8-address-intro2">{{../lang.delivery_internal_result}}</div>\n                        {{/sup}}\n                    {{else}}\n                        <div class="m8-address-intro2">\n                            {{#sup partners.length 1 }}\n                                {{../lang.delivery_with_results}}\n                            {{else}}\n                                {{#sup partners.length 0 }}\n                                    {{../lang.delivery_with_one_result}}\n                                {{/sup}}\n                            {{/sup}}\n                        </div>\n                    {{/equal}}\n                {{/equal}}\n\n            {{/if}}\n\n            {{#each partners}}\n                {{#equal name \'restoin\' }}\n                {{else}}\n                    <a data-store="{{store}}" onclick="m8tracker.goPlatform(this, event)" data-href="{{url}}" class="m8platform {{name}} {{class}}" alt="{{name}}" target="_blank" rel="nofollow" >\n                        <i class="fa fa-angle-right"></i>\n                    </a>\n                {{/equal}}\n                {{#sup ../partners.length 1 }}\n                    {{#equal name \'instore\' }}\n                        <div class="m8-address-intro3">{{../../lang.delivery_now_else}}</div>\n                    {{/equal}}\n                {{/sup}}\n            {{/each}}\n        </li>\n        {{/each}}\n    </ul>\n</div>\n',
    "driving_times.tpl.html":
        '{{#if driving}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'driving\')" data-href="{{driving.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-driving"></span> {{driving.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}\n{{#if transit}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'transit\')" data-href="{{transit.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-transit"></span> {{transit.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}\n{{#if walking}}\n<div class="m8-travel-mode">\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" onClick="m8engine.goDirection(this, \'takeaway\', event, \'walking\')" data-href="{{walking.directions}}" class="m8-button-advanced" rel="nofollow" >\n        <div>\n            <div>\n                {{lang.route_direction}} <span class="m8-walking"></span> {{walking.duration.text}}\n            </div>\n        </div>\n        <div><i class="fa fa-angle-right"></i></div>\n    </a>\n</div>\n{{/if}}',
    "hour_module.tpl.html":
        '{{#if closed_temp}}\n<div data-store="{{name}}">\n    <span class="m8-icon-clock m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.hour_label}} </span>\n    <b class="m8-hour-closed" >{{lang.spot_closed_temp}}</b>\n</div>\n{{else}}\n{{#if currentOpenings }}\n<div onClick="m8engine.hourExpand(this)" data-store="{{name}}" style="cursor:pointer">\n    {{> hourStatus lang=lang}}\n    <i class="fa fa-angle-down"></i>\n</div>\n<div onClick="m8engine.hourCollapse(this)" data-store="{{name}}" class="m8-hide" style="cursor:pointer">\n    {{> hourStatus lang=lang}}\n    <i class="fa fa-angle-up"></i>\n\n    <ul class="m8-hours">\n        {{#each currentOpenings.hours}}\n        <li>\n            <span>{{day}}</span>\n            {{#each hours}}{{#sup @index 0 }},{{/sup}} {{from}}-{{to}}{{else}}\n                {{../lang.spot_closed}}\n            {{/each}}\n        </li>\n        {{#if (isdefined original)}}\n        <li style="font-style:italic;color: #8f8f8f">\n            <span>{{../lang.usually}}</span>\n            ({{#each original}}{{#sup @index 0 }}, {{/sup}}{{from}}-{{to}}{{else}}{{../lang.spot_closed}}{{/each}})\n        </li>\n        {{/if}}\n        {{/each}}\n    </ul>\n</div>\n{{/if}}\n{{/if}}\n',
    "hour_status.tpl.html":
        '<span class="m8-icon-clock m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.hour_label}} </span>\n<b class="m8-hour-{{currentOpenings.currentStatus}}" >{{array lang.hour_status currentOpenings.currentStatus }}</b>\n{{#if currentOpenings.nextStatus}}\n     -\n    {{array lang.next_hour_action currentOpenings.nextStatus.status }} {{currentOpenings.nextStatus.at}}\n    {{#if currentOpenings.nextStatus.day}}\n        ({{#if currentOpenings.nextStatus.next}}{{sprint lang.next_day currentOpenings.nextStatus.day}}{{else}}{{currentOpenings.nextStatus.day}}{{/if}})\n    {{/if}}\n{{/if}}\n',
    "modal-directions.tpl.html":
        '<div id="m8-modal-directions" class="m8-open" onClick="m8modal.shouldExit(event.target)">\n    <div>\n        <div>\n            <div class="m8-close" onclick="m8modal.closeModalDirections()"></div>\n            <div>\n\n                <h3>{{lang.modal_open_directions}}</h3>\n\n                <p>{{lang.modal_directions_tip}}</p>\n\n                {{#each apps}}\n                    {{#if url}}\n                    <a class="m8-apps" href="{{url}}" target="_blank" data-name="{{name}}" data-step="{{step}}" data-mode="{{mode}}" onClick="m8tracker.goApp(this, event)">\n                        <div>\n                            <img src="https://app.myli.io/img/app/final/app_{{cname}}.png"/>\n                            <div>\n                                <div>{{../lang.modal_directions_open_link}}</div>\n                                <div>{{../lang.modal_directions_open_with}} {{name}}</div>\n                            </div>\n                        </div>\n                        <div class="m8-apps-action">{{../lang.modal_directions_open}}</div>\n                    </a>\n                    {{else}}\n                        <br/>\n                    {{/if}}\n                {{/each}}\n\n\n                \x3c!--a class="m8-button m8-secondary" href="#" onclick="m8modal.closeModalDirections()">\n                    {{lang.modal_close}}\n                </a--\x3e\n            </div>\n        </div>\n    </div>\n</div>',
    "modal-mosaic.tpl.html":
        '<div id="m8-modal-mosaic" class="m8-open" onClick="m8modal.shouldExit(event.target)">\n\n    <div>\n        <div>\n            <div class="m8-close" onclick="m8modal.closeModalMosaic()"></div>\n            <div class="m8-single-review {{platform}}" >\n                {{> review }}\n            </div>\n\n        </div>\n    </div>\n</div>',
    "modal.tpl.html":
        '<div id="m8-modal">\n    <div>\n        <div>\n            <h3>{{lang.modal_title}}</h3>\n            <p>{{lang.modal_intro}}</p>\n            <input id="m8emergency" class="m8-autocomplete" type="text" placeholder="{{lang.modal_placeholder}}"/>\n            <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n            \x3c!--p>{{lang.delivery_tip}}</p--\x3e\n            <a class="m8-button" href="#" onclick="m8tracker.completeDirections()">\n                {{lang.modal_valid}}\n            </a>\n            <a class="m8-button m8-secondary" href="#" onclick="m8modal.closeModal()">\n                {{lang.modal_cancel}}\n            </a>\n        </div>\n    </div>\n</div>',
    "mosaic.tpl.html": '{{#each reviews}}\n<div class="m8-single-review {{platform}}"  onclick="m8modal.openModalMosaic( {{@index}})">\n    {{> review lang=../lang }}\n</div>\n{{/each}}',
    "onspot.tpl.html":
        '{{#if primarySpot}}\n    <div class="m8-spots m8-primary-spot">\n        <ul id="m8-onspot-primary">\n            {{> onspotSpot primarySpot lang=lang}}\n        </ul>\n    </div>\n\n{{else}}\n    <div>\n        <button type="button" onClick="m8engine.geolocateAgain(\'onspot\')" class="m8-geosubmit">\n            <span>{{lang.onspot_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n\n        <div class="m8-geoerror"></div>\n\n        <div class="m8-alternative">{{lang.onspot_or}}</div>\n        <div class="m8-search-input">\n            <input class="m8-autocomplete {{currentBrowser}}" data-type="geocode" type="text" placeholder="{{lang.onspot_input}}"/>\n            \x3c!--button type="button" class="submit"><i class="fa fa-search"></i></button--\x3e\n        </div>\n    </div>\n{{/if}}\n\n\n<div id="m8-onspotResults" class="m8-results">\n    <div class="loader"></div>\n</div>\n\n',
    "onspot_results.tpl.html":
        '{{#if primarySpot}}\n    {{#unless fromGeoloc}}\n        <div style="position:relative">\n            <button type="button" onClick="m8engine.geolocateAgain(\'onspot\')" class="m8-geosubmit m8-geosmall">\n                <span>{{lang.onspot_nearyou}} </span>\n                <i class="fa fa-angle-right"></i>\n            </button>\n            <div class="m8-geoerror"></div>\n        </div>\n\n        <div id="m8-onspotSearch" class="{{#unless fromSearch}}m8-hide{{/unless}}">\n            <div class="m8-backupsearch">\n                <div>{{lang.search_intro}}</div>\n                <input data-type="geocode" class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{#if curAddress}}{{curAddress}}{{else}}{{lang.search_placeholder}}{{/if}}"/>\n                <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n            </div>\n        </div>\n    {{/unless}}\n{{else}}\n    {{#if formattedAddress}}\n        <div class="m8-address-intro">{{lang.onspot_address}}</div>\n        <div class="m8-address">{{formattedAddress}}</div>\n    {{/if}}\n\n    {{#if spots.length}}\n    <div class="m8-address-intro2">{{lang.onspot_with_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n            {{> onspotSpot lang=../lang}}\n        {{else}}\n            {{#if fromSearch}}\n            <div class="m8-address-intro2">{{lang.takeaway_no_results}}</div>\n            {{/if}}\n        {{/each}}\n    </ul>\n</div>',
    "onspot_spot.tpl.html":
        '<li>\n    <div>\n        &#8226; {{name}}{{#if preview}} [{{lang.preview_opensoon}}]{{/if}}\n        {{#unless isPrimary}}\n            - <a href="#" data-href="{{url}}" data-store="{{name}}"\n               onClick="m8tracker.goWebsite(this, event)" rel="nofollow" class="m8-hot">\n                {{lang.see_website}}\n            </a>\n        {{/unless}}\n    </div>\n    <div>\n        {{> hourModule lang=lang currentOpenings=openingsComp}}\n    </div>\n    <div class="m8-spot-mention">\n        <span class="m8-icon-calendar m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.onspot_booking_label}} </span>{{lang.booking_not_required}}\n    </div>\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" data-href="{{#if mapslink}}{{mapslink}}{{else}}{{directions}}{{/if}}" onClick="m8engine.goDirection(this, \'onspot\', event)" rel="nofollow">\n        <span class="m8-icon-map-marker m8-mobile-only"></span> <span class="m8-infotitle m8-desktop-only">{{lang.onspot_address_label}} </span>{{address}}\n    </a>\n    {{#if preview}}\n    <div>\n        <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n           onClick="m8tracker.goWebsite(this, event)" rel="nofollow">\n            <div><div>\n            {{lang.preview_get_notified}}\n            </div></div>\n            <div><i class="fa fa-angle-right"></i></div>\n        </a>\n    </div>\n    {{else}}\n\n        {{#if hasTravel}}\n        <div>\n            <span class="m8-icon-directions m8-mobile-only"></span>\n            <span class="m8-infotitle m8-desktop-only">{{lang.click_direction_icons}}</span>\n            <span class="m8-infotip m8-mobile-only">{{lang.click_direction_tip}}</span>\n        </div>\n        {{/if}}\n\n        <div class="m8-takeways">\n            <div style="display: flex;flex-wrap:wrap;">\n                {{#if hasTravel}}\n                    {{> drivingTimes lang=lang step=\'onspot\'}}\n                {{/if}}\n            </div>\n\n            {{#unless hasTravel}}\n                <a class="m8-button-advanced" href="#" data-href="{{directions}}" data-storeid="{{_index}}" data-store="{{name}}"\n                   onClick="m8engine.goDirection(this, \'onspot\', event)" target="_blank" rel="nofollow">\n                    <div>\n                        <div>{{lang.onspot_directions}}\n                            <div>\n                                <img src="https://cdn-app.myli.io/img/app/final/app_googlemaps.png" />\n                                <img src="https://cdn-app.myli.io/img/app/final/app_plans.png" />\n                                <img src="https://cdn-app.myli.io/img/app/final/app_waze.png" />\n                            </div>\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n            {{/unless}}\n        </div>\n\n\n    {{/if}}\n</li>\n',
    "openings.tpl.html":
        '<div {{#if mainHour}}id="m8-main-hours" class="{{mainHour}}"{{/if}}>\n{{#if closed_temp}}\n    {{lang.spot_closed_temp}}\n{{else}}\n    {{> hourStatus lang=lang currentOpenings=openingsComp}} - {{lang.all_infos}}\n{{/if}}\n</div>\n',
    "primary_takeaway_spot.tpl.html":
        '<div class="m8-results">\n    <div class="m8-spots">\n        <ul>\n            {{> takeawaySpot primarySpot lang=lang }}\n        </ul>\n    </div>\n    \x3c!--div>\n        <button type="button" onClick="m8engine.geolocate(\'takeaway\')" class="m8-geosubmit">\n            {{lang.takeaway_nearyou}} <i class="fa fa-angle-right"></i>\n        </button>\n    </div--\x3e\n    <div id="m8-takeawayResults">\n        <div class="loader"></div>\n    </div>\n</div>',
    "review.tpl.html":
        '<div>\n    <div class="m8-lfbody">\n        <div class="m8-pf"></div>\n        <div class="m8-date">{{dateAgo publishedAt}}</div>\n        <div class="m8-preview">\n            <span class="m8-score" data-score="{{score}}"><span></span>{{score}}</span><span>/10</span>\n            <span class="m8-excerpt {{#if title}}m8-title{{/if}}">\n                {{#if title}}\n                    {{title}}\n                {{else}}\n                    {{encodeMyString content}}\n                {{/if}}\n            </span>\n        </div>\n    </div>\n    <div class="m8-rtbody">\n        {{#if avatar}}\n        <div class="m8-avatar"><img src="{{avatar}}" width="34"/></div>\n        {{/if}}\n        <div class="m8-author">\n            <div class="m8-author-name">{{authorName}}</div>\n            <div class="m8-author-level">{{authorLevel}}</div>\n            {{#if authorCount}}\n            <div class="m8-author-count">{{authorCount}} {{lang.reviews_count}}</div>\n            {{/if}}\n        </div>\n    </div>\n</div>\n\n<div class="m8-content">\n    {{encodeMyString content}}\n</div>\n\n{{#if excerpt}}\n    <div class="m8-content-short">\n        {{encodeMyString excerpt}}\n        {{{excerptMore}}}\n    </div>\n{{/if}}\n',
    "reviews.tpl.html":
        '<div id="m8-widgetTiles" class="m8-small">\n    <div class="m8-close" onclick="m8engine.closeReviewsTiles()"></div>\n    <div class="m8-reviews">\n    {{#each reviews}}\n    <div class="m8-single-review {{platform}}" onclick="m8engine.toggleReviewsTiles()" onmouseover="m8engine.toggleAutoslide(false)" onmouseout="m8engine.toggleAutoslide(true)">\n        {{> review lang=../lang}}\n    </div>\n    {{/each}}\n    </div>\n\n    <div class="m8-myli" onclick="m8engine.restoreReviewsTiles()"></div>\n</div>\n',
    "takeaway.tpl.html":
        '{{#if primarySpot}}\n    <div class="m8-spots m8-primary-spot">\n        <ul id="m8-takeaway-primary">\n            {{> takeawaySpot primarySpot lang=lang}}\n        </ul>\n    </div>\n\n{{else}}\n    <div>\n        <button type="button" onClick="m8engine.geolocateAgain(\'takeaway\')" class="m8-geosubmit">\n            <span>{{lang.takeaway_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n\n        <div class="m8-geoerror"></div>\n\n        <div class="m8-alternative">{{lang.takeaway_or}}</div>\n        <div class="m8-search-input">\n            <input class="m8-autocomplete {{currentBrowser}}" data-type="geocode" type="text" placeholder="{{lang.takeaway_input}}"/>\n            \x3c!--button type="button" class="submit"><i class="fa fa-search" aria-hidden="true"></i></button--\x3e\n        </div>\n    </div>\n{{/if}}\n\n\n<div id="m8-takeawayResults" class="m8-results">\n    <div class="loader"></div>\n</div>\n\n\n\n\n',
    "takeaway_results.tpl.html":
        '{{#if primarySpot}}\n    {{#unless fromGeoloc}}\n    <div style="position:relative">\n        <button type="button" onClick="m8engine.geolocateAgain(\'takeaway\')" class="m8-geosubmit m8-geosmall">\n            <span>{{lang.onspot_nearyou}} </span>\n            <i class="fa fa-angle-right"></i>\n        </button>\n        <div class="m8-geoerror"></div>\n    </div>\n\n    <div id="m8-takeawaySearch" class="{{#unless fromSearch}}m8-hide{{/unless}}">\n        <div class="m8-backupsearch">\n            <div>{{lang.search_intro}}</div>\n            <input data-type="geocode" class="m8-autocomplete {{currentBrowser}}" type="text" placeholder="{{#if curAddress}}   {{curAddress}}{{else}}{{lang.search_placeholder}}{{/if}}"/>\n            <div class="m8-badaddress m8-hide">{{lang.delivery_lackprecision}}</div>\n        </div>\n    </div>\n    {{/unless}}\n{{else}}\n    {{#if formattedAddress}}\n        <div class="m8-address-intro">{{lang.takeaway_address}}</div>\n        <div class="m8-address">{{formattedAddress}}</div>\n    {{/if}}\n\n    {{#if spots.length}}\n    <div class="m8-address-intro2">{{lang.takeaway_with_results}}</div>\n    {{/if}}\n{{/if}}\n\n<div class="m8-spots">\n    <ul>\n        {{#each spots}}\n            {{> takeawaySpot lang=../lang}}\n        {{else}}\n            {{#if fromSearch}}\n            <div class="m8-address-intro2">{{lang.takeaway_no_results}}</div>\n            {{/if}}\n        {{/each}}\n    </ul>\n</div>',
    "takeaway_spot.tpl.html":
        '<li>\n    <div>&#8226; {{name}}{{#if preview}} [{{lang.preview_opensoon}}]{{/if}}</div>\n    <div>\n        {{> hourModule lang=lang currentOpenings=openingsAwayComp}}\n    </div>\n    <a target="_blank" data-storeid="{{_index}}" data-store="{{name}}" data-href="{{#if mapslink}}{{mapslink}}{{else}}{{directions}}{{/if}}" onClick="m8engine.goDirection(this, \'takeaway\', event)" rel="nofollow">\n        <span class="m8-icon-map-marker m8-mobile-only"></span>\n        <span class="m8-infotitle m8-desktop-only">{{lang.takeaway_address_label}}</span>\n        {{address}}\n    </a>\n    {{#if preview}}\n    <div>\n        <a class="m8-button-advanced" href="#" data-href="{{url}}" data-store="{{name}}"\n           onClick="m8tracker.goWebsite(this, event)" rel="nofollow" class="m8-primary">\n            <div>\n                <div>\n                    {{lang.preview_get_notified}}\n                </div>\n            </div>\n            <div><i class="fa fa-angle-right"></i></div>\n        </a>\n    </div>\n    {{else}}\n\n        {{#unless closed_temp}}\n            <div>\n                <span class="m8-icon-shopping m8-mobile-only"></span>\n                <span class="m8-infotitle m8-desktop-only">{{lang.takeaway_order_label}}</span>\n                <span class="m8-mobile-only">{{lang.takeaway_order_label}}</span>\n            </div>\n\n            <div class="m8-takeways">\n                {{#if orderurl}}\n                {{#equal \'closed\' orderurl }}\n                <div>- {{lang.takeaway_order_clickco_label}}</div>\n                <a class="m8-subscribe m8-button-advanced" href="#" data-store="{{name}}" onclick="m8engine.showSubscribe(this)">\n                    <div>\n                        <div>\n                            {{lang.takeaway_order}}\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n                <div style="display: none">\n                    {{lang.takeaway_intro1}}<br/>\n                    {{lang.takeaway_intro2}}<br/>\n                    <b>{{lang.takeaway_contact}}</b>\n                    <div class="m8-email-input">\n                        <input type="email" required placeholder="{{lang.takeaway_placeholder_mail}}">\n                        <button type="button" data-store="{{name}}" class="submit" onclick="m8engine.getready(this)">{{lang.takeaway_getnotified}}</button>\n                    </div>\n\n                </div>\n                {{else}}\n\n                <div>- {{lang.takeaway_order_clickco_label}}</div>\n                <a class="m8-button-advanced" href="#" data-href="{{orderurl}}" data-store="{{name}}"\n                   onClick="m8tracker.goOrder(this, event)">\n                    <div>\n                        <div>\n                            {{lang.takeaway_order}}\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n\n                {{/equal}}\n                {{/if}}\n            </div>\n\n            {{#if fromthere}}\n            <div class="m8-takeways">\n\n                <div>- {{lang.takeaway_order_onspot_label}}</div>\n                <div style="display: flex;flex-wrap:wrap;">\n                {{#if hasTravel}}\n                    {{> drivingTimes lang=lang step=\'takeaway\'}}\n                {{/if}}\n                </div>\n\n                {{#unless hasTravel}}\n                <a class="m8-button-advanced" href="#" data-href="{{directions}}" data-storeid="{{_index}}" data-store="{{name}}"\n                   onClick="m8engine.goDirection(this, \'onspot\', event)" target="_blank" rel="nofollow">\n                    <div>\n                        <div>{{lang.onspot_directions}}\n                        <div>\n                            <img src="https://cdn-app.myli.io/img/app/final/app_googlemaps.png" />\n                            <img src="https://cdn-app.myli.io/img/app/final/app_plans.png" />\n                            <img src="https://cdn-app.myli.io/img/app/final/app_waze.png" />\n                        </div>\n                        </div>\n                    </div>\n                    <div><i class="fa fa-angle-right"></i></div>\n                </a>\n                {{/unless}}\n            </div>\n            {{/if}}\n\n            {{#if orderphone}}\n            <div class="m8-takeways">\n\n                <div>- {{lang.takeaway_order_phone_label}}</div>\n                {{#equal \'tracked\' orderphonetype}}\n                    <a class="m8-button-advanced" href="tel:{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{orderphone}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                {{else}}\n                    <a class="m8-button-advanced m8-mobile-only" href="tel:{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{lang.takeaway_order_phone_call_action}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                    <a class="m8-button-advanced m8-desktop-only" href="#" data-href="{{orderphone}}" data-type="{{orderphonetype}}" onClick="m8tracker.goCall(this, event)">\n                        <div>\n                            <div>\n                                {{lang.takeaway_order_phone_seenumber_action}}\n                                <span class="m8-icon-phone"></span>\n                            </div>\n                        </div>\n                        <div><i class="fa fa-angle-right"></i></div>\n                    </a>\n                {{/equal}}\n\n            </div>\n            {{/if}}\n        {{/unless}}\n\n    {{/if}}\n</li>\n',
};
}
const M8_DEBUG = !1,
    M8_DISTRACK = !1,
    M8_PLUGIN_VERSION = 1,
    OPENING_HOURS_MODE = "openingHours",
    ON_SPOT_MODE = "onspot",
    TAKEAWAY_MODE = "takeaway",
    DELIVERY_MODE = "delivery";
!(function (e, t) {
    var n = {
            localData: { initOver: !1, paneLoaded: !1 },
            preinit: function () {
                var e = this;
                if (!(window.location.href.indexOf("action=elementor") > -1 || window.location.href.indexOf("commande/villages-nature") > -1)) {
                    var n = new UAParser();
                    if (
                        ("mobile" === n.getResult().device.type &&
                            ((e.currentOs = n.getResult().os.name.toLowerCase()),
                            (e.currentBrowser = n
                                .getResult()
                                .browser.name.toLowerCase()
                                .replace(/mobile /, ""))),
                        e.getPrimarySpot(),
                        e.localizeData(),
                        e.loadStylesheet("https://fonts.googleapis.com/css?family=Open+Sans:400,600,800|Raleway"),
                        e.checkFontAwesome() || e.loadStylesheet("https://use.fontawesome.com/releases/v5.0.13/css/all.css", "anonymous", "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"),
                        e.loadStylesheet(t.cssPath + "?v=1"),
                        !e.localData.initOver)
                    ) {
                        var i = document.createElement("div");
                        (i.id = "m8engine"), document.body.appendChild(i);
                    }
                    e.loadScript("https://cdn-app.myli.io/js/lib_v0.0.8.js", function () {
                        e.initTracker(), e.renderCtas();
                    });
                }
            },
            init: function () {
                var e = this;
                "undefined" != typeof M8_ASYNC && M8_ASYNC && n.preinit(), e.localData.initOver || e.initTemplates(), e.prepareReviews();
                var i = "https://maps.googleapis.com/maps/api/js?key=" + t.maps.gmapsApiKey + "&libraries=geometry,places&sensor=false&v=3.26&language=" + t.currentLocale;
                if ("undefined" != typeof ssf_wp_base)
                    var a = setInterval(function () {
                        "undefined" != typeof initTheMap && ("function" == typeof initStoreLocator && (i += "&callback=initStoreLocator"), e.initGoogle(i), clearInterval(a));
                    }, 1e3);
                else e.initGoogle(i);
            },
            destroy: function () {
                (this.localData.initOver = !1), clearInterval(this.autoslideInterval), document.getElementById("m8-widgetTiles") && document.getElementById("m8-widgetTiles").remove();
            },
            checkFontAwesome: function () {
                var e = document.createElement("span");
                (e.className = "fa"), (e.style.display = "none"), document.body.insertBefore(e, document.body.firstChild);
                var t,
                    n,
                    i = !1;
                return "FontAwesome" === ((t = e), (n = "font-family"), window.getComputedStyle(t, null).getPropertyValue(n)) && (i = !0), document.body.removeChild(e), i;
            },
            initGoogle: function (e) {
                (t.currentOs = this.currentOs), (t.currentBrowser = this.currentBrowser);
                var n = "click_direction_tip_";
                t.currentOs && (n += t.currentOs), (t.i18n[t.currentLocale].click_direction_tip = t.i18n[t.currentLocale][n]), this.localData.initOver || ((this.localData.initOver = !0), this.loadGoogle(e));
            },
            initTemplates: function () {
                n.registerHelpers(), n.registerPartials();
            },
            prepareReviews: function () {
                var e = this;
                if (null === t.reviewsOptions || t.reviewsOptions.toaster.isActive || t.reviewsOptions.mosaic.isActive) {
                    var n = t.reviewsPath + "?lang=" + t.currentLocale;
                    t.primarySpot && (n += "&origin=" + encodeURI(t.primarySpot.url.replace(/\?lang=[a-z]{2}/, ""))),
                        e.loadStylesheet(t.cssPath + "?t=1&v=1"),
                        e.loadJson(n, function (n) {
                            (t.reviews = JSON.parse(n)), e.displayReviews();
                        });
                }
            },
            displayReviews: function () {
                var e,
                    i = JSON.parse(JSON.stringify(t));
                if (((i.lang = t.i18n[t.currentLocale]), null === t.reviewsOptions || t.reviewsOptions.toaster.isActive)) {
                    if (null !== t.reviewsOptions && void 0 !== t.reviewsOptions.excludeUrls && t.reviewsOptions.excludeUrls.length) {
                        var a = t.reviewsOptions.excludeUrls.split(/\n/),
                            r = window.location.href.split("?");
                        a.forEach(function (e) {
                            e === r[0] && !0;
                        });
                    }
                    void 0 !== i.reviews &&
                        i.reviews.length > 0 &&
                        i.reviews.map(function (e) {
                            return "lafourchette" == e.platform && (e.score = 2 * e.score), e;
                        });
                    var s = [];
                    if (
                        (null !== i.reviewsOptions && void 0 !== i.reviews && (s = i.reviews.splice(parseInt(i.reviewsOptions.toaster.limit) - 1, i.reviews.length - parseInt(i.reviewsOptions.toaster.limit))),
                        null !== document.getElementById("m8-widgetTiles") && document.getElementById("m8-widgetTiles").remove(),
                        null === document.getElementById("m8-widgetTiles") && void 0 !== i.reviews && i.reviews.length > 0)
                    ) {
                        var o = document.getElementById("m8engine");
                        void 0 !== m8widgetTemplates["reviews.tpl.html"] &&
                            ((e = Handlebars.compile(m8widgetTemplates["reviews.tpl.html"])),
                            (document.body.className += " m8reviews"),
                            o.insertAdjacentHTML("beforeend", e(i)),
                            "small" === myli_push._.globalStorage.getLocal("m8widgetStatus") && (document.getElementById("m8-widgetTiles").className = "m8-small")),
                            n.initAutoslide();
                    }
                    i.reviews = i.reviews.concat(s);
                }
                if (document.getElementById("m8mosaic") && void 0 !== i.reviews && (null === i.reviewsOptions || i.reviewsOptions.mosaic.isActive)) {
                    e = Handlebars.compile(m8widgetTemplates["mosaic.tpl.html"]);
                    for (var l = [".", "!", ",", "-", "â€¦"], c = t.i18n[t.currentLocale].read_more, p = 0; p < i.reviews.length; p++) {
                        var d = i.reviews[p].content;
                        (d + c).length > 130
                            ? ((i.reviews[p].excerpt = d.substr(0, 130 - c.length)),
                              (i.reviews[p].excerptMore = ""),
                              l.indexOf(i.reviews[p].excerpt.substr(i.reviews[p].excerpt.length - 1)) < 0 && (i.reviews[p].excerptMore += "&hellip;"),
                              (i.reviews[p].excerptMore += " <b>" + c + "</b>"))
                            : ((i.reviews[p].excerpt = i.reviews[p].content), (i.reviews[p].excerptMore = ""));
                    }
                    null !== i.reviewsOptions && (i.reviews = i.reviews.slice(0, parseInt(i.reviewsOptions.mosaic.limit))), document.getElementById("m8mosaic").insertAdjacentHTML("beforeend", e(i));
                }
            },
            loadGoogle: function (e) {
                t.ctas.length > 0
                    ? "undefined" != typeof google && void 0 !== google.maps
                        ? (void 0 === google.maps.geometry && m8_google.loadGoogleGeometry(), void 0 === google.maps.places && m8_google.loadGooglePlaces(), this.renderTemplates())
                        : this.loadScript(e, this.renderTemplates)
                    : this.renderTemplates();
            },
            getPrimarySpot: function () {
                (t.primarySpot = null),
                    t.spots.forEach(function (e, i) {
                        (e._index = i), void 0 === e.maps && (e.maps = {}), window.location.href.indexOf(e.url) > -1 && ((e.isPrimary = !0), n.preparePartners([e]), (t.primarySpot = e), r.computeMapsLink(e), r.computeDirectionLink(e));
                    });
            },
            initAutocompleteInput: function () {
                for (var e = document.getElementsByClassName("m8-autocomplete"), i = 0; i < e.length; i++)
                    if (e[i].className.indexOf("pac-target-input") < 0) {
                        var a = { fields: ["name", "types", "geometry.location", "place_id", "formatted_address", "address_components"] };
                        t.maps.searchCountries.length > 0 && t.maps.searchCountries.length < 5 && (a.componentRestrictions = { country: t.maps.searchCountries });
                        var r = new google.maps.places.Autocomplete(e[i], a);
                        void 0 !== e[i].dataset.type
                            ? ((e[i].dataset.pane = "SearchPlace"), r.addListener("place_changed", n.searchPlace))
                            : "" === e[i].id || void 0 === e[i].id
                            ? ((e[i].dataset.pane = "SearchLocation"), r.addListener("place_changed", n.searchLocation))
                            : ((e[i].dataset.pane = "SearchModal"), r.addListener("place_changed", n.searchModal)),
                            e[i].addEventListener("input", function (e) {
                                void 0 === this.dataset.dirty && (n.track({ eventName: "autocomplete" + this.dataset.pane }), (this.dataset.dirty = !0));
                            }),
                            (e[i].className += " m8-trigready");
                    }
            },
            initTracker: function () {
                myli_push.init(t.trackerId, t.cookieRoot).systeminfo().pageview({});
            },
            bindModule: function (e, i) {
                for (var a in (this.computeSpotHours(i), this.computeSpotHours([t.primarySpot]), e)) {
                    var s = e[a],
                        o = Handlebars.compile(m8widgetTemplates[s + "_results.tpl.html"])({
                            spots: i,
                            lang: t.i18n[t.currentLocale],
                            primarySpot: t.primarySpot,
                            curAddress: r.currentAddress,
                            currentBrowser: t.currentBrowser,
                            fromGeoloc: !1,
                            fromSearch: !0,
                        });
                    (document.getElementById("m8-" + s + "Results").innerHTML = o), n.initAutocompleteInput();
                }
            },
            setGeobuttonText: function (e) {
                var t = document.getElementsByClassName("m8-geosubmit");
                Array.prototype.filter.call(t, function (t) {
                    t.innerHTML = "<span>" + e + "</span>";
                });
            },
            geolocate: function (e) {
                n.setGeobuttonText(t.i18n[t.currentLocale].searching), r.locateUser(e, n.updateResult, n.geolocateError);
            },
            geolocateAgain: function (e) {
                n.setGeobuttonText(t.i18n[t.currentLocale].searching), (r.forceLoc = !1), r.locateUser(e, n.updateResult, n.geolocateErrorAgain);
            },
            computePlaceSpots: function (e) {
                var i = r.nearestSpots(e, t.spots),
                    a = i.map(function (e) {
                        return e.name;
                    });
                t.primarySpot && a.push(t.primarySpot.name),
                    n.track({ eventName: "searchResults", spots: JSON.stringify(a) }),
                    n.computeSpotHours(i),
                    i.map(function (e) {
                        e.hasTravel = !1;
                    }),
                    t.primarySpot && ((t.primarySpot.hasTravel = !1), (t.primarySpot.lang = t.i18n[t.currentLocale])),
                    n.bindModule([ON_SPOT_MODE], i),
                    n.bindModule(
                        [TAKEAWAY_MODE],
                        i.filter(function (e) {
                            return void 0 !== e.orderurl || void 0 !== e.preview || void 0 !== e.fromthere || void 0 !== e.orderurl;
                        })
                    );
                var s = [ON_SPOT_MODE, TAKEAWAY_MODE];
                for (var o in s) {
                    var l = s[o],
                        c = Handlebars.compile(m8widgetTemplates[l + "_spot.tpl.html"]);
                    if (t.primarySpot) {
                        var p = c(t.primarySpot);
                        document.getElementById("m8-" + l + "-primary").innerHTML = p;
                    }
                }
            },
            searchPlace: function () {
                r.currentPosition = null;
                var e = this.getPlace();
                if (void 0 === e.geometry);
                else {
                    var t = { lat: e.geometry.location.lat(), lng: e.geometry.location.lng() };
                    n.track({ eventName: "autocompleteSearchPlace", lat: t.lat, lng: t.lng, address: e.formatted_address }),
                        (r.currentAddress = e.formatted_address),
                        n.computePlaceSpots(t),
                        (r.currentPosition = t),
                        void 0 !== e.types && (e.types.indexOf("establishment") > -1 || e.types.indexOf("premise") > -1 || e.types.indexOf("street_address") > -1) && (r.manualPosition = t);
                }
            },
            showAddressError: function () {
                n.hideAddressError();
                for (var e = document.querySelectorAll(".m8-paneopen .m8-badaddress"), t = 0; t < e.length; t++) e[t].className = e[t].className.replace(/m8-hide/, "");
            },
            hideAddressError: function () {
                for (var e = document.querySelectorAll(".m8-badaddress"), t = 0; t < e.length; t++) e[t].className.indexOf("m8-hide") < 0 && (e[t].className += " m8-hide");
            },
            hideAddressTip: function () {
                for (var e = document.querySelectorAll(".m8-address-tip"), t = 0; t < e.length; t++) e[t].className.indexOf("m8-hide") < 0 && (e[t].className += " m8-hide");
            },
            searchLocation: function () {
                (r.currentPosition = null), (document.getElementById("m8-deliveryLoading").className = "loader");
                var e = this.getPlace();
                if ((n.hideAddressTip(), void 0 === e.geometry)) n.showAddressError(), n.track({ eventName: "autocompleteSearchLocationFailed" }), (document.getElementById("m8-deliveryLoading").className = "");
                else {
                    var t = e.formatted_address;
                    e.types.indexOf("establishment") > -1 &&
                        e.address_components &&
                        (t = [
                            e.name || "",
                            (e.address_components[0] && e.address_components[0].short_name) || "",
                            (e.address_components[1] && e.address_components[1].short_name) || "",
                            (e.address_components[2] && e.address_components[2].short_name) || "",
                        ].join(", ")),
                        n.hideAddressError();
                    var i = { lat: e.geometry.location.lat(), lng: e.geometry.location.lng() };
                    (r.currentAddress = t), (r.currentPosition = i), n.track({ eventName: "autocompleteSearchLocation", lat: i.lat, lng: i.lng, address: t }), n.computeLocationSpots(i, t);
                }
            },
            computeLocationSpots: function (e, i) {
                document.getElementById("m8-deliveryLoading").className = "loader";
                var a = r.deliverySpots(e, t.spots);
                if ((n.computeSpotHours(a), t.franchise))
                    0 === a.length && (a = [{}]),
                        n.completeDeliveryResult(e, a, function () {
                            n.prepareDeliveryResult(i, a);
                        });
                else {
                    var s = a[0];
                    void 0 === s && (s = {}),
                        n.completeDeliveryResult(e, [s], function () {
                            n.prepareDeliveryResult(i, [s]);
                        });
                }
            },
            completeDeliveryResult: function (e, i, a) {
                if (t.restoin) {
                    var r = new XMLHttpRequest(),
                        s = t.reviewsPath.replace(/reviews\.json/, "query.json") + "?lat=" + e.lat + "&lng=" + e.lng;
                    r.open("GET", s, !0),
                        (r.timeout = 4e3),
                        (r.onreadystatechange = function () {
                            if (4 === r.readyState) {
                                var e = JSON.parse(r.response);
                                e.partners && e.partners.restoin && ((i[0].restoin = e.partners.restoin), e.partners.restoin.freedelivery && (i[0].restoin.class = "free-" + t.currentLocale)), a();
                            }
                        }),
                        (r.onerror = function (t) {
                            n.track({ eventName: "restoinError", lat: e.lat, lng: e.lng }), a();
                        }),
                        (r.ontimeout = function (t) {
                            n.track({ eventName: "restoinTimeout", lat: e.lat, lng: e.lng }), a();
                        }),
                        r.send(null);
                } else a();
            },
            prepareDeliveryResult: function (e, t) {
                myli_push.getSessionId().then(function (i) {
                    var a = n.preparePartners(t, i, e);
                    n.track({ eventName: "deliveryResults", partners: JSON.stringify(a) }),
                        n.displayDeliveryResult(
                            e,
                            t.filter(function (e) {
                                return e.partners.length;
                            })
                        );
                });
            },
            preparePartners: function (e, i, a) {
                var r = [];
                return (
                    e.forEach(function (e) {
                        var s = ["ubereats", "foodora", "deliveroo", "justeat", "foostix", "wedely"];
                        if (((s = n.shuffle(s)), (e.partners = []), !e.closed_temp)) {
                            s.unshift("instore", "restoin");
                            for (var o = 0; o < s.length; o++)
                                if (void 0 !== e[s[o]]) {
                                    var l = "?",
                                        c = t.trackerId[0].toUpperCase() + t.trackerId.slice(1);
                                    (e[s[o]].url.indexOf("?") > -1 || e[s[o]].url.indexOf("#") > -1) && (l = "&"),
                                        e[s[o]].url.indexOf("order.ubereats.com") > 1
                                            ? (e[s[o]].class = "ubereatsorder")
                                            : e[s[o]].url.indexOf("www.order.store") > 1
                                            ? (e[s[o]].class = "ubereatsorder")
                                            : e[s[o]].url.indexOf("order.zelty.fr") > 1
                                            ? (e[s[o]].url += l + c + (void 0 !== i ? "Uuid=" + i : "") + (void 0 !== a ? "&address=" + encodeURI(a) : ""))
                                            : (e[s[o]].url += l + c + (void 0 !== i ? "Uuid=" + i : "") + (void 0 !== a ? "&" + t.trackerId.toLowerCase() + "Address=" + encodeURI(a) : ""));
                                    var p = { store: e.name, name: s[o], url: e[s[o]].url, enabled: e[s[o]].enabled, class: e[s[o]].class };
                                    r.push(p), e.partners.push(p);
                                }
                        }
                    }),
                    r
                );
            },
            displayDeliveryResult: function (e, n) {
                var i = Handlebars.compile(m8widgetTemplates["delivery_results.tpl.html"])({ formattedAddress: e, spots: n, lang: t.i18n[t.currentLocale] });
                (document.getElementById("m8-deliveryLoading").className = ""), (document.getElementById("m8-deliveryResults").innerHTML = i);
            },
            searchModal: function () {
                r.currentPosition = null;
                var e = this.getPlace();
                e.types.indexOf("establishment") < 0 && e.types.indexOf("premise") < 0 && e.types.indexOf("street_address") < 0
                    ? i.showAddressError()
                    : (i.hideAddressError(),
                      (r.currentPosition = { lat: e.geometry.location.lat(), lng: e.geometry.location.lng() }),
                      n.track({ eventName: "autocompleteSearchModal", lat: e.geometry.location.lat(), lng: e.geometry.location.lng(), address: e.formatted_address }));
            },
            updateResult: function (e) {
                if (DELIVERY_MODE !== e) {
                    n.setGeobuttonText(t.i18n[t.currentLocale].onspot_nearyou), n.trackGeolocSuccess(e);
                    var i = (o = Handlebars.compile(m8widgetTemplates[e + "_results.tpl.html"]))({ formattedAddress: r.currentAddress, lang: t.i18n[t.currentLocale] }),
                        a = r.nearestSpots(r.currentPosition, t.spots);
                    i = o({ formattedAddress: r.currentAddress, spots: a, primarySpot: t.primarySpot, lang: t.i18n[t.currentLocale] });
                    n.computeSpotHours(a), n.computeSpotHours([t.primarySpot]);
                    i = o({ formattedAddress: r.currentAddress, spots: a, primarySpot: t.primarySpot, lang: t.i18n[t.currentLocale], fromGeoloc: !0 });
                    document.getElementById("m8-" + e + "Results").innerHTML = i;
                    var s = a.map(function (e) {
                        return e.name;
                    });
                    if ((t.primarySpot && s.push(t.primarySpot.name), n.track({ eventName: e + "Results", spots: JSON.stringify(s) }), t.primarySpot)) {
                        var o = Handlebars.compile(m8widgetTemplates["onspot_spot.tpl.html"]);
                        t.primarySpot.lang = t.i18n[t.currentLocale];
                        i = o(t.primarySpot);
                        document.getElementById("m8-onspot-primary").innerHTML = i;
                        var l = [ON_SPOT_MODE, TAKEAWAY_MODE];
                        for (var c in l) {
                            var p = l[c];
                            o = Handlebars.compile(m8widgetTemplates[p + "_spot.tpl.html"]);
                            (t.primarySpot.lang = t.i18n[t.currentLocale]), n.computeSpotHours([t.primarySpot]);
                            i = o(t.primarySpot);
                            document.getElementById("m8-" + p + "-primary").innerHTML = i;
                        }
                    }
                } else n.computeLocationSpots(r.currentPosition, "");
            },
            track: function (e) {
                (e.pluginVersion = 1), myli_push.track("trackEvent", e);
            },
            trackGeolocSuccess: function (e) {
                var t = r.locateTrackData({ eventName: "geolocSuccess", eventStep: e });
                n.track(t);
            },
            trackGeolocError: function (e) {
                n.track({ eventName: "geolocFailure", eventStep: e, reason: r.currentError });
            },
            geolocateError: function (e) {
                n.setGeobuttonText(t.i18n[t.currentLocale].onspot_nearyou), n.trackGeolocError(e), n.displayPrimary(e);
            },
            geolocateErrorAgain: function (e) {
                if ((n.setGeobuttonText(r.currentError), n.trackGeolocError(e), null === t.primarySpot)) {
                    var i = document.getElementsByClassName("m8-geoerror");
                    Array.prototype.filter.call(i, function (e) {
                        (e.innerHTML = r.currentError),
                            (e.style.display = "block"),
                            setTimeout(function () {
                                e.style.display = "none";
                            }, 2e3);
                    });
                } else {
                    var a = document.getElementById("m8-" + e + "Search");
                    (a.className = a.className.replace(/m8-hide/, "")), n.initAutocompleteInput();
                }
            },
            loadScript: function (e, t) {
                var n = document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                (i.type = "text/javascript"), (i.src = e), (i.defer = !0), (i.onreadystatechange = t), (i.onload = t), n.appendChild(i);
            },
            hourExpand: function (e) {
                (e.className = "m8-hide"), (e.nextElementSibling.className = ""), n.track({ eventName: "showOpenings", eventStore: e.dataset.store });
            },
            hourCollapse: function (e) {
                (e.previousElementSibling.className = ""), (e.className = "m8-hide"), n.track({ eventName: "hideOpenings", eventStore: e.dataset.store });
            },
            computeSpotHours: function (e) {
                e.forEach(function (e) {
                    null !== e && void 0 !== e.openings && void 0 !== e.openingsDeliv && 0 === e.openingsDeliv.length && (e.openingsDeliv = e.openings),
                        null !== e && void 0 !== e.openings && void 0 !== e.openingsAway && 0 === e.openingsAway.length && (e.openingsAway = e.openings),
                        ["openings", "openingsDeliv", "openingsAway"].forEach(function (t) {
                            n.singleSpotHours(e, t);
                        });
                });
            },
            spotNextDays: function (e) {
                var t = new Date(),
                    n = [],
                    i = [];
                if (void 0 !== e.specialOpenings) {
                    for (next = 0; next < 7; next++)
                        n.push(
                            new Date(
                                t.toLocaleString("fr-FR", { year: "numeric", timeZone: "Europe/Paris" }),
                                t.toLocaleString("fr-FR", { month: "numeric", timeZone: "Europe/Paris" }) - 1,
                                t.toLocaleString("fr-FR", { day: "numeric", timeZone: "Europe/Paris" })
                            )
                        ),
                            t.setDate(t.getDate() + 1),
                            i.push(void 0);
                    e.specialOpenings.forEach(function (e, t) {
                        n.forEach(function (t, n) {
                            t >= new Date(e.startDate.year, e.startDate.month - 1, e.startDate.day) &&
                                t <= new Date(e.endDate.year, e.endDate.month - 1, e.endDate.day) &&
                                (void 0 === i[n] && (i[n] = []), e.isClosed || i[n].push({ from: e.openTime, to: e.closeTime }));
                        });
                    });
                }
                return i;
            },
            singleSpotHours: function (e, i) {
                var a = new Date(),
                    r = a.getDay(),
                    s = function (e, t) {
                        var n = new Date(2e3, 1, 1, e.substr(0, 2), e.substr(2, 2)),
                            i = new Date(2e3, 1, 1, t.substr(0, 2), t.substr(2, 2));
                        return i - n < 0 && i.setDate(i.getDate() + 1), (i - n) / 1e3 / 60;
                    },
                    o = [],
                    l = t.i18n[t.currentLocale].dayList;
                if (null !== e && void 0 !== e[i] && e[i].length > 0) {
                    e[i].forEach(function (e, t) {
                        o.push({ day: l[t], hours: e });
                    });
                    for (var c = 0; c < r; ) o.push(o.shift()), c++;
                    var p = n.spotNextDays(e);
                    (o = o.map(function (e, t) {
                        return p.length && void 0 !== p[t] ? { day: e.day, hours: p[t], original: e.hours } : e;
                    })),
                        (e[i + "Comp"] = { hours: o });
                    for (var d = a.toLocaleString("fr-FR", { hour: "numeric", minute: "numeric", timeZone: e.timezone }).match(/\d+/g).join(""), u = "closed", h = 0; h < o[0].hours.length; h++) {
                        var m = o[0].hours[h];
                        if (parseInt(m.from.replace(/:/, "")) <= parseInt(d) && (parseInt(m.to.replace(/:/, "")) >= parseInt(d) || parseInt(m.from.replace(/:/, "")) > parseInt(m.to.replace(/:/, "")))) {
                            u = "open";
                            var f = { status: "closed", at: m.to };
                            s(d, m.to.replace(/:/, "")) < 40 && (f.status = "closesoon");
                        }
                        if ("closed" == u && void 0 === f && parseInt(m.from.replace(/:/, "")) > parseInt(d)) {
                            f = { status: "open", at: m.from };
                            s(d, m.from.replace(/:/, "")) < 40 && (f.status = "opensoon");
                        }
                    }
                    if ("closed" == u) {
                        for (var g = 1; void 0 === f && g < o.length; ) {
                            if (void 0 !== o[g].hours[0]) f = { status: "open", at: o[g].hours[0].from, day: o[g].day };
                            g++;
                        }
                        if (void 0 === f && void 0 !== o[0].hours[0]) f = { status: "open", at: o[0].hours[0].from, day: o[0].day, next: !0 };
                    }
                    (e[i + "Comp"].currentStatus = u), (e[i + "Comp"].nextStatus = f);
                }
            },
            loadStylesheet: function (e, t, n, i) {
                var a = document.getElementsByTagName("head")[0],
                    r = document.createElement("link");
                (r.rel = "stylesheet"), (r.href = e), n && (r.crossorigin = n), t && (r.integrity = t), a.appendChild(r), "function" == typeof i && i();
            },
            renderCtas: function () {
                var e,
                    i = JSON.parse(JSON.stringify(t));
                if (((i.lang = t.i18n[t.currentLocale]), void 0 !== i.ctas && 0 != i.ctas.length)) {
                    var a = document.getElementById("m8engine");
                    n.loadStylesheet(t.cssPath + "?t=2&v=1");
                    var r = ["ctas", "ctas_container"];
                    for (var s in r) {
                        var o = r[s];
                        void 0 !== m8widgetTemplates[o + ".tpl.html"] && ((e = Handlebars.compile(m8widgetTemplates[o + ".tpl.html"])), (document.body.className += " m8" + o), a.insertAdjacentHTML("beforeend", e(i)));
                    }
                    for (var l = document.querySelectorAll("#m8-ctas a.contact"), c = 0; c < l.length; c++) n.specialCta.contact(l[c]);
                    var p = document.querySelectorAll("#m8-ctas a.clickcollect");
                    for (c = 0; c < p.length; c++) n.specialCta.clickcollect(p[c]);
                }
            },
            renderTemplates: function () {
                var e,
                    i = JSON.parse(JSON.stringify(t));
                (i.lang = t.i18n[t.currentLocale]), n.computeSpotHours([i.primarySpot]);
                var a = document.getElementById("m8engine"),
                    r = [ON_SPOT_MODE, TAKEAWAY_MODE, DELIVERY_MODE];
                for (var s in r) {
                    var o = r[s];
                    void 0 !== m8widgetTemplates[o + ".tpl.html"] &&
                        ((e = Handlebars.compile(m8widgetTemplates[o + ".tpl.html"])),
                        document.getElementById("m8-" + o) && (document.getElementById("m8-" + o).innerHTML = e(i)),
                        DELIVERY_MODE !== o && document.getElementById("m8-" + o) && document.getElementById("m8-" + o).className.indexOf("m8-paneopen") > -1 && n.firstSearch(o));
                }
                if (i.openings && i.primarySpot && i.primarySpot.openings.length && ((i.openings.mobile && void 0 !== t.currentBrowser) || (i.openings.desktop && void 0 === t.currentBrowser))) {
                    e = Handlebars.compile(m8widgetTemplates["openings.tpl.html"]);
                    var l = i.primarySpot;
                    (l.lang = i.lang), (l.mainHour = "mobile"), i.openings.desktop && void 0 === t.currentBrowser && (l.mainHour = "desktop"), (document.body.className += " m8-widget-hours"), a.insertAdjacentHTML("beforeend", e(l));
                }
                i.ctas.length > 0 && ((e = Handlebars.compile(m8widgetTemplates["modal.tpl.html"])), a.insertAdjacentHTML("beforeend", e(i)), n.initAutocompleteInput(), n.listenTriggers()), (n.localData.paneLoaded = !0);
            },
            registerPartials: function () {
                var e = Handlebars.compile(m8widgetTemplates["review.tpl.html"]);
                Handlebars.registerPartial("review", e);
                var t = Handlebars.compile(m8widgetTemplates["primary_takeaway_spot.tpl.html"]);
                Handlebars.registerPartial("primaryTakeawaySpot", t);
                var n = Handlebars.compile(m8widgetTemplates["takeaway_spot.tpl.html"]);
                Handlebars.registerPartial("takeawaySpot", n);
                var i = Handlebars.compile(m8widgetTemplates["onspot_spot.tpl.html"]);
                Handlebars.registerPartial("onspotSpot", i);
                var a = Handlebars.compile(m8widgetTemplates["hour_status.tpl.html"]);
                Handlebars.registerPartial("hourStatus", a);
                var r = Handlebars.compile(m8widgetTemplates["hour_module.tpl.html"]);
                Handlebars.registerPartial("hourModule", r);
                var s = Handlebars.compile(m8widgetTemplates["driving_times.tpl.html"]);
                Handlebars.registerPartial("drivingTimes", s);
            },
            registerHelpers: function () {
                Handlebars.registerHelper("equal", function (e, t, n) {
                    if (arguments.length < 3) throw new Error("Handlebars Helper equal needs 2 parameters");
                    return e != t ? n.inverse(this) : n.fn(this);
                }),
                    Handlebars.registerHelper("isdefined", function (e) {
                        return void 0 !== e;
                    }),
                    Handlebars.registerHelper("sup", function (e, t, n) {
                        if (arguments.length < 3) throw new Error("Handlebars Helper equal needs 2 parameters");
                        return e > t ? n.fn(this) : n.inverse(this);
                    }),
                    Handlebars.registerHelper("array", function (e, t, n) {
                        if (arguments.length < 3) throw new Error("Handlebars Helper equal needs 2 parameters");
                        return e[t];
                    }),
                    Handlebars.registerHelper("lookup", function (e, t, n, i) {
                        if (arguments.length < 4) throw new Error("Handlebars Helper equal needs 3 parameters");
                        return !0 === e[t][n] ? i.fn(this) : i.inverse(this);
                    }),
                    Handlebars.registerHelper("sprint", function (e, t) {
                        return Handlebars.compile(e)({ value: t });
                    }),
                    Handlebars.registerHelper("encodeMyString", function (e) {
                        return new Handlebars.SafeString(Handlebars.escapeExpression(e));
                    }),
                    Handlebars.registerHelper("dateAgo", function (e) {
                        if (void 0 !== e) {
                            e = new Date(e.substr(0, 19));
                            var n,
                                i,
                                a,
                                r,
                                s = t.i18n[t.currentLocale].dateAgo,
                                o = Handlebars.compile(s),
                                l = Math.floor((new Date() - e) / 1e3),
                                c = Math.floor(l / 86400);
                            if (c >= 7) {
                                if ((c = Math.floor(l / 604800)) <= 4) return o({ interval: c, week: c });
                                if (c > 4)
                                    return (
                                        (n = e),
                                        (i = t.i18n[t.currentLocale].monthList),
                                        (a = t.i18n[t.currentLocale].dateFormat),
                                        (r = { day: n.getDate(), daysuffix: "", month: n.getMonth(), year: n.getFullYear() }).day < 4
                                            ? (r.daysuffix = t.i18n[t.currentLocale].daySuffix[r.day])
                                            : (r.daysuffix = t.i18n[t.currentLocale].daySuffix[0]),
                                        (r.month = i[r.month]),
                                        Handlebars.compile(a)(r)
                                    );
                            }
                            return c <= 7 && c >= 1 ? o({ interval: c, day: c }) : (c = Math.floor(l / 3600)) >= 1 ? o({ interval: c, hour: c }) : o((c = Math.floor(l / 60)) >= 1 ? { interval: c, minute: c } : { interval: c, week: c });
                        }
                    });
            },
            shuffle: function (e) {
                var t,
                    n,
                    i = e.length;
                if (0 == i) return e;
                for (; --i; ) (t = Math.floor(Math.random() * (i + 1))), (n = e[i]), (e[i] = e[t]), (e[t] = n);
                return e;
            },
            addUrlParam: function (e, t, n) {
                var i = "?";
                return e.indexOf("?") > -1 && (i = "&"), (e += i + t + "=" + n);
            },
            shouldChangeLabel: function (e) {
                t.ctas[e].type == TAKEAWAY_MODE &&
                    t.spots.forEach(function (n) {
                        for (var i = !1, a = 0; a < t.ctas.length; a++) {
                            if ("clickcollect" === t.ctas[a].type)
                                Object.keys(t.ctas[a].ccCollection).forEach(function (e) {
                                    !i && window.location.href.indexOf(e) > -1 && (i = !0);
                                });
                        }
                        !i && window.location.href.indexOf(n.url) > -1 && n.orderurl && "closed" !== n.orderurl && (t.ctas[e].full_title_locale = t.ctas[e].title_locale = "Click&Collect");
                    });
            },
            localizeData: function () {
                var e = navigator.language || navigator.userLanguage,
                    n = Object.keys(t.i18n);
                if (
                    (n.forEach(function (t) {
                        (window.location.search.indexOf("lang=" + t) > -1 || t === e) && (e = t);
                    }),
                    n.indexOf(e.substr(0, 2)) > -1 ? (t.currentLocale = e.substr(0, 2)) : (t.currentLocale = n[0]),
                    void 0 !== t.ctas)
                )
                    for (var i in t.ctas)
                        void 0 !== t.ctas[i].title && (t.ctas[i].title_locale = t.ctas[i].title[t.currentLocale]),
                            void 0 !== t.ctas[i].full_title && (t.ctas[i].full_title_locale = t.ctas[i].full_title[t.currentLocale]),
                            this.shouldChangeLabel(i);
                t.spots.forEach(function (e) {
                    void 0 !== e.orderphone && (e.orderphone = r.localizePhone(e.orderphone));
                });
            },
            showSubscribe: function (e) {
                e.innerHTML = "<div><div>" + t.i18n[t.currentLocale].takeaway_soonavailable + "</div></div>";
                for (var i = document.querySelectorAll("a.m8-subscribe"), a = 0; a < i.length; a++) (i[a].nextElementSibling.style.display = "none"), (i[a].className = i[a].className.replace(/ active/, ""));
                (e.nextElementSibling.style.display = "block"), (e.className += " active"), n.track({ eventName: "openSubscribeForm", eventStore: e.dataset.store });
            },
            getready: function (e) {
                var i = e.previousElementSibling;
                (i.style.color = "initial"),
                    i.checkValidity()
                        ? (n.track({ eventName: "subscribeOpening", eventStore: e.dataset.store, email: i.value }),
                          (e.disabled = "disabled"),
                          (e.style.minWidth = "100%"),
                          (e.innerHTML = t.i18n[t.currentLocale].takeaway_mailsaved),
                          (i.disabled = "disabled"))
                        : (i.style.color = "#e0022b");
            },
            specialCta: {
                contact: function (e) {
                    for (var n = 0; n < t.ctas.length; n++)
                        if ("contact" === t.ctas[n].type) {
                            e.href = "tel:" + r.localizePhone(t.ctas[n].phoneNumbers.default);
                            var i = Object.keys(t.ctas[n].phoneNumbers);
                            i.sort(function (e, t) {
                                return e.length < t.length;
                            });
                            var a = !1;
                            i.forEach(function (i) {
                                !a && window.location.href.indexOf(i) > -1 && ((e.href = "tel:" + r.localizePhone(t.ctas[n].phoneNumbers[i])), (a = !0));
                            }),
                                a || e.remove();
                        }
                },
                clickcollect: function (e) {
                    for (var n = 0; n < t.ctas.length; n++)
                        if ("clickcollect" === t.ctas[n].type) {
                            var i = !1;
                            Object.keys(t.ctas[n].ccCollection).forEach(function (a) {
                                !i && window.location.href.indexOf(a) > -1 && ((e.href = t.ctas[n].ccCollection[a]), (i = !0));
                            }),
                                i || e.remove();
                        }
                },
            },
            listenTriggers: function () {
                for (var e = ["openingHours", ON_SPOT_MODE, DELIVERY_MODE, TAKEAWAY_MODE], i = 0; i < e.length; i++) {
                    var a = document.getElementsByClassName(e[i]),
                        r = e[i];
                    a.length;
                    for (var s = 0; s < a.length; s++)
                        a[s].onclick ||
                            ((a[s].dataset.trigger = r),
                            (a[s].onclick = function () {
                                var e = this.dataset.trigger;
                                "openingHours" === this.dataset.trigger && (this.dataset.trigger = ON_SPOT_MODE);
                                var t = document.querySelectorAll("#m8-ctas a." + this.dataset.trigger);
                                n.togglePane(null, t[0], this.dataset.trigger, e);
                            }));
                }
                var o = document.querySelectorAll(".geolocateme a");
                for (s = 0; s < o.length; s++)
                    o[s].onclick = function (e) {
                        return (
                            n.track({ eventName: "askDirections" }),
                            (this.dataset.href = this.href),
                            (this.dataset.store = "unknown"),
                            (this.dataset.storeid = 0),
                            t.primarySpot && ((this.dataset.store = t.primarySpot.name), (this.dataset.storeid = "primary")),
                            n.goDirection(this, "webpage", e),
                            !1
                        );
                    };
                document.querySelectorAll("a").forEach(function (e) {
                    void 0 !== e.getAttribute("href") &&
                        e.addEventListener("click", function () {
                            this.getAttribute("href").indexOf(window.location.hostname) < 0 &&
                            this.getAttribute("href").indexOf("google.com") < 0 &&
                            "/" !== this.getAttribute("href").substr(0, 1) &&
                            "#" !== this.getAttribute("href").substr(0, 1)
                                ? n.track({ eventName: "clickExternal", target: this.getAttribute("href") })
                                : (this.getAttribute("href").indexOf("/careers") > -1 || this.getAttribute("href").indexOf("/carrieres") > -1) && n.track({ eventName: "clickCareers", target: this.getAttribute("href") });
                        });
                });
            },
            togglePane: function (e, i, a, s) {
                if ((void 0 === s && (s = a), void 0 === n.specialCta[a])) var o = document.getElementById("m8-" + a).className.indexOf("m8-paneopen") > -1;
                if (
                    (document.getElementById("m8-ctas-container").childNodes[1].childNodes.forEach(function (e, t) {
                        "DIV" === e.nodeName && (e.className = "");
                    }),
                    document.getElementById("m8-ctas").childNodes[1].childNodes.forEach(function (e, t) {
                        "A" === e.nodeName && (e.className = e.className.replace(/ active/, ""));
                    }),
                    n.specialCta[a])
                )
                    return (
                        n.track({ eventName: "clickCta", step: s }),
                        void 0 === t.currentBrowser && "contact" === a
                            ? (e && e.preventDefault(), (i.querySelectorAll("span.full_title")[0].innerHTML = i.href.replace("tel:", "")), !1)
                            : ("clickcollect" === a &&
                                  (e && e.preventDefault(),
                                  r.locateUser(
                                      a,
                                      function (e) {
                                          n.trackGeolocSuccess(e), (window.location = i.href);
                                      },
                                      function () {
                                          window.location = i.href;
                                      }
                                  )),
                              !0)
                    );
                if (t.primarySpot && t.primarySpot.deliveryurl && DELIVERY_MODE === a)
                    return (
                        n.track({ eventName: "directDelivery" }),
                        void r.locateUser(
                            a,
                            function (e) {
                                n.trackGeolocSuccess(e), n.directDelivery();
                            },
                            function () {
                                n.directDelivery();
                            }
                        )
                    );
                ((document.body.className = document.body.className.replace(/m8-fullctas/g, "")), o)
                    ? (document.getElementById("m8-ctas-container").className = "")
                    : ((document.getElementById("m8-" + a).className = "m8-paneopen"),
                      (document.getElementById("m8-ctas-container").className = "m8-paneopen"),
                      (i.className += " active"),
                      (document.body.className += " m8-fullctas"),
                      n.track({ eventName: "clickCta", step: s }),
                      this.localData.paneLoaded && n.firstSearch(a),
                      null !== r.currentAddress && (document.querySelectorAll("#m8-" + a + " .m8-autocomplete")[0].value = r.currentAddress));
            },
            firstSearch: function (e) {
                null !== r.currentPosition
                    ? ([ON_SPOT_MODE, TAKEAWAY_MODE].indexOf(e) > -1 && n.computePlaceSpots(r.currentPosition), [DELIVERY_MODE].indexOf(e) > -1 && n.computeLocationSpots(r.currentPosition, ""))
                    : null === r.currentAddress && null === r.currentPosition && n.geolocate(e);
            },
            directDelivery: function () {
                return (
                    n.track({ eventName: "directDelivery", store: t.primarySpot.name, target: t.primarySpot.deliveryurl }),
                    setTimeout(function () {
                        window.location = t.primarySpot.deliveryurl;
                    }, 400),
                    !0
                );
            },
            autoToggle: function (e) {
                (document.getElementById("m8-" + step).className = "m8-paneopen"),
                    (document.getElementById("m8-ctas-container").className = "m8-paneopen"),
                    (document.querySelectorAll("#m8-ctas a." + e)[0].className += " active"),
                    (document.body.className += " m8-fullctas"),
                    [ON_SPOT_MODE, TAKEAWAY_MODE].indexOf(step) > -1 && n.geolocate(step);
            },
            displayPrimary: function (e) {
                if (t.primarySpot) {
                    var i = Handlebars.compile(m8widgetTemplates[e + "_results.tpl.html"]);
                    n.computeSpotHours([t.primarySpot]);
                    var a = i({ primarySpot: t.primarySpot, lang: t.i18n[t.currentLocale], currentBrowser: t.currentBrowser });
                    document.getElementById("m8-" + e + "Results").innerHTML = a;
                } else null === r.currentPosition && (document.getElementById("m8-" + e + "Results").innerHTML = "");
            },
            shouldExit: function (e) {
                ((e.parentElement && "m8-ctas-container" == e.parentElement.id) || "m8-ctas-container" == e.id) &&
                    document.getElementById("m8-ctas") &&
                    (document.getElementById("m8-ctas-container").childNodes[1].childNodes.forEach(function (e, t) {
                        "DIV" === e.nodeName && (e.className = "");
                    }),
                    document.getElementById("m8-ctas").childNodes[1].childNodes.forEach(function (e, t) {
                        "A" === e.nodeName && (e.className = e.className.replace(/ active/, ""));
                    }),
                    (document.getElementById("m8-ctas-container").className = ""));
            },
            closeReviewsTiles: function () {
                (document.getElementById("m8-widgetTiles").className = "m8-small"),
                    (document.body.className = document.body.className.replace(/m8-fullwidget-tiles/, "")),
                    myli_push._.globalStorage.setLocal("m8widgetStatus", "small"),
                    (n.activeSlide = !1),
                    n.track({ eventName: "reduceReviewsTiles" });
            },
            restoreReviewsTiles: function () {
                (document.getElementById("m8-widgetTiles").className = ""), myli_push._.globalStorage.setLocal("m8widgetStatus", "normal"), (n.activeSlide = !0), n.track({ eventName: "restoreReviewsTiles" });
            },
            toggleReviewsTiles: function () {
                this.shouldExit({ id: "m8-ctas-container" }),
                    "m8-full" == document.getElementById("m8-widgetTiles").className
                        ? ((document.getElementById("m8-widgetTiles").className = ""),
                          (document.getElementById("m8-widgetTiles").scrollTop = 0),
                          (document.body.className = document.body.className.replace(/m8-fullwidget-tiles/, "")),
                          (n.activeSlide = !0),
                          n.track({ eventName: "closeReviewsTiles" }))
                        : ((document.getElementById("m8-widgetTiles").className = "m8-full"),
                          (document.body.className += " m8-fullwidget-tiles"),
                          (n.activeSlide = !1),
                          n.track({ eventName: "openReviewsTiles", reviewId: t.reviews[this.currentTile].idHash }));
            },
            currentTile: 0,
            initAutoslide: function () {
                n.activeSlide = !0;
                var e = this;
                e.currentTile = 0;
                var i = document.querySelectorAll("#m8-widgetTiles >div>div").length,
                    a = 2500;
                t.reviewsInterval && (a = t.reviewsInterval),
                    null !== t.reviewsOptions && (a = parseInt(t.reviewsOptions.toaster.slideInterval)),
                    i > 1 &&
                        void 0 === e.autoslideInterval &&
                        (e.autoslideInterval = setInterval(function () {
                            n.activeSlide &&
                                (e.currentTile++,
                                e.currentTile == i && (e.currentTile = 0),
                                (document.querySelectorAll("#m8-widgetTiles >div")[1].style.marginTop = -e.currentTile * document.getElementById("m8-widgetTiles").offsetHeight + "px"));
                        }, a));
            },
            toggleAutoslide: function (e) {
                n.activeSlide = e;
            },
            loadJson: function (e, t) {
                var n = new XMLHttpRequest();
                n.overrideMimeType("application/json"),
                    n.open("GET", e, !0),
                    (n.onreadystatechange = function () {
                        4 == n.readyState && "200" == n.status && t(n.responseText);
                    }),
                    n.send(null);
            },
            goDirection: function (e, s, o, l) {
                o.preventDefault();
                var c = e.dataset.storeid,
                    p = e.dataset.href;
                JSON.parse(JSON.stringify(t)).spots.forEach(function (e) {
                    (e._index === parseInt(c) || (e.isPrimary && "primary" === c)) && e;
                }),
                    r.currentPosition
                        ? ((p += "&origin=" + r.currentPosition.lat + "," + r.currentPosition.lng), ["android", "ios"].indexOf(t.currentOs) > -1 ? i.openModalDirections(c, p, s, l) : a.openDirections(s, e.dataset.store, p))
                        : r.locateUser(
                              s,
                              function (s) {
                                  n.trackGeolocSuccess(s),
                                      (p += "&origin=" + r.currentPosition.lat + "," + r.currentPosition.lng),
                                      ["android", "ios"].indexOf(t.currentOs) > -1 ? i.openModalDirections(c, p, s, l) : a.openDirections(s, e.dataset.store, p, l);
                              },
                              function (n) {
                                  ["android", "ios"].indexOf(t.currentOs) > -1 ? i.openModalDirections(c, p, n, l) : a.openDirections(n, e.dataset.store, p);
                              }
                          );
            },
        },
        i = {
            data: {},
            openModal: function () {
                document.getElementById("m8-modal").className = "m8-open";
            },
            closeModal: function () {
                return n.track({ eventName: "closeModal" }), (document.getElementById("m8-modal").className = ""), !1;
            },
            showAddressError: function () {
                i.hideAddressError();
                for (var e = document.querySelectorAll("#m8-modal .m8-badaddress"), t = 0; t < e.length; t++) e[t].className = e[t].className.replace(/m8-hide/, "");
            },
            hideAddressError: function () {
                for (var e = document.querySelectorAll("#m8-modal .m8-badaddress"), t = 0; t < e.length; t++) e[t].className.indexOf("m8-hide") < 0 && (e[t].className += " m8-hide");
            },
            shouldExit: function (e) {
                ("m8-modal-mosaic" != e.parentElement.id && "m8-modal-mosaic" != e.id) || i.closeModalMosaic(), ("m8-modal-directions" != e.parentElement.id && "m8-modal-directions" != e.id) || i.closeModalDirections();
            },
            closeModalMosaic: function () {
                document.getElementById("m8-modal-mosaic").remove(), n.track({ eventName: "closeModalReview" });
            },
            openModalMosaic: function (e) {
                var i = JSON.parse(JSON.stringify(t));
                i.reviews[e].lang = i.i18n[i.currentLocale];
                var a = document.getElementById("m8engine"),
                    r = Handlebars.compile(m8widgetTemplates["modal-mosaic.tpl.html"]);
                a.insertAdjacentHTML("beforeend", r(i.reviews[e])), n.track({ eventName: "openModalReview", reviewId: i.reviews[e].idHash });
            },
            openModalDirections: function (e, i, r, s) {
                var o = JSON.parse(JSON.stringify(t));
                o.spots.forEach(function (l) {
                    if (l._index === parseInt(e) || (l.isPrimary && "primary" === e)) {
                        var c = document.getElementById("m8engine"),
                            p = Handlebars.compile(m8widgetTemplates["modal-directions.tpl.html"]),
                            d = [];
                        d.push({ name: "Google Maps", cname: "googlemaps", url: i }),
                            "ios" == t.currentOs &&
                                (void 0 !== l.maps.plans
                                    ? d.push({ name: "Apple Maps", cname: "plans", url: "https://maps.apple.com/?auid=" + l.maps.plans })
                                    : d.push({ name: "Apple Maps", cname: "plans", url: "https://maps.apple.com/?daddr=" + l.lat + "," + l.lng + (void 0 !== s ? "&dirflg=" + s.substr(0, 1) : "") })),
                            (void 0 !== s && "driving" != s) ||
                                (void 0 !== l.maps.waze
                                    ? d.push({ name: "Waze", cname: "waze", url: "https://waze.com/ul?preview_venue_id=" + l.maps.waze + "&navigate=yes" })
                                    : d.push({ name: "Waze", cname: "waze", url: "https://waze.com/ul?q=Pitaya%20Marseille&ll=" + l.lat + "," + l.lng + "&navigate=yes" })),
                            d.push({}),
                            ["chrome", "firefox", "safari"].indexOf(t.currentBrowser) > -1 && d.push({ name: t.currentBrowser.charAt(0).toUpperCase() + t.currentBrowser.slice(1), cname: t.currentBrowser, url: i }),
                            d.length > 1
                                ? (c.insertAdjacentHTML("afterend", p({ step: r, mode: s, apps: d, lang: o.i18n[o.currentLocale] })), n.track({ eventName: "openModalDirections", eventStep: r, apps: JSON.stringify(d) }))
                                : a.goSingleApp(i, r, "Google Maps", s);
                    }
                });
            },
            closeModalDirections: function () {
                n.track({ eventName: "closeModalDirections" }), document.getElementById("m8-modal-directions").remove();
            },
        },
        a = {
            goWebsite: function (e, t) {
                var i = e.dataset.href;
                n.track({ eventName: "openWebstore", eventStore: e.dataset.store, target: i }),
                    setTimeout(function () {
                        window.open(i);
                    }, 400);
            },
            goPlatform: function (e, t) {
                var i = e.dataset.href;
                n.track({ eventName: "openPlatform", eventStore: e.dataset.store, platformName: e.alt, target: i }),
                    setTimeout(function () {
                        window.open(i);
                    }, 400);
            },
            goOrder: function (e, t) {
                var i = e.dataset.href;
                n.track({ eventName: "openOrder", eventStore: e.dataset.store, target: i }),
                    setTimeout(function () {
                        window.open(i);
                    }, 400);
            },
            goCall: function (e, t) {
                n.track({ eventName: "clickCall", phoneType: e.dataset.type, target: e.href }), e.dataset.href && (e.innerHTML = "<div><div>" + e.dataset.href + "</div></div>");
            },
            goSingleApp: function (e, t, i, a) {
                var r = { eventName: "goApp", eventStep: t, eventApp: i, target: e };
                "" !== a && (r.moving = a), n.track(r);
            },
            goApp: function (e, t) {
                this.goSingleApp(e.href, e.dataset.step, e.dataset.name, e.dataset.mode);
            },
            openDirections: function (e, i, a, r) {
                var s = { eventName: "goDirections", eventStep: e, eventStore: i, target: a };
                null !== r && (s.moving = r),
                    n.track(s),
                    setTimeout(function () {
                        ["safari"].indexOf(t.currentBrowser) > -1 ? (window.location = a) : window.open(a);
                    }, 400);
            },
            completeDirections: function () {
                i.data.outUrl += "&origin=" + r.currentPosition.lat + "," + r.currentPosition.lng;
                var e = r.locateTrackData({ eventName: "completeDirections", eventStep: i.data.step, eventStore: i.data.store, target: i.data.outUrl });
                n.track(e),
                    setTimeout(function () {
                        window.open(i.data.outUrl);
                    }, 400),
                    i.closeModal();
            },
        },
        r = {
            forceLoc: !1,
            currentPosition: null,
            manualPosition: null,
            currentAddress: null,
            currentError: null,
            proximityDistance: 3e4,
            deliveryDistance: 3500,
            locateUser: function (e, n, i) {
                (this.manualPosition = null), (this.currentError = null);
                var a = this;
                navigator.geolocation
                    ? navigator.geolocation.getCurrentPosition(
                          function (t) {
                              (a.currentAddress = null),
                                  (a.currentPosition = null),
                                  (a.currentPosition = { lat: t.coords.latitude, lng: t.coords.longitude, accuracy: t.coords.accuracy }),
                                  t.coords.altitude && (a.currentPosition.altitude = t.coords.altitude),
                                  t.coords.heading && (a.currentPosition.heading = t.coords.heading),
                                  t.coords.speed && (a.currentPosition.speed = t.coords.speed),
                                  n(e);
                          },
                          function (n) {
                              if (n)
                                  switch (n.code) {
                                      case n.PERMISSION_DENIED:
                                          a.currentError = t.i18n[t.currentLocale].geoloc_refused;
                                          break;
                                      case n.POSITION_UNAVAILABLE:
                                          a.currentError = t.i18n[t.currentLocale].geoloc_unavailable;
                                          break;
                                      case n.TIMEOUT:
                                          a.currentError = t.i18n[t.currentLocale].geoloc_timeout;
                                          break;
                                      case n.UNKNOWN_ERROR:
                                          a.currentError = t.i18n[t.currentLocale].geoloc_unavailable;
                                  }
                              a.forceLoc, i(e);
                          },
                          { timeout: 5e3 }
                      )
                    : i(e);
            },
            locateTrackData: function (e) {
                return (
                    this.currentPosition &&
                        void 0 !== this.currentPosition.lat &&
                        ((e.lat = this.currentPosition.lat),
                        (e.lng = this.currentPosition.lng),
                        (e.accuracy = this.currentPosition.accuracy),
                        this.currentPosition.altitude && (e.alt = this.currentPosition.altitude),
                        this.currentPosition.heading && (e.heading = this.currentPosition.heading),
                        this.currentPosition.speed && (e.speed = this.currentPosition.speed),
                        this.currentAddress && (e.address = this.currentAddress)),
                    e
                );
            },
            retrieveAddress: function (e) {
                var t = this,
                    n = ((e = e), new google.maps.Geocoder()),
                    i = new google.maps.LatLng(t.currentPosition.lat, t.currentPosition.lng);
                n.geocode({ latLng: i }, function (n, i) {
                    i == google.maps.GeocoderStatus.OK && n[0] && void 0 !== n[0].formatted_address && ((t.currentAddress = n[0].formatted_address), e());
                });
            },
            sortByDist: function (e, t) {
                return e.distance - t.distance;
            },
            nearestSpots: function (e, t) {
                return this.filterSpotsFromDistance(e, t, "proximityDistance");
            },
            deliverySpots: function (e, t) {
                return this.filterSpotsFromDistance(e, t, "deliveryDistance");
            },
            computeDirectionLink: function (e) {
                (e.directions = "https://www.google.com/maps/dir/?api=1"),
                    e.placeid ? (e.directions += "&destination=" + encodeURI(e.name) + "&destination_place_id=" + encodeURI(e.placeid)) : (e.directions += "&destination=" + encodeURI(e.techaddress));
            },
            computeMapsLink: function (e) {
                e.mapslink = "https://www.google.com/maps/place/?q=place_id:" + e.placeid;
            },
            filterSpotsFromDistance: function (e, t, n) {
                for (var i = JSON.parse(JSON.stringify(t)), a = this, r = new google.maps.LatLng(e.lat, e.lng), s = 0; s < i.length; s++)
                    (i[s].distance = google.maps.geometry.spherical.computeDistanceBetween(r, new google.maps.LatLng(i[s].lat, i[s].lng))),
                        void 0 !== i[s].platforms && void 0 !== i[s].platforms.google && i[s].platforms.google >= 3.5 && a.computeMapsLink(i[s]),
                        a.computeDirectionLink(i[s]);
                return (
                    i.sort(this.sortByDist),
                    (i = i.filter(function (e) {
                        return "deliveryDistance" === n && void 0 === e.delivering ? null : "deliveryDistance" !== n && e.isPrimary ? null : void 0 !== e[n] && e.distance < e[n] ? e : void 0 === e[n] && e.distance < a[n] ? e : void 0;
                    }))
                );
            },
            computeDriveTime: function (e, t, n) {
                r.computeNextTravelMode(["DRIVING", "TRANSIT", "WALKING"], e, t, function (e) {
                    n(e);
                });
            },
            localizePhone: function (e) {
                return void 0 !== e && "fr" == t.currentLocale && "+33" == e.substr(0, 3) ? e.replace("+33", "0") : e;
            },
            computeNextTravelMode: function (e, t, n, i) {
                for (var a = [], r = 0; r < n.length; r++) a.push(new google.maps.LatLng(n[r].lat, n[r].lng));
                var s = this;
                if ((void 0 === s.matrixService && (s.matrixService = new google.maps.DistanceMatrixService()), e.length)) {
                    var o = e.shift();
                    s.matrixService.getDistanceMatrix({ origins: [t], destinations: a, travelMode: o }, function (a, r) {
                        if (r != google.maps.DistanceMatrixStatus.OK) console.log("Error was: " + r);
                        else
                            for (var l = a.rows[0].elements, c = 0; c < n.length; c++)
                                (o = o.toLowerCase()),
                                    void 0 === n[c].travelModes && (n[c].travelModes = []),
                                    "OK" == l[c].status &&
                                        (l[c].duration.value < 3600 || (n[c].isPrimary && l[c].duration.value < 86400)) &&
                                        (l[c].duration.value > 3600 ? (l[c].duration.text = l[c].duration.text.replace(/heures?|hours?/, "h").replace(/minutes?/, "")) : (l[c].duration.text = l[c].duration.text.replace(/minutes?/, "min")),
                                        (n[c].hasTravel = !0),
                                        n[c].travelModes.push(o),
                                        (n[c][o] = l[c]),
                                        (n[c][o].directions = "https://www.google.com/maps/dir/?api=1"),
                                        n[c].placeid
                                            ? (n[c][o].directions += "&destination=" + encodeURI(n[c].name) + "&destination_place_id=" + encodeURI(n[c].placeid))
                                            : (n[c][o].directions += "&destination=" + encodeURI(n[c].techaddress)),
                                        (n[c][o].directions += "&origin=" + t.lat + "," + t.lng),
                                        (n[c][o].directions += "&travelmode=" + o));
                        s.computeNextTravelMode(e, t, n, i);
                    });
                } else i(n);
            },
            loadGoogleGeometry: function () {
                google.maps.__gjsload__("geometry", function (e) {
                    var t = function (t, n) {
                            return Math.abs(e.Lc(n - t, -180, 180));
                        },
                        n = function (n, i, a, r, s) {
                            return r
                                ? ((s = e.fc(n.lat())),
                                  (n = e.fc(n.lng())),
                                  (r = e.fc(i.lat())),
                                  (i = e.fc(i.lng())),
                                  (a = e.fc(a)),
                                  e.Lc(e.gc(Math.atan2(Math.sin(s) * Math.cos(r) * Math.sin(a - i) - Math.sin(r) * Math.cos(s) * Math.sin(a - n), Math.cos(s) * Math.cos(r) * Math.sin(n - i))), -90, 90))
                                : ((a = t(n.lng(), a) / t(n.lng(), i.lng())),
                                  s
                                      ? ((n = s.fromLatLngToPoint(n)), (i = s.fromLatLngToPoint(i)), s.fromPointToLatLng(new e.P(n.x + a * (i.x - n.x), n.y + a * (i.y - n.y))).lat())
                                      : ((s = Math.sin(e.fc(n.lat()))), (s = Math.log((1 + s) / (1 - s)) / 2), (i = Math.sin(e.fc(i.lat()))), e.gc(2 * Math.atan(Math.exp(s + a * (Math.log((1 + i) / (1 - i)) / 2 - s))) - Math.PI / 2)));
                        },
                        i = e.n(),
                        a = {
                            containsLocation: function (t, i) {
                                var r = e.Lc(t.lng(), -180, 180),
                                    s = !!i.get("geodesic"),
                                    o = i.get("latLngs"),
                                    l = i.get("map");
                                l = !s && l ? l.getProjection() : null;
                                for (var c = !1, p = 0, d = o.getLength(); p < d; ++p)
                                    for (var u = o.getAt(p), h = 0, m = u.getLength(); h < m; ++h) {
                                        var f = u.getAt(h),
                                            g = u.getAt((h + 1) % m),
                                            v = e.Lc(f.lng(), -180, 180),
                                            y = e.Lc(g.lng(), -180, 180),
                                            w = Math.max(v, y);
                                        (180 < w - (v = Math.min(v, y)) ? r >= w || r < v : r < w && r >= v) && n(f, g, r, s, l) < t.lat() && (c = !c);
                                    }
                                return c || a.isLocationOnEdge(t, i);
                            },
                        };
                    e.bb("PolyGeometry.containsLocation", a.containsLocation),
                        (a.isLocationOnEdge = function (t, i, a) {
                            a = a || 1e-9;
                            var r = e.Lc(t.lng(), -180, 180),
                                s = i instanceof e.ph,
                                o = !!i.get("geodesic"),
                                l = i.get("latLngs");
                            (i = i.get("map")), (i = !o && i ? i.getProjection() : null);
                            for (var c = 0, p = l.getLength(); c < p; ++c)
                                for (var d = l.getAt(c), u = d.getLength(), h = s ? u : u - 1, m = 0; m < h; ++m) {
                                    var f = d.getAt(m),
                                        g = d.getAt((m + 1) % u),
                                        v = e.Lc(f.lng(), -180, 180),
                                        y = e.Lc(g.lng(), -180, 180),
                                        w = Math.max(v, y),
                                        b = Math.min(v, y);
                                    if ((v = 1e-9 >= Math.abs(e.Lc(v - y, -180, 180)) && (Math.abs(e.Lc(v - r, -180, 180)) <= a || Math.abs(e.Lc(y - r, -180, 180)) <= a))) {
                                        (v = t.lat()), (y = Math.min(f.lat(), g.lat()) - a);
                                        var k = Math.max(f.lat(), g.lat()) + a;
                                        v = v >= y && v <= k;
                                    }
                                    if (v) return !0;
                                    if ((180 < w - b ? r + a >= w || r - a <= b : r + a >= b && r - a <= w) && ((f = n(f, g, r, o, i)), Math.abs(f - t.lat()) < a)) return !0;
                                }
                            return !1;
                        }),
                        e.bb("PolyGeometry.isLocationOnEdge", a.isLocationOnEdge);
                    var r = {
                        computeHeading: function (t, n) {
                            var i = e.td(t),
                                a = e.ud(t);
                            return (t = e.td(n)), (n = e.ud(n) - a), e.Lc(e.gc(Math.atan2(Math.sin(n) * Math.cos(t), Math.cos(i) * Math.sin(t) - Math.sin(i) * Math.cos(t) * Math.cos(n))), -180, 180);
                        },
                    };
                    e.bb("Spherical.computeHeading", r.computeHeading),
                        (r.computeOffset = function (t, n, i, a) {
                            (n /= a || 6378137), (i = e.fc(i));
                            var r = e.td(t);
                            (t = e.ud(t)), (a = Math.cos(n)), (n = Math.sin(n));
                            var s = Math.sin(r),
                                o = a * s + n * (r = Math.cos(r)) * Math.cos(i);
                            return new e.R(e.gc(Math.asin(o)), e.gc(t + Math.atan2(n * r * Math.sin(i), a - s * o)));
                        }),
                        e.bb("Spherical.computeOffset", r.computeOffset),
                        (r.computeOffsetOrigin = function (t, n, i, a) {
                            (i = e.fc(i)), (n /= a || 6378137), (a = Math.cos(n));
                            var r = Math.sin(n) * Math.cos(i);
                            n = Math.sin(n) * Math.sin(i);
                            var s = r * r * a * a + a * a * a * a - a * a * (i = Math.sin(e.td(t))) * i;
                            if (0 > s) return null;
                            var o = r * i + Math.sqrt(s),
                                l = (i - r * (o /= a * a + r * r)) / a;
                            return (
                                ((o = Math.atan2(l, o)) < -Math.PI / 2 || o > Math.PI / 2) && ((o = r * i - Math.sqrt(s)), (o = Math.atan2(l, o / (a * a + r * r)))),
                                o < -Math.PI / 2 || o > Math.PI / 2 ? null : ((t = e.ud(t) - Math.atan2(n, a * Math.cos(o) - r * Math.sin(o))), new e.R(e.gc(o), e.gc(t)))
                            );
                        }),
                        e.bb("Spherical.computeOffsetOrigin", r.computeOffsetOrigin),
                        (r.interpolate = function (t, n, i) {
                            var a = e.td(t),
                                s = e.ud(t),
                                o = e.td(n),
                                l = e.ud(n),
                                c = Math.cos(a),
                                p = Math.cos(o);
                            n = r.gf(t, n);
                            var d = Math.sin(n);
                            return 1e-6 > d
                                ? new e.R(t.lat(), t.lng())
                                : ((t = Math.sin((1 - i) * n) / d),
                                  (i = Math.sin(i * n) / d),
                                  (n = t * c * Math.cos(s) + i * p * Math.cos(l)),
                                  (s = t * c * Math.sin(s) + i * p * Math.sin(l)),
                                  new e.R(e.gc(Math.atan2(t * Math.sin(a) + i * Math.sin(o), Math.sqrt(n * n + s * s))), e.gc(Math.atan2(s, n))));
                        }),
                        e.bb("Spherical.interpolate", r.interpolate),
                        (r.gf = function (t, n) {
                            var i = e.td(t);
                            t = e.ud(t);
                            var a = e.td(n);
                            return (n = e.ud(n)), 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((i - a) / 2), 2) + Math.cos(i) * Math.cos(a) * Math.pow(Math.sin((t - n) / 2), 2)));
                        }),
                        (r.computeDistanceBetween = function (e, t, n) {
                            return (n = n || 6378137), r.gf(e, t) * n;
                        }),
                        e.bb("Spherical.computeDistanceBetween", r.computeDistanceBetween),
                        (r.computeLength = function (t, n) {
                            n = n || 6378137;
                            var i = 0;
                            t instanceof e.fe && (t = t.getArray());
                            for (var a = 0, s = t.length - 1; a < s; ++a) i += r.computeDistanceBetween(t[a], t[a + 1], n);
                            return i;
                        }),
                        e.bb("Spherical.computeLength", r.computeLength),
                        (r.computeArea = function (e, t) {
                            return Math.abs(r.computeSignedArea(e, t));
                        }),
                        e.bb("Spherical.computeArea", r.computeArea),
                        (r.computeSignedArea = function (t, n) {
                            (n = n || 6378137), t instanceof e.fe && (t = t.getArray());
                            for (var i = t[0], a = 0, s = 1, o = t.length - 1; s < o; ++s) a += r.Dj(i, t[s], t[s + 1]);
                            return a * n * n;
                        }),
                        e.bb("Spherical.computeSignedArea", r.computeSignedArea),
                        (r.Dj = function (e, t, n) {
                            return r.Ej(e, t, n) * r.yk(e, t, n);
                        }),
                        (r.Ej = function (e, t, n) {
                            var i = [e, t, n, e];
                            for (e = [], n = t = 0; 3 > n; ++n) (e[n] = r.gf(i[n], i[n + 1])), (t += e[n]);
                            for (t /= 2, i = Math.tan(t / 2), n = 0; 3 > n; ++n) i *= Math.tan((t - e[n]) / 2);
                            return 4 * Math.atan(Math.sqrt(Math.abs(i)));
                        }),
                        (r.yk = function (t, n, i) {
                            for (t = [t, n, i], n = [], i = 0; 3 > i; ++i) {
                                var a = t[i],
                                    r = e.td(a);
                                a = e.ud(a);
                                var s = (n[i] = []);
                                (s[0] = Math.cos(r) * Math.cos(a)), (s[1] = Math.cos(r) * Math.sin(a)), (s[2] = Math.sin(r));
                            }
                            return 0 < n[0][0] * n[1][1] * n[2][2] + n[1][0] * n[2][1] * n[0][2] + n[2][0] * n[0][1] * n[1][2] - n[0][0] * n[2][1] * n[1][2] - n[1][0] * n[0][1] * n[2][2] - n[2][0] * n[1][1] * n[0][2] ? 1 : -1;
                        });
                    var s = {
                        decodePath: function (t) {
                            for (var n = e.L(t), i = Array(Math.floor(t.length / 2)), a = 0, r = 0, s = 0, o = 0; a < n; ++o) {
                                var l = 1,
                                    c = 0;
                                do {
                                    var p = t.charCodeAt(a++) - 63 - 1;
                                    (l += p << c), (c += 5);
                                } while (31 <= p);
                                (r += 1 & l ? ~(l >> 1) : l >> 1), (l = 1), (c = 0);
                                do {
                                    (l += (p = t.charCodeAt(a++) - 63 - 1) << c), (c += 5);
                                } while (31 <= p);
                                (s += 1 & l ? ~(l >> 1) : l >> 1), (i[o] = new e.R(1e-5 * r, 1e-5 * s, !0));
                            }
                            return (i.length = o), i;
                        },
                    };
                    e.bb("PolylineCodec.decodePath", s.decodePath),
                        (s.encodePath = function (t) {
                            return (
                                t instanceof e.fe && (t = t.getArray()),
                                s.Ml(t, function (e) {
                                    return [Math.round(1e5 * e.lat()), Math.round(1e5 * e.lng())];
                                })
                            );
                        }),
                        e.bb("PolylineCodec.encodePath", s.encodePath),
                        (s.Ml = function (t, n) {
                            for (var i, a = [], r = [0, 0], o = 0, l = e.L(t); o < l; ++o) (i = n ? n(t[o]) : t[o]), s.Ph(i[0] - r[0], a), s.Ph(i[1] - r[1], a), (r = i);
                            return a.join("");
                        }),
                        (s.Ph = function (e, t) {
                            s.Nl(0 > e ? ~(e << 1) : e << 1, t);
                        }),
                        (s.Nl = function (e, t) {
                            for (; 32 <= e; ) t.push(String.fromCharCode(63 + (32 | (31 & e)))), (e >>= 5);
                            t.push(String.fromCharCode(e + 63));
                        }),
                        (e.y.google.maps.geometry = { encoding: s, spherical: r, poly: a }),
                        (e.p = i.prototype),
                        (e.p.decodePath = s.decodePath),
                        (e.p.encodePath = s.encodePath),
                        (e.p.computeDistanceBetween = r.computeDistanceBetween),
                        (e.p.interpolate = r.interpolate),
                        (e.p.computeHeading = r.computeHeading),
                        (e.p.computeOffset = r.computeOffset),
                        (e.p.computeOffsetOrigin = r.computeOffsetOrigin),
                        e.Je("geometry", new i());
                });
            },
            loadGooglePlaces: function () {
                google.maps.__gjsload__("places", function (e) {
                    var t = function (t) {
                            if (
                                !(t = e.cd(function (t) {
                                    if ((t = (0, e.Di)(t)).includes("/")) throw e.Wc('Field with "/" specified: ' + t);
                                    return t.replace(/\./g, "/");
                                })(t)).length
                            )
                                throw e.Wc("At least one field must be specified.");
                            return t;
                        },
                        n = function (t, n) {
                            var i = this;
                            try {
                                e.ad(HTMLInputElement, "HTMLInputElement")(t);
                            } catch (n) {
                                if ((e.Xc(n), !t)) return;
                            }
                            e.U("places_impl").then(function (a) {
                                (n = n || {}), i.setValues(n), a.j(i, t), e.pf(t);
                            });
                        },
                        i = function () {
                            var t = this;
                            (this.j = null),
                                e.U("places_impl").then(function (e) {
                                    t.j = e.A();
                                });
                        },
                        a = function (t) {
                            var n = this;
                            (this.j = null),
                                e.U("places_impl").then(function (e) {
                                    n.j = e.l(t);
                                });
                        },
                        r = function (t, n) {
                            var i = this;
                            e.U("places_impl").then(function (e) {
                                e.m(i, t), (n = n || {}), i.setValues(n);
                            });
                        };
                    e.A(n, e.T),
                        (n.prototype.setTypes = e.ce("types", e.cd(e.Di))),
                        (n.prototype.setTypes = n.prototype.setTypes),
                        (n.prototype.setComponentRestrictions = e.ce("componentRestrictions", e.N(e.Zc({ country: e.ed([e.Di, e.cd(e.Di)]) }, !0)))),
                        (n.prototype.setComponentRestrictions = n.prototype.setComponentRestrictions),
                        e.de(n.prototype, { place: null, bounds: e.N(e.Fd), fields: e.N(t) }),
                        (i.prototype.getPlacePredictions = function (t, n) {
                            var i = this;
                            (t = s(t)),
                                e.U("places_impl").then(function () {
                                    i.j.getPlacePredictions(t, n);
                                });
                        }),
                        (i.prototype.getPlacePredictions = i.prototype.getPlacePredictions),
                        (i.prototype.getPredictions = i.prototype.getPlacePredictions),
                        (i.prototype.getQueryPredictions = function (t, n) {
                            var i = this;
                            e.U("places_impl").then(function () {
                                i.j.getQueryPredictions(t, n);
                            });
                        }),
                        (i.prototype.getQueryPredictions = i.prototype.getQueryPredictions);
                    var s = e.Zc({ sessionToken: e.N(e.ad(e.te, "AutocompleteSessionToken")) }, !0);
                    (a.prototype.getDetails = function (t, n) {
                        var i = this;
                        (t = o(t)),
                            e.U("places_impl").then(function () {
                                i.j.getDetails(t, n);
                            });
                    }),
                        (a.prototype.getDetails = a.prototype.getDetails),
                        (a.prototype.nearbySearch = function (t, n) {
                            var i = this;
                            e.U("places_impl").then(function () {
                                i.j.nearbySearch(t, n);
                            });
                        }),
                        (a.prototype.nearbySearch = a.prototype.nearbySearch),
                        (a.prototype.search = a.prototype.nearbySearch),
                        (a.prototype.textSearch = function (t, n) {
                            var i = this;
                            e.U("places_impl").then(function () {
                                i.j.textSearch(t, n);
                            });
                        }),
                        (a.prototype.textSearch = a.prototype.textSearch),
                        (a.prototype.radarSearch = function () {
                            e.Uc("Radar Search was deprecated on June 30, 2017 and turned off on July 30, 2018.");
                        }),
                        (a.prototype.findPlaceFromQuery = function (t, n) {
                            var i = this;
                            (t = l(t)),
                                e.U("places_impl").then(function () {
                                    i.j.findPlaceFromQuery(t, n);
                                });
                        }),
                        (a.prototype.findPlaceFromQuery = a.prototype.findPlaceFromQuery),
                        (a.prototype.findPlaceFromPhoneNumber = function (t, n) {
                            var i = this;
                            (t = c(t)),
                                e.U("places_impl").then(function () {
                                    i.j.findPlaceFromPhoneNumber(t, n);
                                });
                        }),
                        (a.prototype.findPlaceFromPhoneNumber = a.prototype.findPlaceFromPhoneNumber);
                    var o = e.Zc({ fields: e.N(t), sessionToken: e.N(e.ad(e.te, "AutocompleteSessionToken")) }, !0),
                        l = e.Zc({
                            fields: t,
                            query: function (t) {
                                return (0, e.Di)(t);
                            },
                            locationBias: e.N(e.Qh),
                        }),
                        c = e.Zc({
                            fields: t,
                            phoneNumber: function (t) {
                                return (0, e.Di)(t);
                            },
                            locationBias: e.N(e.Qh),
                        });
                    e.A(r, e.T),
                        e.de(r.prototype, { places: null, bounds: e.N(e.Fd) }),
                        (e.y.google.maps.places = {
                            PlacesService: a,
                            PlacesServiceStatus: { OK: e.ha, UNKNOWN_ERROR: e.ka, OVER_QUERY_LIMIT: e.ia, REQUEST_DENIED: e.ja, INVALID_REQUEST: e.ba, ZERO_RESULTS: e.la, NOT_FOUND: e.fa },
                            AutocompleteService: i,
                            AutocompleteSessionToken: e.te,
                            Autocomplete: n,
                            SearchBox: r,
                            RankBy: { PROMINENCE: 0, DISTANCE: 1 },
                            RatingLevel: { GOOD: 0, VERY_GOOD: 1, EXCELLENT: 2, EXTRAORDINARY: 3 },
                        }),
                        e.Je("places", {});
                });
            },
        };
    (e.m8engine = n),
        (e.m8tracker = a),
        (e.m8modal = i),
        ("undefined" != typeof M8_ASYNC && M8_ASYNC) ||
            (n.preinit(),
            window.addEventListener
                ? window.addEventListener("load", function () {
                      n.init();
                  })
                : window.attachEvent("onload", function () {
                      n.init();
                  }));
})(window, m8_data);
