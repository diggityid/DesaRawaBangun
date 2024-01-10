<?php
namespace App\Services;

interface AboutService {
    function check();
    function insert(array $input);
    function update(array $input);
    function show();
}