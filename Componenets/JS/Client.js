function client(id){
    let client = "<div class='client' id='travler"+id+"'>\n" +
        "                            <div class='clientInfo'>\n" +
        "                             <p>\n" +
        "                              <select name='cars' style='width: 100%; margin-bottom: 10px;'>\n" +
        "                              <option value='volvo'>Mr.</option>\n" +
        "                              <option value='saab'>Mrs</option>\n" +
        "                              <option value='fiat'>Ms.</option>\n" +
        "                            </select>\n" +
        "                            </p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname"+id+"' name='firstName' placeholder='First Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='lastName"+id+"' name='lastName' placeholder='Last Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='date' id='birthDate"+id+"' name='birthDate' placeholder='Birth Ddate'></p>\n" +
        "                            <p><input class='clientInput'  type='email' id='mail"+id+"' name='mail' placeholder='E-Mail'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='mail"+id+"' name='mail' placeholder='Home Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='cellPhone"+id+"' name='cellPhone' placeholder='Cell Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='address"+id+"' name='address' placeholder='Adress'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='city"+id+"' name='city' placeholder='City'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='stat"+id+"' name='stat' placeholder='Stat'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='zip"+id+"' name='zip' placeholder='Poste code / ZIP'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='nameTag"+id+"' name='nameTag' placeholder='Name Tag'></p>\n" +
        "                        </div>\n" +
        "                            <div class='passportInfo'>\n" +
        "                            <p>Passport information: (if you don’t have a valid passport at the time of the booking, leave the spaces empty, you can send us your passport information later).</p>\n" +
        "                            <br>\n" +
        "                            <p><input class='clientInput'  ' type='text' id='passportNumber"+id+"' name='passportNumber' placeholder='Passport number'></p>\n" +
        "                            <p><input class='clientInput'  ' type='text' id='passportCountry"+id+"' name='passportCountry' placeholder='country of issue'></p> \n" +
        "                            <p><input class='clientInput'  ' type='text' id='passportDate"+id+"' name='passportDate' placeholder='issue date'></p> \n" +
        "                            <p><input class='clientInput'  ' type='text' id='passportExdate"+id+"' name='passportExdate' placeholder='expiration date'></p> \n" +
        "                        </div>\n" +
        "                            <div class='accomodation'>\n" +
        "                            <p>Accommodation:</p>\n" +
        "                            <input type='radio' id='radio1"+id+"' name='choice1' value='male'> -- Please check here if you would like to stay in a double room (shared with another tour participant) <br>\n" +
        "                            <input type='radio' id='radio2"+id+"' name='choice2' value='male'> -- Please check here if you want a single room for the tour - additional payment of $ 2985 USD.\n" +
        "                        </div>\n" +
        "                        </div>";
    return client;
}