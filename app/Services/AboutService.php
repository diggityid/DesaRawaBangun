<?php
namespace App\Services;

interface AboutService {
    function insert(array $input);
    function update(array $input);
    function showAll();
}