import { credentials, Metadata } from '@grpc/grpc-js';
import * as registry from "./proto/js/registry/registry_grpc_pb";
import { ListRequest, ListResponse } from "./proto/js/registry/accounts/accounts_pb";

interface GrpcError {
    code: number
    details: string
}

const token = "usual.jwt.token"

let client = new registry.AccountsServiceClient('api.acrocloud.dev.acromove.com:8000', credentials.createSsl())

let ctx = new Metadata()
ctx.add("Authorization", `Bearer ${token}`)

let request = new ListRequest()
client.list(request, ctx, (err: GrpcError, response: ListResponse) => {
    if (err) {
        console.error("Error", err.code, err.details)
        return
    }
    console.log("Retrieved accoutns, total:", response.getPoolList().length)
    console.log("|  uuid  | title | access level ")
    for (let acc of response.getPoolList()) {
        console.log(acc.getUuid().slice(0, 8), acc.getTitle(), acc.getAccess().getLevel())
    }
})