const UserController = require('../../src/app/Controllers/UserController')

describe("#Route User Shoub test suit", () => {
  const defaultParams = {
    request: {
      method: '',
      headers: {

      },
      body: {

      }
    },
    response: {
      setHeader: jest.fn(),
      writeHeader: jest.fn(),
      end: jest.fn(),
      status: ''
    },
    values: () => Object.values(defaultParams)
  }

  describe("#Get shoube suit function test", () => {
    test("#testando", () => {
      const user = new UserController();
      const params = {
        ...defaultParams
      }
      params.request.method = 'get';
      user.get(...params.values())
      expect(params.response.end).toHaveBeenCalledWith("Hello World")
    })
  })

  describe("#Store shoube suit function test", () => {
    test("#Validação de dados ", async () => {
      const user = new UserController();
      const params = {
        ...defaultParams
      }

      params.request.method = 'POST';
      params.request.body = {
        name: "Kaio",
        email: "contato@overstack.com.br",
        phone: "1198303091",
        font: "teste"
      }

      // jest.spyOn(user, user.store.name).mockResolvedValue()

      const response = await user.store(...params.values())
      console.log(response)
      expect(user.store).toHaveBeenCalled()
      // expect(params.response.json).toHaveBeenCalledWith({
      //   error: true,
      //   code: 103,
      //   message: "Error: Dados inválidos!"
      // })

    }, 30000)
  })

})