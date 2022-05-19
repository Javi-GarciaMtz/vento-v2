
motos = [
    "ATOM150",
    "AXUS150",
    "HOTROD150",
    "STREETROD150",
    "PHANTOM150RZ",
    "RUDA150F2",
    "TERRA150RZ",
    "ZERO7",
    "WIND125",
    "URBAN200",
    "SPECTRA5I",
    "RYDER1503",
    "RAPID125",
    "LITHIUM1504",
    "THRILLER200",
    "ROCKETMANCARRERA250",
    "ROCKETMANRACING250",
    "ROCKETMANSPORT250",
    "SCREAMER250",
    "THUNDERSTAR250XL",
    "LUCKY7400",
    "CYCLONE150",
    "CYCLONE200",
    "FALKON200",
    "FALKON250",
    "HYPER280",
    "NITROX200RZ",
    "NITROX250T2",
    "STORM250",
    "TORNADO250",
    "VRACER250",
    "WORKMAN125",
    "WORKMAN150",
    "WORKMAN250",
    "ECLIPSE150",
    "XPRESS150",
    "CROSSMAX150",
    "CROSSMAX200",
    "CROSSMAX250",
    "CROSSMAX250PRO",
    "GT250",
    "REPTILETREK150",
    "GLADIATORREPTILE200",
    "CYCLONE150-2022",
    "SCREAMERSPORTIVO250",
    "BLAST125"
]

# print(len(motos))

# /* PRECIO CONTADO */
# [optimize id="SKU" action="MIN"][/optimize]

# /* 12 MSI */
# [optimize id="SKU" action="MSI" temp=12][/optimize]

# /* 6 MSI */
# [optimize id="SKU" action="MSI" temp=6][/optimize]

# /* 3 MSI */
# [optimize id="SKU" action="MSI" temp=3][/optimize]

# /* VENTO CREDIT 52 */
# [optimize id="SKU" action="VC" temp=52][/optimize]

# /* VENTO CREDIT 52 */
# [optimize id="SKU" action="VC" temp=104][/optimize]

# /* ENGANCHE */
# [optimize id="SKU" action="ENG" temp=15][/optimize]


for i in motos:
    # print(i)
    fichero = open("./etiquetas_precios/"+i+".txt","w")

    fichero.write("/* PRECIO CONTADO */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"MIN\"][/optimize]\n\n")

    fichero.write("/* 12 MSI */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"MSI\" temp=12][/optimize]\n\n")

    fichero.write("/* 6 MSI */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"MSI\" temp=6][/optimize]\n\n")

    fichero.write("/* 3 MSI */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"MSI\" temp=3][/optimize]\n\n")

    fichero.write("/* VENTO CREDIT 52 */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"VC\" temp=52][/optimize]\n\n")

    fichero.write("/* VENTO CREDIT 104 */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"VC\" temp=104][/optimize]\n\n")

    fichero.write("/* ENGANCHE */\n")
    fichero.write("[optimize id=\""+i+"\" action=\"ENG\" temp=15][/optimize]\n\n")

    fichero.close()

print("Finish...")
