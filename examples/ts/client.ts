import { credentials } from '@grpc/grpc-js';
import * as registry from "./proto/js/registry/registry_grpc_pb";
import { TokenRequest, Credentials, TokenResponse } from "./proto/js/registry/accounts/accounts_pb";

interface GrpcError {
    code: number
    details: string
}

let client = new registry.AccountsServiceClient('api.your.nocloud:8000', credentials.createSsl())

let cred = new Credentials
cred.setType("standard")
cred.setDataList(["nocloud", "password"])

let request = new TokenRequest()
request.setExp(0)
request.setAuth(cred)

client.token(request, (err: GrpcError, response: TokenResponse) => {
    if (err) {
        console.error("Error", err.code, err.details)
        return
    }
    console.log("Success login, token:", response.getToken())
})
console.log('grpc calls are async, so you see this first')