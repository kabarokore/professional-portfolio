# andasy.hcl app configuration file generated for bitten on Wednesday, 06-Aug-25 16:46:13 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "bitten"

app {

  env = {}

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "bitten"
  }

}
