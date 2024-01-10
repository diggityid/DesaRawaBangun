<?php

namespace App\Services;

interface PegawaiService
{
    function check(string $id);
    function insert(array $user);
    function update(array $user, string $id);
    function showAll();
    function show();
    function remove(string $id);
}
