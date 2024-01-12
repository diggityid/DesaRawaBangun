<?php
namespace App\Services;

interface GeografisService{
    function insert(array $input);
    function update(array $input);
    function showAll();
}