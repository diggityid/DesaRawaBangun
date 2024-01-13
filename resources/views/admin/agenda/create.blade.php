<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Buat Agenda Kegiatan</title>
</head>

<body>
    @include('components.header', ['user' => $user,
    'add' => $user ? 'agenda-form-create' : '',
    'text' => $user ? 'Buat' : ''])

<div class="container-md border rounded p-3">
    <form method="post" action="{{ route('agenda-insert') }}" enctype="multipart/form-data">
        @csrf
        <div class="row mb-3">
            <label for="title" class="col-sm-2 col-form-label">Nama Agenda Kegiatan</label>
            <div class="col-sm-10">
                <input class="form-control @error('title') is-invalid @enderror" type="text" name="title" id="title"
                    value="{{ old('title') }}">
                @error('title')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="images" class="col-sm-2 col-form-label">Masukan Gambar</label>
            <div class="col-sm-10">
                <input class="form-control @error('images') is-invalid @enderror" type="file"
                    id="images" name="images">
                @error('images')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="location" class="col-sm-2 col-form-label">Lokasi</label>
            <div class="col-sm-10">
                <input class="form-control @error('location') is-invalid @enderror" type="text" name="location" id="location"
                    value="{{ old('location') }}">
                @error('location')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="start" class="col-sm-2 col-form-label">Kegiatan Dimulai</label>
            <div class="col-sm-10">
                <input class="form-control @error('start') is-invalid @enderror" type="datetime" name="start" id="start"
                    value="{{ old('start') }}">
                @error('start')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="finish" class="col-sm-2 col-form-label">Kegiatan Berakhir</label>
            <div class="col-sm-10">
                <input class="form-control @error('finish') is-invalid @enderror" type="datetime" name="finish" id="finish"
                    value="{{ old('finish') }}">
                @error('finish')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <div class="row mb-3">
            <label for="detail" class="col-sm-2 col-form-label">Detail Agenda Kegiatan</label>
            <div class="col-sm-10">
                <textarea class="form-control @error('detail') is-invalid @enderror" id="detail" name="detail"
                    rows="3" value="{{ old('detail') }}"></textarea>
                @error('detail')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Masukan Data</button>
    </form>
</div>

</body>

</html>