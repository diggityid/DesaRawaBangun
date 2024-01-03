<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang Desa</title>

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
        <div>
            {{-- <a href="{{ route('admin.office') }}">Office</a>
            <a href="{{ route('admin.agenda') }}">Agenda</a>
            <a href="{{ route('admin.about') }}">About</a> --}}

            <form method="post" action="/admin/logout">
                @csrf
                <button class="w-15 btn btn-lg btn-danger" type="submit">Sign Out</button>
            </form>
        </div>
    </header>

    <h1>Welcome to about</h1>

    @if(session($message ?? '') != null)
    <div class="row">
        <div class="alert alert-danger" role="alert">
            {{session($message ?? '')}}
        </div>
    </div>
    @endif


    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('about-input' )}}">
            <div class="row mb-3">
                <label for="intro" class="col-sm-2 col-form-label">Tetang Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="intro" name="intro" rows="3" value="{{ old('intro') }}"></textarea>
                    @error('intro')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3" id="visiWrapper">
                <label for="visi" class="col-sm-2 col-form-label">Visi</label>
                <div class="col-sm-10" class="field-wrapper">
                    <textarea class="form-control" id="visi" name="visi" rows="3" value="{{ old('visi') }}"></textarea>
                    <button class="remove-button">Hapus</button>
                </div>
                <div class="col-sm-10 offset-sm-2">
                    <button id="addVisiButton" type="button">Tambah Visi</button>
                </div>
            </div>

            <div class="row mb-3" id="misiWrapper">
                <label for="misi" class="col-sm-2 col-form-label">Misi</label>
                <div class="col-sm-10" class="field-wrapper">
                    <textarea class="form-control" id="misi" name="misi" rows="3" value="{{ old('misi') }}"></textarea>
                    <button class="remove-button">Hapus</button>
                </div>
                <div class="col-sm-10 offset-sm-2">
                    <button id="addMisiButton" type="button">Tambah Misi</button>
                </div>
            </div>

            <div class="row mb-3">
                <label for="history" class="col-sm-2 col-form-label">Sejarah Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="history" name="history" rows="3" value="{{ old('history') }}"></textarea>
                    @error('history')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Ubah</button>
        </form>
    </div>



    {{-- <form method="post" action="/admin/about">
        @csrf
        <table>
            <tr>
                <td><label for="inputIntro">Tentang Desa</label></td>
            </tr>
            <tr>
                <td>
                    <input type="text" name="inputIntro" id="inputIntro">
                </td>
            </tr>
            <tr>
                <td><label for="inputVisi">Visi dari Desa</label></td>
            </tr>
            <tr id="visiWrapper">
                <td><input type="text" name="inputVisi[]" /></td>
                <td><button id="addVisiButton" type="button">Tambah Visi</button></td>
                <td><button class="remove-button">Hapus</button></td>
            </tr>
            <tr>
                <td><label for="inputMisi">Misi dari Desa</label></td>
            </tr>
            <tr id="misiWrapper">
                <td><input type="text" name="inputMisi[]" /></td>
                <td><button id="addMisiButton" type="button">Tambah Misi</button></td>
                <td><button class="remove-button">Hapus</button></td>
            </tr>
            <tr>
                <td><label for="inputHistory">Sejarah Desa</label></td>
            </tr>
            <tr>
                <td>
                    <input type="text" name="inputHistory" id="inputHistory">
                </td>
            </tr>
            <tr>
                <td>
                    <button type="submit">Ubah</button>
                </td>
            </tr>
        </table>
    </form> --}}

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var addVisiButton = document.getElementById("addVisiButton");
            var visiWrapper = document.getElementById("visiWrapper");

            addVisiButton.addEventListener("click", function() {
                var fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("field-wrapper");

                var input = document.createElement("input");
                input.type = "text";
                input.name = "inputVisi[]";

                var removeButton = document.createElement("button");
                removeButton.classList.add("remove-button");
                removeButton.textContent = "Hapus";

                fieldWrapper.appendChild(input);
                fieldWrapper.appendChild(removeButton);
                visiWrapper.appendChild(fieldWrapper);
            });

            visiWrapper.addEventListener("click", function(e) {
                if (e.target.classList.contains("remove-button")) {
                    e.target.parentNode.remove();
                }
            });

            var addMisiButton = document.getElementById("addMisiButton");
            var misiWrapper = document.getElementById("misiWrapper");

            addMisiButton.addEventListener("click", function() {
                var fieldWrapper = document.createElement("div");
                fieldWrapper.classList.add("field-wrapper");

                var input = document.createElement("input");
                input.type = "text";
                input.name = "inputMisi[]";

                var removeButton = document.createElement("button");
                removeButton.classList.add("remove-button");
                removeButton.textContent = "Hapus";

                fieldWrapper.appendChild(input);
                fieldWrapper.appendChild(removeButton);
                misiWrapper.appendChild(fieldWrapper);
            });

            misiWrapper.addEventListener("click", function(e) {
                if (e.target.classList.contains("remove-button")) {
                    e.target.parentNode.remove();
                }
            });
        });

        
    </script>
</body>

</html>