<?php

namespace App\Services;

interface PegawaiService
{
    function checkPegawai(string $id);
    function insertPegawai(array $user);
    function updatePegawai(array $user, string $id);
    function showAll();
    function showPegawai();
    function removePegawai(string $id);
}
