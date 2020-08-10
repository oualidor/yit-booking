<?php

echo "
<div class='client' id='travler1'>
                            <div class='clientInfo'>
                             <p>
                              <select name='cars' style='width: 100%; margin-bottom: 10px;'>
                              <option value='volvo'>Mr.</option>
                              <option value='saab'>Mrs</option>
                              <option value='fiat'>Ms.</option>
                            </select>
                            </p>
                            <p><input class='clientInput'  type='text' id='firstname' name='firstName' placeholder='First Name (same as passport)'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='lastName' placeholder='Last Name (same as passport)'></p>
                            <p><input class='clientInput'  type='date' id='firstname' name='birthDate' placeholder='Birth Ddate'></p>
                            <p><input class='clientInput'  type='email' id='firstname' name='mail' placeholder='E-Mail'></p>
                            <p><input class='clientInput'  type='phone' id='firstname' name='phone' placeholder='Home Phone'></p>
                            <p><input class='clientInput'  type='phone' id='firstname' name='cellPhone' placeholder='Cell Phone'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='address' placeholder='Adress'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='city' placeholder='City'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='stat' placeholder='Stat'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='zip' placeholder='Poste code / ZIP'></p>
                            <p><input class='clientInput'  type='text' id='firstname' name='nameTag' placeholder='Name Tag'></p>
                        </div>
                            <div class='passportInfo'>
                            <p>Passport information: (if you don’t have a valid passport at the time of the booking, leave the spaces empty, you can send us your passport information later).</p>
                            <br>
                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportNumber' placeholder='Passport number'></p>
                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportCountry' placeholder='country of issue'></p> 
                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportDate' placeholder='issue date'></p> 
                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportExdate' placeholder='expiration date'></p> 
                        </div>
                            <div class='accomodation'>
                            <p>Accommodation:</p>
                            <input type='radio' id='male' name='gender' value='male'> -- Please check here if you would like to stay in a double room (shared with another tour participant) <br>
                            <input type='radio' id='male' name='gender' value='male'> -- Please check here if you want a single room for the tour - additional payment of $ 2985 USD.
                        </div>
                        </div> 
";
