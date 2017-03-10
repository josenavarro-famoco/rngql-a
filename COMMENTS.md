query HomePage($organizationId: ID!, $hasSelectedOrganization: Boolean!) {
  currentUser {
    username
  }
  organizations {
    id
    name
  }
  organization(id: $organizationId) @include(if: $hasSelectedOrganization){
    id
    name
    devices{
      ...DeviceTable
    }
  }

}

fragment DeviceTable on Device {
  famoco_id
  fleet
  last_sync
  sync_status
  actions {
    name
    description
  }
}
