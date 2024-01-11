<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LembagaController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\PengumumanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/about', [AboutController::class, 'about'])->name('about');
Route::get('/perangkat-desa', [PegawaiController::class, 'perangkat'])->name('perangkat-desa');
Route::get('pegawai/{id}', [PegawaiController::class, 'pegawai'])->name('pegawai');
Route::get('/pengumuman', [PengumumanController::class, 'pengumuman'])->name('pengumuman');
Route::get('/download', [DownloadController::class, 'download'])->name('download');
Route::get('/galeri', [GaleriController::class, 'galeri'])->name('galeri');
Route::get('/lembaga', [LembagaController::class, 'lembaga'])->name('lembaga');

Route::prefix('/admin')->middleware(['auth', 'verified'])->group(function () {
    //about
    Route::get('/about', [AboutController::class, 'create'])->name('about-form-create');
    Route::post('/about', [AboutController::class, 'store'])->name('about-insert');

    //Perangkat Desa
    Route::get('/pegawai', [PegawaiController::class, 'create'])->name('pegawai-form-create');
    Route::post('/pegawai', [PegawaiController::class, 'store'])->name('pegawai-insert');
    Route::get('/pegawai/update/{id}', [PegawaiController::class, 'edit'])->name('pegawai-form-edit');
    Route::post('/pegawai/update/{id}', [PegawaiController::class, 'update'])->name('pegawai-update');
    route::post('/pegawai/delete/{id}', [PegawaiController::class, 'delete'])->name('pegawai-delete');

    //Galeri
    Route::get('/galeri', [GaleriController::class, 'create'])->name('galeri-form-create');
    Route::post('/galeri', [GaleriController::class, 'store'])->name('galeri-insert');
    Route::get('/galeri/update/{id}', [GaleriController::class, 'edit'])->name('galeri-form-edit');
    Route::post('/galeri/update/{id}', [GaleriController::class, 'update'])->name('galeri-update');
    Route::post('/galeri/delete/{id}', [GaleriController::class, 'delete'])->name('galeri-delete');

    Route::get('/download', [DownloadController::class, 'admin'])->name('download-form');
    Route::post('/download', [DownloadController::class, 'store'])->name('download-insert');

    Route::get('/lembaga', [LembagaController::class, 'lembaga'])->name('lembaga-form');
    Route::post('/lembaga', [LembagaController::class, 'insertLembaga'])->name('lembaga-insert');
    Route::post('/lembaga/{$id}/update', [LembagaController::class, 'updateLembaga'])->name('lembaga-update');
    Route::post('/lembaga/{$id}/delete', [LembagaController::class, 'deleteLembaga'])->name('lembaga-delete');
});



Route::post('/admin/login', [UserController::class, 'doLogin']);
Route::get('/admin/current', [UserController::class, 'curren']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
