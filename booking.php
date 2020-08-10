<style><?php require ("Styles/booking.css");?></style>
<script><?php require ("Componenets/JS/Client.js");?></script>
<script><?php require ("Apis/JS/booking.js");?></script>

<?php


if(! isset($_POST['id']) and !isset($_POST["sendOrder"])){

    echo "You are not supposed to be here";
}
else{
    if(isset($_POST["sendOrder"])){
        require ("Apis/PHP/booking.php");
        $emptyPost = array(
            'post_title'    => "temp tile",
            'post_content'  => 'temp_content',
        );

        $id =  wp_insert_post($emptyPost , false );

        if($id != 0){
          $reuslt = wp_insert_post( setData($id), false );
          if($reuslt != 0){
              //Get Post Data
              insert_wp_travel_engine_booking_setting($id);

              //wp_travel_engine_booking_payment_status
              insrt_wp_travel_engine_booking_payment_status($id);


              //$wp_travel_engine_placeorder_setting
              insert_wp_travel_engine_placeorder_setting($id, 1);

          }
        }else{
            echo "error while crrating booking post";
        }
    }else{
        $id = $_POST['id'];
        $date = $_POST['date'];
        $post = get_post( $id );
        $price_detail = get_post_meta( $id, "wp_travel_engine_setting_trip_prev_price", TRUE);
        echo "
           <div class='tripInfo'>
                <div class='tripTitle' style='float: left'>
                    $post->post_title
                </div>
                <div class='tripDate' style='float: right'>$date</div>
                Price: $price_detail
           </div>";
        echo "
            <form action='' METHOD='post'>
                    <div class='bookNowContainer'>
                        <div class='leftPane'>
                        </div>
                        <div class='rightPane'>
                        <div class='travlersNumber'>
                            Booking for: <br>
                            <div class='upDownContainer'>
                                <div class='downTravler' >
                                    -
                                </div>
                                <div class='number'>
                                    1
                                </div>
                                <div class='upTravler'>
                                    +
                                </div>
                                
                            </div>
                            <div class='totalContainer'>Total: 700$</div>
                        </div>
                </div>
                    </div>
                    <input type='submit' name='sendOrder'>  
            </form>      
        ";
    }
}
