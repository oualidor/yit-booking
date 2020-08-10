<?php

function setData($id ){
    $posteData = array(
        'ID' => $id,
        'post_title'    => wp_strip_all_tags( "booking"). " " .$id,
        'post_content'  => '',
        'post_status'   => 'publish',
        'comment_status'=> 'closed',
        'poste_name'    => 'booking',
        'ping_status' => 'closed',
        'post_type' => 'booking'
    );
    return $posteData;
}

function insert_wp_travel_engine_booking_setting($id){
    //wp_travel_engine_booking_setting
    $travler = Array(
        'traveler' => "1",
        'cost' => "3200",
        'due' => "0",
        'tid' => "114",
        'tname' => "Oualidoor",
        'datetime' => "2020-08-12"
    );

    $booking = Array(
        'fname' => 'ihab',
        'lname' => 'cheriti',
        'email' => 'ihab@gmail.com',
        'address' => 'El Bayah',
        'city' => 'El bayadh',
        'country' => 'Algeria',
        'survey' => ''
    );

    $wp_travel_engine_booking_setting_array = Array(
        'place_order' => Array(
            'traveler' => "1",
            'cost' => "3200",
            'due' => "0",
            'tid' => "114",
            'tname' => "Oualidoor",
            'datetime' => "2020-08-12",
            'booking' => $booking
        )
    );

    add_post_meta( $id, "wp_travel_engine_booking_setting", $wp_travel_engine_booking_setting_array );
}

function insrt_wp_travel_engine_booking_payment_status($id){
    $wp_travel_engine_booking_payment_status = "Pending";
    add_post_meta( $id, "wp_travel_engine_booking_payment_status", $wp_travel_engine_booking_payment_status);
}


function insert_wp_travel_engine_placeorder_setting($id, $index){
    $travelers = Array(
        'title' => Array($index => 'Mr'),
        'fname' => Array($index => 'KHIAL'),
        'lname' => Array($index => 'Mustapha'),
        'passport' => Array($index => '99999'),
        'email' => Array($index => 'mustapha@gmail.com'),
        'address' => Array($index =>'Boualem'),
        'city' => Array($index =>'Boulem'),
        'country' => Array($index =>'Algeria'),
        'postcode' => Array($index =>'32006'),
        'phone' => Array($index =>'0666397800'),
        'dob' => Array($index =>'08/12/1996')
    );

    $realtions = Array(
        "title" =>  Array("1" => 'Mr'),
        "fname" => Array("1" => 'KHIAL'),
        'lname' => Array("1" => 'oualid'),
        'phone' => Array("1" =>'0550750576'),
        'relation' => Array("1" =>'brother')
    );

    $wp_travel_engine_placeorder_setting_array = Array(
        'place_order' => Array(
            'travelers' => $travelers,
            'relation' => $realtions
        )
    );

    add_post_meta( $id, "wp_travel_engine_placeorder_setting", $wp_travel_engine_placeorder_setting_array );
}
