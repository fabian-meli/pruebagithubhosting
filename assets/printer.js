function onClickStartPrinterUrl(url) {
    document.getElementById("callback-result").innerHTML = ""
    console.log("receiptURL: " + url);
    launchPrint(url, callbackResult);
}

function onClickStartPrinterTextPlain() {

    var htmlReceipt="<html>\n" +
                "<head>\n" +
                "<script src=\"../share/mobilewebkit.js\"></script>\n" +
                "<script src=\"../share/smart_webkit.js\"></script>\n" +
                "<style>\n" +
                "@page{\n" +
                "margin-left: 15px;\n" +
                "margin-right: 20px;\n" +
                "margin-top: 0px;\n" +
                "margin-bottom: 0px;\n" +
                "padding-left: 0px;\n" +
                "padding-right: 0px;\n" +
                "padding-top: 0px;\n" +
                "padding-bottom: 0px;\n" +
                "}\n" +
                "h1{font-size:26px;font-weight:normal;}\n" +
                "h2{font-size:22px;font-weight:normal;}\n" +
                "h3{font-size:20px;font-weight:normal;}\n" +
                "h4{font-size:16px;font-weight:normal;}\n" +
                "h5{font-size:12px;font-weight:normal;}\n" +
                "body{\n" +
                "font-family:monospace, courier new;display:inline-block;\n" +
                "float:left;\n" +
                "}\n" +
                "</style>\n" +
                "</head>\n" +
                "<body><section  id=\"container\"><pre><h4><h5><div style=\"text-align:center\">       Saurus Restaurante       \n" +
                "RUA ABAIRA 112 SALA  1 PARQUE CI\n" +
                "              SPER              \n" +
                "    CNPJ: 11.914.993/0001-23    \n" +
                "Inscricao Estadual: 147183877115\n" +
                "--------------------------------\n" +
                "<div style=\"font-weight:bold\">DANFE NFC-e Documento Auxiliar d\n" +
                "e Nota Fiscal Eletrônica para Co\n" +
                "         nsumidor Final         \n" +
                "</div>NFC-e não permite aproveitamento\n" +
                "       de crédito de ICMS       \n" +
                "--------------------------------\n" +
                "♯♯♯||QTD|UN|VL UN R\$|(VL TR R\$)*\n" +
                "DESCRICAO           | VL ITEM R\$\n" +
                "--------------------------------\n" +
                "001 38          1,000 UN x  1,02\n" +
                " NOTA FISCAL EMITIDA EM AM  1,02\n" +
                "--------------------------------\n" +
                "Valor aproximado dos tributos de\n" +
                "ste cupom (conforme Lei Fed. 12.\n" +
                "       741/2012) R\$ 0,23        \n" +
                "--------------------------------\n" +
                "Qtd. Total de Itens        1,000\n" +
                "<div style=\"font-weight:bold\">Valor Total R\$              1,02\n" +
                "</div>--------------------------------\n" +
                "FORMA PAGAMENTO       VALOR PAGO\n" +
                "Dinheiro                    1,02\n" +
                "--------------------------------\n" +
                "<div style=\"font-weight:bold\">EMITIDA EM ANBIENTE DE HOMOLOGAC\n" +
                "     AO - SEM VALOR FISCAL      \n" +
                "     Numero: 56 Serie: 111      \n" +
                "        20/07/2021 15:51        \n" +
                "         Via Consumidor         \n" +
                "</div>\n" +
                "<div style=\"font-weight:bold\">        CHAVE DE ACESSO         \n" +
                "</div>3521 0711 9149 9300 0123 6511 10\n" +
                "     00 0000 5611 1914 9933     \n" +
                "--------------------------------\n" +
                "<div style=\"text-align:center\"><img onload=\"notifyHtmlReadyToPrint()\" src=\"https://webservices.saurus.net.br/retCodigo.aspx?tpcodigo=qrcode&vcodigo=aHR0cHM6Ly93d3cuaG9tb2xvZ2FjYW8ubmZjZS5mYXplbmRhLnNwLmdvdi5ici9xcmNvZGU/cD0zNTIxMDcxMTkxNDk5MzAwMDEyMzY1MTExMDAwMDAwMDU2MTExOTE0OTkzM3wyfDJ8MXwxMUFCMDJGRDlBRDMzQzBCQTU3OEIzMzgyODgzMzZBQ0MxMzc2QkU4\" style=\"margin-left:12.5%;width:75%;display:block;\">\n" +
                "    Protocolo de Autorização    \n" +
                "        135210000246497         \n" +
                "           20/07/2021           \n" +
                "<div style=\"text-align:center\"></h5>\n" +
                "</h4></pre></body></section></html>";


	document.getElementById("callback-result").innerHTML = ""
	console.log("receiptURL: " + htmlReceipt);
	launchPrint(htmlReceipt, callbackResult);
}

function callbackResult(result, error) {
    if (result == 'success') {
        callbackSuccess(result);
    } else {
        callbackError(error);
    }
}

function callbackSuccess(result) {
    document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-success text-white p-3 m-0 d-block\">Callback Success <i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(result) + "</div>";
}

function callbackError(result) {
    document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-danger text-white p-3 m-0 d-block\">Callback Error<i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(result) + "</div>";
}

function closeResult() {
    document.getElementById("callback-result").innerHTML = "";
}

function onClickPrinterCustomTag() {

    var customTag = "{br}{s}________________________________________________{/s}{br}|     FACTURA ELECTRONICA      |{br}|      R.U.T. 76072694-K       |{br}|         N 0000448779         |{br}{s}________________________________________________{/s}{br}{center}{s}S.I.I. - Santiago{/s}{br}{center}{s}COMERCIAL SOLUEX SPA{/s}{br}{center}{s}CARLOTA GUZMAN 1298,Renca{/s}{br}{center}{s}Giro VENTA AL POR MAYOR DE MATERIALES DE CONSTRUCCION, {/s}{br}{center}{s}Sucursal Nro. 75561256{/s}{br}{center}{s}Fecha emision 04-03-2024{/s}{br}{s}Vendedor  GENERICO{/s}{br}{s}----------------------------------------------{/s}{br}{s} SENOR(ES) CRISTOBAL CARRILLO{/s}{br}{s} R.U.T. 12001101-4{/s}{br}{s} DIRECCION CAMINO PANGUILEMU K 7 PARCELA 6A S.N. {/s}{br}{s} COMUNA Coyhaique{/s}{br}{s} CIUDAD COYHAIQUE{/s}{br}{s} GIRO CONSTRUCCION OBRAS MENORES{/s}{br}{s} CONDICION DE PAGO TARJ. CREDITO{/s}{br}{s}----------------------------------------------{/s}{br}{br}{s}ARTICULO                    CANTIDAD    VALOR{/s}{br}{s}PRECIO UNITARIO/SKU{/s}{br}{s}----------------------------------------------{/s}{br}{s}Sellotec Espuma de Poliur    72        401202{/s}{br}{s}(5384 c/u) / 09010STC001{/s}{br}{s} 15092023{/s}{s} DESCUENTO                            13543{/s}{br}{br}{s}----------------------------------------------{/s}{br}{s}                  SUB TOTAL            387660{/s}{br}{s}                  NETO                 325765{/s}{br}{s}                  IVA 19                61895{/s}{br}{s}                  EXENTO                    0{/s}{br}{s}                  TOTAL                387660{/s}{br}{pdf417}<TED version=\"1.0\"> <DD> <RE>76072694-K</RE> <TD>33</TD> <F>448779</F> <FE>2024-03-04</FE> <RR>12001101-4</RR> <RSR>CRISTOBAL CARRILLO</RSR> <MNT>387660</MNT> <IT1>Sellotec Espuma de Poliuretano EP3000 75</IT1> <CAF version=\"1.0\"> <DA> <RE>76072694-K</RE> <RS>COMERCIAL SOLUEX SPA</RS> <TD>33</TD> <RNG> <D>443149</D> <H>453148</H> </RNG> <FA>2024-01-23</FA> <RSAPK> <M>sUl4d9hjYCoo5gLh6dYYA1JT/p10578AyVb0UgiZwqxLWqhLLURxlPARjJJ4ByBlVL9Mw3fCQZUVvLneBRRJow==</M> <E>Aw==</E> </RSAPK> <IDK>300</IDK> </DA> <FRMA algoritmo=\"SHA1withRSA\">f1XaXib8nYdG0+LsLScmMb0vXS1Ukp90N2wAO0KPaqnnHpeLXvGYDCgdWS1fUt/rY0ClpDk+q9M12ji2V0QITQ==</FRMA> </CAF> <TSTED>2024-03-04T12 58 08</TSTED> </DD> <FRMT algoritmo=\"SHA1withRSA\">gCNtl+X+sDgpO9H1zrD2wa+8YXYyaxnIT+PQwx9T+J8MUj+NiJLqpC0knF0c/JuY5yviiA8M9jbEdCTRF2Jr4g==</FRMT> </TED>{/pdf417}{s}NOMBRE   ___________________________________{/s}{br}{s}R.U.T.   ___________________________________{/s}{br}{s}FECHA    ___________________________________{/s}{br}{s}RECINTO  ___________________________________{/s}{br}{s}FIRMA    ___________________________________{/s}{br}{br}{br}{s}    {/s}"

    document.getElementById("callback-result").innerHTML = ""
	console.log("CustomTag -->: " + customTag);
	launchCustomTag(customTag, callbackResult);
}

function onClickPrinterDte() {

    var dte = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<DTE version=\"1.0\" xmlns=\"http://www.sii.cl/SiiDte\">\n\t<Documento ID=\"F60T33\">\n\t\t<Encabezado>\n\t\t\t<IdDoc>\n\t\t\t\t<TipoDTE>33</TipoDTE>\n\t\t\t\t<Folio>60</Folio>\n\t\t\t\t<FchEmis>2003-10-13</FchEmis>\n\t\t\t</IdDoc>\n\t\t\t<Emisor>\n\t\t\t\t<RUTEmisor>97975000-5</RUTEmisor>\n\t\t\t\t<RznSoc>RUT DE PRUEBA</RznSoc>\n\t\t\t\t<GiroEmis>Insumos de Computacion</GiroEmis>\n\t\t\t\t<Acteco>31341</Acteco>\n\t\t\t\t<CdgSIISucur>1234</CdgSIISucur>\n\t\t\t\t<DirOrigen>Teatinos 120, Piso 4</DirOrigen>\n\t\t\t\t<CmnaOrigen>Santiago</CmnaOrigen>\n\t\t\t\t<CiudadOrigen>Santiago</CiudadOrigen>\n\t\t\t</Emisor>\n\t\t\t<Receptor>\n\t\t\t\t<RUTRecep>77777777-7</RUTRecep>\n\t\t\t\t<RznSocRecep>EMPRESA  LTDA</RznSocRecep>\n\t\t\t\t<GiroRecep>COMPUTACION</GiroRecep>\n\t\t\t\t<DirRecep>SAN DIEGO 2222</DirRecep>\n\t\t\t\t<CmnaRecep>LA FLORIDA</CmnaRecep>\n\t\t\t\t<CiudadRecep>SANTIAGO</CiudadRecep>\n\t\t\t</Receptor>\n\t\t\t<Totales>\n\t\t\t\t<MntNeto>100000</MntNeto>\n\t\t\t\t<TasaIVA>19</TasaIVA>\n\t\t\t\t<IVA>19000</IVA>\n\t\t\t\t<MntTotal>119000</MntTotal>\n\t\t\t</Totales>\n\t\t</Encabezado>\n\t\t<Detalle>\n\t\t\t<NroLinDet>1</NroLinDet>\n\t\t\t<CdgItem>\n\t\t\t\t<TpoCodigo>INT1</TpoCodigo>\n\t\t\t\t<VlrCodigo>011</VlrCodigo>\n\t\t\t</CdgItem>\n\t\t\t<NmbItem>Parlantes Multimedia 180W.</NmbItem>\n\t\t\t<DscItem/>\n\t\t\t<QtyItem>20</QtyItem>\n\t\t\t<PrcItem>4500</PrcItem>\n\t\t\t<MontoItem>90000</MontoItem>\n\t\t</Detalle>\n\t\t<Detalle>\n\t\t\t<NroLinDet>2</NroLinDet>\n\t\t\t<CdgItem>\n\t\t\t\t<TpoCodigo>INT1</TpoCodigo>\n\t\t\t\t<VlrCodigo>0231</VlrCodigo>\n\t\t\t</CdgItem>\n\t\t\t<NmbItem>Mouse Inalambrico PS/2</NmbItem>\n\t\t\t<DscItem/>\n\t\t\t<QtyItem>1</QtyItem>\n\t\t\t<PrcItem>5000</PrcItem>\n\t\t\t<MontoItem>5000</MontoItem>\n\t\t</Detalle>\n\t\t<Detalle>\n\t\t\t<NroLinDet>3</NroLinDet>\n\t\t\t<CdgItem>\n\t\t\t\t<TpoCodigo>INT1</TpoCodigo>\n\t\t\t\t<VlrCodigo>1515</VlrCodigo>\n\t\t\t</CdgItem>\n\t\t\t<NmbItem>Caja de Diskettes 10 Unidades</NmbItem>\n\t\t\t<DscItem/>\n\t\t\t<QtyItem>5</QtyItem>\n\t\t\t<PrcItem>1000</PrcItem>\n\t\t\t<MontoItem>5000</MontoItem>\n\t\t</Detalle>\n\t\t<TED version=\"1.0\">\n\t\t\t<DD>\n\t\t\t\t<RE>97975000-5</RE>\n\t\t\t\t<TD>33</TD>\n\t\t\t\t<F>60</F>\n\t\t\t\t<FE>2003-10-13</FE>\n\t\t\t\t<RR>77777777-7</RR>\n\t\t\t\t<RSR>EMPRESA  LTDA</RSR>\n\t\t\t\t<MNT>119000</MNT>\n\t\t\t\t<IT1>Parlantes Multimedia 180W.</IT1>\n\t\t\t\t<CAF version=\"1.0\">\n\t\t\t\t\t<DA>\n\t\t\t\t\t\t<RE>97975000-5</RE>\n\t\t\t\t\t\t<RS>RUT DE PRUEBA</RS>\n\t\t\t\t\t\t<TD>33</TD>\n\t\t\t\t\t\t<RNG>\n\t\t\t\t\t\t\t<D>1</D>\n\t\t\t\t\t\t\t<H>200</H>\n\t\t\t\t\t\t</RNG>\n\t\t\t\t\t\t<FA>2003-09-04</FA>\n\t\t\t\t\t\t<RSAPK>\n\t\t\t\t\t\t\t<M>0a4O6Kbx8Qj3K4iWSP4w7KneZYeJ+g/prihYtIEolKt3cykSxl1zO8vSXu397QhTmsX7SBEudTUx++2zDXBhZw==</M>\n\t\t\t\t\t\t\t<E>Aw==</E>\n\t\t\t\t\t\t</RSAPK>\n\t\t\t\t\t\t<IDK>100</IDK>\n\t\t\t\t\t</DA>\n\t\t\t\t\t<FRMA algoritmo=\"SHA1withRSA\">g1AQX0sy8NJugX52k2hTJEZAE9Cuul6pqYBdFxj1N17umW7zG/hAavCALKByHzdYAfZ3LhGTXCai5zNxOo4lDQ==</FRMA>\n\t\t\t\t</CAF>\n\t\t\t\t<TSTED>2003-10-13T09:33:20</TSTED>\n\t\t\t</DD>\n\t\t\t<FRMT algoritmo=\"SHA1withRSA\">GbmDcS9e/jVC2LsLIe1iRV12Bf6lxsILtbQiCkh6mbjckFCJ7fj/kakFTS06Jo8i\nS4HXvJj3oYZuey53Krniew==</FRMT>\n\t\t</TED>\n\t\t<TmstFirma>2003-10-13T09:33:20</TmstFirma>\n\t</Documento>\n<Signature xmlns=\"http://www.w3.org/2000/09/xmldsig#\">\n<SignedInfo>\n<CanonicalizationMethod Algorithm=\"http://www.w3.org/TR/2001/REC-xml-c14n-20010315\"/>\n<SignatureMethod Algorithm=\"http://www.w3.org/2000/09/xmldsig#rsa-sha1\"/>\n<Reference URI=\"#F60T33\">\n<Transforms>\n<Transform Algorithm=\"http://www.w3.org/TR/2001/REC-xml-c14n-20010315\"/>\n</Transforms>\n<DigestMethod Algorithm=\"http://www.w3.org/2000/09/xmldsig#sha1\"/>\n<DigestValue>hlmQtu/AyjUjTDhM3852wvRCr8w=</DigestValue>\n</Reference>\n</SignedInfo>\n<SignatureValue>JG1Ig0pvSIH85kIKGRZUjkyX6CNaY08Y94j4UegTgDe8+wl61GzqjdR1rfOK9BGn93AMOo6aiAgolW0k/XklNVtM/ZzpNNS3d/fYVa1q509mAMSXbelxSM3bjoa7H6Wzd/mV1PpQ8zK5gw7mgMMP4IKxHyS92G81GEguSmzcQmA=</SignatureValue>\n<KeyInfo>\n<KeyValue>\n<RSAKeyValue>\n<Modulus>\ntNEknkb1kHiD1OOAWlLKkcH/UP5UGa6V6MYso++JB+vYMg2OXFROAF7G8BNFFPQx\niuS/7y1azZljN2xq+bW3bAou1bW2ij7fxSXWTJYFZMAyndbLyGHM1e3nVmwpgEpx\nBHhZzPvwLb55st1wceuKjs2Ontb13J33sUb7bbJMWh0=\n</Modulus>\n<Exponent>\nAQAB\n</Exponent>\n</RSAKeyValue>\n</KeyValue>\n<X509Data>\n<X509Certificate>MIIEgjCCA+ugAwIBAgIEAQAApzANBgkqhkiG9w0BAQUFADCBtTELMAkGA1UEBhMC\nQ0wxHTAbBgNVBAgUFFJlZ2lvbiBNZXRyb3BvbGl0YW5hMREwDwYDVQQHFAhTYW50\naWFnbzEUMBIGA1UEChQLRS1DRVJUQ0hJTEUxIDAeBgNVBAsUF0F1dG9yaWRhZCBD\nZXJ0aWZpY2Fkb3JhMRcwFQYDVQQDFA5FLUNFUlRDSElMRSBDQTEjMCEGCSqGSIb3\nDQEJARYUZW1haWxAZS1jZXJ0Y2hpbGUuY2wwHhcNMDMxMDAxMTg1ODE1WhcNMDQw\nOTMwMDAwMDAwWjCBuDELMAkGA1UEBhMCQ0wxFjAUBgNVBAgUDU1ldHJvcG9saXRh\nbmExETAPBgNVBAcUCFNhbnRpYWdvMScwJQYDVQQKFB5TZXJ2aWNpbyBkZSBJbXB1\nZXN0b3MgSW50ZXJub3MxDzANBgNVBAsUBlBpc28gNDEjMCEGA1UEAxQaV2lsaWJh\nbGRvIEdvbnphbGV6IENhYnJlcmExHzAdBgkqhkiG9w0BCQEWEHdnb256YWxlekBz\naWkuY2wwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBALxZlVh1xr9sKQIBDF/6\nVa+lsHQSG5AAmCWvtNTIOXN3E9EQCy7pOPHrDg6EusvoHyesZSKJbc0TnIFXZp78\nq7mbdHijzKqvMmyvwbdP7KK8LQfwf84W4v9O8MJeUHlbJGlo5nFACrPAeTtONbHa\nReyzeMDv2EganNEDJc9c+UNfAgMBAAGjggGYMIIBlDAjBgNVHREEHDAaoBgGCCsG\nAQQBwQEBoAwWCjA3ODgwNDQyLTQwCQYDVR0TBAIwADA8BgNVHR8ENTAzMDGgL6At\nhitodHRwOi8vY3JsLmUtY2VydGNoaWxlLmNsL2UtY2VydGNoaWxlY2EuY3JsMCMG\nA1UdEgQcMBqgGAYIKwYBBAHBAQKgDBYKOTY5MjgxODAtNTAfBgNVHSMEGDAWgBTg\nKP3S4GBPs0brGsz1CJEHcjodCDCB0AYDVR0gBIHIMIHFMIHCBggrBgEEAcNSBTCB\ntTAvBggrBgEFBQcCARYjaHR0cDovL3d3dy5lLWNlcnRjaGlsZS5jbC8yMDAwL0NQ\nUy8wgYEGCCsGAQUFBwICMHUac0VsIHRpdHVsYXIgaGEgc2lkbyB2YWxpZG8gZW4g\nZm9ybWEgcHJlc2VuY2lhbCwgcXVlZGFuZG8gZWwgQ2VydGlmaWNhZG8gcGFyYSB1\nc28gdHJpYnV0YXJpbywgcGFnb3MsIGNvbWVyY2lvIHkgb3Ryb3MwCwYDVR0PBAQD\nAgTwMA0GCSqGSIb3DQEBBQUAA4GBABMfCyJF0mNXcov8iEWvjGFyyPTsXwvsYbbk\nOJ41wjaGOFMCInb4WY0ngM8BsDV22bGMs8oLyX7rVy16bGA8Z7WDUtYhoOM7mqXw\n/Hrpqjh3JgAf8zqdzBdH/q6mAbdvq/yb04JHKWPC7fMFuBoeyVWAnhmuMZfReWQi\nMUEHGGIW</X509Certificate>\n</X509Data>\n</KeyInfo>\n</Signature></DTE>"

    document.getElementById("callback-result").innerHTML = ""
    console.log("CustomTag -->: " + dte);
    launchCustomTag(dte, callbackResult);
}
