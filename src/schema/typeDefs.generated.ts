import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 38, end: 43 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 48, end: 59 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "page",
                loc: { start: 60, end: 64 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 66, end: 69 },
                },
                loc: { start: 66, end: 69 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "1",
                loc: { start: 72, end: 73 },
              },
              directives: [],
              loc: { start: 60, end: 73 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 75, end: 80 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 82, end: 85 },
                },
                loc: { start: 82, end: 85 },
              },
              directives: [],
              loc: { start: 75, end: 85 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sort",
                loc: { start: 87, end: 91 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "GallerySort",
                  loc: { start: 93, end: 104 },
                },
                loc: { start: 93, end: 104 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "CREATED_AT_DESC",
                loc: { start: 107, end: 122 },
              },
              directives: [],
              loc: { start: 87, end: 122 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Gallery",
                    loc: { start: 126, end: 133 },
                  },
                  loc: { start: 126, end: 133 },
                },
                loc: { start: 126, end: 134 },
              },
              loc: { start: 125, end: 135 },
            },
            loc: { start: 125, end: 136 },
          },
          directives: [],
          loc: { start: 48, end: 136 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 139, end: 149 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 150, end: 152 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 154, end: 156 },
                  },
                  loc: { start: 154, end: 156 },
                },
                loc: { start: 154, end: 157 },
              },
              directives: [],
              loc: { start: 150, end: 157 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Gallery",
                loc: { start: 160, end: 167 },
              },
              loc: { start: 160, end: 167 },
            },
            loc: { start: 160, end: 168 },
          },
          directives: [],
          loc: { start: 139, end: 168 },
        },
      ],
      loc: { start: 26, end: 170 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 184, end: 192 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addCollection",
            loc: { start: 197, end: 210 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 211, end: 215 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 217, end: 223 },
                  },
                  loc: { start: 217, end: 223 },
                },
                loc: { start: 217, end: 224 },
              },
              directives: [],
              loc: { start: 211, end: 224 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 226, end: 237 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 239, end: 245 },
                },
                loc: { start: 239, end: 245 },
              },
              directives: [],
              loc: { start: 226, end: 245 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 248, end: 258 },
              },
              loc: { start: 248, end: 258 },
            },
            loc: { start: 248, end: 259 },
          },
          directives: [],
          loc: { start: 197, end: 259 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCollection",
            loc: { start: 262, end: 278 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 279, end: 281 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 283, end: 285 },
                  },
                  loc: { start: 283, end: 285 },
                },
                loc: { start: 283, end: 286 },
              },
              directives: [],
              loc: { start: 279, end: 286 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 288, end: 292 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 294, end: 300 },
                },
                loc: { start: 294, end: 300 },
              },
              directives: [],
              loc: { start: 288, end: 300 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 302, end: 313 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 315, end: 321 },
                },
                loc: { start: 315, end: 321 },
              },
              directives: [],
              loc: { start: 302, end: 321 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "imgId",
                loc: { start: 323, end: 328 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "ID",
                        loc: { start: 331, end: 333 },
                      },
                      loc: { start: 331, end: 333 },
                    },
                    loc: { start: 331, end: 334 },
                  },
                  loc: { start: 330, end: 335 },
                },
                loc: { start: 330, end: 336 },
              },
              directives: [],
              loc: { start: 323, end: 336 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 339, end: 349 },
              },
              loc: { start: 339, end: 349 },
            },
            loc: { start: 339, end: 350 },
          },
          directives: [],
          loc: { start: 262, end: 350 },
        },
      ],
      loc: { start: 172, end: 352 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 359, end: 369 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 374, end: 376 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 378, end: 380 },
              },
              loc: { start: 378, end: 380 },
            },
            loc: { start: 378, end: 381 },
          },
          directives: [],
          loc: { start: 374, end: 381 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 384, end: 388 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 390, end: 396 },
              },
              loc: { start: 390, end: 396 },
            },
            loc: { start: 390, end: 397 },
          },
          directives: [],
          loc: { start: 384, end: 397 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 400, end: 411 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 413, end: 419 },
            },
            loc: { start: 413, end: 419 },
          },
          directives: [],
          loc: { start: 400, end: 419 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 422, end: 431 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 433, end: 439 },
            },
            loc: { start: 433, end: 439 },
          },
          directives: [],
          loc: { start: 422, end: 439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 442, end: 451 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 453, end: 459 },
            },
            loc: { start: 453, end: 459 },
          },
          directives: [],
          loc: { start: 442, end: 459 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "imgs", loc: { start: 462, end: 466 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Img",
                    loc: { start: 469, end: 472 },
                  },
                  loc: { start: 469, end: 472 },
                },
                loc: { start: 469, end: 473 },
              },
              loc: { start: 468, end: 474 },
            },
            loc: { start: 468, end: 475 },
          },
          directives: [],
          loc: { start: 462, end: 475 },
        },
      ],
      loc: { start: 354, end: 477 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 490, end: 495 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "galleries",
            loc: { start: 500, end: 509 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "page",
                loc: { start: 510, end: 514 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 516, end: 519 },
                },
                loc: { start: 516, end: 519 },
              },
              defaultValue: {
                kind: "IntValue",
                value: "1",
                loc: { start: 522, end: 523 },
              },
              directives: [],
              loc: { start: 510, end: 523 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 525, end: 530 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 532, end: 535 },
                },
                loc: { start: 532, end: 535 },
              },
              directives: [],
              loc: { start: 525, end: 535 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "sort",
                loc: { start: 537, end: 541 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "GallerySort",
                  loc: { start: 543, end: 554 },
                },
                loc: { start: 543, end: 554 },
              },
              defaultValue: {
                kind: "EnumValue",
                value: "CREATED_AT_DESC",
                loc: { start: 557, end: 572 },
              },
              directives: [],
              loc: { start: 537, end: 572 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Gallery",
                    loc: { start: 576, end: 583 },
                  },
                  loc: { start: 576, end: 583 },
                },
                loc: { start: 576, end: 584 },
              },
              loc: { start: 575, end: 585 },
            },
            loc: { start: 575, end: 586 },
          },
          directives: [],
          loc: { start: 500, end: 586 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gallery",
            loc: { start: 589, end: 596 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 597, end: 599 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 601, end: 603 },
                  },
                  loc: { start: 601, end: 603 },
                },
                loc: { start: 601, end: 604 },
              },
              directives: [],
              loc: { start: 597, end: 604 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Gallery",
                loc: { start: 607, end: 614 },
              },
              loc: { start: 607, end: 614 },
            },
            loc: { start: 607, end: 615 },
          },
          directives: [],
          loc: { start: 589, end: 615 },
        },
      ],
      loc: { start: 478, end: 617 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 631, end: 639 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addGallery",
            loc: { start: 644, end: 654 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 655, end: 659 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 661, end: 667 },
                  },
                  loc: { start: 661, end: 667 },
                },
                loc: { start: 661, end: 668 },
              },
              directives: [],
              loc: { start: 655, end: 668 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 670, end: 681 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 683, end: 689 },
                },
                loc: { start: 683, end: 689 },
              },
              directives: [],
              loc: { start: 670, end: 689 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "imgUrls",
                loc: { start: 691, end: 698 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "String",
                        loc: { start: 701, end: 707 },
                      },
                      loc: { start: 701, end: 707 },
                    },
                    loc: { start: 701, end: 708 },
                  },
                  loc: { start: 700, end: 709 },
                },
                loc: { start: 700, end: 710 },
              },
              directives: [],
              loc: { start: 691, end: 710 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tags",
                loc: { start: 712, end: 716 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "ListType",
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: {
                        kind: "Name",
                        value: "String",
                        loc: { start: 719, end: 725 },
                      },
                      loc: { start: 719, end: 725 },
                    },
                    loc: { start: 719, end: 726 },
                  },
                  loc: { start: 718, end: 727 },
                },
                loc: { start: 718, end: 728 },
              },
              directives: [],
              loc: { start: 712, end: 728 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Gallery",
                loc: { start: 731, end: 738 },
              },
              loc: { start: 731, end: 738 },
            },
            loc: { start: 731, end: 739 },
          },
          directives: [],
          loc: { start: 644, end: 739 },
        },
      ],
      loc: { start: 619, end: 741 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "GallerySort",
        loc: { start: 748, end: 759 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED_AT_ASC",
            loc: { start: 764, end: 778 },
          },
          directives: [],
          loc: { start: 764, end: 778 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED_AT_DESC",
            loc: { start: 781, end: 796 },
          },
          directives: [],
          loc: { start: 781, end: 796 },
        },
      ],
      loc: { start: 743, end: 798 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Gallery", loc: { start: 805, end: 812 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 817, end: 819 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 821, end: 823 },
              },
              loc: { start: 821, end: 823 },
            },
            loc: { start: 821, end: 824 },
          },
          directives: [],
          loc: { start: 817, end: 824 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 827, end: 831 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 833, end: 839 },
              },
              loc: { start: 833, end: 839 },
            },
            loc: { start: 833, end: 840 },
          },
          directives: [],
          loc: { start: 827, end: 840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 843, end: 854 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 856, end: 862 },
            },
            loc: { start: 856, end: 862 },
          },
          directives: [],
          loc: { start: 843, end: 862 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 865, end: 874 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 876, end: 882 },
              },
              loc: { start: 876, end: 882 },
            },
            loc: { start: 876, end: 883 },
          },
          directives: [],
          loc: { start: 865, end: 883 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 886, end: 895 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 897, end: 903 },
              },
              loc: { start: 897, end: 903 },
            },
            loc: { start: 897, end: 904 },
          },
          directives: [],
          loc: { start: 886, end: 904 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "imgs", loc: { start: 907, end: 911 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Img",
                    loc: { start: 914, end: 917 },
                  },
                  loc: { start: 914, end: 917 },
                },
                loc: { start: 914, end: 918 },
              },
              loc: { start: 913, end: 919 },
            },
            loc: { start: 913, end: 920 },
          },
          directives: [],
          loc: { start: 907, end: 920 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tags", loc: { start: 923, end: 927 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "GalleryTag",
                    loc: { start: 930, end: 940 },
                  },
                  loc: { start: 930, end: 940 },
                },
                loc: { start: 930, end: 941 },
              },
              loc: { start: 929, end: 942 },
            },
            loc: { start: 929, end: 943 },
          },
          directives: [],
          loc: { start: 923, end: 943 },
        },
      ],
      loc: { start: 800, end: 945 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Img", loc: { start: 952, end: 955 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 960, end: 962 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 964, end: 966 },
              },
              loc: { start: 964, end: 966 },
            },
            loc: { start: 964, end: 967 },
          },
          directives: [],
          loc: { start: 960, end: 967 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 970, end: 973 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 975, end: 981 },
              },
              loc: { start: 975, end: 981 },
            },
            loc: { start: 975, end: 982 },
          },
          directives: [],
          loc: { start: 970, end: 982 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 985, end: 990 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 992, end: 995 } },
            loc: { start: 992, end: 995 },
          },
          directives: [],
          loc: { start: 985, end: 995 },
        },
      ],
      loc: { start: 947, end: 997 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1010, end: 1015 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "galleryTags",
            loc: { start: 1020, end: 1031 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "GalleryTag",
                    loc: { start: 1034, end: 1044 },
                  },
                  loc: { start: 1034, end: 1044 },
                },
                loc: { start: 1034, end: 1045 },
              },
              loc: { start: 1033, end: 1046 },
            },
            loc: { start: 1033, end: 1047 },
          },
          directives: [],
          loc: { start: 1020, end: 1047 },
        },
      ],
      loc: { start: 998, end: 1049 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1063, end: 1071 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "addGalleryTag",
            loc: { start: 1076, end: 1089 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1090, end: 1094 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1096, end: 1102 },
                  },
                  loc: { start: 1096, end: 1102 },
                },
                loc: { start: 1096, end: 1103 },
              },
              directives: [],
              loc: { start: 1090, end: 1103 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "GalleryTag",
                loc: { start: 1106, end: 1116 },
              },
              loc: { start: 1106, end: 1116 },
            },
            loc: { start: 1106, end: 1117 },
          },
          directives: [],
          loc: { start: 1076, end: 1117 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "tagGallery",
            loc: { start: 1120, end: 1130 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "galleryId",
                loc: { start: 1131, end: 1140 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1142, end: 1144 },
                  },
                  loc: { start: 1142, end: 1144 },
                },
                loc: { start: 1142, end: 1145 },
              },
              directives: [],
              loc: { start: 1131, end: 1145 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tagId",
                loc: { start: 1147, end: 1152 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1154, end: 1156 },
                  },
                  loc: { start: 1154, end: 1156 },
                },
                loc: { start: 1154, end: 1157 },
              },
              directives: [],
              loc: { start: 1147, end: 1157 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Gallery",
                loc: { start: 1160, end: 1167 },
              },
              loc: { start: 1160, end: 1167 },
            },
            loc: { start: 1160, end: 1168 },
          },
          directives: [],
          loc: { start: 1120, end: 1168 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "untagGallery",
            loc: { start: 1171, end: 1183 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "galleryId",
                loc: { start: 1184, end: 1193 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1195, end: 1197 },
                  },
                  loc: { start: 1195, end: 1197 },
                },
                loc: { start: 1195, end: 1198 },
              },
              directives: [],
              loc: { start: 1184, end: 1198 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "tagId",
                loc: { start: 1200, end: 1205 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1207, end: 1209 },
                  },
                  loc: { start: 1207, end: 1209 },
                },
                loc: { start: 1207, end: 1210 },
              },
              directives: [],
              loc: { start: 1200, end: 1210 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Gallery",
                loc: { start: 1213, end: 1220 },
              },
              loc: { start: 1213, end: 1220 },
            },
            loc: { start: 1213, end: 1221 },
          },
          directives: [],
          loc: { start: 1171, end: 1221 },
        },
      ],
      loc: { start: 1051, end: 1223 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "GalleryTag",
        loc: { start: 1230, end: 1240 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1245, end: 1247 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1249, end: 1251 },
              },
              loc: { start: 1249, end: 1251 },
            },
            loc: { start: 1249, end: 1252 },
          },
          directives: [],
          loc: { start: 1245, end: 1252 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1255, end: 1259 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1261, end: 1267 },
              },
              loc: { start: 1261, end: 1267 },
            },
            loc: { start: 1261, end: 1268 },
          },
          directives: [],
          loc: { start: 1255, end: 1268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "galleries",
            loc: { start: 1271, end: 1280 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Gallery",
                    loc: { start: 1283, end: 1290 },
                  },
                  loc: { start: 1283, end: 1290 },
                },
                loc: { start: 1283, end: 1291 },
              },
              loc: { start: 1282, end: 1292 },
            },
            loc: { start: 1282, end: 1293 },
          },
          directives: [],
          loc: { start: 1271, end: 1293 },
        },
      ],
      loc: { start: 1225, end: 1295 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1308, end: 1313 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "login",
            loc: { start: 1318, end: 1323 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1324, end: 1329 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1331, end: 1337 },
                  },
                  loc: { start: 1331, end: 1337 },
                },
                loc: { start: 1331, end: 1338 },
              },
              directives: [],
              loc: { start: 1324, end: 1338 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1340, end: 1348 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1350, end: 1356 },
                  },
                  loc: { start: 1350, end: 1356 },
                },
                loc: { start: 1350, end: 1357 },
              },
              directives: [],
              loc: { start: 1340, end: 1357 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthPayload",
                loc: { start: 1360, end: 1371 },
              },
              loc: { start: 1360, end: 1371 },
            },
            loc: { start: 1360, end: 1372 },
          },
          directives: [],
          loc: { start: 1318, end: 1372 },
        },
      ],
      loc: { start: 1296, end: 1374 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1388, end: 1396 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 1401, end: 1409 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1410, end: 1415 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1417, end: 1423 },
                  },
                  loc: { start: 1417, end: 1423 },
                },
                loc: { start: 1417, end: 1424 },
              },
              directives: [],
              loc: { start: 1410, end: 1424 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1426, end: 1434 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1436, end: 1442 },
                  },
                  loc: { start: 1436, end: 1442 },
                },
                loc: { start: 1436, end: 1443 },
              },
              directives: [],
              loc: { start: 1426, end: 1443 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthPayload",
                loc: { start: 1446, end: 1457 },
              },
              loc: { start: 1446, end: 1457 },
            },
            loc: { start: 1446, end: 1458 },
          },
          directives: [],
          loc: { start: 1401, end: 1458 },
        },
      ],
      loc: { start: 1376, end: 1460 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1467, end: 1471 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1476, end: 1478 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1480, end: 1482 },
              },
              loc: { start: 1480, end: 1482 },
            },
            loc: { start: 1480, end: 1483 },
          },
          directives: [],
          loc: { start: 1476, end: 1483 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1486, end: 1491 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1493, end: 1499 },
              },
              loc: { start: 1493, end: 1499 },
            },
            loc: { start: 1493, end: 1500 },
          },
          directives: [],
          loc: { start: 1486, end: 1500 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1503, end: 1507 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1509, end: 1515 },
              },
              loc: { start: 1509, end: 1515 },
            },
            loc: { start: 1509, end: 1516 },
          },
          directives: [],
          loc: { start: 1503, end: 1516 },
        },
      ],
      loc: { start: 1462, end: 1518 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthPayload",
        loc: { start: 1525, end: 1536 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 1541, end: 1546 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1548, end: 1554 },
              },
              loc: { start: 1548, end: 1554 },
            },
            loc: { start: 1548, end: 1555 },
          },
          directives: [],
          loc: { start: 1541, end: 1555 },
        },
      ],
      loc: { start: 1520, end: 1557 },
    },
  ],
  loc: { start: 0, end: 1558 },
} as unknown as DocumentNode;
