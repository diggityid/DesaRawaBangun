<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Desa</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <style>
        tr,
        td {
            padding: 5px;
        }
    </style>
</head>

<body>
    <header>

            {{-- <a href="{{ route('admin.office') }}">Office</a>
            <a href="{{ route('admin.agenda') }}">Agenda</a>
            <a href="{{ route('admin.about') }}">About</a> --}}

    </header>

    @if(session($message ?? '') != null)
    <div class="row">
        <div class="alert alert-danger" role="alert">
            {{session($message ?? '')}}
        </div>
    </div>
    @endif


    <div class="container-md border rounded p-3">
        <form method="POST" action="{{ route('download-insert') }}" enctype="multipart/form-data>
            @csrf
            <div class="row mb-3">
                <label for="title" class="col-sm-2 col-form-label">Nama File</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="title" name="title" rows="3" value="{{ old('title') }}"></textarea>
                    @error('title')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="files" class="col-sm-2 col-form-label">Masukan File</label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" id="files" name="files">
                    @error('files')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="detail" class="col-sm-2 col-form-label">Deskripsi File</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="detail" name="detail" rows="3" value="{{ old('detail') }}"></textarea>
                    @error('detail')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Ubah</button>
        </form>
    </div>
</body>

</html>