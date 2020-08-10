<?php


/**
 * @package  Yit-Booking
 *
 */
/*
Plugin Name: Yit-Booking
Plugin URI: http://www.yourit-departmennt.com/plugins/Yit-Booking
Description: Yit-Booking is a plugin acts like an extension for WP-trvale engine, it gives the ability to book on custom dates
Version: 1.0.0
Author: Oualid KHIAL, Ihab CHERITI
Author URI: http://oualidkhial.me
License: GPLv2 or later
Text Domain: Yit-Booking
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2005-2015 Automattic, Inc.
*/

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');

function register_shortcodes(){
    function registreBookingPage(){
        return require ('booking.php');
    }

    add_shortcode('YIT_BOOKING_PAGE', 'registreBookingPage');
}


register_shortcodes();


if (!class_exists('YitBooking')) {

    class YitBooking
    {
        function register()
        {
            add_action('admin_enqueue_scripts', array($this, 'enqueue'));
        }


        function enqueue()
        {
            // enqueue all our scripts
            wp_enqueue_style('mypluginstyle', plugins_url('/Styles/booking.css', __FILE__));
            wp_enqueue_script('mypluginscript', plugins_url('/Apis/Functions.js', __FILE__));
        }

        function activate()
        {
            require_once plugin_dir_path(__FILE__) . 'Apis/yit-booking-stats.php';
            yitBookingStats::activate();
        }

        function desactivate()
        {
            require_once plugin_dir_path(__FILE__) . 'Apis/yit-booking-stats.php';
            yitBookingStats::deactivate();
        }
    }

    $yitBooking = new YitBooking();
    $yitBooking->register();

    // activation
    register_activation_hook(__FILE__, array($yitBooking, 'activate'));

    // deactivation
    register_deactivation_hook(__FILE__, array($yitBooking, 'deactivate'));

}
