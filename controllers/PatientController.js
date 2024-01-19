// import Model Patient
const Patient = require("../models/patient");

// buat class PatientController
class PatientController {
  // buat fungsi
  async index(req, res) {
    // memanggil method static all dengan async await.
    const patient = await Patient.all();

    const data = {
      message: "Menampilkkan semua patient",
      data: patient,
    };

    if ($patient.isEmpty()) {
      $data = {
          message: "Data is empty",
      };
      return response().son($data, 200);
  }


    return response().json($data, 200);
    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    const patient = await Patient.create(req.body);

    if ($patient) {
      $input = {
        id: req.body.id,
        nama: req.body.nama,
        no_hp_pasien : req.body.no_hp_pasien,
        alamat_pasien: req.body.alamat_pasien,
        status_pasien: req.body.status_pasien,
        tanggal_masuk: req.body.tanggal_masuk,
        tanggal_keluar: req.body.tanggal_keluar,
        timestamp: req.body.timestamp,
      },

      $data = {
        message: "Resource is added successfully",
        data:  "patient",
      };
    return response().son($data, 201);
    } else {
      $data = {
          message: "All fields must be filled correctly",
    };
      return response().json($data, 422);
  };
   

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    // cari id patient yang akan diupdate
    const patient = await Patient.find(id);

    if (patient) {
      // melakukan update data patient
      const patient = await Patient.update(req.body, id);
      const data = {
        message: `Mengedit patient id ${id}`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data patient id ${id} tidak ditemukan`,
      };

      return res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
      await Patient.delete(id);
      const data = {
        message: `Resource is delete succesfully`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `resource not found`,
      };

      return res.status(404).json(data);
    }
  }

  async find(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
      await Patient.find(id);
      const data = {
        message: `Resource is find succesfully`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `resource not found`,
      };

      return res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const patient = await patient.find(id);

    if (patient) {
      const data = {
        message: `Menampilkan patient id ${id}`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data patient id ${id} tidak ditemukan`,
      };
      return res.status(404).json(data);
    }
  }

  async search(req, res) {
    const { id } = req.params;
    const patient = await patient.find(id);

    if (patient) {
      const data = {
        message: `get searched resource`,
        data: patient,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `resorce not found`,
      };
      return res.status(404).json(data);
    }
  }

  async positive(req, res) {
    const status  = "positive";
    const resources = await getPositiveResource();

    // Tampilkan resource yang berhasil ditemukan
    for (const resource of resources) {
      console.log(resource.name);
      const data = {
        message: `get positive resource`,
        data: positive,
      };
      return res.status(200).json(data);
    }
  }

  async recovered(req, res) {
    const status  = "recovered";

    await Patient.findByStatus(status).then((result) => {
      const data = {
        message: 'Menampilkan data patient status ${status}',
        data: [result],
      };

      res.json(data);
    });
  }


  async dead(res) {
    const status = "dead";

    await Patient.findByStatus(status).then((result) => {
      const data = {
        message: "Menampilkan data patient status ${status}",
        data: [result],
      };

      res.json(data);
    });
  }
}



// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
