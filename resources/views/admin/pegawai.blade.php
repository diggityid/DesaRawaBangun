<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Pegawai</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>

    <h3>Pendidikan</h3>

    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('pegawai-input') }}">
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="name" name="name" rows="3" value="{{ old('name') }}"></textarea>
                    @error('name')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="image_profile" class="col-sm-2 col-form-label">Masukan Foto</label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" id="image_profile" name="image_profile">
                </div>
            </div>

            <div class="row mb-3">
                <label for="jabatan" class="col-sm-2 col-form-label">Jabatan</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="jabatan" name="jabatan" rows="3" value="{{ old('jabatan') }}"></textarea>
                    @error('jabatan')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3" id="pendidikanWrapper">
                <label for="misi" class="col-sm-2 col-form-label">Pendidikan</label>
                <div class="col-sm-10" class="field-wrapper">
                    <textarea class="form-control" id="misi" name="misi" rows="3" value="{{ old('misi') }}"></textarea>
                    <button class="remove-button">Hapus</button>
                </div>
                <div class="col-sm-10 offset-sm-2">
                    <button id="addPendidikanButton" type="button">Tambah Pendidikan</button>
                </div>
            </div>


            <button type="submit" class="btn btn-primary">Ubah</button>
        </form>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var addPendidikanButton = document.getElementById("addPendidikanButton");
            var pegawaiWrapper = document.getElementById("pegawaiWrapper");

            addPendidikanButton.addEventListener("click", function() {
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
                pegawaiWrapper.appendChild(fieldWrapper);
            });

            pegawaiWrapper.addEventListener("click", function(e) {
                if (e.target.classList.contains("remove-button")) {
                    e.target.parentNode.remove();
                }
            });
        });
    </script>
</body>

</html>