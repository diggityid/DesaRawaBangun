<?php
namespace App\Services;

interface AboutService {
    function checkAbout();
    function insertAbout(array $input);
    function updateAbout(array $input);
    function showAbout();
}